// Event Delegation on parent element, before it was $('.spoiler button')
$('.spoiler').on('click', 'button', function(){
  $('.spoiler span').show(1000);
  $('.spoiler button').slideDown(1000);
  $('.spoiler button').hide(3000);
})


// ****************************************** //

// Create the "Reveal Spoiler" Button
// $ sign before variable name is a great way to distinguish variables that contain selected elements from regular variables with other types of values.
const $button = $('<button>Reveal Spoiler</button>'); 

// Append to web page, it will insert at the end
$('.spoiler').append($button);

// // To insert at the beginning 
// $('.spoiler').prepend($button);


$('span').hide();

// $('.spoiler button').click(function(){
//   $('.spoiler span').show(1000);
//   $('.spoiler button').slideDown(1000);
//   $('.spoiler button').hide(3000);

// });