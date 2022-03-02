import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import phone from '../public/phone.svg';

export default function Home() {
  return (
    <Container>
      <Head>
      </Head>  
        <div style={{width: '50%', textAlign: 'center'}}>
        <Image src={phone} alt="whatsuuuup" height={250} width={250} />
        <h2 style={{ color: '#727372' }}>Keep you  phone connected</h2>
        <p style={{ color: '#b7b9bb' }}>
          Whatssup connects you to sync messages. To reduce data usage, connect your phone to WI-FI.
        </p>
        </div>
      </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
    width: 100%;
    height: 100%;
    `;
