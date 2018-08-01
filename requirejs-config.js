var config = {
  paths: {
    'xtend': 'js/xtend-magento.min',
    'polyfill': 'js/polyfill.min'
  },
  config: {
    mixins: {
      'mage/menu': {
        'Magento_Ui/js/model/menu-mixin': true
      },
      'mage/dropdown': {
        'Magento_Ui/js/model/dropdown-mixin': true
      },
      'Magento_Ui/js/modal/modal': {
        'Magento_Ui/js/model/modal-mixin': true
      },
      'mage/collapsible': {
        'Magento_Ui/js/model/collapsible-mixin': true
      },
    }
  }
};
