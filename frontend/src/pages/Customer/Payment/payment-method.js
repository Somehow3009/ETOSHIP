import React, { useState } from 'react';
import './Payment.css';
import { FaCreditCard, FaWallet, FaMoneyBillAlt } from 'react-icons/fa';

function PaymentOptions() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        
        <div className="payment-options">
            <div className={`payment-card ${selectedOption === 'credit' ? 'selected' : ''}`}>
                <label className="payment-option-item">
                    <FaCreditCard className="icon" />
                    <span className='method'>Credit Card</span>
                    <input
                        type="radio"
                        name="payment"
                        value="credit"
                        checked={selectedOption === 'credit'}
                        onChange={handleChange}
                    />
                </label>
            </div>
            
            <div className={`payment-card ${selectedOption === 'ewallet' ? 'selected' : ''}`}>
                <label className="payment-option-item">
                    <FaWallet className="icon" />
                    <span className='method'>E-wallet</span>
                    <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={selectedOption === 'ewallet'}
                        onChange={handleChange}
                    />
                </label>
            </div>
            
            <div className={`payment-card ${selectedOption === 'cash' ? 'selected' : ''}`}>
                <label className="payment-option-item">
                    <FaMoneyBillAlt className="icon" />
                    <span className='method'>Cash</span>
                    <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={selectedOption === 'cash'}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default PaymentOptions;
