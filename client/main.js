/* global _,Box */

'use strict';

$(document).ready(init);
var backs = [];
// var turned = [];
var timing = 60;

function init() {
  createBacks();
  paintBacks();
  var myTimer;
  $('#begin').click(begin);


  $('.flip-container').click(function() {
    $(this).find('.flipper').addClass('turned');
    var $turned = $('.turned');

    if ($turned.length === 2) {
      setTimeout(pattern, 400);
    }

  });

  function nogo() {
    if (myTimer === false) {
      alert('press BEGIN');
      return
    }
  }

  function begin() {
    timing = 60;
    $('#timing').html(timing);
    $('#begin').prop('disabled', true);
    myTimer = setInterval(function() {
      --timing;
      $('#timing').html(timing);
      if (timing === 0) { if($('.back').length === 0) {
        alert('Congrats you did it!');
      } else {
        alert('Too Slow! Come on now...Try again');}
        $('.turned').removeClass('turned');
        $('.same').removeClass('same');
        clearInterval(myTimer);
        $('#begin').prop('disabled', false);
      }
    }, 1000);
  }


function match() {
  var first = $('.turned > .back')[0].id;
  var second = $('.turned > .back')[1].id;
  if (first === second) {
    $('.turned').fadeOut();
    console.log('match!');
  } else console.log('no match!');
  $('.turned').removeClass('turned');
}

function removeCards() {
  $('.removed').remove();
  if ($('.turned').length === 20) {
    alert('Game Over');
  };
}

function pattern() {
  if (match()) {
    $('.turned').removeClass('turned').addClass('removed');
    $('.removed').bind('.turned', removeCards);
  } else {
    $('.turned').removeClass('turned');
  }
}

function win() {
  if ($('.turned > .back').length === 0) {

    alert('Yeah! You did it! Congratulations');
  }
}



function createBacks() {
  var b1 = new Box(1, 'Rihanna', 'http://cache.desktopnexus.com/thumbnails/622257-bigthumbnail.jpg');
  var b2 = new Box(2, 'Kim', 'http://itcolossal.com/wp-content/uploads2/2013/05/390.jpg');
  var b3 = new Box(3, 'Taylor', 'http://posberita.com/wp-content/uploads/2014/11/Taylor-swift.jpg');
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
