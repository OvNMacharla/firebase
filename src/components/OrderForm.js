import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const OrderForm = () => {
    const [tableNumber, setTableNumber] = useState('');
    const [items, setItems] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            // Add order to Firestore
            await addDoc(collection(db, 'orders'), {
                tableNumber: parseInt(tableNumber),
                items: items.split(',').map(item => item.trim()),
                status: 'Pending',
                timestamp: new Date(),
            });
            alert('Order placed successfully!');
            setTableNumber('');
            setItems('');
        } catch (err) {
            console.error('Error adding order: ', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place Your Order</h2>
            <input
                type="number"
                placeholder="Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Items (comma separated)"
                value={items}
                onChange={(e) => setItems(e.target.value)}
                required
            />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
