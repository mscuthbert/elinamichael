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

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(document).ready(function() {
    $('input[type=radio][name=reply]').on('change', function() {
         var $attendingNumber = $('#form_numberAttending');
         switch($(this).val()) {
             case 'Yes':
                 $('#numberAttendingP').css('display', 'block');
                 var spouseFilled = $('#form_partnername').val();
                 if (spouseFilled.length > 0) {
                     $attendingNumber.val(2);
                 } else {
                     $attendingNumber.val(1);
                 }
                 break;
             case 'No':
                 $('#numberAttendingP').css('display', 'none');
                 $attendingNumber.val(0);
                 break;
         }
    });
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
