import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.css']
})
export class HomeTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.home-nav').addClass("active-nav");
    $('.home-circle').addClass("active-circle");
    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var first = false;
      $(".home-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
          $('.home-nav').addClass("active-nav");
          $('.home-circle').addClass("active-circle");
          first = true;
        } else {
          $('.home-circle').removeClass("active-circle");
          $('.home-nav').removeClass("active-nav");
          first = false;
        }
      });
    });

    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var first = false;
      $(".resume-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
          $('.resume-nav').addClass("active-nav");
          $('.resume-circle').addClass("active-circle");
          first = true;
        } else {
          $('.resume-circle').removeClass("active-circle");
          $('.resume-nav').removeClass("active-nav");
          first = false;
        }
      });
    });

    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var first = false;
      $(".projects-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
          $('.projects-nav').addClass("active-nav");
          $('.projects-circle').addClass("active-circle");
          first = true;
        } else {
          $('.projects-circle').removeClass("active-circle");
          $('.projects-nav').removeClass("active-nav");
          first = false;
        }
      });
    });

    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var first = false;
      $(".contact-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
          $('.contact-nav').addClass("active-nav");
          $('.contact-circle').addClass("active-circle");
          first = true;
        } else {
          $('.contact-circle').removeClass("active-circle");
          $('.contact-nav').removeClass("active-nav");
          first = false;
        }
      });
    });
  }
}



