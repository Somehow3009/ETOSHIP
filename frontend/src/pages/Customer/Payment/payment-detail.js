
import React from 'react';

function PaymentDetail() {
    return (
        <div className="card">
            <h2>Fare Breakdown</h2>
            <div className="fare-item">
                <span>Base</span>
                <span>$45.000</span>
            </div>
            <div className="fare-item">
                <span>Distance</span>
                <span>$5.000</span>
            </div>
            <div className="fare-item">
                <span>Service</span>
                <span>$5.000</span>
            </div>
            <div className="fare-total">
                <strong>Total:</strong>
                <strong>$55.000</strong>
            </div>
        </div>
    );
}

export default PaymentDetail;
