import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './LanguageButton.module.scss';
import { action } from 'redux/language';
import { getLanguageMemoised } from 'redux/language';
const { languageAction } = action;

export default function LanguageButton() {
  const dispatch = useDispatch();
  const onSetCurrentLanguage = useCallback(
    e => dispatch(languageAction(e.target.outerText)),
    [dispatch],
  );

  const language = useSelector(getLanguageMemoised);

  return (
    <>
      <div className={s.lang}>
        <button
          type="button"
          className={s.selectButton}
          onClick={onSetCurrentLanguage}
        >
          {language === 'EN' ? 'UA' : 'EN'}
        </button>
      </div>
    </>
  );
}
