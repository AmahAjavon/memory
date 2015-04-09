/* global _,Box */

'use strict';

$(document).ready(init);
var backs = [];
var timing = 60;
var reset = false;

function init() {
  createBacks();
  paintBacks();
  var myTimer;
  $('#indicator').html('Please press the Begin button to start')
  $('.flip-container').prop('disabled', true);
  $('#begin').click(begin);

  function begin() {
    window.onload;
    reset= true;
    timing = 60;
    $('#indicator').html('');
    $('#timing').html(timing);
    $('#begin').prop('disabled', true);
    $('.flip-container').prop('disabled', false);

    $('.flip-container').click(function() {
      $(this).find('.flipper').addClass('turned');
      var $turned = $('.turned');

      if ($turned.length === 2) {
        setTimeout(pattern, 400);
      }
    });

    myTimer = setInterval(function() {
      --timing;
      $('#timing').html(timing);
      if (timing > 0 && ($('.back').length === 0) ) {
        $('#indicator').html('Congrats you did it!');

      }

      else if (timing === 0) { if ($('.back').length === 0) {
        // alert('Congrats you did it!');
        $('#indicator').html('Congrats you did it!');
      }
      else {
        // alert('Too Slow! Come on now...Try again');
        $('#indicator').html('Too Slow! Come on now...Try again');

      }
      $('.turned').removeClass('turned');
      $('.same').removeClass('same');
      clearInterval(myTimer);
      $('#begin').prop('disabled', false);
      $('#gamespot').clear();
      reset = true;

    }
  }, 1000);
}

function match() {
  var first = $('.turned > .back')[0].id;
  var second = $('.turned > .back')[1].id;
  if (first === second) {
    $('.turned').remove();
    console.log('match!');
  } else console.log('no match!');
  $('.turned').removeClass('turned');
}

// function removeCards() {
//   $('.removed').remove();
//   if ($('.removed').length === 20) {
//     window.clearInterval(myTimer);
//     // alert('Game Over');
//     $('#indicator').html('Yeah! You did it! Congratulations');
//   };
// }

function pattern() {
  if (match()) {
    $('.turned').removeClass('turned').addClass('removed');
    $('.removed').bind('.turned', removeCards);
  } else {
    $('.turned').removeClass('turned');
  }
}

function reset() {
  if ((timing === 0) || ($('.back').length === 0)) {
    createBacks();
    paintBacks();
  }
}



function createBacks() {
  var b1 = new Box(1, 'Rihanna', 'images/Rihanna.jpg');
  var b2 = new Box(2, 'Kim', 'http://itcolossal.com/wp-content/uploads2/2013/05/390.jpg');
  var b3 = new Box(3, 'Taylor', 'images/Taylor.jpg');
  var b4 = new Box(4, 'Selena', 'http://33.media.tumblr.com/tumblr_lrkea9smUf1r337dko1_500.png');
  var b5 = new Box(5, 'Jennifer', 'http://wallpaperscraft.com/image/28760/1280x960.jpg');
  var b6 = new Box(6, 'Arianna', 'https://s-media-cache-ak0.pinimg.com/236x/ed/6b/e9/ed6be998c3ddf3192a485c8e40ef747d.jpg');
  var b7 = new Box(7, 'Nicki', 'https://s-media-cache-ak0.pinimg.com/236x/a7/8b/36/a78b36681cf194f6fbf5926d2884f1bf.jpg');
  var b8 = new Box(8, 'Demi', 'http://4.bp.blogspot.com/-H6kzhx2IjSU/TprbFqVI3gI/AAAAAAAAAI0/5ogwtMPmm5A/s1600/demi+lovato+is+ugly+08.png');
  var b9 = new Box(9, 'Katy', 'http://41.media.tumblr.com/tumblr_m5dahrGRm01rq50fzo1_500.jpg');
  var b10 = new Box(10, 'Beyonce', 'http://queermeup.com/wp-content/uploads/2014/02/Beyonce-6788.jpg');

  backs.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10);
  backs.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10);

  backs = _.shuffle(backs);

}

function paintBacks() {
  backs.forEach(function(b) {

    var $flipcontainer = $('<div>');
    $flipcontainer.addClass('flip-container');

    var $flipper = $('<div>');
    $flipper.addClass('flipper');

    var $front = $('<div>');
    $front.addClass('front');

    var $back = $('<div id="' + b.id + '" >');
    $back.addClass('back');
    $back.css('background-image', 'url("' + b.image + '")');

    var $image = $('<div>');
    $image.css('background-image', 'url("' + b.image + '")');

    var $name = $('<div>');
    $name.addClass('name');
    $name.text(b.name);

    $('#gamespot').append($flipcontainer);
    $flipcontainer.append($flipper);
    $flipper.append($front, $back);
    $back.append($name, $image);
  });
}

}
