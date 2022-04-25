import './pill-select.styles.scss';

import Select from 'react-select';

const options = [
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML 5', label: 'HTML 5' },
    { value: 'CSS 3', label: 'CSS 3' },
    { value: 'React', label: 'React' },
    { value: 'AI/ML', label: 'AI/ML' },
  ]

const PillSelect = () => {
    return (
        <Select 
            isMulti
            options={options}
            placeholder='Skills'
            
        />
    )
};

export default PillSelect;