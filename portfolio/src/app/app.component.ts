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

console.log("00000000")
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