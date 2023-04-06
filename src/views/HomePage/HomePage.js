import React from 'react';
import s from './HomePage.module.scss';
import componentsLoad from 'tools/componentsLoad';

export default function HomePage() {
  const { Hero, Benefits, Team, Portfolio, Footer } = componentsLoad;
  return (
    <section className={s.homePage}>
      <Hero />
      <Benefits hash="benefits" />
      <Team hash="team" />
      <Portfolio hash="portfolio" />
      <Footer />
    </section>
  );
}
