import { useState, useEffect } from 'react';

import './options-card.styles.scss';

const OptionsCard = ({opt, setCoreOptionSelected, coreOptionSelected}) => {
    const coreClickHandler = () => {setCoreOptionSelected(opt.id); console.log(coreOptionSelected)}

    return (
        <div key={opt.id} onClick={coreClickHandler} className={ coreOptionSelected === opt.id ? "options-card selected" : "options-card" }>
            <h2>{opt.name}</h2>
            <p>{opt.description}</p>
        </div>
    )
};

export default OptionsCard