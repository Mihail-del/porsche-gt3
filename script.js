// HYPERLINKS



// FEAUTURES info
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-info');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-animation-info');
        } else {
          demoInfo.classList.remove('features-animation-info');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-card1');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-card1-anim');
        } else {
          demoInfo.classList.remove('features-card1-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-card2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-card2-anim');
        } else {
          demoInfo.classList.remove('features-card2-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-card3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-card3-anim');
        } else {
          demoInfo.classList.remove('features-card3-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-card4');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-card4-anim');
        } else {
          demoInfo.classList.remove('features-card4-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});




// FEAUTURES img
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.features-animation-frame-img');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('features-animation-frame-img-anim');
        } else {
          demoInfo.classList.remove('features-animation-frame-img-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "features-info" not found.');
  }
});




// ENGINE info
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-h2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-animation-info');
        } else {
          demoInfo.classList.remove('engine-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-h2" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-h3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-animation-info');
        } else {
          demoInfo.classList.remove('engine-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-h3" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-card1');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-card1-anim');
        } else {
          demoInfo.classList.remove('engine-card1-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-card2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-card2-anim');
        } else {
          demoInfo.classList.remove('engine-card2-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-card3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-card3-anim');
        } else {
          demoInfo.classList.remove('engine-card3-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-card4');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-card4-anim');
        } else {
          demoInfo.classList.remove('engine-card4-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-info" not found.');
  }
});

// ENGINE img
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.engine-animation-frame-img');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('engine-animation-frame-img-anim');
        } else {
          demoInfo.classList.remove('engine-animation-frame-img-anim');
        }
      });
    }, { threshold: 0.4});

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "engine-info" not found.');
  }
});




// COMFORT info
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-h2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-animation-info');
        } else {
          demoInfo.classList.remove('comfort-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-h2" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-h3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-animation-info');
        } else {
          demoInfo.classList.remove('comfort-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-h3" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-card1');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-card1-anim');
        } else {
          demoInfo.classList.remove('comfort-card1-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-card2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-card2-anim');
        } else {
          demoInfo.classList.remove('comfort-card2-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-card3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-card3-anim');
        } else {
          demoInfo.classList.remove('comfort-card3-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.comfort-card4');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('comfort-card4-anim');
        } else {
          demoInfo.classList.remove('comfort-card4-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "comfort-info" not found.');
  }
});



// DESIGN
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.design-h2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('design-animation-info');
        } else {
          demoInfo.classList.remove('design-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "design-h2" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.design-h3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('design-animation-info');
        } else {
          demoInfo.classList.remove('design-animation-info');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "design-h3" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.design-front');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('design-front-back-animation');
        } else {
          demoInfo.classList.remove('design-front-back-animation');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "design-back" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.design-back');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('design-front-back-animation');
        } else {
          demoInfo.classList.remove('design-front-back-animation');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "design-back" not found.');
  }
});



// PERFORMANCE info
document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-h2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-animation-info');
        } else {
          demoInfo.classList.remove('exclusive-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-h2" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-h3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-animation-info');
        } else {
          demoInfo.classList.remove('exclusive-animation-info');
        }
      });
    }, { threshold: 0.9 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-h3" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-card1');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-card1-anim');
        } else {
          demoInfo.classList.remove('exclusive-card1-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-card2');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-card2-anim');
        } else {
          demoInfo.classList.remove('exclusive-card2-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-card3');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-card3-anim');
        } else {
          demoInfo.classList.remove('exclusive-card3-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-info" not found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const demoInfo = document.querySelector('.exclusive-card4');

  if (demoInfo) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          demoInfo.classList.add('exclusive-card4-anim');
        } else {
          demoInfo.classList.remove('exclusive-card4-anim');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(demoInfo);
  } else {
    console.error('Element with class "exclusive-info" not found.');
  }
});