import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #959bcd;
  color: white;
  text-align: center;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px; 
        left: 0;
        width: 100%;
        height: 6px;
        background-color: white;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <p>© 2024 SkinMatch. Всі права захищені.</p>
        </FooterContainer>
    );
}

export default Footer;
