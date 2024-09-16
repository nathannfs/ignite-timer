import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'

import logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="/ignite-timer/" end title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/ignite-timer/history" end title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
