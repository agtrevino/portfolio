import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  constructor() { }

  isProject = false;
  view: string;

  ngOnInit() {
    this.navAnim();
    // this.viewSwitch();
    this.navViewCheck();
    this.resumeTitleViewCheck();
  }



  closeSubNav() {
    $('.sub-a').addClass("no-mouseover");
    $('.projects-sub-nav-3').removeClass("active-nav");
    setTimeout(function () {
      $('.projects-sub-nav-2').removeClass("active-nav");
      setTimeout(function () {
        $('.projects-sub-nav-1').removeClass("active-nav");
        $('.sub-menu-container').removeClass("expanded");
    },250)
    }, 150)
  }

  openSubNav() {
    $('.sub-a').removeClass("no-mouseover");
    $('.sub-menu-container').addClass("expanded");
    setTimeout(function () {
      $('.projects-sub-nav-1').addClass("active-nav");
      setTimeout(function () {
        $('.projects-sub-nav-2').addClass("active-nav");
        setTimeout(function () {
          $('.projects-sub-nav-3').addClass("active-nav");
        }, 150)
      }, 150)
    }, 250)
  }

  viewSwitch(view) {

    switch (view) {
      case 'homeView':
        this.isHomeView();
        break;
      case 'resumeView':
        this.isResumeView();
        break;
      case 'projectsView':
        this.isProjectsView();
        break;
      case 'contactView':
        this.isContactView();
        break;
      default:
        console.log('Default!');
    }
  }

  isHomeView() {
    this.closeSubNav();

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
    $('.resume-circle').removeClass("nav-circle-black");


  }

  isResumeView() {
    this.closeSubNav();
    $('.projects-sub-nav-3').removeClass("active-nav");

    $('.resume-nav').addClass("active-nav");
    $('.resume-circle').addClass("active-circle-black");
    $('.resume-circle').addClass("nav-circle-black");
    $('.vertical-text-2').addClass("color-black");
    $('.nav-link-text').addClass("color-black");
    $('.line').addClass("line-black");
    $('.nav-circle').addClass("circle-black");

    $('.projects-circle').removeClass("active-circle");
    $('.projects-nav').removeClass("active-nav");
    $('.home-circle').removeClass("active-circle");
    $('.home-nav').removeClass("active-nav");



  }

  isProjectsView() {

    this.openSubNav();

    $('.projects-nav').addClass("active-nav");
    $('.projects-circle').addClass("active-circle");

    $('.nav-link-text').removeClass("color-black");
    $('.line').removeClass("line-black");
    $('.nav-circle').removeClass("circle-black");
    $('.vertical-text-2').removeClass("color-black");
    $('.resume-circle').removeClass("active-circle-black");
    $('.resume-nav').removeClass("active-nav");
    $('.resume-circle').removeClass("nav-circle-black");
    $('.home-circle').removeClass("active-circle");
    $('.home-nav').removeClass("active-nav");
    $('.contact-circle').removeClass("active-circle");
    $('.contact-nav').removeClass("active-nav");


  }

  isContactView() {

    this.closeSubNav();
    $('.projects-sub-nav-3').removeClass("active-nav");

    $('.contact-nav').addClass("active-nav");
    $('.contact-circle').addClass("active-circle");

    $('.projects-circle').removeClass("active-circle");
    $('.projects-nav').removeClass("active-nav");
    $('.home-circle').removeClass("active-circle");
    $('.home-nav').removeClass("active-nav");



  }

  navViewCheck() {

    var self = this;

    $('.wrapper').scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();


      $(".home-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          this.view = 'homeView';
          self.viewSwitch(this.view);
        }
      });

      $(".resume-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          this.view = 'resumeView';
          self.viewSwitch(this.view);
        }
      });
      $(".projects-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          this.view = 'projectsView';
          self.viewSwitch(this.view);
        }
      });
      $(".jstorm-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.jstorm-line').addClass('line-extend');
          $('.codebound-line').removeClass('line-extend');
        }
      })
      $(".projects-main-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.jstorm-line').removeClass('line-extend');
          $('.codebound-line').removeClass('line-extend');
        }
      })
      $(".codebound-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.codebound-line').addClass('line-extend');
          $('.jstorm-line').removeClass('line-extend');
        }
      })

      $(".contact-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.projects-sub-nav-3').removeClass("active-nav");
          this.view = 'contactView';
          self.viewSwitch(this.view);

        }
      });

      $(".signature").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.projects-sub-nav-3').removeClass("active-nav");
          this.view = 'contactView';
          self.viewSwitch(this.view);
          self.closeSubNav();
          $('.signature').attr('src', '');
          $('.signature').attr('src', '../assets/img/signature/aaron_sig.gif');
          $('.signature').removeClass('signature-fade');
        } else {
          $('.signature').addClass('signature-fade');
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
          setTimeout(function () {
            $('.creative-row').addClass("fadeInUp");
            setTimeout(function () {
              $('.detail-row').addClass("fadeInUp");
              setTimeout(function () {
                $('.team-row').addClass("fadeInUp");
              }, 300)
            }, 300)
          }, 300)
        }
      })
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
          $('.vertical-text-2').addClass("color-white");
          setTimeout(function () {
            $('.jstorm-text').addClass("fadeInUp");
          }, 300);
        } else {
          $('.vertical-text-2').removeClass("color-white");
        }
      });

    });
  }

  navAnim() {
    setTimeout(function () {
      $('#home-nav').addClass("fadeInUp");
      setTimeout(function () {
        $('#resume-nav').addClass("fadeInUp");
        setTimeout(function () {
          $('#projects-nav').addClass("fadeInUp");
          setTimeout(function () {
            $('#contact-nav').addClass("fadeInUp");
            setTimeout(function () {
              $('.home-circle').addClass("active-circle");
              setTimeout(function () {
                $('.home-nav').addClass("active-nav");
              }, 300)
            }, 300)
          }, 300)
        }, 300)
      }, 300)
    }, 600)
  }
}





