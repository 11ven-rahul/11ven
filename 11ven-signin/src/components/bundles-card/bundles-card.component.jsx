import { useContext } from 'react';

import './bundles-card.styles.scss';

import { CartContext } from '../../contexts/cart.context';

import CustomButton from '../custom-button/custom-button.component';

const BundlesCard = ({bundle}) => {
    const { addBundleToCart } = useContext(CartContext);
    const {name, tests, addons} = bundle;

    const bundleAddHandler = () => addBundleToCart(bundle)

    return (
        <div className='bundles'>
            <div className='bundle-head'>
                <h2 style={{fontWeight: "450", marginLeft: "15px"}}> {name} </h2> 
                <h5 style={{fontWeight: "400", fontSize: "10px", color: "#BAC2C9"}}>Bundle Includes:</h5> 
            </div>
            
            <div className='core-choice'>
                <h2 style={{fontWeight: "500",fontSize: "13px", position: "relative", top: "-10px"}}>Tests:{tests}</h2>
            </div>
            <div className='add-ons-choice'>
                <h2 style={{fontWeight: "500",fontSize: "13px", position: "relative", top: "-10px"}}>Add ons</h2>
                <div className='addons-container'>
                {
                    addons.map(ad => {
                        if(ad.id > 3){
                            return <p key={ad.id} style={{fontSize: "10px"}}>{ad.name}</p>
                        }else{
                            return null
                        }
                    })
                }
                </div>
            </div>
            <div className='card-footer'>
                <CustomButton onClick={bundleAddHandler} buttonType="features">
                    <span className='feature-text'>Start</span>
                </CustomButton>
                <span className='price-container' style={{display: "flex"}}><h1>&#8377;{bundle.price}</h1></span>
            </div>
            
        </div>
    )
};

export default BundlesCard;