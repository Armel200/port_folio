//header
const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.remove('bg-black');
      header.classList.add('bg-neutral-900'); // Noir un peu plus clair
    } else {
      header.classList.remove('bg-neutral-900');
      header.classList.add('bg-black');
    }
  });

  // effet ecriture
  var typed = new Typed('#typed', {
    strings: ['Ethical Hackeur', 'Web Designer', 'Creative Thinker','Developer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  // barre de progress
  const progressCircle = document.getElementById('progressCircle');
  const radius = progressCircle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  progressCircle.style.strokeDasharray = circumference;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    progressCircle.style.strokeDashoffset = circumference - scrollPercent * circumference;
  });

  //retour
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });


  }

  //  menu
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    // mobileMenu.classList.add('-translate-x-full');
    mobileMenu.classList.toggle('hidden');
  });


  document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-reveal");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));

  

  // Compteur
  const countTarget = document.getElementById("experience-count");
  let hasCounted = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        let start = 0;
        const end = 25;
        const duration = 1000; // 1.5s
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start++;
          countTarget.textContent = start;
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });

  countObserver.observe(countTarget);
//1er
  const countTargets = document.getElementById("experience-counts");
  let hasCounteds = false;

  const countObservers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounteds) {
        hasCounteds = true;
        let start = 0;
        const end = 20;
        const duration = 1000; // 1.5s
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start++;
          countTargets.textContent = start;
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });
    countObservers.observe(countTargets);
    // 2em
 const countTargetss = document.getElementById("experience-countss");
  let hasCountedss = false;

  const countObserverss = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCountedss) {
        hasCountedss = true;
        let start = 0;
        const end = 10;
        const duration = 1000; // 1.5s
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start++;
          countTargetss.textContent = start;
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });
    countObserverss.observe(countTargetss);
//3em
     const countTargetsss = document.getElementById("experience-countsss");
  let hasCountedsss = false;

  const countObserversss = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCountedsss) {
        hasCountedsss = true;
        let start = 0;
        const end = 200;
        const duration = 1000; // 1.5s
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start++;
          countTargetsss.textContent = start;
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });
    countObserversss.observe(countTargetsss);
//4em
 const countTargetse = document.getElementById("experience-countse");
  let hasCountedse = false;

  const countObserverse = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCountedse) {
        hasCountedse = true;
        let start = 0;
        const end = 15;
        const duration = 1000; // 1.5s
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start++;
          countTargetse.textContent = start;
          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });
    countObserverse.observe(countTargetse);

});

const message = document.getElementById("message");
const page = document.getElementById("page");

message.addEventListener("click", () =>{
    page.classList.toggle("show");
    page.classList.toggle("hidden");
});