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

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll < 100){
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('transition', '400ms');
      $('.navbar').css('height', '80px');
      $('.nav-item').css('margin', ' 0px 15px');
      $('.nav-item').css('transition', '400ms');
  } else{
      $('.navbar').css('background', 'rgba(0, 0, 0, 0.3)');
      $('.navbar').css('transition', '400ms');
      $('.navbar').css('height', '60px');
      $('.nav-item').css('margin', ' 0px 30px');
      $('.nav-item').css('transition', '400ms');
  }

  if(scroll < 100){

  }

});

$(window).scroll(function() {
  if ($(this).scrollTop() > 120) {
    $('.slide-right').stop().animate({ left: '0px' });
  } else {
    $('.slide-right').stop().animate({ left: '-400px' });
  }
  });