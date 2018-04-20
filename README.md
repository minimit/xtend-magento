
# Under development

# Installation

You can install with one of the following:

* download: [latest release](https://github.com/minimit/xtend-magento/releases/latest)
* clone: `git clone https://github.com/minimit/xtend-magento.git`

This theme is a **standalone** fork. It doesn't support magento2 theme inheritance.

* Put the files inside `app/design/frontend/<vendor>/<theme>/`.
* Install required npm packages with ```npm install```

### Theming

You need to copy xtend-library **/dist** to customize the files.

```
mkdir -p xtend-library/
cp -r node_modules/xtend-library/dist/ xtend-library/
```

After in `xtend.less` put theming xtend-library path in `@import`.

### Compilation

We use gulp to compile and watch files.

* Install required npm packages with ```npm install```
* Use ```npm run build``` or ```npm run watch```

If you want to ignore the compiled files add this to ```.gitignore```

```
# ignore compiled
theme.css
theme.css.map
theme.min.css
theme.min.css.map
bundle.js
bundle.js.map
bundle.min.js
bundle.min.js
bundle.min.js.map
```

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-magento/blob/master/LICENSE).

