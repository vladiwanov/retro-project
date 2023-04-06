import React, { useCallback, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from './HomePage.module.scss';
import logo from '../../images/RPLogoWM.png';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Benefits from 'components/Benefits';
import Team from 'components/Team';
import Portfolio from 'components/Portfolio';
import Navigation from 'components/Navigation';
import getID from 'tools/getID';
import { Outlet } from 'react-router-dom';
import LanguagesContent from 'tools/LanguigesContent/LanguigesContent';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import Slider from 'components/Slider';
import portfolioContent from 'components/Portfolio/portfolioContent';
import {
  benefitsImages1,
  benefitsImages2,
} from 'db/sliderImagesList/sliderBenefitsImages ';
import Modal from 'components/Modal';

export default function HomePage() {
  const hero = LanguagesContent('hero');
  const benefits = LanguagesContent('benefits');
  const team = LanguagesContent('team');
  const portfolio = LanguagesContent('portfolio');
  const navigation = LanguagesContent('navigation');

  const [showModal, setShowModal] = useState(false);
  const [currentObject, setCurrentObject] = useState({});
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const functionCombiner = i => {
    setShowModal(!showModal);
    const I = i;
    setCurrentObject(portfolioContent[I]);
  };

  return (
    <div className={s.homePage}>
      <section className={`${s.section} ${s.hero}`}>
        <LanguageButton />
        <div className={s.heroTextSection}>
          <section className={s.navigation}>
            <ul className={s.navigationList}>
              <li key={getID()} className={s.navigationItem}>
                <a className={s.link} href="#benefits">
                  A-HREF-I
                </a>
                <br />
                <NavLink
                  className={s.link}
                  activeClassName={s.activeLink}
                  // onClick={() => functionCombiner()}
                  to={{
                    pathname: '/',
                    search: '?',
                    hash: '#benefits',
                  }}
                >
                  Чому все ми ????
                </NavLink>
              </li>
              <li key={getID()} className={s.navigationItem}>
                <a className={s.link} href="#team">
                  A-HREF-II
                </a>
                <br />
                <NavLink
                  className={s.link}
                  // onClick={() => functionCombiner()}
                  to={{
                    pathname: '/',
                    search: '',
                    hash: '#team',
                  }}
                >
                  Про нас кажуть таке..
                </NavLink>
              </li>

              <li key={getID()} className={s.navigationItem}>
                <a className={s.link} href="#portfolio">
                  A-HREF-III
                </a>
                <br />
                <NavLink
                  className={s.link}
                  // onClick={() => functionCombiner()}
                  to={{
                    pathname: '/',
                    search: '',
                    hash: '#portfolio',
                  }}
                >
                  Що ми наробили !!!!!!!!!!!!!!!!!!!
                </NavLink>
              </li>
            </ul>
          </section>
          <b className={s.heroSubtitle}>{hero.subtitle}</b>
          <div className={s.logo}>
            <img src={logo} alt="retro project logo" className={s.logoImg} />
          </div>
          <h1 className={` ${s.heroTitle}`}>{hero.title}</h1>
          <b className={s.heroSubtitle}>{hero.text}</b>
        </div>
      </section>
      {/* --------------------BENEFITS--------------------------- */}
      <section className={`${s.section} ${s.benefits}`} id="benefits">
        {/* <section className={`${s.section} ${s.benefits}`} hash="benefits"> */}
        <div className={`${s.container}`}>
          <h2 className={s.title}>{benefits.benefitsTitle}</h2>
          <b className={s.benefitsSubtitle}>{benefits.benefits}</b>
          <div className={s.contentContainer}>
            <div className={s.itemContainer}>
              <div className={s.textContainer}>
                <h4 className={s.titles}>{benefits.title}</h4>
                <ul className={s.listContainer}>
                  {/* {benefits.text.map(item => (
                    <li key={getID()} className={s.items}>
                      {item}
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
            <div className={s.itemContainer}>
              <div className={s.textContainer}>
                <h4 className={s.titles}>{benefits.subtitle1}</h4>
                <ul className={s.listContainer}>
                  {/* {benefits.items1.map(item => (
                    <li key={getID()} className={s.items}>
                      {item}
                    </li>
                  ))} */}
                </ul>
              </div>
              <div className={s.imgContainer}>
                <Slider images={benefitsImages2} />
              </div>
            </div>
            <div className={s.itemContainer}>
              <div className={s.imgContainer}>
                <Slider images={benefitsImages1} />
              </div>
              <div className={s.textContainer}>
                <h4 className={s.titles}>{benefits.subtitle2}</h4>
                <ul className={s.listContainer}>
                  {/* {benefits.items2.map(item => (
                    <li key={getID()} className={s.items}>
                      {item}
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------TEAM--------------------------- */}
      <section className={`${s.section} ${s.team}`} id="team">
        <div className={s.container}>
          <h2 className="title">{team.teamTitle}</h2>
          <div className={s.teamContent}>
            <div className={s.text}>
              <p className={s.items}>{team.part1}</p>

              <p className={s.items}>{team.part2}</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------PORTFOLIO--------------------------- */}
      <section className={`${s.section} ${s.portfolio}`} id="portfolio">
        <h3 className={s.title}>{portfolio.title}</h3>
        <div className={s.portfolioContent}>
          <ul className={s.portfolioList}>
            {/* {portfolioContent.map(({ title, img, id, alt }, i) => (
              <li
                key={id}
                className={s.portfolioItem}
                // onClick={() => setShowModal(!showModal)}
                onClick={() => functionCombiner(i)}
              >
                <div className={s.portfolioItemContent}>
                  <h3 className={s.portfolioSubtitle}>{title}</h3>
                  <img src={img} alt={alt} className={s.portfolioImage} />
                </div>
              </li>
            ))} */}
          </ul>
        </div>
      </section>
      <Footer />
      <Outlet />
    </div>
  );
}

//  {/* <a className={s.link} href="#portfolio">
//                   Що ми наробили !!!!
//                 </a> */}
