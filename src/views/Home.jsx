import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bestProductsImage from '../assets/best-products.png';
import faceCreamImage from '../assets/face-cream.png';
import handImage from '../assets/hand-image.png';
import overlayFirstImage from '../assets/overlay-first.png';
import Button from '../components/Button/Button';
import GradientSection from '../components/GradientSection/GradientSection';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f6eee4;
`;

const Home = () => (
    <PageContainer>
        <GradientSection
            title="Знайди свій ідеальний догляд"
            text="Відкрийте для себе засоби, які підходять саме вашій шкірі. Ми допоможемо підібрати косметику, враховуючи ваші унікальні потреби та бюджет."
            boldText="Ваша краса - наша місія!"
            hasBackgroundImage={true}
            image={faceCreamImage}
            smallImage={handImage}
            overlayImage={overlayFirstImage}
            isFirstSection={true}
        >
            <Link to="/skincare-selection">
                <Button>Підібрати догляд</Button>
            </Link>
        </GradientSection>

        <GradientSection
            title="Список найкращих продуктів"
            text="Відкрийте для себе найпопулярніші засоби для догляду, які мають найкращий склад!"
            hasBackgroundImage={false}
            image={bestProductsImage}
            isSecondSection={true}
        >
            <Link to="/products">
                <Button>Переглянути</Button>
            </Link>
        </GradientSection>

        <GradientSection
            title="Тест на визначення типу шкіри"
            text="Якщо не впевнені, який тип шкіри у вас, пройдіть наш тест і отримайте індивідуальні рекомендації!"
            hasBackgroundImage={true}
            isThirdSection={true}
            steps={[
                "Жирна чи суха",
                "Чутлива чи резистентна",
                "Пігментована чи непігментована",
                "Схильна до зморшок чи пружна",
            ]}
        >
            <Link to="/skin-type">
                <Button>Тест</Button>
            </Link>
        </GradientSection>

        <GradientSection
            title="Реєструйтесь вже зараз"
            text="Зберігайте свої результати, та отримайте безкоштовний доступ до інших функцій сайту."
            hasBackgroundImage={false}
            isFourthSection={true}
        >
            <Link to="/auth">
                <Button>Приєднатись</Button>
            </Link>
        </GradientSection>
    </PageContainer>
);

export default Home;
