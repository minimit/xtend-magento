var modules = ['ko', 'jquery', 'xtend'];
require(modules, function (ko, $) {

  'use strict';

  //////////////////////
  // Get Scrollbar Width
  //////////////////////

  $.scrollbarWidth = function () {
    var parent, child, width;
    if (width === undefined) {
      parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
      child = parent.children();
      width = child.innerWidth() - child.height(99).innerWidth();
      parent.remove();
    }
    return width;
  };

  //////////////////////
  // Body padding on fixed
  //////////////////////

  window.xtScrollbarFixed = function () {
    if (!$('.overlay-outer:visible').length) {
      $('html, .xt-fixed').css('padding-right', $.scrollbarWidth());
      $('.modals-overlay').css('right', $.scrollbarWidth());
      var $elements = $('html, .xt-fixed');
      $elements.addClass('no-transition');
      XtUtil.requestAnimationFrame.call(window, function () {
        $elements.css('padding-right', $.scrollbarWidth());
        XtUtil.requestAnimationFrame.call(window, function () {
          $elements.removeClass('no-transition');
        });
      });
    }
  };
  window.xtScrollbarNormal = function () {
    if (!$('.overlay-outer:visible').length) {
      $('.modals-overlay').css('right', '');
      var $elements = $('html, .xt-fixed');
      $elements.addClass('no-transition');
      XtUtil.requestAnimationFrame.call(window, function () {
        $elements.css('padding-right', '');
        XtUtil.requestAnimationFrame.call(window, function () {
          $elements.removeClass('no-transition');
        });
      });
    }
  };

  //////////////////////
  // @FIX force #layered-filter-block collapse
  //////////////////////

  $('body').on('click', '#layered-filter-block .filter-title', function () {
    var $element = $('#layered-filter-block');
    if ($element.hasClass('active')) {
      $element.removeClass('active');
    } else {
      $element.addClass('active');
    }
  });

  //////////////////////
  // .input-group-number
  //////////////////////

  // magento populate

  var populateQty = function ($element, stack) {
    var $qty = $element;
    $qty.addClass('input-number');
    var $control = $element.parent();
    $control.addClass('input-group-number');
    // populate
    var $group = $control.wrapInner('<div class="input-group"></div>');
    if (stack) {
      $control.find('.input-group').append('<span class="input-group-stack">' +
        '<button type="button" class="btn input-number-add"><span>+</span></button>' +
        '<button type="button" class="btn input-number-remove"><span>-</span></button>' +
        '</span>');

    } else {
      $control.find('.input-group').prepend('<span class="input-group-line">' +
        '<button type="button" class="btn input-number-remove"><span>-</span></button>' +
        '</span>');
      $control.find('.input-group').append('<span class="input-group-line">' +
        '<button type="button" class="btn input-number-add"><span>+</span></button>' +
        '</span>');
    }
    // validate
    inputNumberValidate($element.parents('.input-group-number'), $element.val());
  };

  function populateQtyAsync($container) {
    $container.find('input.qty, input.item-qty').each(function () {
      var $element = $(this);
      if ($element.parents('.product-info-main').length) {
        populateQty($element);
      } else {
        populateQty($element, true);
      }
    });
  }

  $(document).ready(function (e) {
    populateQtyAsync($('body'));
  });

  // core

  function inputNumberValidate($container, val) {
    var $remove = $container.find('.input-number-remove');
    var $add = $container.find('.input-number-add');
    var $input = $container.find('.input-number');
    var inputNumberMin = parseFloat($input.attr('data-minusplus-min')) || 1;
    var inputNumberMax = parseFloat($input.attr('data-minusplus-max')) || Infinity;
    $remove.removeAttr('disabled');
    $add.removeAttr('disabled');
    if (val <= inputNumberMin) {
      val = inputNumberMin;
      $remove.attr('disabled', 'disabled');
    }
    if (val >= inputNumberMax) {
      val = inputNumberMax;
      $add.attr('disabled', 'disabled');
    }
    $input.val(val);
    $input.trigger('change', true);
  }

  function inputNumber($container, add) {
    var $remove = $container.find('.input-number-remove');
    var $add = $container.find('.input-number-add');
    var $input = $container.find('.input-number');
    var val = parseFloat($input.val());
    val = val + add;
    inputNumberValidate($container, val);
  }

  $('body').off('click.inputNumber');
  $('body').on('click.inputNumber', '.input-number-remove', function (e) {
    inputNumber($(this).parents('.input-group-number'), -1);
  });
  $('body').on('click.inputNumber', '.input-number-add', function (e) {
    inputNumber($(this).parents('.input-group-number'), 1);
  });
  $('.input-number').each(function (i) {
    inputNumber($(this).parents('.input-group-number'), 0);
  });
  $('.input-group-number .form-control').on('change', function (e) {
    if (!triggered) {
      inputNumberValidate($(this).parents('.input-group-number'), $(this).val());
    }
  });

  //////////////////////
  // xtend
  //////////////////////

  // init all

  function initAll() {
    XtUtil.initAll();
  }
  if (document.readyState !== 'loading') {
    initAll();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', initAll);
  }

  //////////////////////

});
