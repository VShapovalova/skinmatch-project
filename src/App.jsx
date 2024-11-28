import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './views/Home';
import Login from './views/Login';
import Products from './views/Products';
import Profile from './views/Profile';
import Registration from './views/Registration';
import SkincareSelection from './views/SkincareSelection';
import SkinType from './views/SkinType';

const Container = styled.div`
    padding: 0px;
    background-color: #f6eee4;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 6px;
        background-color: white;
    }

    &::before {
        left: 2%;
        top: 0;
    }

    &::after {
        right: 2%;
        top: 0;
    }
`;

export default function App() {
    return (
        <Router>
            <Container>
                <Header />

                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skincare-selection" element={<SkincareSelection />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/skin-type" element={<SkinType />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/auth" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>

                <Footer />
            </Container>
        </Router>
    );
}
