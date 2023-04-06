import s from './Slider.module.scss';
import React, { useState, useEffect, memo, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import changeSlide from './changeSlide';
//======================================

const Slider = ({ images }) => {
  const [slide1, setSlide1] = useState('');
  const [slide2, setSlide2] = useState(images[0]);
  const [status, setStatus] = useState(true);
  const [statusEnterClass /* setStatusEnterClass */] = useState('');
  const timeoutValue = 5000;
  // const onClassChange = () => {
  //   setStatusEnterClass('slide-enter-active');
  // };

  const getCurrentSlides = useCallback(() => {
    const state = {
      slide1,
      slide2,
      status,
      statusEnterClass,
    };
    const rez = changeSlide(state, images);
    setSlide1(rez.slide1);
    setSlide2(rez.slide2);
    setStatus(rez.status);
  }, [slide1, slide2, status, statusEnterClass, images]);

  useEffect(() => {
    getCurrentSlides();
  }, []);

  useEffect(() => {
    if (status === true) {
      return;
    }
    setTimeout(getCurrentSlides, timeoutValue + 10, setStatus(true));
  }, [status, getCurrentSlides]);

  return (
    // <div className={s.backdrop}>
    <div className={s.slider}>
      <ul>
        <CSSTransition
          in={!status}
          classNames={s}
          timeout={timeoutValue}
          unmountOnExit
        >
          <li className={s.imageItem}>
            <img className={s.img} src={slide1} alt="datatransfer" />
          </li>
        </CSSTransition>
        <CSSTransition
          in={status}
          classNames={s}
          timeout={timeoutValue}
          unmountOnExit
        >
          <li className={s.imageItem}>
            <img className={s.img} src={slide2} alt="datatransfer" />
          </li>
        </CSSTransition>
      </ul>
    </div>
    // </div>
  );
};

export default memo(Slider);
