import React,{useState} from 'react';
import Logo from '../../comps/Logo';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LockIcon from '@material-ui/icons/Lock';
import standardImg from '../../assets/artwork/standard.svg';
import teamImg from '../../assets/artwork/team.svg';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ChangeTier} from '../../redux/actions';
import Checkbox from '@material-ui/core/Checkbox';
import TermsPopup from '../../comps/TermsPopup';


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

function StripForm({cyclePrice, SetshowContent}){

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
            SetshowContent('review');

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

function Review_Payment({planName, cycle, price, ChangeTier, SetshowContent}){
    return(
        <div className="review-payment">
            <div className="view-all-container"><span><ChevronLeftIcon onClick={()=>{SetshowContent('payment')}} />Back to Payment</span></div>
            <header style={{marginBottom:'50px'}}><h1>Review Order</h1></header>
            <section>
                <h2>Plan Summary</h2>
                <div className="rows"><font>{planName} Plan ({cycle})</font><font>${price}.00</font></div>
                <hr />
                <div className="rows"><font>Total</font><font>${price}.00</font></div>
                <hr />
                <div className="all-prices">* All prices are in CAD</div>
                <Link to={'/'}>
                    <button onClick={()=>{
                        ChangeTier(planName);
                    }}>Confirm Subscription</button>
                </Link>
                <div style={{textAlign:"center", justifyContent:"center", display:'flex', color:'#6C6C6C', padding:'20px 0'}}><LockIcon style={{fontSize:'14px'}} /> All payments are secure and encrypted</div>
                <p>
                    By placing your order, you agree to Esemble's <span>terms and conditions.</span><br/><br/>
                    When you click the "Confirm Subscription" button, we will send you an e-mail acknowleding receipt of your order. By placing your order, you agree to Easemble.com's terms and conditions of use.<br/><br/>
                    Whithin 14 days of your free trial, you can cancel your Subscription at any time. Exceptinos and restrctions apply.
                </p>
            </section>
        </div>
    )
}


function Pricing_Creaditcard(props){

    const [cyclePrice, SetcyclePrice] = useState(props.location.props.cyclePrice);
    const [cycleChecked, SetcycleChecked] = useState(props.location.props.cycle);
    const [termsPopup, setTermsPopup] = useState('none');
    const [showContent, SetshowContent] = useState('payment')

    var planName, planDetails, planDesc, planImg, price1, price2, review, payment;

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

    if(showContent === 'payment'){
        payment = (
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
                            <StripForm cyclePrice={cyclePrice} plan={props.location.props.plan} SetshowContent={SetshowContent} />
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
                    <div><Checkbox color="default" onClick={()=>{setTermsPopup("flex")}} /> I have read and agree to the <span style={{color:'#2AC3D8', fontWeight:'bold'}} onClick={()=>{setTermsPopup("flex")}}>Terms and Conditions</span></div> 
                </footer>
            </div>
        )
    }else if(showContent === 'review'){
        review = (
            <div className="pricing-credit-right">
                <Review_Payment planName={planName} cycle={cycleChecked} price={cyclePrice} ChangeTier={props.ChangeTier} SetshowContent={SetshowContent} />
            </div>
        )
    }

    return(
        <div className="pricing-credit-container">
            <TermsPopup termsPopup={termsPopup} setTermsPopup={setTermsPopup}/>
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
            {payment}
            {review}
        </div>
    )
}

    export default connect(null,{ChangeTier})(Pricing_Creaditcard);