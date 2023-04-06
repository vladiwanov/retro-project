import React from 'react';
import s from './Contacts.module.scss';
import sprite from '../../../images/sprite.svg';
import LanguageContent from 'tools/LanguigesContent/LanguigesContent';
import io from 'tools/io';
import { useEffect } from 'react';
export default function Contacts() {
  const { title, email, adr, telCEO, telGAP } = LanguageContent('contactUs');
  useEffect(() => {
    io('contacts', '-5%', 'contentAnimation');
  }, []);
  return (
    <section className={s.contacts}>
      <h3 className={`${s.footerTitle} ${s.contactsTitle}`}> {title} </h3>
      <div
        className={`${s.contactsContainer} ${s.animationItems}`}
        // className={s.contactsContainer}
        id="contacts"
      >
        <address className={s.contact}>{adr}</address>

        <a className={s.contact} href={`mailto:${email}`}>
          <div className={s.emailPack}>
            <svg className={s.emailIcon}>
              <use href={sprite + '#email'} />
            </svg>
            <span>{email}</span>
          </div>
        </a>
        <p className={s.contact}>
          {telCEO.title}:{telCEO.tel}
        </p>
        <p className={s.contact}>{telGAP}</p>
      </div>
    </section>
  );
}
