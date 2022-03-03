import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';

function ChatContent() {
  return (
    <Container>
        <Header>
           <Avatar /> 
           <HeaderInfo>
               <h3>Rita</h3>
               <div>Last Active: 3 hours ago </div>
           </HeaderInfo>
        </Header>

    </Container>

 )
}

export default ChatContent

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `;

const Header = styled.div`
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    `;

    const HeaderInfo = styled.div`
        margin-left: 15px;

        >h3{
            margin-bottom: 3px;
        }

        >div{
            font-size: 14px;
            color: gray;
        }
    `;

