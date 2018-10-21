$(document).ready(function() {
  $("#portfolio-sorting li ").click(function() {
    // Remove the current active class
    $("#portfolio-sorting li.active").removeClass('active');
    
    // Add the active class to the clicked button
    $(this).addClass('active');
    
    // Get the button text (filter value)
    var filterValue = $(this).text().toLowerCase();
    
    // If we clicked "All", we show all items
    if (filterValue === "all") {
      $('.selector').slideDown(600);

    } else {
      // Else, we find the portfolio entries that match the clicked button
      // And then add the class of .hidden
      $(".selector").each(function() {
        if (!$(this).hasClass(filterValue)) {
          $(this).slideUp(600);
        } else {
          $(this).slideDown(600);
        }
      });
    }
    
    return false;
  });
});

// $(window).load(function() {
//   $('.i').show();
//   var twitterPos = $('#twitter').position();
//   var githubPos = $('#github').position();
//   var facebookPos = $('#facebook').position();
//   var linkedinPos = $('#linkedin').position();
//   var youtubePos = $('#youtube').position();
//   var googlePos = $('#google').position();
//   var mailPos = $('#mail').position();
//   var imgPos = $('.me').position();
  
//   $('.i').css({
//     position: 'absolute',
//     zIndex: '1',
//     top: imgPos.top + 100,
//     left: '47%'
//   });
  
//   setTimeout(function() {
//     $('#twitter').animate({
//       top: twitterPos.top + 10,
//       left: twitterPos.left - 10
//     }, 500);
//   }, 250);
  
//   setTimeout(function() {
//     $('#twitter').animate({
//       top: twitterPos.top,
//       left: twitterPos.left
//     }, 250);
    
//     $('#github').animate({
//       top: githubPos.top + 10,
//       left: githubPos.left - 6
//     }, 500);
//   }, 500);
  
//   setTimeout(function() {
//     $('#github').animate({
//       top: githubPos.top,
//       left: githubPos.left
//     }, 250);
    
//     $('#facebook').animate({
//       top: facebookPos.top + 10,
//       left: facebookPos.left - 3
//     }, 500);
//   }, 750);
  
//   setTimeout(function() {
//     $('#facebook').animate({
//       top: facebookPos.top,
//       left: facebookPos.left
//     }, 250);
    
//     $('#linkedin').animate({
//       top: linkedinPos.top + 10,
//       left: linkedinPos.left
//     }, 500);
//   }, 1000);
  
//   setTimeout(function() {
//     $('#linkedin').animate({
//       top: linkedinPos.top,
//       left: linkedinPos.left
//     }, 250);
    
//     $('#youtube').animate({
//       top: youtubePos.top + 10,
//       left: youtubePos.left + 3
//     }, 500);
//   }, 1250);
  
//   setTimeout(function() {
//     $('#youtube').animate({
//       top: youtubePos.top,
//       left: youtubePos.left
//     }, 250);
    
//     $('#google').animate({
//       top: googlePos.top + 10,
//       left: googlePos.left + 6
//     }, 500);
//   }, 1500);
  
//   setTimeout(function() {
//     $('#google').animate({
//       top: googlePos.top,
//       left: googlePos.left
//     }, 250);
    
//     $('#mail').animate({
//       top: mailPos.top + 10,
//       left: mailPos.left + 10
//     }, 500);
//   }, 1750);
  
//   setTimeout(function() {
//     $('#mail').animate({
//       top: mailPos.top,
//       left: mailPos.left
//     }, 250);
//   }, 2000);

// })