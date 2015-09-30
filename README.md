# ember-cli-build-info

> Inject build info into your routes, controllers, and services.

*Note: this addon currently assumes you are using git for version control.*

Information includes:

```js
buildInfo: {
  semver: '0.1.4-beta.1+53df212',
  version: '0.1.4',
  release: 'beta.1',
  build: '53df212'
}
```

See [semver-utils.parse](https://github.com/coolaj86/semver-utils#semverutilsparsesemverstring) for a list of all values available.


## Installation

```bash
npm install --save-dev ember-cli-build-info
```

## Usage 
The data is injected into routes, controllers, and services using the `buildInfo` key.

In a template:
```html
<p>Version: {{buildInfo.version}}</p>
<p>Release: {{buildInfo.release}}</p>
<p>SHA: {{buildInfo.build}}</p>
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

Available template keys include `{SEMVER}`, `{VERSION}`, `{RELEASE}` and `{BUILD}`. These keys will be replaced by the current build info values.

The example above would yield:
```html
<meta name="build-info" content="version=0.0.2"/>
```

> _Note that `{COMMIT}` is deprecated in favour of `{BUILD}`_.

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
