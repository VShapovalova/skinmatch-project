import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/Logo_SkinMatch.png';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #959bcd;
    padding: 2px 20px;
    position: relative;
    z-index: 1;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: white;
        top: 0;
        left: 0;
        right: 0;
    }

    &::before {
        top: 100%;
    }

    &::after {
        bottom: 30%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 40px;
        margin-right: 10px;
    }

    p {
        font-size: 0.7rem;
        color: #d3d3d3;
        margin: 0;
    }
`;

const NavButtons = styled.nav`
    display: flex;
    gap: 1.5rem;
    margin-top: 25px;
    margin-bottom: 10px;
`;

const Button = styled(Link)`
    font: inherit;
    font-size: 1rem;
    background: none;
    color: ${({ active }) => (active ? '#f1a7af' : '#ffffff')};
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #f1a7af;
        text-shadow: 0 0 20px #fff;
    }

    &.register {
        background-color: #f1a7af;
        color: #273133;
        border-radius: 4px;
        padding: 0.5rem 1rem;
    }
`;

const RegisterButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const RegisterButton = styled(Button)`
    background-color: #f1a7af;
    color: black;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    font-weight: bold;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #e1959d;
        color: #ffffff;
    }
`;

const LoginText = styled(Link)`
    font-size: 0.75rem;
    color: #ffffff;
    margin-top: 5px;
    text-align: center;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #f1a7af;
    }
`;
const LogoutButton = styled.button`
    font: inherit;
    font-size: 1rem;
    background: none;
    color: ${({ active }) => (active ? '#f1a7af' : '#ffffff')};
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: none;
    transition: color 0.3s;
  &:hover {
      color: #f1a7af;
      text-shadow: 0 0 20px #fff;
  }
`;

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logo} alt="SkinMatch Logo" />
            </LogoContainer>

            <NavButtons>
                <Button to="/" active={location.pathname === "/"}>
                    Головна
                </Button>
                {isLoggedIn && (
                    <>
                        <Button to="/skincare-selection" active={location.pathname === "/skincare-selection"}>
                            Підбір догляду
                        </Button>
                        <Button to="/products" active={location.pathname === "/products"}>
                            Продукти
                        </Button>
                        <Button to="/skin-type" active={location.pathname === "/skin-type"}>
                            Тип шкіри
                        </Button>
                        <Button to="/profile" active={location.pathname === "/profile"}>
                            Профіль
                        </Button>
                    </>
                )}
                {isLoggedIn === null ? (
                    <RegisterButtonContainer>
                        <RegisterButton to="/auth" active={location.pathname === "/auth"}>
                            Зареєструватись
                        </RegisterButton>
                        <LoginText to={"/login"}>Є акаунт? Увійти</LoginText>
                    </RegisterButtonContainer>
                ) : (
                    <LogoutButton onClick={handleLogout}>Вийти</LogoutButton>
                )}
            </NavButtons>
        </HeaderContainer>
    );
}

export default Header;
