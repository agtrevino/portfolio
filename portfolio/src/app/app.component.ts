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
    $('.slide-up').css('top', '-90px');
    $('.slide-up').css('opacity', '1');
    $('.slide-up').css('transition', '600ms');
  } else {
    $('.slide-up').css('top', '700px');
    $('.slide-up').css('opacity', '1');
    $('.slide-up').css('transition', '600ms');
  }
});