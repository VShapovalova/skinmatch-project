import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImg from '../assets/Background.png';
import Button from '../components/Button/Button';

const Container = styled.div`
    padding: 30px;
    max-width: 800px;
    margin: 40px auto;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    z-index: 2;
`;

const BackgroundWrapper = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 20px;
    text-align: center;
`;

const InfoBlock = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
`;

const Label = styled.p`
    font-size: 1.1rem;
    margin: 10px 0;
    color: #555;
    strong {
        color: #000;
    }
`;

const CenteredButton = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
`;

const ProductCard = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const ProductContent = styled.div`
    padding: 15px;
`;

const ProductName = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #1a73e8;
`;

const ProductDescription = styled.p`
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 10px;
`;

const ProductPrice = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #000;
`;

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedSkinType, selectedAge, selectedFeatures, selectedAllergens, selectedBudget } = location.state || {};

    const handleGoToTest = () => {
        navigate('/skincare-selection');
    };

    // Дані для продуктів
    const recommendedProducts = [
        {
            name: 'La Roche-Posay Effaclar',
            description: 'Гель-крем для корекції недоліків проблемної шкіри.',
            price: 'від 386 до 685 грн',
            image: 'https://example.com/effaclar.jpg',
        },
        {
            name: 'CeraVe Hydrating Cleanser',
            description: 'Зволожуючий гель для вмивання для нормальної та сухої шкіри.',
            price: '340 грн',
            image: 'https://example.com/cerave.jpg',
        },
        {
            name: 'Bioderma Photoderm SPF 50+',
            description: 'Сонцезахисний крем для всіх типів шкіри.',
            price: '450 грн',
            image: 'https://example.com/bioderma.jpg',
        },
    ];

    return (
        <BackgroundWrapper>
            <Container>
                <Title>Продукти</Title>
                {selectedSkinType ? (
                    <>
                        <InfoBlock>
                            <Label>Ваш тип шкіри: <strong>{selectedSkinType}</strong></Label>
                            <Label>Вік: <strong>{selectedAge}</strong></Label>
                            <Label>Особливості шкіри: <strong>{selectedFeatures || 'Нічого з перерахованого'}</strong></Label>
                            <Label>Алергії: <strong>{selectedAllergens || 'Відсутні'}</strong></Label>
                            <Label>Бюджет: <strong>{selectedBudget} грн</strong></Label>
                        </InfoBlock>

                        <Title>Рекомендовані продукти</Title>
                        <ProductsGrid>
                            {recommendedProducts.map((product, index) => (
                                <ProductCard key={index}>
                                    <ProductImage src={product.image} alt={product.name} />
                                    <ProductContent>
                                        <ProductName>{product.name}</ProductName>
                                        <ProductDescription>{product.description}</ProductDescription>
                                        <ProductPrice>{product.price}</ProductPrice>
                                    </ProductContent>
                                </ProductCard>
                            ))}
                        </ProductsGrid>
                    </>
                ) : (
                    <CenteredButton>
                        <p>Ви ще не пройшли тестування!</p>
                        <Button onClick={handleGoToTest}>Пройти тестування</Button>
                    </CenteredButton>
                )}
            </Container>
        </BackgroundWrapper>
    );
};

export default Products;
