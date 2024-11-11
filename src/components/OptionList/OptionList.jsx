import PropTypes from 'prop-types';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

const Question = styled.div`
    margin: 20px 0;
    width: 100%;
`;

const OptionListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #d0a4c0;
    padding: 10px 20px;
    border-radius: 30px;
    max-width: 800px;
    margin: 0 auto;
    height: fit-content;
`;

const Circle = styled.div`
    width: 55px;
    height: 55px;
    background-color: ${({ selected }) => (selected ? '#fff' : 'transparent')};
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #fff;
    }
`;

const OptionText = styled.div`
    font-size: 1rem;
    color: ${({ selected }) => (selected ? '#000' : '#fff')};
    margin-top: 5px;
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    text-align: center;
    width: 60px;
`;

const CheckIcon = styled(FaCheck)`
    color: #d0a4c0;
    font-size: 1.5rem;
`;

const OptionList = ({ selectedSkinType, setSelectedSkinType }) => {
    const options = ['Суха', 'Жирна', 'Комбінована', 'Нормальна', 'Чутлива'];

    return (
        <Question>
            <OptionListContainer>
                {options.map((type) => (
                    <div key={type} style={{ textAlign: 'center' }}>
                        <Circle
                            selected={selectedSkinType === type}
                            onClick={() => setSelectedSkinType(type)}
                        >
                            {selectedSkinType === type && <CheckIcon />}
                        </Circle>
                        <OptionText selected={selectedSkinType === type}>{type}</OptionText>
                    </div>
                ))}
            </OptionListContainer>
        </Question>
    );
};

OptionList.propTypes = {
    selectedSkinType: PropTypes.string.isRequired,
    setSelectedSkinType: PropTypes.func.isRequired,
};

export default OptionList;
