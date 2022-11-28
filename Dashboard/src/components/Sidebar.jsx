import React from 'react'
import styled from 'styled-components';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    HomeOutlined
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";


const Container = styled.div `
  flex: 1;
  background-color: rgb(251,251,255);
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  left:0;
  min-width: 15vw;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(180,180,186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s ease;
  &:hover, &.active{
    background-color: #e9e9fa;
  };
 
`;


const Sidebar = () => {
  return (
    <Container>
        <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List >
           
            <ListItem >
              <HomeOutlined style={{fontSize: "20px !important",
    marginRight: "5px"}} />
              Home
            </ListItem>
       
            <ListItem >
              <Timeline style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Analytics
            </ListItem>
            <ListItem >
              <TrendingUp style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Sales
            </ListItem>
          </List>
        </Menu>
         <Menu >
          <Title >Quick Menu</Title>
          <List >
              <ListItem >
                <PermIdentity style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
                Users
              </ListItem>
              <ListItem >
                <Storefront style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
                Products
              </ListItem>
            <ListItem >
              <AttachMoney style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Transactions
            </ListItem>
            <ListItem >
              <BarChart style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu >
          <Title >Notifications</Title>
          <List >
            <ListItem >
              <MailOutline style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Mail
            </ListItem>
            <ListItem >
              <DynamicFeed style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Feedback
            </ListItem>
            <ListItem >
              <ChatBubbleOutline style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu >
          <Title >Staff</Title>
          <List >
            <ListItem >
              <WorkOutline style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Manage
            </ListItem>
            <ListItem >
              <Timeline style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Analytics
            </ListItem>
            <ListItem >
              <Report style={{fontSize: "20px !important",
    marginRight: "5px"}}/>
              Reports
            </ListItem>
          </List>
        </Menu>
        </Wrapper>
    </Container>
  )
}

export default Sidebar