import React from 'react';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";



function PaymentMethodCard() {
    return (
        <div className='card'>
                <div className="payment-method-card">
                <h2>Payment Method</h2>
                <div className="payment-method-item">
                    <span className='payment-logo'> <FaCcVisa /></span>
                    <div className="payment-info">
                        <p className="payment-title">Visa ending in 1234</p>
                        <p className="expiry-date">Expires 12/2027</p>
                    </div>
                    <span className="menu-icon">⋮</span>
                </div>
                <div className="payment-method-item">
                    <span className='payment-logo'><FaCcMastercard /></span>
                    <div className="payment-info">
                        <p className="payment-title">Mastercard ending in 5678</p>
                        <p className="expiry-date">Expires 9/2027</p>
                    </div>
                    <span className="menu-icon">⋮</span>
                </div>
                <button className="add-payment-button">Add Payment Method</button>
            </div>
        </div>
    );
}

export default PaymentMethodCard;
