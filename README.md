# ember-cli-build-info

> Inject build info into your routes, controllers, and services.

*Note: this addon currently assumes you are using git for version control.*

Information includes:

```js
buildInfo: {
  version: '0.1.4',
  commit: '53df212',
  desc: '0.1.4+53df212'
}
```

If your app provides a version number in `package.json`, this is used as `version`.
If not the name of current branch is used as `version`.
If current HEAD is not a branch, the string `DETACHED_HEAD` is used.

If current commit is tagged, git tag name is used as `version`.
In these case `commit` is an empty string. Otherwise it's the SHA of the current commit. 

`desc` is `version` and `commit` denoted by a "+". If commit is empty `desc` is `version`.

## Installation

```bash
npm install --save-dev ember-cli-build-info
```

## Usage 
The data is injected into routes, controllers, and services using the `buildInfo` key.

In a template:
```html
<p>Version: {{buildInfo.version}}</p>
<p>SHA: {{buildInfo.commit}}</p>
<p>Description: {{buildInfo.desc}}</p>
```

In a route, controller, or service:
```js
var buildInfo = this.buildInfo;
```

## Configuration Options
There is currently a single configurable option. Customize using the `buildInfoOptions` hash in your Brocfile:

```js
var app = new EmberApp({
  buildInfoOptions: {
    metaTemplate: 'version={VERSION}'
  }
});
```

### `metaTemplate`
Allows you to inject a meta tag containing the build info. Defaults to `false`.

Available template keys include `{VERSION}`, `{COMMIT}` and `{DESC}`. These keys will be replaced by the current build info values.

The example above would yield:
```html
<meta name="build-info" content="version=0.0.2"/>
```


# Collaborating

This README outlines the details of collaborating on this Ember addon.

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
