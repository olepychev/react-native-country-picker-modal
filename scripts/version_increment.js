#!/usr/bin/env node

/* eslint-disable */

const semver = require('semver')
const pkg = require('../package.json')

const incType = process.argv[2]
if (
  !incType ||
  (incType !== 'major' && incType !== 'minor' && incType !== 'patch')
) {
  console.error('Please define argument picked in "major", "minor" or "patch"')
  process.exit(1)
}

console.log(semver.inc(pkg.version, incType))
process.exit()
