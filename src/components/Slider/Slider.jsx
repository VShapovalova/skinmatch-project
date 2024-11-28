import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 20px auto;
`;

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #000;
`;

const StyledSlider = styled.input`
    width: 100%;
    appearance: none;
    height: 12px;
    background: #d0a4c0;
    border-radius: 30px;
    outline: none;
    opacity: 0.8;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    &::-moz-range-thumb {
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
`;

const Slider = ({ labels, value, onChange }) => {
    const handleSliderChange = (event) => {
        onChange(Number(event.target.value)); // Викликаємо функцію зміни стану, передану з пропсів
    };

    return (
        <SliderContainer>
            <LabelContainer>
                {labels.map((label, index) => (
                    <span key={index}>{label}</span>
                ))}
            </LabelContainer>
            <StyledSlider
                type="range"
                min="0"
                max={labels.length - 1}
                value={value} // Отримуємо значення від пропсів
                onChange={handleSliderChange}
            />
        </SliderContainer>
    );
};

Slider.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired, // onChange обов'язковий пропс
};

export default Slider;
