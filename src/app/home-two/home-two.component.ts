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
    this.expandingCards();
    this.navAnim();
    // this.viewSwitch();
    this.navViewCheck();
    this.resumeTitleViewCheck();
    $(document).ready(function() {
      $(".trigger").click(function() {
        $(".menu").toggleClass("active"); 
      });
    });
  }

  expandingCards() {
    $(".jstorm-col").on("mouseover", "div", function (e) {
      $('.jstorm-site-logo').removeClass("fadeInUp");
      setTimeout(function () {
        $('.jstorm-title-2').addClass("fadeInUp");
        $('.jstorm-logo-img').addClass("fadeInUp");
        $('.jstorm-text').addClass("fadeInUp");
      }, 200);
    });
    $(".jstorm-col").on("mouseleave", "div", function (e) {
      $('.jstorm-site-logo').addClass("fadeInUp");
      setTimeout(function () {
        $('.jstorm-title-2').removeClass("fadeInUp");
        $('.jstorm-logo-img').removeClass("fadeInUp");
        $('.jstorm-text').removeClass("fadeInUp");
      }, 200);
    });

    $(".codebound-col").on("mouseover", "div", function (e) {
      $('.codebound-site-logo').removeClass("fadeInUp");
      setTimeout(function () {
        $('.codebound-title-2').addClass("fadeInUp");
        $('.codebound-logo-img').addClass("fadeInUp");
        $('.codebound-text').addClass("fadeInUp");
      }, 200);
    });
    $(".codebound-col").on("mouseleave", "div", function (e) {
      $('.codebound-site-logo').addClass("fadeInUp");
      setTimeout(function () {
        $('.codebound-title-2').removeClass("fadeInUp");
        $('.codebound-logo-img').removeClass("fadeInUp");
        $('.codebound-text').removeClass("fadeInUp");
      }, 200);
    });

    $(".mp-col").on("mouseover", "div", function (e) {
      $('.mp-site-logo').removeClass("fadeInUp");
      setTimeout(function () {
        $('.mp-title-2').addClass("fadeInUp");
        $('.mp-logo-img').addClass("fadeInUp");
        $('.mp-text').addClass("fadeInUp");
      }, 200);
    });
    $(".mp-col").on("mouseleave", "div", function (e) {
      $('.mp-site-logo').addClass("fadeInUp");
      setTimeout(function () {
        $('.mp-title-2').removeClass("fadeInUp");
        $('.mp-logo-img').removeClass("fadeInUp");
        $('.mp-text').removeClass("fadeInUp");
      }, 200);
    });

    $(".appddiction-col").on("mouseover", "div", function (e) {
      $('.appddiction-site-logo').removeClass("fadeInUp");
      setTimeout(function () {
        $('.appddiction-title-2').addClass("fadeInUp");
        $('.appddiction-logo-img').addClass("fadeInUp");
        $('.appddiction-text').addClass("fadeInUp");

      }, 200);
    });
    $(".appddiction-col").on("mouseleave", "div", function (e) {
      $('.appddiction-site-logo').addClass("fadeInUp");
      setTimeout(function () {
        $('.appddiction-title-2').removeClass("fadeInUp");
        $('.appddiction-logo-img').removeClass("fadeInUp");
        $('.appddiction-text').removeClass("fadeInUp");

      }, 200);
    });


  }


  closeSubNav() {
    $('.projects-sub-nav-3').removeClass("active-nav");
    setTimeout(function () {
      $('.projects-sub-nav-2').removeClass("active-nav");
      setTimeout(function () {
        $('.projects-sub-nav-1').removeClass("active-nav");
        $('.sub-menu-container').removeClass("expanded");
      }, 150)
    }, 150)
  }

  openSubNav() {
    // $('.sub-menu-container').addClass("expanded");
    // setTimeout(function () {
    //   $('.projects-sub-nav-1').addClass("active-nav");
    //   setTimeout(function () {
    //     $('.projects-sub-nav-2').addClass("active-nav");
    //     setTimeout(function () {
    //       $('.projects-sub-nav-3').addClass("active-nav");
    //     }, 150)
    //   }, 150)
    // }, 250)
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
      case 'appddictionView':
        this.isAppddictionView();
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

    $('.main-logo-poly').css({ fill: "#fff" });
    $('.main-logo-poly').css({ stroke: "#fff" });


  }

  isResumeView() {
    // $('.projects-sub-nav-3').removeClass("active-nav");

    $('.main-logo-poly').css({ fill: "#505464" });
    $('.main-logo-poly').css({ stroke: "#505464" });

    $('.resume-nav').addClass("active-nav");
    $('.resume-circle').addClass("active-circle-black");
    $('.resume-circle').addClass("nav-circle-black");
    $('.vertical-text-2').addClass("color-black");
    $('.nav-link-text').addClass("color-black");
    $('.line').addClass("line-black");
    $('.nav-circle').addClass("circle-black");

    $('.contact-circle').removeClass("active-circle");
    $('.contact-nav').removeClass("active-nav");

    $('.projects-circle').removeClass("active-circle");
    $('.projects-nav').removeClass("active-nav");
    $('.home-circle').removeClass("active-circle");
    $('.home-nav').removeClass("active-nav");

  }

  isAppddictionView() {
    this.openSubNav();

    $('.main-logo-poly').css({ fill: "#505464" });
    $('.main-logo-poly').css({ stroke: "#505464" });

    $('.resume-nav').removeClass("active-nav");
    $('.resume-circle').removeClass("active-circle-black");
    $('.resume-circle').removeClass("nav-circle-black");
    $('.projects-circle').addClass("nav-circle-black");
    $('.projects-circle').addClass("active-circle-black");
    $('.projects-nav').addClass("active-nav");
    $('.vertical-text-2').addClass("color-black");
    $('.nav-link-text').addClass("color-black");
    $('.line').addClass("line-black");
    $('.nav-circle').addClass("circle-black");

    $('.contact-circle').removeClass("active-circle");
    $('.contact-nav').removeClass("active-nav");
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
    $('.vertical-text-2').addClass("color-black");
    $('.resume-circle').removeClass("active-circle-black");
    $('.resume-nav').removeClass("active-nav");
    $('.resume-circle').removeClass("nav-circle-black");
    $('.home-circle').removeClass("active-circle");
    $('.home-nav').removeClass("active-nav");
    $('.contact-circle').removeClass("active-circle");
    $('.contact-nav').removeClass("active-nav");
    $('.main-logo-poly').css({ fill: "#fff" });
    $('.main-logo-poly').css({ stroke: "#fff" });

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
    $('.nav-link-text').removeClass("color-black");
    $('.line').removeClass("line-black");
    $('.nav-circle').removeClass("circle-black");
    $('.vertical-text-2').removeClass("color-black");
    $('.resume-circle').removeClass("active-circle-black");
    $('.resume-nav').removeClass("active-nav");
    $('.resume-circle').removeClass("nav-circle-black");

    $('.main-logo-poly').css({ fill: "#fff" });
    $('.main-logo-poly').css({ stroke: "#fff" });

    $('.sub-menu-container').removeClass("expanded");


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
          $('.appddiction-line').removeClass('line-extend');
        }
      })
      $(".projects-main-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.jstorm-line').removeClass('line-extend');
          $('.codebound-line').removeClass('line-extend');
          $('.appddiction-line').removeClass('line-extend');
        }
      })
      $(".codebound-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.codebound-line').addClass('line-extend');
          $('.jstorm-line').removeClass('line-extend');
          $('.appddiction-line').removeClass('line-extend');
          $('.projects-circle').removeClass("active-circle-black");
        }
      })

      $(".appddiction-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          this.view = 'appddictionView';
          self.viewSwitch(this.view);
          $('.appddiction-line').addClass('line-extend');
          $('.jstorm-line').removeClass('line-extend');
          $('.codebound-line').removeClass('line-extend');
        }
      })

      $(".contact-two-viewport").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          $('.projects-sub-nav-3').removeClass("active-nav");
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
          // setTimeout(function () {
          //   $('.jstorm-title').addClass("fadeInUp");
          // }, 300);
        }
      });
      // $(".jstorm-title-2").each(function () {
      //   var offset = $(this).offset();
      //   if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
      //     $('.jstorm-img-1').addClass("fadeInUp");
      //     $('.jstorm-img-2').addClass("fadeInUp");
      //     setTimeout(function () {
      //       // $('.jstorm-title-2').addClass("fadeInUp");
      //       setTimeout(function () {
      //         $('.jstorm-text').addClass("fadeInUp");
      //       }, 300);
      //     }, 300);
      //   }
      // });

      $(".codebound-title").each(function () {
        var offset = $(this).offset();
        if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
          // setTimeout(function () {
          //   $('.codebound-title').addClass("fadeInUp");
          // }, 300);
        }
      });
      // $(".codebound-title-2").each(function () {
      //   var offset = $(this).offset();
      //   if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
      //     $('.codebound-img').addClass("fadeInUp");
      //     setTimeout(function () {
      //       $('.codebound-title-2').addClass("fadeInUp");
      //       setTimeout(function () {
      //         $('.codebound-text').addClass("fadeInUp");
      //       }, 300);
      //     }, 300);

      //   }
      // });

    });
  }

  navAnim() {
    setTimeout(function () {
      $('#home-nav').addClass("fadeInUp");
      setTimeout(function () {
        $('#projects-nav').addClass("fadeInUp");
        setTimeout(function () {
          $('#resume-nav').addClass("fadeInUp");
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





