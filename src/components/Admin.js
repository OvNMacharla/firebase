import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Admin = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'orders'), (snapshot) => {
            const newOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(newOrders);
        });

        return () => unsub(); // Clean up the listener
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <div key={order.id}>
                        <p>Table: {order.tableNumber}</p>
                        <p>Items: {order.items.join(', ')}</p>
                        <p>Status: {order.status}</p>
                    </div>
                ))
            ) : (
                <p>No orders yet.</p>
            )}
        </div>
    );
};

export default Admin;
