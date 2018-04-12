
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-magento/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-magento.git`
* [composer](https://getcomposer.org/): `composer require minimit/xtend-magento`

### Theming

You need to copy xtend-magento **/web** to customize the files.

If you installed with **composer**:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/
cp -r vendor/minimit/xtend-magento/web/ app/design/frontend/<vendor>/<theme>/web/
```

You need to copy xtend-library **/dist** to customize the files.

If you installed with **composer**:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/
cp -r vendor/minimit/xtend-library/dist/ app/design/frontend/<vendor>/<theme>/web/
```

Then you also need to copy xtend-library in **/web** [Xtend library](https://github.com/minimit/xtend-library#theming).

After in `theme.less` put the right path to the `@import` of core and theme.

### Compiling Less

Set grunt compilation for `theme.less`. Add this code to `dev/tools/grunt/configs/local-themes.js`:

```
'use strict';

module.exports = {
    '<theme>': {
        area: 'frontend',
        name: '<vendor>/<theme>',
        locale: 'en_US',
        files: [
            'css/theme'
        ],
        dsl: 'less'
    }
};
```

To compile run this command:

```
grunt exec:<theme> && grunt less:<theme> && grunt watch
```

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-magento/blob/master/LICENSE).

