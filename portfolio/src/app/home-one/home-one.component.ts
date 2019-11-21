import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css']
})
export class HomeOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $('.navbar').css('background', 'transparent');
    $('.navbar').css('transition', '500ms');
    $('.navbar').css('height', '80px');
    $('.nav-item').css('margin', ' 0px 15px');
    $('.nav-item').css('transition', '500ms');
    $('.vertical-text').css('opacity', '0');
    $('.vertical-text').css('transition', '600ms');
  } else {
    $('.navbar').css('background', 'rgba(0, 0, 0, 0.5)');
    $('.navbar').css('transition', '500ms');
    $('.navbar').css('height', '60px');
    $('.nav-item').css('margin', ' 0px 30px');
    $('.nav-item').css('transition', '500ms');
    $('.vertical-text').css('opacity', '1');
    $('.vertical-text').css('transition', '600ms');
  }
  $(window).scroll(function () {
    if (scroll < 500) {
      $('.art-text-fade-in').css('opacity', '0');
      $('.art-text-fade-in').css('transition', '1200ms');
    } else {
      $('.art-text-fade-in').css('opacity', '1');
      $('.art-text-fade-in').css('transition', '1200ms');
    }

  });
  $(window).scroll(function () {
    if (scroll < 800) {
      $('.jstorm-logo-fade-in').css('opacity', '0');
      $('.jstorm-logo-fade-in').css('transition', '600ms');
    } else {
      $('.jstorm-logo-fade-in').css('opacity', '1');
      $('.jstorm-logo-fade-in').css('transition', '600ms');

    }

  });


});

$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $('.slide-right').css('left', '15px');
    $('.slide-right').css('opacity', '1');
    $('.slide-right').css('transition', '600ms');
  } else {
    $('.slide-right').css('left', '-700px');
    $('.slide-right').css('opacity', '0');
    $('.slide-right').css('transition', '600ms');
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 160) {
    $('.slide-up').css('top', '0px');
    $('.slide-up').css('opacity', '1');
    $('.slide-up').css('transition', '600ms');
  } else {
    $('.slide-up').css('top', '700px');
    $('.slide-up').css('opacity', '1');
    $('.slide-up').css('transition', '600ms');
  }
});

$("div").on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

$(window).scroll(function () {
  console.log('1')
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var first = false;
  $(".activity").each(function () {
    console.log('two')
    var offset = $(this).offset();
    if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
      $(this).addClass("first");
      first = true;
      console.log("sfsfasdfasdfadsf")
    } else {
      $(this).removeClass("first");
      first = false;
      console.log("asdfadsf")
    }
  });
});