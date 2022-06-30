#!/bin/bash
ncu --packageFile apps/app1/package.json -u
ncu --packageFile apps/app2/package.json -u
ncu --packageFile apps/app3/package.json -u
rush update
rush check
