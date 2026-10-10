(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);});
document.querySelectorAll('[data-copy]').forEach(function(x){x.addEventListener('click',function(){var u=location.href.split('#')[0];
(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(function(){x.textContent='Link copied'},function(){window.prompt('Copy this link:',u)});});});})();
document.addEventListener('click',function(e){var d=document.querySelector('.dd[open]');if(d&&!d.contains(e.target))d.removeAttribute('open');});
