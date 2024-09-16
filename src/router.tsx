import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'

import { History } from './pages/history'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/ignite-timer/" element={<Home />} />
        <Route path="/ignite-timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
