import LanguageButton from 'components/LanguageButton';
import Navigation from 'components/Navigation';
import s from './AppBar.module.scss';

export default function AppBar() {
  return (
    <section className={s.appbar}>
      <Navigation />
      <LanguageButton />
    </section>
  );
}
