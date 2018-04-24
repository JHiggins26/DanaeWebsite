$( document ).ready(function() {
  
  var rotatorInterval = 4000,
      fadeTimeout = 1000,
      $rotator = $('.rotator'),
      $active =  null,
      $next = null;
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function initRotator() {
    // Break up letters
    $rotator.find('.item').lettering();
    // Rotate
    rotate();
  }
  
  function rotate() {
    // Reset all active classes
    if ($active) {
      $active.removeClass('active');
      $active.find('span').removeClass('active');
    }
    // Set next active item
    $next = ($active && $active.next('.item').length > 0) ? $active.next('.item') : $rotator.find('.item').first();
    $next.addClass('active');
    $active =  $next;

    // Fade in text
    fadeText($active, 'in');

    // Fade out text
    setTimeout(function() {
      fadeText($active, 'out');
    }, rotatorInterval - (fadeTimeout * 2));

    // Recursive call
    setTimeout(rotate, rotatorInterval);
  }
  
  function fadeText(el, action) {
    // Fade in letters
    var $spans = el.find('span');

    $spans.each(function() {
      var timeout = getRandomInt(0, fadeTimeout),
          $this = $(this);
      setTimeout(function() {
        if (action == 'in') { 
          $this.addClass('active'); 
        } else {
          $this.removeClass('active');
        }
      }, timeout);
    });
  }
  
  initRotator();
});