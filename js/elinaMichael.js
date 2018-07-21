// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("navbar-display");
    } else {
        $(".navbar-fixed-top").addClass("navbar-display");
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

function scrollIfNotScrolled() {
    var currentScrollPos = $('body').scrollTop();
    console.log('scroll if not scrolled', currentScrollPos);
    if (currentScrollPos < 100) {
        $('#scrollDownLink').click();
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(document).ready(function() {
    setTimeout(scrollIfNotScrolled, 2000);
})

function updateAttendingValues() {
    var $attendingNumber = $('#form_numberAttending');
    var numAttending = parseInt($attendingNumber.val());
    for (var guestNum = 2; guestNum < 6; guestNum++) {
        var thisSelector = '#guest_' + guestNum + '_choices';
        var $thisP = $(thisSelector);
        if (guestNum > numAttending) {
          $thisP.css('display', 'none');
        } else {
          $thisP.css('display', 'block');
        }
    }
}



$(document).ready(function() {
    var $attendingNumber = $('#form_numberAttending');
    $('input[type=radio][name=reply]').on('change', function() {
         switch($(this).val()) {
             case 'Yes':
                 $('.yesOnly').css('display', 'block');
                 if ($attendingNumber.val() == 0) {
                     $attendingNumber.val(1);
                 }
                 updateAttendingValues();
                 break;
             case 'No':
                 $('.yesOnly').css('display', 'none');
                 $attendingNumber.val(0);
                 break;
         }
    });
    $attendingNumber.on('change', updateAttendingValues);
    $attendingNumber.on('keypress', updateAttendingValues);
    $attendingNumber.on('mouseup', updateAttendingValues);

});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// prevent submit on enter
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
