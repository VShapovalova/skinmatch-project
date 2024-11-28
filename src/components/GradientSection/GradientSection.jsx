import PropTypes from 'prop-types';
import React from 'react';

import {
    BaseSection,
    BoldText,
    Content,
    Line,
    MainImage,
    OverlayImage,
    SectionSubtitle,
    SectionTitle,
    SmallImage,
    Step,
    StepContainer,
    StepText,
    TransparentBox,
} from './SectionStyles';

const GradientSection = ({
    title,
    text,
    boldText,
    children,
    hasBackgroundImage,
    image,
    smallImage,
    overlayImage,
    isFirstSection,
    isSecondSection,
    isThirdSection,
    isFourthSection,
    steps,
}) => {
    const sectionStyle = {
        ...(isFirstSection && { flexDirection: 'row', justifyContent: 'space-between' }),
        ...(isSecondSection && { flexDirection: 'row-reverse', textAlign: 'left' }),
        ...(isThirdSection && { backgroundColor: '#ffe4e1', textAlign: 'center' }),
        ...(isFourthSection && { textAlign: 'left' }),
    };

    return (
        <BaseSection style={sectionStyle} hasBackgroundImage={hasBackgroundImage}>
            {overlayImage && <OverlayImage src={overlayImage} alt="Overlay visual" />}
            {image && (
                <div>
                    <MainImage src={image} alt="Section visual" />
                    {smallImage && <SmallImage src={smallImage} alt="Additional visual" />}
                </div>
            )}
            <Content isFirstSection={isFirstSection}>
                <SectionTitle>{title}</SectionTitle>
                <SectionSubtitle>{text}</SectionSubtitle>
                {isFirstSection && <BoldText>{boldText}</BoldText>}
                {isThirdSection && (
                    <TransparentBox>
                        <StepContainer>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <div>{index + 1}</div>
                                    <StepText>{step}</StepText>
                                </Step>
                            ))}
                        </StepContainer>
                        <Line />
                    </TransparentBox>
                )}
                {children}
            </Content>
        </BaseSection>
    );
};

GradientSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    boldText: PropTypes.string,
    children: PropTypes.node,
    hasBackgroundImage: PropTypes.bool,
    image: PropTypes.string,
    smallImage: PropTypes.string,
    overlayImage: PropTypes.string,
    isFirstSection: PropTypes.bool,
    isSecondSection: PropTypes.bool,
    isThirdSection: PropTypes.bool,
    isFourthSection: PropTypes.bool,
    steps: PropTypes.arrayOf(PropTypes.string),
};

export default GradientSection;
