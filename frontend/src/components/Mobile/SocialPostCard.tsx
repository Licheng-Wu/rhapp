import React, { useState } from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import { Avatar, Menu } from 'antd'
import { EllipsisOutlined, EditFilled, DeleteFilled } from '@ant-design/icons'
import ConfirmationModal from './ConfirmationModal'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../routes/Routes'

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 3vh;
  margin: 0 auto 10px;
  background-color: white;
  padding: 15px 20px;
  transition-duration: 0.25s;
`
const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`
const MenuContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 10px;
`
const StyledMenuContainer = styled(Menu)`
  position: absolute;
  right: 2px;
  top: 20px;
  font-family: Inter;
  z-index: 3;
  border-radius: 5px;
`

const ImageContainer = styled.div`
  width: 25%;
  margin: auto 0;
  position: relative;
`
const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  top: -3px;
  left: -3px;
  position: relative;
  z-index: 2;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

const StyledImgShadow = styled.div`
  background-color: #c4c4c4;
  aspect-ratio: 1;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`
const StyledImgShadowTwo = styled.div`
  background-color: #c4c4c4;
  aspect-ratio: 1;
  position: absolute;
  top: 3px;
  bottom: -3px;
  left: 3px;
  right: -3px;
`

const TitleText = styled.text`
  color: black;
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TimeDateText = styled.text`
  color: grey;
  font-family: Inter;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DescriptionText = styled.text`
  color: black;
  font-family: Inter;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const SeeMoreText = styled.text`
  color: grey;
  font-family: Inter;
  font-size: 14px;
`

type Props = {
  avatar?: string
  title: string
  dateTime: string
  description: string
}

function SocialPostCard(props: Props) {
  const history = useHistory()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)

  const DummyPicture = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  const DummyName = 'Zhou Gou Gou'
  const DummyPostPicture = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

  const getInitials = (name: string) => {
    const names = name.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials
  }

  const onExpandClick = () => {
    history.push(PATHS.HOME_PAGE)
    console.log('Link to expanded version of post!')
  }

  const onMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
    console.log(menuIsOpen)
  }

  const onDeleteClick = () => {
    setMenuIsOpen(false)
    setDeleteConfirmation(!deleteConfirmation)
    console.log(deleteConfirmation)
  }

  const onConfirmDeleteClick = () => {
    // To remove post!
    setMenuIsOpen(false)
    setDeleteConfirmation(!deleteConfirmation)
  }

  return (
    <>
      <CardContainer>
        <div>
          <Avatar
            size={{ xs: 40, sm: 64, md: 80, lg: 100, xl: 100, xxl: 100 }}
            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            src={DummyPicture}
          >
            {getInitials(DummyName)}
          </Avatar>
        </div>
        <CenterContainer onClick={onExpandClick}>
          <TextContainer>
            <TitleText>{props.title}</TitleText>
            <TimeDateText>{props.dateTime}</TimeDateText>
            <Truncate
              lines={1}
              ellipsis={
                <>
                  <br />
                  <SeeMoreText>...see more</SeeMoreText>
                </>
              }
            >
              <DescriptionText>{props.description}</DescriptionText>
            </Truncate>
          </TextContainer>
          <ImageContainer>
            <StyledImg src={DummyPostPicture} />
            <StyledImgShadow />
            <StyledImgShadowTwo />
          </ImageContainer>
        </CenterContainer>

        <MenuContainer>
          <div onClick={onMenuClick}>
            <EllipsisOutlined rotate={90} style={{ fontSize: '16px' }} />
          </div>
          {menuIsOpen && (
            <StyledMenuContainer style={{ boxShadow: '2px 2px lightgrey' }}>
              <Menu.Item key="1" icon={<EditFilled />} onClick={onMenuClick}>
                Edit
              </Menu.Item>
              <Menu.Item key="2" icon={<DeleteFilled />} onClick={onDeleteClick}>
                Delete
              </Menu.Item>
            </StyledMenuContainer>
          )}
        </MenuContainer>
        {deleteConfirmation && (
          <ConfirmationModal
            title={'Delete Post?'}
            hasLeftButton={true}
            leftButtonText={'Delete'}
            onLeftButtonClick={onConfirmDeleteClick}
            rightButtonText={'Cancel'}
            onRightButtonClick={onDeleteClick}
          />
        )}
      </CardContainer>
    </>
  )
}

export default SocialPostCard
