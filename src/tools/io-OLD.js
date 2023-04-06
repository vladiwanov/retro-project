// ----------BEGIN----------------
import s from '../styles/main.scss';

// ---------

const mainCallback = entries => {
  // console.log(entries);
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      console.log('ENTRY!!!::::🇩🇪::', entry.target);
      entry.target.classList.add(`${s.active}`);
    }
  });
};

const options = {
  // root: visualViewport,
  rootMargin: '100px',
};
const observer = new IntersectionObserver(mainCallback, options);

const target = document.querySelectorAll(`.${s.items}`);
console.log('TARGET_ARRAY:::::', target);
// const observer = new IntersectionObserver(mainCallback, options);
target.forEach(item => observer.observe(item));
