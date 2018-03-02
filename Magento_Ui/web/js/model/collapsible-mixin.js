define([
  'jquery',
  'mage/utils/wrapper'
], function ($, wrapper) {
  'use strict';
  return function (collapsible) {

    jQuery.widget('mage.collapsible', $['mage']['collapsible'], {
      _open: function () {
        // @FIX add .active class to links and buttons
        if (this.options.openedState) {
          this.trigger.find('a, button').addClass(this.options.openedState);
        }
        if (this.options.closedState) {
          this.trigger.find('a, button').removeClass(this.options.closedState);
        }
        // return
        return this._super();
      },
      _close: function () {
        // @FIX remove .active class to links and buttons
        if (this.options.openedState) {
          this.trigger.find('a, button').removeClass(this.options.openedState);
        }
        if (this.options.closedState) {
          this.trigger.find('a, button').addClass(this.options.closedState);
        }
        // return
        return this._super();
      },
      _refresh: function () {
        // @FIX add .active class to links and buttons
        if (this.options.active && !this.options.disabled) {
          if (this.options.openedState) {
            this.trigger.find('a, button').addClass(this.options.openedState);
          }
        } else if (this.options.disabled) {
          this.disable();
        } else {
          if (this.options.closedState) {
            this.trigger.find('a, button').addClass(this.options.closedState);
          }
        }
        // return
        return this._super();
      }
    });

    return $['mage']['collapsible'];

  };
});
