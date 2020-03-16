import React,{useState} from 'react';
import Logo from '../../comps/Logo';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import standardImg from '../../assets/artwork/standard.svg';
import teamImg from '../../assets/artwork/team.svg';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTier} from '../../redux/actions';

import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


var style = {
    base:{
        color:"black",
        backgroundColor:'white',
        fontFamily:'TT Commons',
        fontSize:'18px'
    }
}

const Billing_Cycle = ({price, cycle, SaveDisplay, cycleChecked, SetcycleChecked, SetcyclePrice}) => {

    var checkIcon, saveColor, fontColor;
    if(cycleChecked === cycle){
        checkIcon =  <CheckCircleIcon className="cycle checked" />;
        saveColor = '#10CF8B';
        fontColor = 'black'
    }else{
        checkIcon = <RadioButtonUncheckedIcon className="cycle unchecked" onClick={()=>{
            SetcycleChecked(cycle);
            SetcyclePrice(price);
        }} />
        saveColor = '#D9D9D9';
        fontColor = '#939393';
    }

    return (
        <div className="bill-cycle-container">
            <h5 style={{color:fontColor}}>Billed {cycle}</h5>
            <div className="save-container" style={{display:SaveDisplay,backgroundColor:saveColor}}>
                Save 15%
            </div>
            {checkIcon} 
            <div style={{display:'inline-block', marginLeft:'40px',color:fontColor}}><div className="plan-price"><font className="plan-price-dollar">$</font><font className="plan-price-number">{price}<font className="plan-price-month">/mo</font></font></div></div>                              
        </div>
    )
}

function StripForm({cyclePrice, plan},props){

    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        //communicate with Stripe based on the card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        });

        if(error){
            console.log(error);
        } else {
            console.log("payment", paymentMethod);
            props.ChangeTier(plan);

        /* tried using backend code from website but doesn't work.

         //fetch server to get the ClientSecret
        const clientSecret = await fetch("http://192.168.0.1/easembleBackend/pay.py");

            //user server secret to communicate back to stripe
            const data = stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod
            });

            console.log(data.success)
            
            if(data.success){

            }
        */
        };


    }

    return(
        <form onSubmit={Pay}>
            <input type="hidden" name="price" value={cyclePrice} />
            <label><h4>Name on Card *</h4></label>
            <input type="text" name="name" style={{marginBottom:'15px'}} />
            <CardElement options={{
                style:style
            }} />
            <label><h4>Country *</h4></label>
            <input type="text" name="country" />
            <label><h4>Address *</h4></label>
            <input type="text" name="address" />
            <div className="city-postalcode">
                <div>
                    <h4>City *</h4>
                    <input type="text" name="city" />
                </div>
                <div>
                    <h4>Postal Code *</h4>
                    <input type="text" name="postalCode" />
                </div>
            </div>
            <button type="submit">Confirm</button>
        </form>
    )
}

const stripePromise = loadStripe('pk_test_M4w7UVEd0KgtgV3OCSARBX0Z00HYYRcdRV');


function Pricing_Creaditcard(props){

    const [cyclePrice, SetcyclePrice] = useState(props.location.props.cyclePrice);
    const [cycleChecked, SetcycleChecked] = useState(props.location.props.cycle);

    var planName, planDetails, planDesc, planImg, price1, price2;

    if(props.location.props.plan === "standard"){
        planName = "Standard";
        price1 = 16;
        price2 = 19;
        planDetails = (
            <div className="pricing-credit-plan-details">
                <ul className="plan-detail-container" style={{marginRight:"20px"}}>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Up to 10 Hashtags</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                </ul>
                <ul className="plan-detail-container">
                    <li className="plan-details"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                </ul>
            </div>
        );
        planDesc = (
            <div className="pricing-credit-plan"><h1><div>{planName}</div>&nbsp; |</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>For small and medium<br/>sized businesses</span></div>
        )
        planImg = standardImg;
    }else if(props.location.props.plan === "team"){
        planName = "Team";
        price1 = 40;
        price2 = 48;
        planDetails = (
            <div className="pricing-credit-plan-details">
                <ul className="plan-detail-container" style={{marginRight:"20px"}}>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Up to 30 Hashtags</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                </ul>
                <ul className="plan-detail-container">
                    <li className="plan-details"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Unlimited Administrators</li>
                </ul>
            </div>
        );
        planDesc = (
            <div className="pricing-credit-plan"><h1><div>{planName}</div>&nbsp; |</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>For large businesses, teams, <br/>and multiple social media<br/>profiles/accounts.</span></div>
        );
        planImg = teamImg;
    }

    return(
        <div className="pricing-credit-container">
            <div className="pricing-credit-left">
                <header>
                    <Logo color="#D78D8C" />
                </header>
                <main>
                    <h1>Plan Details</h1>
                    {planDesc}
                    {planDetails}
                </main>
                <footer>
                    <img src={planImg} alt="standardImg" className="plan-img" />
                </footer>
            </div>
            <div className="pricing-credit-right">
                <div className="view-all-container"><Link style={{textDecoration:'none',textDecorationColor:'none'}} to={'/plans'}><span><ChevronLeftIcon /> View all plans</span></Link></div>
                <header><h1>Payment Information</h1></header>
                <main>
                    <div>
                        <label><h4>Billing Cycle *</h4></label>
                        <div className="bill-cycle-wrapper">
                            <Billing_Cycle price={price1} cycle="Annually" SaveDisplay="block" SetcyclePrice={SetcyclePrice} cycleChecked={cycleChecked} SetcycleChecked={SetcycleChecked} />
                            <Billing_Cycle price={price2} cycle="Monthly" SaveDisplay="none" SetcyclePrice={SetcyclePrice} cycleChecked={cycleChecked} SetcycleChecked={SetcycleChecked} />
                        </div>
                        
                        <Elements stripe={stripePromise}>
                            <StripForm cyclePrice={cyclePrice} plan={props.location.props.plan} />
                        </Elements>                       
                    </div>
                </main>
                <footer>
                    <hr style={{marginBottom:'15px'}} />
                    <div>
                        <span className="total-billed">Total Billed</span><span className="total-price">$ {cyclePrice}*</span>
                    </div>
                    <p>*Pluse applicable taxes</p>
                    <hr style={{marginTop:'15px'}} />
                </footer>
            </div>
        </div>
    )
}

    export default connect(null,{ChangeTier})(Pricing_Creaditcard);