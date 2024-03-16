//When main checkbox is clicked it unchecks all
const mainCheckbox = document.getElementById('checked');
const checkBoxForm = document.getElementById('nav');
mainCheckbox.addEventListener('click',()=>{
if(mainCheckbox.checked== true) {mainCheckbox.checked = false;
} else if (checkBoxForm.classList.contains('show')){
checkBoxForm.classList.remove('show');
checkBoxForm.classList.add('hide');
mainCheckbox.checked = false;
}

});

const resize = ()=>{
let win = window , doc = document , mydoc = doc.documentElement , mybody = doc.getElementsByTagName('body')[0],myClientHeight = mydoc.clientHeight;
console.log(mydoc.clientHeight);
let getActualWidth = Math.min(
mydoc.clientWidth,
mydoc.body.scrollWidth, mydoc.documentElement.scrollWidth,
mydoc.body.offsetWidth, mydoc.documentElement.offsetWidth
);
console.log(getActualWidth);
}


let handleDocumentLoad = ()=>{
const toggleEvent = document.querySelector('.dropdown');

 for(let toggleLink of toggleEvent){
 toggleLink.onclick = toggleLink.addEventListener('click', (e)=>{
     console.log(toggleLink.onclick + "togglelinks unloaded");
     //hideContent(toggleLink);
     if(mainCheckbox.checked== true) {
       toggleLink.checked = false;
let checkActive = document.querySelector('.active');
toggleLink.classList.add('active');
console.log(e);
       console.log(toggleLink.pathname, e.target.pathname);
     if(toggleLink.pathname !== e.target.pathname) {
       checkActive.classList.remove('active');
     
       console.log("display was none and active removed and current was added");
       e.target.classList.add('active');
       
       console.log(e.target.pathname+" "+ e.target.classList);
   } 
}


  });
 }
};

//

//When element is clicked displays content
const showContent = (eventTarget) => {
  return document.getElementById(eventTarget).style.display = 'flex';

}

const hideContent = (eventTargetHidden, eventTargetShown) => {
document.getElementById(eventTargetHidden).style.display = 'none';
document.getElementById(eventTargetShown).style.display = 'flex';

}

const handleToggleTab = (event) => {
const eventTarget = `.${event.target.className}`;
const activateToggleLinks = document.querySelectorAll(eventTarget);
console.log(activateToggleLinks);

for (let toggleLink of activateToggleLinks) {
if (toggleLink.classList.contains('active')) {
  return toggleLink.classList.remove('active');
} else {
  return toggleLink.classList.add('active');
}

}
}

const handleHideShown = (event) => {
const eventTarget = `.${event.target.className}`;
const activateToggleLinks = document.querySelectorAll(eventTarget);
console.log(activateToggleLinks[0]);
let checkToggle;
if (event.target.getAttribute('title')) {
checkToggle = `${event.target.dataset.toggle}.is(":visible")`;
} else {
checkToggle = `${event.target.dataset.toggle}.is(":visible")`;
}
console.log(checkToggle);

for (let toggleLink of activateToggleLinks) {
if (toggleLink.classList.contains('show') && (event.target.getAttribute('title') || event.target.dataset.toggle)) {
  return toggleLink.classList.remove('show');
} else if (!toggleLink.classList.contains('show') && (event.target.getAttribute('title') || event.target.dataset.toggle)) {
  return toggleLink.classList.add('show');
}

}
}

document.addEventListener('DOMContentLoaded', function () {
jQuery(document).ready(($) => {
$('.icon').click(function() {
  $(this).toggleClass('show');
  $('nav ul').toggleClass('show');
  $('.login-submenu').children('ul').removeClass('show-submenu');
  $('.submenu').removeClass('show-submenu2');
  $('.login-submenu').children('a:first-child').removeClass('caret-down');
  $('.icon').show();
  $('.menu-bg').addClass('show');
  $(document).click(function(event) {
  var $target = $(event.target);
  if(!$target.closest('.header-right .icon').length && // If the target isn't inside ".icon"
  $('.header-right nav').is(':visible')) { // and the menu is open, close it
  $('.icon').toggleClass('show');
  $('.header-right nav').toggleClass('show');
  }
  });
  $('.list-submenu').click(function() {
  $(this).children('ul').toggleClass('show-submenu2');
  $(this).children('span').toggleClass('caret-down').toggleClass('caret-up');
  });
});
});
});

$(document).ready(function(){
  $(".header-right .dropdown-icon").click(function(){
      $(".header-right .dropdown-menu").slideToggle("fast")
      $(".header-right .dropdown-menu").toggleClass("show")
      $(".header-right .dropdown-icon").toggleClass("rotate")
  })
    $(document).click(function(event) { 
      var $target = $(event.target);
if(!$target.closest('.header-right .dropdown-icon').length && // If the target isn't inside ".icon"
  $( ".header-right .dropdown-menu" ).is(":visible")) { // and the menu is open
      $(".header-right .dropdown-icon").toggleClass('rotate');
      $(".header-right .dropdown-menu").toggleClass('show');
}
      })
});

$('.menu-bg').click( function(event){
  event.preventDefault();
  console.log("clicked");
  $("#checked").prop('checked', false);
}); 

