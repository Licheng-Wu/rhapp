import React from 'react'
import styled from 'styled-components'

import NavBar from '../../../components/NavBar'
import SignInCard from '../../../components/SignInCard'

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f2f7f7;
`

export default class Login extends React.Component {
  render() {
    return (
      <>
        <NavBar text="Sign in" />
        <SignInCard />
      </>
    )
  }
}
