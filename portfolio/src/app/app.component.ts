import { Component } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $('.navbar').css('background', 'transparent');
    $('.navbar').css('transition', '400ms');
    $('.navbar').css('height', '80px');
    $('.nav-item').css('margin', ' 0px 15px');
    $('.nav-item').css('transition', '400ms');
  } else {
    $('.navbar').css('background', 'rgba(0, 0, 0, 0.5)');
    $('.navbar').css('transition', '400ms');
    $('.navbar').css('height', '60px');
    $('.nav-item').css('margin', ' 0px 30px');
    $('.nav-item').css('transition', '400ms');
  }
  $(window).scroll(function () {
    if (scroll < 600) {
      $('.art-text-fade-in').css('opacity', '0');
      $('.art-text-fade-in').css('transition', '1200ms');
    } else {
      $('.art-text-fade-in').css('opacity', '1');
      $('.art-text-fade-in').css('transition', '1200ms');
    }

  });
  $(window).scroll(function () {
    if (scroll < 900) {
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
    $('.slide-right').stop().animate({ left: '15px' });
  } else {
    $('.slide-right').stop().animate({ left: '-700px' });

  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 160) {
    $('.slide-up').stop().animate({ top: '-90px' });
  } else {
    $('.slide-up').stop().animate({ top: '700px' });

  }
});