import React from 'react';
import styled from 'styled-components';
import ChatContent from '../../styles/components/ChatContent.js'


const ChatBox = () => {
  return (
    <Container>

    <ChatContent />

    </Container>

  )
}

export default ChatBox

const Container = styled.div`

display: flex;
background-color: #f8fafc;
width: 100%;
`;
