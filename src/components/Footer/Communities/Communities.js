import React from 'react';
import s from './Communities.module.scss';
import sprite from '../../../images/sprite.svg';
import LanguageContent from 'tools/LanguigesContent/LanguigesContent';
// import { FaTelegramPlane } from 'react-icons/fa';
import io from 'tools/io';
import { useEffect } from 'react';

export default function Communities() {
  const { title, facebook, linkedin, twitter, instagram, tiktok, telegram } =
    LanguageContent('communities');
  useEffect(() => {
    io('communities', '-5%', 'contentAnimation');
  }, []);

  return (
    <section className={s.social}>
      <h3 className={s.footerTitle}>{title}</h3>
      {/* <ul className={` list ${s.socialnetworks}`}> */}
      <ul
        className={` ${s.socialnetworks} ${s.animationItems}`}
        id="communities"
      >
        <li>
          <a
            // className={s.contact}
            href={facebook}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-facebook'} />
              {/* <use href="./images/sprite.svg#icon-facebook" /> */}
            </svg>
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank" rel="noreferrer">
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-twitter'} />
            </svg>
          </a>
        </li>
        {/* <li>
          <a
            // className={s.contact}
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-linkedin'} />;
            </svg>
          </a>
        </li> */}
        <li>
          <a
            // className={s.contact}
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-instagram'} />;
            </svg>
          </a>
        </li>
        {/* <li>
          <a href={tiktok} target="_blank" rel="noreferrer">
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-tiktok'} />;
            </svg>
          </a>
        </li>
        <li>
          <a href={telegram} target="_blank" rel="noreferrer">
            <svg className={s.socialIcon}>
              <use href={sprite + '#icon-telegram'} />;
            </svg>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
