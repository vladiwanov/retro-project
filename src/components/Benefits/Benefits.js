import { useCallback, useEffect } from 'react';
import s from './Benefits.module.scss';
import '../../styles/main.scss';
import retroProject from '../../images/tech2.jpg';
import LanguageContent from 'tools/LanguigesContent/LanguigesContent';
import getID from 'tools/getID';
import Slider from 'components/Slider';
import {
  benefitsImages1,
  benefitsImages2,
} from '../../db/sliderImagesList/sliderBenefitsImages ';

export default function Benefits({ hash }) {
  const benefits = LanguageContent('benefits');

  // --------------IO------------------------

  const cbTxt = entries => {
    // console.log('ENRTIES IN CB::::::', entries);
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${s.activeTxt}`);
        // observer.unobserve(entry);
      }
    });
  };

  const cbImg = entries => {
    // console.log('ENRTIES IN CB::::::', entries);
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${s.activeImg}`);
        // observer.unobserve(entry);
      }
    });
  };

  const options = {
    // rootMargin: '-200px',
    // threshold: 0.3,
  };

  const observerTxt = new IntersectionObserver(cbTxt, options);
  const observerImg = new IntersectionObserver(cbImg, options);

  useEffect(() => {
    const targets = document.querySelectorAll(`.${s.items}`);
    // console.log('TARGET_ARRAY:::::', targets);

    targets.forEach(target => observerTxt.observe(target));
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(`.${s.imgContainer}`);
    // console.log('TARGET_ARRAY:::::', targets);

    targets.forEach(target => observerImg.observe(target));
  }, []);

  // ---------------------------------------

  return (
    <section className={`${s.section} ${s.benefits}`} id={hash}>
      <div className={`${s.container}`}>
        <h2 className={`${s.title} ${s.benefitsTitle}`}>
          {benefits.benefitsTitle}
        </h2>
        {/* ============================================================= */}

        <div className={s.contentContainer}>
          <h3 className={` ${s.subTitle} ${s.benefitsSubtitle}`}>
            {benefits.subtitle1}
          </h3>

          <div className={s.itemContainer}>
            <div className={s.textContainer}>
              <ul className={s.listContainer}>
                {benefits.items1.map((item, i) => (
                  <li key={i} className={s.items}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.imgContainer}>
              <div className={s.benefitsBackdrop}></div>
              <Slider images={benefitsImages2} />
            </div>
          </div>

          {/* ============================================================= */}

          <h3 className={` ${s.subTitle} ${s.benefitsSubtitle}`}>
            <i>{benefits.subtitle2}</i>
          </h3>

          <div className={s.itemContainer}>
            <div className={s.imgContainer}>
              {/* <div className={s.benefitsBackdrop}></div> */}
              <Slider images={benefitsImages1} />
            </div>
            <div>
              <ul className={s.listContainer}>
                {benefits.items2.map((item, i) => (
                  <li key={i} className={s.items}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ======================================================= */}
        </div>
      </div>
    </section>
  );
}
