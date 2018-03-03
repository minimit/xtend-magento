
# Under development

# Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-magento/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-magento.git`
* [composer](https://getcomposer.org/): `composer require minimit/xtend-magento`

If you don't use composer, you need to install also [Xtend library](https://github.com/minimit/xtend-library#installation).

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
mkdir -p app/design/frontend/<vendor>/<theme>/web/xtend-library/
cp -r vendor/minimit/xtend-library/dist/ app/design/frontend/<vendor>/<theme>/web/xtend-library/
```

After in `theme.less` put the right path for the **@imports**.

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-magento/blob/master/LICENSE).

