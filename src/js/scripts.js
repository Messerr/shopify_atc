(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('select.site-select').change(getProducts);
    $('button[name="refresh"]').click(getProducts);

    function getProducts() {
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
              $('.json-results').append('<div class="variants">Add to Cart' + ' ' + '<a target=_blank href="' + site + '/cart/' + variant.id  + ':1">' + variant.title + '</a>' + ' ' + 'In stock:' + ' ' +  variant.available + ' ' + 'Price' + ' ' + variant.price +  '</div>');
            });
          });
          }
        });
      })
      .fail(function() {
        $('.json-results').append('<li>An Error Occurred. Check site for details.</li>');
      });
    }
  });

})(jQuery, window, document);
