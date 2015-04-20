# Ember CLI Build Info Changelog

## 0.1.0
- Remove *execSync* dependency
- Use [git-repo-version](https://www.npmjs.com/package/git-repo-version) as a fallback when `config.APP.version` is not set
- [BREAKING] Remove *{DESC}* from `metaTemplate` context
- [ENHANCEMENT] `metaTemplate` keys are no longer case sensitive
- Use camelcase for `config.APP` storage key (`BUILD_INFO` is now `buildInfo`)
- [ENHANCEMENT] Allow initializer to be easily overridden
