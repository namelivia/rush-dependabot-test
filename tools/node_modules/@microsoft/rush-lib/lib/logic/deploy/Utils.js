"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesWithStar = void 0;
function escapeRegExp(literal) {
    return literal.replace(/[^A-Za-z0-9_]/g, '\\$&');
}
function matchesWithStar(patternWithStar, input) {
    // Map "@types/*" --> "^\@types\/.*$"
    const pattern = '^' +
        patternWithStar
            .split('*')
            .map((x) => escapeRegExp(x))
            .join('.*') +
        '$';
    const regExp = new RegExp(pattern);
    return regExp.test(input);
}
exports.matchesWithStar = matchesWithStar;
//# sourceMappingURL=Utils.js.map