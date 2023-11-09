//const { error } = require("jquery");

(function ($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function (e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function () {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function () {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
      previousTop: 0
    },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
            document.getElementById("oiml_logo").src = "img/olson-immigration-law-logo-nbg.png";
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
            document.getElementById("oiml_logo").src = "img/olson-immigration-law-logo-nbg-white.png";
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          document.getElementById("oiml_logo").src = "img/olson-immigration-law-logo-nbg.png";
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  //Print year on copyright
  let date = new Date();
  let year = date.getFullYear();
  document.querySelector('#copyright-year').innerHTML = year;

  //copy email to clipboard
  // document.querySelector('#copy-to-clipboard').addEventListener('click', async event => {
  //   if (!navigator.clipboard) {
  //     //clipboard api not available
  //     return
  //   }
  //   const text = document.querySelector('#copy-to-clipboard-text').innerHTML;
  //   try {
  //     await navigator.clipboard.writeText(text)
  //     document.querySelector("#copy-to-clipboard-raplace").innerHTML = 'Email copied to clipboard';
  //   } catch (err) {
  //     console.error('Failed to copy!', err);
  //   }
  // });

})(jQuery); // End of use strict
