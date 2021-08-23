$(document).ready(() => {
  // $(window).resize(() => {
  //   location.reload();
  // })


  $('#registrationPopUp').hide();
  $('#closeBttn').hide();
  $('#mobileMenuItems').hide();
  $('#mobileMenuItems ul').fadeToggle();

  
  //showing course registration
  $('#triggerRegisterPopUp').click(() => {
    $('#registrationPopUp').show('slow');
    $('#closeBttn').show();
    $('main').hide('slow')
    $('footer').hide('slow')
    $('header').hide('slow')
    $('body').css('background', 'linear-gradient(235.72deg, #FFECD8 0.95%, rgba(255, 134, 0, 0.97) 97.34%)')
    $('body').css('height', '100vh')
  })
  $('#closeBttn').click(() => {
    if($(window).width() <= 767) { 
      $('#registrationPopUp').hide('slow');
      $('#closeBttn').hide();
      $('main').show('slow');
      $('.mobileHeader').show()
      $('#mobileMenuItems').hide()
      if($('#triggerMenu').text() === 'menu') { 
        $('#triggerMenu').text('close')
      }
      else { 
        $('#triggerMenu').text('menu')
      }
      $('footer').show('slow')
    }
    else { 
      $('#registrationPopUp').hide('slow');
      $('#closeBttn').hide();
      $('main').show('slow')
      $('footer').show('slow')
      $('header').show('3rem 0')
    }
    $('body').css('background', '#FFF5EA');
    $('body').css('height', 'auto');
  })

  $('#triggerRegisterPopUpBttn').click(() => {
    $('#registrationPopUp').show('slow');
    $('#closeBttn').show();
    $('main').hide('slow')
    $('.mobileHeader').hide('slow')
    $('#mobileMenuItems').hide('slow')
    $('footer').hide('slow')
    $('header').hide('slow')
    $('body').css('background', 'linear-gradient(235.72deg, #FFECD8 0.95%, rgba(255, 134, 0, 0.97) 97.34%)')
    $('body').css('height', '100vh');
    if($('#triggerMenu').text() === 'menu') { 
      $('#triggerMenu').text('close')
    }
    else { 
      $('#triggerMenu').text('menu')
    }
  });

  $('#triggerRegisterPopUpMobile').click(() => {
    $('#registrationPopUp').show('slow');
    $('#closeBttn').show();
    $('main').hide('slow');
    $('.mobileHeader').hide('slow')
    $('#mobileMenuItems').hide('slow')
    $('footer').hide('slow')
    $('header').hide('slow')
    $('body').css('background', '#FF8600')
    $('body').css('height', '100vh')
  });

  $('#triggerMenu').click(() => {
    $('main').fadeToggle(300);
    $('footer').fadeToggle(300);
    $('#mobileMenuItems').fadeToggle(300, () => {
      $('#mobileMenuItems ul').show(300);
      if($('#triggerMenu').text() === 'menu') { 
        $('#triggerMenu').text('close')
      }
      else { 
        $('#triggerMenu').text('menu')
      }
    });
  })


})