const { exec } = require('child_process')
const rushLib = require('@microsoft/rush-lib')
const semver = require('semver')

let rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd()
})

exec('rush check --json', (err, stdout) => {
  if (err) {
    console.log(`Error running rush: ${err}`)
    return
  }

  dependenciesInfo = JSON.parse(stdout)
  dependenciesInfo.mismatchedVersions.forEach(dependency => {
    //Get the highest version
    let package = dependency.dependencyName
    let versions = dependency.versions.map(version => version.version)
    let highestVersion = versions.reduce((prev, curr) => getHigherVersion(prev, curr))
    let command = `rush add -p ${package}@${highestVersion}`

    //Enforce the highest version in other apps
    dependency.versions.forEach(version => {
      if (version.version !== highestVersion) {
        version.projects.forEach(project => {
          const folder = getProjectRelativeFolder(rushConfiguration, project)
          console.log(`Running ${command} in ${folder}`)
          exec(`cd ${folder} && ${command}`, (err, stdout) => {
            if (err) {
              console.log(`Error running rush: ${err}`)
              return
            }
            console.log(stdout)
          })
        })
      }
    })
  })
  console.log("Done!")
})


const getHigherVersion = (version1, version2) => {
  if (semver.gt(version1, version2)) {
    return version1
  } else {
    if (semver.gt(version2, version1)) {
      return version2
    }
  }
  return version1
}

const getProjectRelativeFolder = (config, name) => {
  for (const project of config.projects) {
    if (project.packageName == name) {
      return project.projectRelativeFolder
    }
  }
  return "ERROR"
}
