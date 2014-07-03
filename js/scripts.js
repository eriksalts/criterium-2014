(function ($) {$(document).ready(function() {

$('.player').mb_YTPlayer();

if($('body').hasClass('navbar-is-static-top')){
  var $filter = $('#nav');
  var $filterSpacer = $('<div />', {
    "class": "filter-drop-spacer",
    "height": $filter.outerHeight()
  });


  if ($filter.size())
  {
    $(window).scroll(function ()
    {
      if (!$filter.hasClass('navbar-fixed-top') && $(window).scrollTop() > $filter.offset().top)
      {
        $filter.before($filterSpacer);
        $filter.addClass("navbar-fixed-top");
        $filter.removeClass("navbar-static-top");
      }
      else if ($filter.hasClass('navbar-fixed-top')  && $(window).scrollTop() < $filterSpacer.offset().top)
      {
        $filter.addClass("navbar-static-top");
        $filter.removeClass("navbar-fixed-top");
        $filterSpacer.remove();
      }
    });
  }
}

});})(jQuery);
