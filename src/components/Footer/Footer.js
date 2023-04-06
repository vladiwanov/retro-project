import s from './Footer.module.scss';
import React from 'react';
import Contacts from './Contacts';
import Communities from './Communities';

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* <div className={s.contacts}> */}
      <Contacts />
      <Communities />
      {/* </div> */}
    </footer>
  );
}
