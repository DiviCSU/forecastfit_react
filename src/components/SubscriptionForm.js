import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { location, phone, time };

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setSuccessMessage(data.message);
            setLocation('');
            setPhone('');
            setTime('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your Zip Code:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

                <label>Enter your phone number:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{10}" required />

                <label>Preferred notification time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

                <button type="submit">Subscribe</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default SubscriptionForm;
