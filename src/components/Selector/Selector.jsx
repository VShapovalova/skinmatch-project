import PropTypes from 'prop-types'; // Додаємо імпорт PropTypes
import React, { useState } from 'react';

import star from '../../assets/star-icon.png';

const AllergenSelector = ({ allergens, selectedAllergens, setSelectedAllergens }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const toggleAllergen = (id) => {
        setSelectedAllergens((previousSelected) =>
            previousSelected.includes(id)
                ? previousSelected.filter((item) => item !== id)
                : [...previousSelected, id]
        );
    };

    const filteredAllergens = allergens.filter((allergen) =>
        allergen.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <img src={star} alt="StarIcon" style={styles.icon} />
                    <input
                        type="text"
                        placeholder="Введіть алерген"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.list}>
                    {filteredAllergens.map((allergen) => (
                        <label key={allergen.id} style={styles.item}>
                            <input
                                type="checkbox"
                                checked={selectedAllergens.includes(allergen.id)}
                                onChange={() => toggleAllergen(allergen.id)}
                                style={styles.checkbox}
                            />
                            {allergen.name}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Додаємо propTypes для валідації пропсів
AllergenSelector.propTypes = {
    allergens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedAllergens: PropTypes.arrayOf(PropTypes.number).isRequired,
    setSelectedAllergens: PropTypes.func.isRequired,
};

// Стилі залишаються без змін
const styles = {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20px' },
    container: { width: '250px', backgroundColor: '#d0a4c0', borderRadius: '16px', padding: '10px 15px' },
    header: { display: 'flex', alignItems: 'center', marginBottom: '10px' },
    icon: { width: '20px', height: '20px', marginRight: '8px' },
    input: { flexGrow: 1, border: 'none', backgroundColor: 'transparent', color: '#fff' },
    list: { maxHeight: '100px', overflowY: 'auto' },
    item: { display: 'flex', alignItems: 'center', fontSize: '14px', color: '#fff' },
    checkbox: { marginRight: '8px' },
};

export default AllergenSelector;
