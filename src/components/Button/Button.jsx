import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font: inherit;
    font-size: 1rem;
    background-color: #f1a7af;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #e1959d;
        color: #ffffff;
    }
`;


function Button({ onClick, children, className, active }) {
    return (
        <StyledButton onClick={onClick} className={className} active={active}>
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    active: PropTypes.bool,
};

export default Button;
