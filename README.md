
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-magento/releases/latest).
* git: `git clone https://github.com/minimit/xtend-magento.git`.
* composer: `composer require minimit/xtend-magento`.

If you don't use composer, you need to install also [Xtend library](https://github.com/minimit/xtend-library#installation).

### Theming

You need to copy xtend-magento **/web** to customize the files.

If you install with **composer**:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/
cp -r vendor/minimit/xtend-magento/web/ app/design/frontend/<vendor>/<theme>/web/
```

You need to copy xtend-library **/dist** to customize the files.

If you install with **composer**:
```
mkdir -p app/design/frontend/<vendor>/<theme>/web/xtend-library/
cp -r vendor/minimit/xtend-library/dist/ app/design/frontend/<vendor>/<theme>/web/xtend-library/
```

After in `xtend.less` put the right path for the **@imports**.

# Copyright

Copyright © 2017-2018 Riccardo Caroli. Licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php).

