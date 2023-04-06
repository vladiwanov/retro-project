import React from 'react';
import s from './NotFoundPage.module.scss';
// import { useSelector } from 'react-redux';
// import { getSavedPrevPath } from 'redux/conte/nt/content-selectors';
// import routes from 'routes';

export default function NotFoundPage() {
  // const savedPath = useSelector(getSavedPrevPath);
  // const routesAray = Object.values(routes);
  return (
    <div className={s.notFound}>
      {/* <h2 className={`${s.heads} ${s.headsNotFound}`}> 404 Page not Found </h2> */}
      <h2 className={`${s.headsNotFound}`}> 404 Page not Found </h2>
    </div>
  );
}
