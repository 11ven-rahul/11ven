import './slider.styles.scss';

const Slider = ({sliderValue, handleSliderChange}) => {
    return (
        <div className="slidecontainer">
            <input 
                type="range" 
                min="0" 
                max="10" 
                value={sliderValue} 
                className="slider" 
                id="myRange" 
                onChange={handleSliderChange}
            />
            <span className='slider-value-display'>{sliderValue}</span>
        </div>
    );
};

export default Slider;