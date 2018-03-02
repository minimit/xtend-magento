define([
  'jquery',
  'mage/utils/wrapper'
], function ($, wrapper) {
  'use strict';
  return function (dropdown) {

    dropdown.prototype._create = wrapper.wrap(dropdown.prototype._create, function (original) {
      // @FIX appendTo and triggerTarget optional
      if (this.options.appendTo === 'body' && !this.options.triggerTarget) {
        var $container = this.element.parent();
        $container.uniqueId();
        this.options.appendTo = '#' + $container.attr('id');
        this.options.triggerTarget = $container.find('> a, > button');
      }
      // before original
      var result = original();
      // @FIX .ui-dialog-container
      $(this.options.appendTo).addClass('ui-dialog-container');
      // return
      return result;
    });

    return dropdown;

  };
});
