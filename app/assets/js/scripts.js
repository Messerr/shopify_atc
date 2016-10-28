/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('select.site-select').change(function() {
      $('.json-results').html('');
      var site = $('select[name=dropdown]').val();
      $('.site-title').html('<h1>' + site + '</h1>');
      $.getJSON(site + '/products.json', function(data) {
        $.each(data, function(key, data) {
          if(data.length === 0) {
            $('.json-results').html('<h1>No Products Yet</h1>');
          } else {
          $.each(data, function (index, data) {
            $('.json-results').append('<div class="product">' + '<h3>' + data.title + '</h3>' + '<img src="' + data.images[0].src + '" />' +  '<li>' + ' ' + data.tags + '</li>' + '<a target=_blank href="' + site + '/products/' + data.handle + '">PRODUCT PAGE</a><br /></div><br />');
            $.each(data.variants, function(key, variant){
              $('.json-results').append('<div class="variants"><a target=_blank href="' + site + '/cart/' + variant.id  + ':1">' + variant.title + '</a>' + ' ' +  variant.available + ' ' + variant.price +  '</div>');
            });
          });
          }
        });
      })
      .fail(function() {
        $('.json-results').append('<li>An Error Occurred. Check site for details.</li>');
      });
    });
    $('button[name="refresh"]').on('click', function() {
      $('.json-results').html('');
      var site = $('select[name=dropdown]').val();
      $('.site-title').html('<h1>' + site + '</h1>');
      $.getJSON(site + '/products.json', function(data) {
        $.each(data, function(key, data) {
          if(data.length === 0) {
            $('.json-results').html('<h1>No Products Yet</h1>');
          } else {
          $.each(data, function (index, data) {
            $('.json-results').append('<div class="product">' + '<h3>' + data.title + '</h3>' + '<img src="' + data.images[0].src + '" />' +  '<li>' + ' ' + data.tags + '</li>' + '<a target=_blank href="' + site + '/products/' + data.handle + '">PRODUCT PAGE</a><br /></div><br />');
            $.each(data.variants, function(key, variant){
              $('.json-results').append('<div class="variants"><a target=_blank href="' + site + '/cart/' + variant.id  + ':1">' + variant.title + '</a>' + ' ' +  variant.available + ' ' + variant.price +  '</div>');
            });
          });
          }
        });
      })
      .fail(function() {
        $('.json-results').append('<li>An Error Occurred. Check site for details.</li>');
      });
    });
  });

})(jQuery, window, document);
