var locastyle = locastyle || {};

locastyle.form = (function() {
  'use strict';

  var config = {
    selectors: {
      disable: '.ls-form-disable',
      text: '.ls-form-text'
    }
  }

  function init() {

    formDisable();
    formText();
    masks();
    textareaAutoresize();
    sufixBorder();

  }

  function sufixBorder () {
    $(':input + .ls-label-sufix', '.ls-form').prev().addClass('ls-no-right-radius');
  }

  function textareaAutoresize (argument) {
    $('textarea.ls-textarea-autoresize', '.ls-field').each(function (it, textarea) {
      var $textarea = $(textarea);
      var height = $textarea.height();
      $textarea.keyup(function (e) {
        if (!$textarea.prop('scrollTop')) {
          do {
            var b = $textarea.prop('scrollHeight');
            var h = $textarea.height();
            $textarea.height(h - 5);
          } while (b && (b != $textarea.prop('scrollHeight')));
        };
        $textarea.height($textarea.prop('scrollHeight') );
      });
    });
  }

  function masks() {
    $('.ls-mask-date').mask('11/11/1111');
    $('.ls-mask-time').mask('00:00:00');
    $('.ls-mask-date_time').mask('00/00/0000 00:00:00');
    $('.ls-mask-cep').mask('00000-000');
    $('.ls-mask-phone').mask('0000-0000');
    $('.ls-mask-phone_with_ddd').mask('(00) 0000-0000');
    $('.ls-mask-cpf').mask('000.000.000-00', {reverse: true});
    $('.ls-mask-ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
    $('.ls-mask-percent').mask('##0,00%', {reverse: true});
  }

  function formDisable() {
    $( config.selectors.disable ).each(function(ic, container){
      $(container).find(':input').each(function(ie, field){
        $(field).attr('disabled', 'disabled')
      });
    });
  }

  function formText() {
    $( config.selectors.text ).each(function(ic, container){
      $(container).find(':input').each(function(ie, field){
        $(field).addClass('ls-form-text');
      });
    });
  }

  return {
    init: init,
  }

}());