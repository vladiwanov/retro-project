import LanguagesContent from 'tools/LanguigesContent/LanguigesContent';
import s from './porfolio-styles/Portfolio.module.scss';
// import portfolioContent from './portfolioContent';
// import getID from 'tools/getID';
import { useCallback, useState } from 'react';
import Modal from 'components/Modal';
import io from 'tools/io';
import { useEffect } from 'react';

export default function Portfolio({ hash }) {
  const [showModal, setShowModal] = useState(false);
  const [currentObject, setCurrentObject] = useState({});
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const portfolio = LanguagesContent('portfolio');
  const { portfolioContent } = portfolio;

  const functionCombiner = i => {
    setShowModal(!showModal);
    const I = i;
    setCurrentObject(portfolioContent[I]);
  };

  useEffect(() => {
    io('contentItems', '-5%', 'portfolioAnimation');
  }, []);

  return (
    <section className={`${s.section} ${s.portfolio}`} id={hash}>
      <h3 className={`${s.title} ${s.animationTitle}`} id="contentItems">
        {portfolio.title}
      </h3>
      <div className={s.portfolioContent}>
        <ul className={s.portfolioList}>
          {portfolioContent.map(({ title, img, id, alt }, i) => (
            <li
              key={id}
              className={`${s.portfolioItem} ${s.animationItems}`}
              // onClick={() => setShowModal(!showModal)}
              onClick={() => functionCombiner(i)}
              id="contentItems"
            >
              <div className={s.portfolioItemContent}>
                <img src={img} alt={alt} className={s.portfolioImage} />
                <h3 className={s.portfolioSubtitle}>{title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <Modal onToggle={toggleModal}>
          <div className={s.modalContent}>
            <h3 className={s.modalSubtitle}>{currentObject.title}</h3>
            <img
              src={currentObject.img}
              alt={currentObject.alt}
              className={s.modalPortfolioImage}
            />
          </div>
        </Modal>
      )}
    </section>
  );
}
