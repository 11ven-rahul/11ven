import { useState, useEffect } from 'react';

import './dashboard.styles.scss';

import PendingCard from '../../components/pending-card/pending-card.component';
import axios from 'axios';


const Dashboard = () => {
    
    const [ USER_DATA, setUserData ] = useState({});
    const [userAvatar, setUserAvatar] = useState('');
    const [purchasedData, setPurchasedData] = useState({})
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/userprofile',
        {
            headers: { 'Authorization': `Bearer ${(JSON.parse(localStorage.getItem("user_data"))).token}` }
        }
    )
    .then(response => {
        console.log(response.data)
        setUserData(response.data)
    })

        
        fetch ('http://127.0.0.1:5000/upload', {
            method: "GET",
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${(JSON.parse(localStorage.getItem("user_data"))).token}`, 
                'Content-Type':'image/jpeg',
            }
        })
        .then(response => 
                response.blob()
        )
        .then(blob => URL.createObjectURL(blob))
        .then(imgObject => {
            console.log(imgObject)
            setUserAvatar(imgObject)})

        axios.get('http://127.0.0.1:5000/user_interaction', {
            
            headers: {
                'Authorization': `Bearer ${(JSON.parse(localStorage.getItem("user_data"))).token}`, 
                'Content-Type':'image/jpeg',
            }
        })
        .then(res => res.data)
        .then(data => setPurchasedData(data.last_clicked_module.last_clicked_module))
}, [])


    useEffect(() => {
        console.log(purchasedData)
    }, [USER_DATA])

    const { skillSelectedOption } = USER_DATA
    console.log(skillSelectedOption)

    
    
    

    return (
        <div className='dashboard-container'>
            <div className='details-display'>
                <img src={userAvatar}  alt='avatar' />
                <div className='user-info'>
                    <h1>Welcome, {USER_DATA.firstName} {USER_DATA.lastName}</h1>
                    <span className='short-description'>{USER_DATA.about}</span> <br />
                    <div className='experience-holder'>You have <span className='exp-no'>{USER_DATA.experience}</span> years of experience.</div>
                    <div className='skills-container' >
                    <p>Your skills are:</p>
                    <div className='skills-row'>
                    {
                        skillSelectedOption ?
                        skillSelectedOption.map(skill => (
                            <div className='skill-pill'>
                                {skill}
                            </div>
                        ))
                        :
                        <div></div>
                    }
                    </div>
                    </div> 
                </div>
            </div>

            <PendingCard purchasedData={purchasedData} />
        
        </div>
        
    )
}

export default Dashboard;