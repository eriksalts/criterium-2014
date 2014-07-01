(function ($) {$(document).ready(function() {

if($('body').hasClass('navbar-is-static-top')){
  var $filter = $('#nav');
  var $filterSpacer = $('<div />', {
    "class": "filter-drop-spacer",
    "height": $filter.outerHeight()
  });

  var started = false;


  if ($filter.size())
  {
    $(window).scroll(function ()
    {
      if (!$filter.hasClass('navbar-fixed-top') && $(window).scrollTop() > $filter.offset().top)
      {
        if (started == false) {
          $('.player').mb_YTPlayer();
          console.log(started);
          started = true;
        }
        $filter.before($filterSpacer);
        $filter.addClass("navbar-fixed-top");
        $filter.removeClass("navbar-static-top");
        $('.video-section').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
      }
      else if ($filter.hasClass('navbar-fixed-top')  && $(window).scrollTop() < $filterSpacer.offset().top)
      {
        $filter.addClass("navbar-static-top");
        $filter.removeClass("navbar-fixed-top");
        $filterSpacer.remove();
        $('.video-section').css({
            position: 'static'
        });
      }
    });
  }
}

});})(jQuery);
