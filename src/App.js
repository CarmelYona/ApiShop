import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Header } from './cmps/header'

export const App = () => {
  return (
    <section className="App">
      <div className="app-wrapper">
        <Header />
        <Routes>
          {routes.map(route => <Route key={route.path} exact element={<route.component />} path={route.path} />)}
        </Routes>
      </div>
    </section>
  )
}

