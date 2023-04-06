import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageTemp from './views/HomePage/HomePage-temp.js';
import routes from 'routes';
import componentsLoad from 'tools/componentsLoad';

function App() {
  const { HomePage, NotFoundPage } = componentsLoad;
  const { home } = routes;

  useEffect(
    () => {},
    // localStorage.removeItem('language'),
    // localStorage.removeItem('_persist');

    [],
  );

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
