import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
    background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 40px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #7b2cbf;
    margin-bottom: 30px;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`;

const Icon = styled.span`
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #7b2cbf;
    font-size: 1.2rem;
`;

const Input = styled.input`
    width: 85%;
    padding: 12px 15px 12px 40px;
    border: none;
    border-radius: 30px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    color: #333;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    &:focus {
        box-shadow: 0 4px 15px rgba(123, 44, 191, 0.2);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background-color: #7b2cbf;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #5a189a;
    }
`;

const LoginText = styled(Link)`
    font-size: 0.75rem;
    color: #000000;
    margin-top: 5px;
    text-align: center;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #f1a7af;
    }
`;

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Вхід успішний');
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Помилка при вході в систему.');
        }
    };

    return (
        <Background>
            <FormContainer>
                <Title>Вхід</Title>

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <InputWrapper>
                    <Icon><FaUser /></Icon>
                    <Input
                        type="text"
                        placeholder="Нікнейм"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Icon><FaLock /></Icon>
                    <Input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </InputWrapper>

                <Button onClick={handleSubmit}>Увійти</Button>

                <LoginText to="/auth">Не маєте акаунту? Зареєструватись</LoginText>
            </FormContainer>
        </Background>
    );
}

export default Login;
