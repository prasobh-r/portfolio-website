(function(){
  // Create a free form at formspree.io, then paste its ID below (replace YOUR_FORM_ID).
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
  var CONTACT_EMAIL = 'prasobh4902@gmail.com';

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

  var form = document.getElementById('contactForm');
  if(form){
    var status = document.getElementById('formStatus');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.elements.name, email = form.elements.email, msg = form.elements.message;
      var ok = true;
      [name, email, msg].forEach(function(f){
        var bad = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.classList.toggle('invalid', bad);
        if(bad) ok = false;
      });
      if(!ok){
        status.className = 'form-status error';
        status.textContent = 'Please fill in your name, a valid email and a message.';
        return;
      }
      var subject = 'Portfolio enquiry from ' + name.value.trim();
      var body = msg.value.trim() + '\n\n— ' + name.value.trim() + '\n' + email.value.trim();
      var btn = form.querySelector('button[type="submit"]');

      function viaMailto(){
        status.className = 'form-status';
        status.textContent = 'Opening your email app to send this…';
        window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      }

      // Formspree not configured yet: fall back to the visitor's mail app.
      if(FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1){ viaMailto(); return; }

      btn.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Sending…';
      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: new FormData(form)
      }).then(function(res){
        if(res.ok){
          form.reset();
          status.className = 'form-status';
          status.textContent = 'Thanks! Your message was sent. I will reply soon.';
        } else { throw new Error('bad status'); }
      }).catch(function(){
        status.className = 'form-status error';
        status.textContent = 'Could not send. Please email ' + CONTACT_EMAIL + ' directly.';
      }).then(function(){ btn.disabled = false; });
    });
  }

  var expToggle = document.getElementById('expToggle');
  var expList = document.getElementById('expBullets');
  if(expToggle && expList){
    expToggle.addEventListener('click', function(){
      var open = expList.classList.toggle('open');
      expToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      expToggle.querySelector('.exp-toggle-label').textContent = open ? 'Show fewer highlights' : 'Show 3 more highlights';
    });
  }
})();
