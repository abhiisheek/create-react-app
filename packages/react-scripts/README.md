# react-scripts-custom-config

> A forked version of CRA's `react-scripts` which support customisation of config with out ejecting.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

---

## Quick Start

    npx create-react-app <project-name> --scripts-version react-scripts-custom-config

## Customising config

In your project's root create a folder `archetype`. Create a config file with same name say if you want to customise Webpack config, then create a file `webpack.config.js` under `<root-dir>/archetype`. Add your customised config.

    module.exports = (webpackEnv) => {
        const webpackConfig = {
          ...
        };

        return webpackConfig
    }
