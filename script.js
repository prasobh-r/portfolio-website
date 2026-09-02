(function(){
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      });
    });
  }

  var sections = document.querySelectorAll('main section[id]');
  var navA = document.querySelectorAll('.nav-links a');
  var map = {};
  navA.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });

  var navObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var id = entry.target.id;
      if(entry.isIntersecting){
        navA.forEach(function(a){a.classList.remove('active');});
        if(map[id]) map[id].classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:0});
  sections.forEach(function(s){ navObserver.observe(s); });

  var reveals = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
  reveals.forEach(function(el){ revealObserver.observe(el); });

  var toTop = document.getElementById('toTop');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 480){ toTop.classList.add('show'); }
    else { toTop.classList.remove('show'); }
  });
  toTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  });
})();
