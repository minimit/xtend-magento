define([
  'jquery',
  'mage/utils/wrapper'
], function ($, wrapper) {
  'use strict';
  return function (modal) {

    modal.prototype._create = wrapper.wrap(modal.prototype._create, function (original) {
      var result = original();
      // @FIX default values
      this.options.overlayClass = 'modals-overlay';
      this.options.parentModalClass = '_has-modal';
      // @FIX .content
      $(this.options.appendTo).find('.modal-inner-wrap').wrapInner('<div class="content"></div>');
      // return
      return result;
    });

    modal.prototype.openModal = wrapper.wrap(modal.prototype.openModal, function (original) {
      var result = original();
      // @FIX body scrollbar
      window.xtScrollbarFixed();
      // @FIX force remove _has-modal
      $(this.options.appendTo).addClass(this.options.parentModalClass);
      // @FIX add .modal-wrap-outer
      if (!this.modal.find('.modal-outer-wrap').length) {
        this.modal.wrapInner('<div class="modal-outer-wrap"></div>');
      }
      // @FIX .modals-overlay position
      this.overlay = $(this.modal).append(this.modalWrapper.find('.' + this.options.overlayClass).css('z-index', ''));
      // @FIX .action-close
      this.modal.find('.action-close').appendTo(this.modal.find('.modal-inner-wrap'));
      // return
      return result;
    });

    modal.prototype.closeModal = wrapper.wrap(modal.prototype.closeModal, function (original) {
      var result = original();
      // @FIX body scrollbar
      window.xtScrollbarNormal();
      // @FIX force remove _has-modal
      $(this.options.appendTo).removeClass(this.options.parentModalClass);
      // @FIX force close because sometimes doesn't trigger
      this._close();
      // return
      return result;
    });

    modal.prototype._close = wrapper.wrap(modal.prototype._close, function (original) {
      // @FIX close without _destroyOverlay
      var trigger = _.bind(this._trigger, this, 'closed', this.modal);
      $(this.focussedElement).focus();
      this._unsetActive();
      _.defer(trigger, this);
    });

    modal.prototype._destroyOverlay = wrapper.wrap(modal.prototype._destroyOverlay, function (original) {
      if (this.overlay) { // @FIX js error when this.overlay undefined (checkout edit shipping)
        var result = original();
        // return
        return result;
      }
    });

    return modal;

  };
});
