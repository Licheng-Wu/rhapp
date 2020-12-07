import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TopNavBar from '../../components/Mobile/TopNavBar'
import { getUpdateMockString } from '../../store/home/action'
import { RootState } from '../../store/types'
import NavBar from '../../components/NavBar'
import { Button } from 'antd'
import { useRouteMatch, Link } from 'react-router-dom'
import { PATHS } from '../Routes'

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafaf4;
`

const HomeContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f2f7f7;
  margin: 0 auto;
`

export default function Home() {
  const dispatch = useDispatch()
  const { sampleStateText } = useSelector((state: RootState) => state.home)

  useEffect(() => {
    //do smth @ the start
  }, [dispatch])

  const leftIcon = <button>Hello</button>

  const onButtonClick = () => {
    dispatch(getUpdateMockString())
  }

  return (
    <MainContainer>
      <TopNavBar title={'NavBarTitle'} leftIconComponent={leftIcon} />
      <button onClick={onButtonClick}>{sampleStateText}</button>
      <HomeContainer>
        <Button type="primary" block>
          <Link to={PATHS.SIGNUP_PAGE}>Sign Up </Link>
        </Button>
        <Button type="primary" block>
          <Link to={PATHS.LOGIN_PAGE}>Login </Link>
        </Button>
      </HomeContainer>
    </MainContainer>
  )
}
