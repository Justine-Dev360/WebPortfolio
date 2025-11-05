document.addEventListener('DOMContentLoaded',()=>{
  // Year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // Mobile nav toggle
  const navToggle=document.getElementById('nav-toggle');
  const navList=document.querySelector('.nav-list');
  if(navToggle && navList){
    navToggle.addEventListener('click',()=>{
      const isOpen = navList.classList.toggle('open');
      navToggle.classList.toggle('open');
      // update accessible state on the button
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // close when clicking a link
    navList.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      navList.classList.remove('open');navToggle.classList.remove('open');navToggle.setAttribute('aria-expanded','false');
    }));
  }

  // Smooth in-page scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      const href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el=document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Reveal on scroll using IntersectionObserver
  const reveals=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  reveals.forEach(r=>io.observe(r));

  // Active nav highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');
  if(sections.length && navLinks.length){
    const navObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = document.querySelector('.nav-list a[href="#'+id+'"]');
        if(entry.isIntersecting){
          navLinks.forEach(l=>l.classList.remove('active'));
          if(link) link.classList.add('active');
        }
      });
    },{threshold:0.45});
    sections.forEach(s=>navObserver.observe(s));
  }

  // Moving underline indicator for nav items
  (function(){
    if(!navList) return;
    // create underline element
    const underline = document.createElement('span');
    underline.className = 'nav-underline';
    navList.appendChild(underline);

    function moveUnderlineTo(link){
      if(!link){ underline.style.opacity = '0'; return; }
      const linkRect = link.getBoundingClientRect();
      const parentRect = navList.getBoundingClientRect();
      const left = linkRect.left - parentRect.left + navList.scrollLeft;
      underline.style.left = left + 'px';
      underline.style.width = linkRect.width + 'px';
      underline.style.opacity = '1';
    }

    // on hover/focus move underline
    navLinks.forEach(link=>{
      link.addEventListener('mouseenter',()=>moveUnderlineTo(link));
      link.addEventListener('focus',()=>moveUnderlineTo(link));
    });

    // when leaving nav, always hide underline (only visible while hovering/focusing)
    navList.addEventListener('mouseleave',()=>{
      underline.style.opacity = '0';
      underline.style.width = '0';
    });

    // on resize hide underline to avoid mis-positioning; it will re-appear on next hover
    window.addEventListener('resize',()=>{
      underline.style.opacity = '0';
      underline.style.width = '0';
    });
  })();

  // Contact form handler (demo): prevent submit and show a success message
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // simple validation
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();
      if(!name || !email || !message){
        if(formMessage) formMessage.textContent = 'Please fill in all fields.';
        return;
      }
      // show demo success message
      if(formMessage) formMessage.textContent = 'Thanks — your message was sent (demo).';
      contactForm.reset();
    });
  }
});
