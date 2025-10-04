/** @format */

$.noConflict();

jQuery(document).ready(function () {
    var inputPassword;
  jQuery("div.password>i").click(function () {
    inputPassword = jQuery(this).prev("input");
    jQuery(this).toggleClass("fa-eye fa-eye-slash");
    if (jQuery(this).prev("input").attr("type") === "password") {
      jQuery(this).prev("input").attr("type", "text");
    } else {
      jQuery(this).prev("input").attr("type", "password");
    }
  });
});

// jQuery(document).ready(function () {
//   var inputPassword;
//   jQuery("div.password>i").click(function () {
//     inputPassword = jQuery(this).prev("input");
//     jQuery(this).toggleClass("fa-eye fa-eye-slash");
//     if (inputPassword.attr("type") === "password") {
//       inputPassword.attr("type", "text");
//     } else {
//       inputPassword.attr("type", "password");
//     }
//   });
// });
