import React from 'react';
import styled from "styled-components";
import Image from'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import {auth, provider } from '../firebase';
import { signInWithPopup } from '@firebase/auth';

const login = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <Container>
        <Login>
            <Image src="https://i0.wp.com/www.smartparent.in/wp-content/uploads/2018/06/Whatsapp-Icon.png"
            alt="logo"
            height={100}
            width={100}
            />
            <Button style={{ color: 'gray '}} startIcon={<GoogleIcon />}
            onClick={loginWithGoogle}
            >Login with Google</Button>
        </Login>
    </Container>
  )
}

export default login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: rgb(0,150,136);
    width: 100vw;  
    `;
const Login = styled.div`
    padding: 30px;
    display: flex;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
    `;