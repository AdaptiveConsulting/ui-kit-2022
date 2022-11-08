#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const parseVersion = require('parse-node-version');

const argvLength = process.argv.length;
const versionConfig = JSON.parse(process.argv[argvLength - 1]).find(
  (package) => package.name === '@ui-kit-2022/components',
);

// Create a release branch if no such branch currently exists.
async function createReleaseBranch(branchName) {
  try {
    await exec(`git checkout -b ${branchName}`);
    await exec(`git push -u origin ${branchName}`);
  } catch (e) {
    // An error will usually throw when the branch already exists. Log the error.
    console.log(`Error creating release branch: ${e.message}`);
  }
}

// If there is no @ui-kit-2022/components in the versionConfig, the package was likely not updated and isn't being published.
// No branch should be generated. Log and exit.
if (versionConfig) {
  const v = parseVersion('v' + versionConfig.version);
  createReleaseBranch(`v${v.major}.${v.minor}-release`);
} else {
  console.log('No version config for @ui-kit-2022/components');
}
