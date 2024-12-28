// ----------BEGIN----------------
import s from 'styles/main.scss';

// ---------

const io = (
  id = 'contentItems',
  rootMargin = '-5%',
  className = 'animationActive',
) => {
  const mainCallback = entries => {
    // console.log(entries);
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log('ENTRY!!!::::🇩🇪::', entry.target);
        entry.target.classList.add(className);
      }
    });
  };

  const options = {
    // rootMargin,
    threshold: 0.15,
  };
  const observer = new IntersectionObserver(mainCallback, options);
  // const targets = document.querySelectorAll('#contentItems');
  const targets = document.querySelectorAll(`#${id}`);
  // console.log('TARGET_ARRAY:::::', targets);

  targets.forEach(target => observer.observe(target));
};

export default io;
