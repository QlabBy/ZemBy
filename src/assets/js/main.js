(function($) {
    $(function() {

      $('ul.tabs').on('click', 'li:not(.tabs__item_active)', function() {
        $(this)
          .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
          .closest('div.tabs-container').find('div.tabs-content').removeClass('tabs-content_active').eq($(this).index()).addClass('tabs-content_active');
      });

    });
})(jQuery);