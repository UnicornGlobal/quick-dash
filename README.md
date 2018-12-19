# @unicorns/quick-dash

Quick and Easy Vue Dashboards

Fork this repository to allow your project to benefit from future
improvements and updates to this starter kit.

# Import Aliases

- To import from `quick-dash` base components use `@/components/xyx`
- To import from your local `src` use `~/components/xyz`

# Secret Management

Make a copy of the `config/secrets.env.js.example` file and name
it `config/secrets.env.js` (remove the `.example`) and configure
the applications environment variables.

# Features

* JWT Authentication
* Dynamic `vue-router` configuration
* Dynamic `vuex` configuration
* Dynamic 3rd party library configuration
* Dynamic SASS variable inclusion and themeing
* Admin and User roles
* User and Role management
* Built in essential components
* Works with `strong-lumen`

# Usage

## Theme

The `src/assets/sass` folder contains a file that controls the
applications theme called `_variables.scss`.

Use the provided template to theme your application.

## 3rd Party Library Configurations

Any `.js` files in the `src/lib` folder will be required when
booting your application.

The following filenames are reserved and ignored at this time:

- `index.js`
- `auth.js`
- `base.js`

There is an example file called `custom.js` included in the
starter kit.

This is where you do things like `Vue.use('my-library', {})`

*NB* Do _not_ call `Vue.use(VueRouter)` at any time.

## Routes

Quick Dash comes with `vue-router` preinstalled.

Any `.js` files contained in `src/router` folder will be included
in the routing configuration when the application starts.

The only filename that is ignored is `index.js`.

Adding a route is convention based, you must return an `array`
containing a standard `vue-router` configuration object.

These files get added to the application at the _root level_ of the
sidebar.

There is an example file called `custom.js` in the `src/router`
folder.

## Stores

Quick Dash comes with `vuex` preinstalled.

Any `.js` files contained in the `src/store` folder will be added
to the configuration when starting.

The only filename that is ignored is `index.js`.

The configuration is convention based, returning an object that
contains `state`, `mutations`, and `getters` properties.

There is an example file called `custom.js` in the `src/store`
folder.

## Custom Components

You can use the components folder to store your own custom
components.

These *must be* `.vue` single file components.

See the `router/custom.js` file for an example of how to include
a custom component on a route.

To import your own custom components use `~/components/my-component`, namespaced with a `~`.

This differs from built-in comonents which are included using `@`
instead of `~`.

There is an example file called `CustomComponent.vue` included in
the `src/components` folder.

## Assets

Custom assets like icons or images get placed in the `src/assets`
folder and are included e.g. `~/assets/icons/icon.svg`.

The default built in assets are referenced with a `@` instead of
a `~`.

### Note regarding SVG files

SVGs are included via `vue-svg-loader` and must be imported as
components.

Example:

```
// example.vue
<template>
  <div>
    <home-icon></home-icon>
  </div>
</template>

<script>
  import HomeIcon from '~/assets/icons/home.svg`

  export default {
    components: {
      HomeIcon
    }
  }
</script>
```

# Core Components

## Data Table

You always need tables, and `@unicorns/quick-dash` uses
`@unicorns/data-table` internally.

## Toast

Toasty toast is provided by `@unicorns/toaster` allowing you to
provide quick an easy feedback.

Simply call `this.$toaster.addToast({options})` and you'll be
making toast in no time.

## Avatars & Initials

Another stock standard feature, included in `quick-dash` via the
`@unicorns/avatars` package.

This allows you to attach a configurable avatar, with a fallback
to a random colour with an initial.

# Roadmap

LOTS AND LOTS!
