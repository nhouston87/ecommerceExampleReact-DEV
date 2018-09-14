import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {colors, fonts, brand} from './theme'

const Nav = styled.nav`
  &.navbar {
    background-color: ${colors.sub_dark};
  }
`
const Brand = styled(Link)`
  color: ${colors.main};
  font-weight: bold;
  font-size: ${fonts.size.nav_brand};

  &:hover {
    color: ${colors.main};
  }
`
const StyledLink = styled(Link)`
  color: ${colors.sub_light};
  font-size: ${fonts.size.nav_item};

  &:hover {
    color: ${colors.sub_light};
    text-decoration: underline;
  }
`

export default () => {
  return (
    <Nav className="navbar navbar-expand-lg fixed-top">
      <Brand className="navbar-brand" to="">{brand.company_name}</Brand>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <StyledLink className="nav-link" to="">Home <span className="sr-only">(current)</span></StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink className="nav-link" to="">Link</StyledLink>
          </li>
          <li className="nav-item dropdown">
            <StyledLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </StyledLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <StyledLink className="dropdown-item" to="">Action</StyledLink>
              <StyledLink className="dropdown-item" to="">Another action</StyledLink>
              <div className="dropdown-divider"></div>
              <StyledLink className="dropdown-item" to="">Something else here</StyledLink>
            </div>
          </li>
          <li className="nav-item">
            <StyledLink className="nav-link disabled" to="">Disabled</StyledLink>
          </li>
        </ul>
      </div>
    </Nav>
  )
}