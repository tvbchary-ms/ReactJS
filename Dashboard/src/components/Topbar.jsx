import React from 'react'
import styled from 'styled-components';
import {NotificationsNone, Settings, MailOutlineOutlined} from '@material-ui/icons';


const Container = styled.div `
  width: 100%;
  height: 50px;
  background-color: #fffFff;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding-left: 15px;
  color: darkblue;
  font-family: Teko;
  letter-spacing: 2px;
`;

const Left = styled.div`
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: start;
  
`;

const Right = styled.div` 
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const TopICon = styled.div`
    position: relative;
    margin-right: 10px;
    color: #555;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  color: white;
  position: absolute;
  z-index: 22;
  top: -5px;
  right: -5px;
  background-color: red;
  padding: 1px;
  border-radius: 50%;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Topbar = () => {
  return (
    <Container>        
        <Wrapper>
            <Left>
                <Logo>Dashboard &trade;</Logo>
            </Left>
            <Right>
                <TopICon>
                    <NotificationsNone />
                    <IconBadge>2</IconBadge>
                </TopICon>
                <TopICon>
                    <MailOutlineOutlined />
                    <IconBadge>99</IconBadge>
                </TopICon>
                <TopICon>
                    <Settings />                    
                </TopICon>
                <Avatar src='https://i.pinimg.com/474x/d6/91/6f/d6916fea45b4d856e2ef2d1a6ebdf78b.jpg'/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Topbar