import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// 非按需加载页面
import Demo from '@/pages/demo/Demo'
const MainLayout = lazy(() => import('@/components/layout/MainLayout'))
// 按需加载页面
const Home = lazy(() => import('@/pages/home/Home'))


const Router = () => {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Demo}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route render={() => '404'}></Route>
        </Switch>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
}

export default Router
