import styled from 'styled-components';

import backgroundImg from '../../assets/Background.png';

export const BaseSection = styled.section`
    width: 100%;
    max-width: 1000px;
    padding: 40px;
    background: ${({ hasBackgroundImage }) =>
        hasBackgroundImage ? `url(${backgroundImg}) no-repeat center/cover` : '#f6eee4'};
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    flex-direction: ${({ isFirstSection }) => (isFirstSection ? 'row' : 'column')};
    align-items: center;
    justify-content: ${({ isFirstSection }) => (isFirstSection ? 'space-between' : 'center')};
    position: relative;
`;

export const Content = styled.div`
    flex: 1;
    padding: 20px;
    z-index: 2;
    text-align: ${({ isFirstSection }) => (isFirstSection ? 'left' : 'center')};
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const SectionTitle = styled.h1`
    font-size: 2rem;
    color: #000;
    margin-bottom: 1rem;
    text-align: left;
`;

export const SectionSubtitle = styled.p`
    font-size: 1.2rem;
    color: #000000;
    margin-bottom: 2rem;
    align-items: flex-start;
    text-align: left;
`;

export const TransparentBox = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    width: 100%;
    text-align: center;
    position: relative;
    margin: 20px 0;
`;

export const StepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    padding: 20px 0;
    width: 100%;
    margin-bottom: 20px;
    
    &::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 5%;
        right: 10%;
        height: 2px;
        background-color: #f1a7af;
        z-index: -1;
    }
`;

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    font-size: 1.1rem;
    text-align: center;

    & > div {
        background-color: #f1a7af;
        color: #fff;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
`;

export const StepText = styled.p`
    font-size: 0.9rem;
    max-width: 200px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
`;

export const Line = styled.div`
    position: absolute;
    bottom: 20px;
    left: 35%;
    width: 30%;
    height: 2px;
    background-color: #f1a7af;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

export const BoldText = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`;

export const MainImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
    border: 2px solid white;
`;

export const SmallImage = styled.img`
    width: 150px;
    height: auto;
    border-radius: 10px;
    position: absolute;
    bottom: -20px;
    left: 100px;
    object-fit: cover;
`;

export const OverlayImage = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;
