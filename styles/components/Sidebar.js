import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import ReactRoundedImage from 'react-rounded-image';
import ChatIcon from '@mui/icons-material/Chat';
import CustomVerticalMore from './CustomVerticalMore';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import NotificationsOffRoundedIcon from '@mui/icons-material/NotificationsOffRounded';
import chats from '../data/chats.json';
import Chat from './Chat.js';






const Sidebar = () => {
    return (
        <Container>
            <Header>
               <UserAvatar 
                        src="/turtle.jpg" 
                        alt="turtle" 
                        />
               <IconsGroup>
                   <IconButton>
                   <HistoryIcon />
                         {/* <ReactRoundedImage 
                          image="/print.jpg" 
                          imageWidth="80"
                          imageHeight="80"
                          roundedSize="9"
                          hoverColor="#DD1144"
                          />  */}
                    </IconButton>
 
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <CustomVerticalMore />
                    </IconButton>
               </IconsGroup>
            </Header>
            <Notification>
                <NotificationAvatar>
                    <NotificationsOffRoundedIcon  style={{ color: '#9DE1FE'}} /> 
                </NotificationAvatar>
                <NotificationText>
                    <div>Get Notified of New Messages</div>
                    <div style={{ display:'flex', alignItems: 'center' }}>

                    </div>
                    <a href="#"><u>Turn on desktop Notifications</u></a>
                    <IconButton><ArrowForwardIosRoundedIcon style={{width: 15, height: 15}} /></IconButton>      
                </NotificationText>
            </Notification>
            <SearchChat>
                <SearchBar>
                    <SearchIcon />
                    <SearchInput />
                </SearchBar>
            </SearchChat>
            {Chat.map(chat => (<Chat 
            latestMessage ={chat.latestMessage}
            name={chat.name}
            timestamp={chat.timestamp}
            photoURL={chat.photoURL}
            />))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
background-color: #FFFFFF;
min-width: 320px;
max-width: 450px;
height: 100%;
`;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color: white;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
width: 100%;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.8;
    }
`;

const IconsGroup = styled.div``
const SearchChat = styled.div`
background-color: #bd3e3ec5;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding: 20px;
`

const SearchBar = styled.div`
    display: flex;
    padding: 5px;
    border-radius: 10px;
    border-bottom: 1px solid #ededed;
    background: white;
    `;

    const SearchInput = styled.input `
    width: 100%;
    border: none;
    `;

    const Notification = styled.div`
    display: flex;
    justify-content: sapce-around;
          align-items: center;
          padding: 10px;
          background-color: #381313a9;
    `
    const NotificationAvatar = styled(Avatar)`
        background-color: white;
    ` 

    const NotificationText = styled.div`
         display: flex;
         flex-direction: column;
    ` 
