/*finish method stops the currently-running animation, removes all queued animations, and completes all animations for the matched elements*/
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').finish().delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').finish().delay(200).fadeOut(500);
});
