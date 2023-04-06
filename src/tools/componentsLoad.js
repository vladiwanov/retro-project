import { lazy } from 'react';

const componentsLoad = {
  HomePage: lazy(
    () => import('views/HomePage') /* webpackChunkName:"HomePage" */,
  ),

  NotFoundPage: lazy(
    () =>
      import(
        'views/NotFoundPage/NotFoundPage'
      ) /* webpackChunkName:"NotFoundPage" */,
  ),

  // ======================================================
  Hero: lazy(() => import('components/Hero') /* webpackChunkName:"Hero" */),
  Navigation: lazy(
    () => import('components/Navigation') /* webpackChunkName:"Navigation" */,
  ),

  Benefits: lazy(
    () => import('components/Benefits') /* webpackChunkName:"Benefits" */,
  ),

  Team: lazy(() => import('components/Team') /* webpackChunkName:"Team" */),
  Portfolio: lazy(
    () => import('components/Portfolio') /* webpackChunkName:"Portfolio" */,
  ),

  Footer: lazy(
    () => import('components/Footer') /* webpackChunkName:"Footer" */,
  ),
};

export default componentsLoad;
