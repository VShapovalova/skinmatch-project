import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 800px;
    margin: 20px auto;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Circle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? '#d0a4c0' : 'transparent')};
    border: 2px solid #d0a4c0;
    margin-right: 10px;
    transition: background-color 0.3s ease;
`;

const OptionText = styled.span`
    color: ${({ selected }) => (selected ? '#000' : '#d0a4c0')};
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const SkinConditions = ({ selectedFeatures, setSelectedFeatures }) => {
    const options = [
        'Розацеа',
        'Акне',
        'Екзема',
        'Купероз',
        'Постакне',
        'Гіперпігментація',
        'Зневоднення',
        'Нічого з перерахованого',
    ];

    const handleSelect = (condition) => {
        if (condition === 'Нічого з перерахованого') {
            setSelectedFeatures(['Нічого з перерахованого']);
        } else {
            if (selectedFeatures.includes('Нічого з перерахованого')) {
                setSelectedFeatures([condition]);
            } else {
                setSelectedFeatures((previousConditions) =>
                    previousConditions.includes(condition)
                        ? previousConditions.filter((item) => item !== condition)
                        : [...previousConditions, condition],
                );
            }
        }
    };

    return (
        <Container>
            {options.map((option) => (
                <Option key={option} onClick={() => handleSelect(option)}>
                    <Circle selected={selectedFeatures.includes(option)} />
                    <OptionText selected={selectedFeatures.includes(option)}>{option}</OptionText>
                </Option>
            ))}
        </Container>
    );
};

SkinConditions.propTypes = {
    selectedFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedFeatures: PropTypes.func.isRequired,
};

export default SkinConditions;
