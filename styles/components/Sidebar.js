import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import ReactRoundedImage from 'react-rounded-image';
import ChatIcon from '@mui/icons-material/Chat';
import CustomVerticalMore from './CustomVerticalMore';
import HistoryIcon from '@mui/icons-material/History';







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