# Adaptive UI-Kit 2022

## Setup

1. Install [Node.js and NPM](https://nodejs.org/en/download/)
2. Install Yarn2+ (https://yarnpkg.com/getting-started/install) and follow these steps:
   - Run: `npm install -g yarn`
   - Run: `yarn set version berry`
3. Run the command `yarn`
4. Run the command `yarn prepare`
   - This will enable pre-commit check

### Development Workflow

This library is composed of several packages, most of which need to be built before your development and build tooling will work. The quickest way to build the package is to run the command: `yarn build`.

While not always neccessary, you can remove all builds with `yarn clean`.

See the `package.json` in the project root for a set of available quick commands that can be run with `yarn {command}`.

To run a local command on a sub package, for instance if you only want to build a single package, you can run `yarn workspace {package-name} run {command}`. The package name is not the folder name, but the name in the packages own `package.json`. Examples of useful commands:

- `yarn workspace @ui-kit-2022/components run build` to build the component package only.
- `yarn workspace @ui-kit-2022/docs run preview` to run the storybook locally for development.
- `yarn workspace @ui-kit-2022/theme run dev` to run a dev build of the theme package that auto rebuilds on change. The `@ui-kit-2022/components` package also supports a `dev` command.

When developing in multiple packages at the same time, currently you'll need to run separate dev/preview commands for each package in order for each to auto rebuild so dependent packages to recongize changes in the package they depend upon.
For instance, Storybook will no longer auto update when a file changes in the components package. You'll need to make sure the components package is autorebuilding along side the Storybook process to get a similar experience.

## Releasing

Releases are handled with [Changesets](https://github.com/changesets/changesets/).

When adding a feature or fixing a bug, add to the changset before commiting and sending a PR if you think that change needs to be specified in the release changelog: `yarn changeset`

As we merge in these changesets, a release PR will be created and updated with all the changesets that have been merged, handling all package version bumps and generating the changelog. Once that PR is approved and merged, a release will be created, and the new package versions will be published to NPM.
