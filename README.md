
# Under development

# Installation

You can install with one of the following:
* download: [latest release.](https://github.com/minimit/xtend-magento/releases/latest)
* git: `git clone https://github.com/minimit/xtend-magento.git`
* composer: `composer require minimit/xtend-magento`

### Theming

If you install with composer, you need to copy `web/` to customize the files:
```
mkdir -p app/design/frontend/vendor/theme/web/
cp -r vendor/minimit/xtend-magento/web/ app/design/frontend/<vendor>/<theme>/web/
```

### Library

You also need to install Xtend library, use the [xtend installation procedure](https://github.com/minimit/xtend#installation) from 
within your theme folder.

If you install with yarn or npm, you need to copy `/dist` to customize the files:
`cp -r node_modules/xtend-library/dist/ xtend-library/`

# Copyright

Copyright © 2017-2018 Riccardo Caroli. Licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php).

