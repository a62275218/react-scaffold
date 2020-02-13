import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const MainLayout = lazy(() => import('@/components/layout/MainLayout'))
const Home = lazy(() => import('@/pages/home/Home'))

const Router = () => {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route render={() => '404'}></Route>
        </Switch>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
}

export default Router
