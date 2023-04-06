import s from './Navigation.module.scss';
import LanguagesContent from 'tools/LanguigesContent/LanguigesContent';

export default function Navigation() {
  const navigation = LanguagesContent('navigation');
  // const functionCombiner = () => {
  //   return;
  // };

  return (
    <section className={s.navigation}>
      <ul className={s.navigationList}>
        {navigation.map((item, i) => (
          <li key={i} className={s.navigationItem}>
            <a className={s.link} href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
