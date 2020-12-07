import React from 'react'
import styled from 'styled-components'
import SignUpCard from '../../../components/SignUpCard'

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f2f7f7;
`

export default class Signup extends React.Component {
  render() {
    return (
      <>
        <SignUpCard />
      </>
    )
  }
}
