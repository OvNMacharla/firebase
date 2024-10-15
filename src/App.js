import React from 'react';
import OrderForm from './components/OrderForm';
import Admin from './components/Admin';

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Food Order Notification App</h1>
            <OrderForm />
            <Admin />
        </div>
    );
}

export default App;
