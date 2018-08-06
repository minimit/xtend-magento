
# Under development

# Installation

You can install with one of the following:

* download: [latest release](https://github.com/minimit/xtend-magento/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-magento.git`

Asset files and `.phtml` are inherited from <strong>Base</strong> and <strong>Luma</strong> magento2 themes.
For styling this theme is a **standalone** fork. It doesn't support magento2 theme inheritance for `.less` files.

* Put the files inside `app/design/frontend/<vendor>/<theme>/`.
* Install required npm packages with ```npm install```

### Theming

You need to copy [xtend-library](https://github.com/minimit/xtend-library) **/dist** to customize the files.

```
mkdir -p web/xtend-library/
cp -r node_modules/xtend-library/ web/xtend-library/
```

After in `theme.less` put xtend-library dist path.

### Compilation

We use gulp to compile and watch files.

* Install required npm packages with ```npm install```
* Use ```npm run build``` or ```npm run watch```

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-magento/blob/master/LICENSE).

