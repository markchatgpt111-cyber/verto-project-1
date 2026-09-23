(function(){'use strict';
  var header=document.querySelector('.verto-header');
  var menuButton=document.querySelector('[data-verto-menu]');
  var mobile=document.querySelector('[data-verto-mobile]');
  function onScroll(){if(header)header.classList.toggle('is-scrolled',window.scrollY>20)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  if(menuButton&&mobile){menuButton.addEventListener('click',function(){var open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));mobile.classList.toggle('is-open',!open);});mobile.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menuButton.setAttribute('aria-expanded','false');mobile.classList.remove('is-open')})})}
})();
