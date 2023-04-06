import s from './Team.module.scss';
import { useEffect } from 'react';
import getID from 'tools/getID';
import LanguigesContent from 'tools/LanguigesContent';

export default function Team({ hash }) {
  const team = LanguigesContent('team');

  // --------------IO------------------------
  const cb = entries => {
    // console.log('ENRTIES IN CB::::::', entries);
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // console.log('ENTRY!!!::::🇩🇪::', entry.target);
        entry.target.classList.add(`${s.active}`);
      }
    });
  };

  const options = {
    // root: visualViewport,
    rootMargin: '-10px',
  };

  const observer = new IntersectionObserver(cb, options);

  useEffect(() => {
    const targets = document.querySelectorAll(`.${s.items}`);
    // console.log('TARGET_ARRAY:::::', targets);

    targets.forEach(target => observer.observe(target));
  }, []);

  // ---------------------------------------

  const listMaker = (title, list) => {
    return (
      <>
        <h4 className={`${s.subTitle} ${s.teamSubtitle}`}>{title}</h4>
        <ul className={`${s.list} ${s.directionsList}`}>
          {list.map((item, i) => (
            // <li key={getID()} className={s.items}>
            <li key={i} className={`${s.items} ${s.teamItems}`}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  };
  // --------------------------------RENDER-------------------------
  return (
    // <section className={`${s.section} ${s.team}`}>
    <section className={`${s.section} ${s.team}`} id={hash}>
      <div className={s.container}>
        <h2 className={`${s.title} ${s.teamTitle}`}>{team.teamTitle}</h2>
        <div className={s.teamContent}>
          <div className={s.text}>
            <p className={`${s.items} ${s.teamItems}`}>
              <span className={s.companyName}>{team.companyName}</span>
              {team.part1}
            </p>
            <p className={`${s.items} ${s.teamItems}`}>{team.part2}</p>
            <div className={s.directionsContainer}>
              {/* {listMaker(team.directionsListTitle, team.directionsList)} */}

              <h4 className={`${s.subTitle} ${s.teamSubtitle}`}>
                {team.directionsListTitle}
              </h4>
              <div className={`${s.list} ${s.directionsList}`}>
                {team.directionsList.map((item, i) => (
                  <div key={i} className={` ${s.items} ${s.teamItems}`}>
                    <p>
                      <span className={s.directions}>{item.title}</span>
                      {item.content}
                    </p>
                  </div>
                ))}
                <p className={`${s.items} ${s.teamItems}`}>
                  {team.additionalDirections.comment}
                  <span className={s.directions}>
                    {team.additionalDirections.title}
                  </span>
                </p>
              </div>
            </div>
            <div className={s.directionsContainer}>
              {listMaker(team.specialDirectionsTitle, team.specialDirection)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
