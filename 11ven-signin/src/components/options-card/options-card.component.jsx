import './options-card.styles.scss';

const OptionsCard = ({opt}) => {
    return (
        <div key={opt.id} className='options-card'>
            <h2>{opt.name}</h2>
            <p>{opt.description}</p>
        </div>
    )
};

export default OptionsCard