define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';
    return function (menu) {

        jQuery.widget('mage.menu', $['mage']['menu'], {
            _listen: function () {
                // @FIX multiple triggers because double mage/menu
                $(this.controls.toggleBtn).off('click');
                $(this.controls.swipeArea).off('click');
                // return
                return this._super();
            },
            _toggleMobileMode: function () {
                // @FIX add .ui-menu-item.active
                $(this.element).find('.ui-menu-item').off('click').on('click', function () {
                    $('.ui-menu-item').removeClass('active');
                    $('.ui-menu-item').find('> a, > button').removeClass('active');
                    $(this).addClass('active');
                    $(this).find('> a, > button').addClass('active');
                });
                // return
                return this._super();
            }
        });

        return $['mage']['menu'];

    };
});
