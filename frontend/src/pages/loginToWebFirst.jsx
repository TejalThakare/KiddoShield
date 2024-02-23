import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing

export default function LoginToWebFirst() {
  
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <h1>Login to the website first</h1>
            {/* <p>
                Please <Link to="/">login</Link> or <Link to="/registration">register</Link> to access this page.
            </p> */}
        </div>
    );
}
