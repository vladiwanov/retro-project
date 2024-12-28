import React from 'react';
import s from './HomePage.module.scss';
import componentsLoad from 'tools/componentsLoad';
import BGParallax from 'components/BGParallax';
import AppBar from 'components/AppBar';

export default function HomePage() {
  const { Hero, Benefits, Team, Portfolio, Footer } = componentsLoad;
  return (
    <div>
      {/* <AppBar /> */}
      <div className={s.parallax}>
        {/* <div className={`${s.bg} ${s.hero}`}></div> */}
        <BGParallax />
        <section className={s.homePage}>
          <Hero />
          <Benefits hash="benefits" />
          <Team hash="team" />
          <Portfolio hash="portfolio" />
          <Footer />
        </section>
      </div>
    </div>
  );
}
