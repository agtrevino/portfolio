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
    this.navViewCheck();
    this.resumeTitleViewCheck();
  }

  navViewCheck() {
    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      $(".home-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.home-nav').addClass("active-nav");
          $('.home-circle').addClass("active-circle");
          $('.projects-circle').removeClass("active-circle");
          $('.projects-nav').removeClass("active-nav");
          $('.nav-link-text').removeClass("color-black");
          $('.line').removeClass("line-black");
          $('.nav-circle').removeClass("circle-black");
          $('.vertical-text-2').removeClass("color-black");
          $('.resume-circle').removeClass("active-circle-black");
          $('.resume-nav').removeClass("active-nav");
          
        } else {

          
        }
      });
      $(".resume-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.resume-nav').addClass("active-nav");
          $('.resume-circle').addClass("active-circle-black");
          $('.vertical-text-2').addClass("color-black");
          $('.nav-link-text').addClass("color-black");
          $('.line').addClass("line-black");
          $('.nav-circle').addClass("circle-black");
          $('.projects-circle').removeClass("active-circle");
          $('.projects-nav').removeClass("active-nav");
          $('.home-circle').removeClass("active-circle");
          $('.home-nav').removeClass("active-nav");
          
        } else {

          
        }
      });
      $(".projects-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.projects-nav').addClass("active-nav");
          $('.projects-circle').addClass("active-circle");
          $('.nav-link-text').removeClass("color-black");
          $('.line').removeClass("line-black");
          $('.nav-circle').removeClass("circle-black");
          $('.vertical-text-2').removeClass("color-black");
          $('.resume-circle').removeClass("active-circle-black");
          $('.resume-nav').removeClass("active-nav");
          
        } else {

          
        }
      });
      $(".project-two-viewport-two").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.projects-nav').addClass("active-nav");
          $('.projects-circle').addClass("active-circle");
          $('.resume-circle').removeClass("active-circle-black");
          $('.resume-nav').removeClass("active-nav");
          
        } else {

          
        }
      });
      $(".contact-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.contact-nav').addClass("active-nav");
          $('.contact-circle').addClass("active-circle");
          $('.projects-circle').removeClass("active-circle");
          $('.projects-nav').removeClass("active-nav");
          
        } else {
          $('.contact-circle').removeClass("active-circle");
          $('.contact-nav').removeClass("active-nav");
          
        }
      });
    });
  }

  resumeTitleViewCheck() {
    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      $(".creative-title").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.creative-row').addClass("fadeInUp");

        } else {
        }
      });
      $(".detail-title").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.detail-row').addClass("fadeInUp");

        } else {

        }
      });
      $(".team-title").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.team-row').addClass("fadeInUp");

        } else {

        }
      });
      $(".jstorm-title").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.jstorm-title').addClass("fadeInUp");
        } else {

        }
      });
      $(".jstorm-title-2").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.jstorm-title-2').addClass("fadeInUp");
        } else {
          
        }
      });
    });
  }
}





