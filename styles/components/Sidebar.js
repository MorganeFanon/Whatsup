import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';






const Sidebar = () => {
    return (
        <Container>
            <Header>
               <UserAvatar src="/turtle.jpg" alt="turtle" />
               <IconsGroup>
                <img
                    src="/print.jpg" 
                    alt="print"
                    width="100"
                    borderRadius="50%"
                     />

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