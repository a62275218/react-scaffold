import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// 非按需加载页面,比如layout
import MainLayout from '@/components/layout/MainLayout'
// 按需加载页面
const Home = lazy(() => import('@/pages/home/Home'))
const Demo = lazy(() => import('@/pages/demo/Demo'))


const Router = () => {
  return <BrowserRouter>
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/demo"></Redirect>
          </Route>
          <Route path="/demo" exact component={Demo}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route render={() => '404'}></Route>
        </Switch>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
}

export default Router
