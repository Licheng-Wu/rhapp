import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import TopNavBar from '../../components/Mobile/TopNavBar'
import { getUpdateMockString } from '../../store/home/action'
import { RootState } from '../../store/types'
import DropDownBar from '../../components/DropdownBar'
import { FacilityBooking } from '../../components/LaundryCards/template'
import Selector from '../../components/Selector'

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafaf4;
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

  const Reddropdownbar = styled(DropDownBar)`
    .ant-btn {
      background.background-color: red;
    }
  `
  return (
    <MainContainer>
      <Reddropdownbar MenuTitle={'Choose your level'} MenuArray={['Level 1', 'Level 2', 'Level 3']} />
      <Reddropdownbar MenuTitle={'Choose your block'} MenuArray={['Blk 2', 'Blk 3', 'Blk 4']} />
      <Selector SelectedValue={'Choose your block'} ValueArray={['1', '2', '3', '4']} />
      <TopNavBar title={'NavBarTitle'} leftIconComponent={leftIcon} />
      <button onClick={onButtonClick}>{sampleStateText}</button>
      <FacilityBooking title={'In Use'} subtitle={'123'} colour={'red'} />
    </MainContainer>
  )
}
