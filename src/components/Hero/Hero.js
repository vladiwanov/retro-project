import s from './hero-styles/Hero.module.scss';
import React from 'react';
import logo from '../../images/RPLogoWM.png';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import LanguagesContent from 'tools/LanguigesContent/LanguigesContent';
import Navigation from 'components/Navigation/Navigation';
import AppBar from 'components/AppBar';

export default function Hero() {
  const hero = LanguagesContent('hero');
  return (
    <section className={`${s.section} ${s.hero}`}>
      {/* <LanguageButton /> */}
      <div className={s.heroTextSection}>
        <AppBar />
        {/* <Navigation /> */}
        <blockquote className={s.statement}>
          <q className={s.heroSubtitle}>{hero.subtitle}</q>
          <cite className={s.comment}>{hero.comment}</cite>
        </blockquote>
        <div className={s.logo}>
          <img src={logo} alt="retro project logo" className={s.logoImg} />
        </div>
        <h1 className={` ${s.heroTitle}`}>{hero.title}</h1>
        {/* <b className={s.heroSubtitle}>{hero.text}</b> */}
      </div>
    </section>
  );
}
