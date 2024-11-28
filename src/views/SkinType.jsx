import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9fafb;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1d72b8;
`;

function Home() {
    return (
        <Container>
            <Title>Головна сторінка</Title>
            <p>Ласкаво просимо до нашого додатку SkinMatch!</p>
        </Container>
    );
}

export default Home;
