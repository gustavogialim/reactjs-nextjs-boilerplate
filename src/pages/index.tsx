import React from 'react';
import Head from 'next/head';

import { Container } from 'src/styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>HomePage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>ReactJS + Next.js Boilerplate</h1>
    <p>A ReactJS + Next.js structure made by Gustavo Gialim</p>
  </Container>
);

export default Home;
