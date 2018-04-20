
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

**If you want to recompile the library**: we use gulp to compile and watch files.

* Install required npm packages with ```npm install```
* Use ```npm run build``` or ```npm run watch```

# Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-magento/blob/master/LICENSE).

