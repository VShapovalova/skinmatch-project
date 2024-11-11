import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button/Button';
import SkinConditions from '../components/CheckBox/CheckBox';
import OptionList from '../components/OptionList/OptionList';
import Selector from '../components/Selector/Selector';
import Slider from '../components/Slider/Slider';

const HeaderContainer = styled.div`
    background: linear-gradient(135deg, #f9e3e8, #f2d1d8);
    padding: 40px 20px;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkincareSelection = () => {
    const [selectedSkinType, setSelectedSkinType] = useState('');
    const [selectedAge, setSelectedAge] = useState(0);
    const [selectedBudget, setSelectedBudget] = useState(0);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedAllergens, setSelectedAllergens] = useState([]);

    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/products', {
            state: {
                selectedSkinType,
                selectedAge: getSelectedAgeText(),
                selectedFeatures: getSelectedFeaturesText(),
                selectedAllergens: getSelectedAllergensText(),
                selectedBudget: getSelectedBudgetText(),
            },
        });
    };


    const allergens = [
        { id: 1, name: 'Альфа-гідрокислоти (AHA)' },
        { id: 2, name: 'Бензоїлпероксид' },
        { id: 3, name: 'Ланолін' },
        { id: 4, name: 'Пропіленгліколь' },
    ];

    const ageLabels = ['>16', '17-25', '26-29', '30-40', '41-59', '60-79<'];
    const budgetLabels = ['>500', '500-1000', '1000-2000', '2000-5000', '5000-10000', '10000<'];

    const getSelectedAgeText = () => ageLabels[selectedAge];
    const getSelectedBudgetText = () => budgetLabels[selectedBudget];
    const getSelectedFeaturesText = () =>
        selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Особливостей шкіри немає';
    const getSelectedAllergensText = () =>
        selectedAllergens.length > 0
            ? selectedAllergens.map((id) => allergens.find((item) => item.id === id)?.name).join(', ')
            : 'Алергій не маю';

    return (
        <div style={{ maxWidth: '750px', margin: '0 auto', padding: '20px', backgroundColor: 'none', borderRadius: '10px' }}>
            <HeaderContainer>
                <h2 style={{ color: '#3f3d56' }}>
                    Хороший догляд - запорука здорової, гарної шкіри
                </h2>
                <p style={{ color: '#6e5a5a', marginBottom: '0' }}>
                    Саме тому SkinMatch пропонує вам пройти опитування для підбору косметики, беручи до уваги ваші <strong>особливості</strong>, <strong>вік</strong>, <strong>уподобання</strong>, <strong>тип шкіри</strong> і звичайно <strong>бюджет</strong>.
                </p>
            </HeaderContainer>

            <div style={{ marginBottom: '20px' }}>
                <h3>1. Ваш тип шкіри?</h3>
                <OptionList selectedSkinType={selectedSkinType} setSelectedSkinType={setSelectedSkinType} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>2. Ваш вік?</h3>
                <Slider labels={ageLabels} value={selectedAge} onChange={(value) => setSelectedAge(value)} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>3. Особливості шкіри</h3>
                <SkinConditions selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>4. Алергії на складники</h3>
                <Selector allergens={allergens} selectedAllergens={selectedAllergens} setSelectedAllergens={setSelectedAllergens} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3>5. Бюджет</h3>
                <Slider labels={budgetLabels} value={selectedBudget} onChange={(value) => setSelectedBudget(value)} />
            </div>

            <div style={{ marginTop: '20px', fontSize: '1.2rem', color: 'black' }}>
                Мій тип шкіри <strong>{selectedSkinType || 'не вибрано'}</strong>,
                мені <strong>{getSelectedAgeText()}</strong> років,
                з особливостей шкіри <strong>{getSelectedFeaturesText()}</strong>,
                маю алергію на <strong>{getSelectedAllergensText()}</strong>.
                Бюджет дозволяє мені обрати продукти на суму <strong>{getSelectedBudgetText()}</strong> гривень.
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button onClick={handleFinish}>Завершити</Button>
            </div>
        </div>
    );
};

export default SkincareSelection;
