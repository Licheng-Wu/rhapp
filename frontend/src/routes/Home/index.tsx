import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import { Button } from 'antd'
import { useRouteMatch, Link } from 'react-router-dom'
import { PATHS } from '../Routes'

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f2f7f7;
`

const HomeContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f2f7f7;
  margin: 0 auto;
`

export default class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar text={'Website'} />
        <MainContainer>Hello Boy</MainContainer>
        <HomeContainer>
          <Button type="primary" block>
            <Link to={PATHS.SIGNUP_PAGE}>Sign Up </Link>
          </Button>
          <Button type="primary" block>
            <Link to={PATHS.LOGIN_PAGE}>Login </Link>
          </Button>
        </HomeContainer>
      </>
    )
  }
}
