
# Under development

# Installation

You can install with one of the following:
* download: [latest release.](https://github.com/minimit/xtend-magento/releases/latest)
* git: `git clone https://github.com/minimit/xtend-magento.git`
* composer: `composer require minimit/xtend-magento`

### Theming

You need to copy Xtend magento `/web` to customize the files.

If you install with composer:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/
cp -r vendor/minimit/xtend-magento/web/ app/design/frontend/<vendor>/<theme>/web/
```

You need to copy Xtend library `/dist` to customize the files.

If you install with composer:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/xtend-library/
cp -r vendor/minimit/xtend/dist/ app/design/frontend/<vendor>/<theme>/web/xtend-library/
```

# Copyright

Copyright © 2017-2018 Riccardo Caroli. Licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php).

