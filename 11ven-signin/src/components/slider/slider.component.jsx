import './slider.styles.scss';

const Slider = ({sliderValue, handleSliderChange}) => {
    return (
        <div className="slidecontainer">
            <input 
                type="range" 
                min="1" 
                max="3" 
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