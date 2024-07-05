import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = localStorage.getItem('user');
        if (user) {
            const userData = JSON.parse(user);
            if (userData.email === email && userData.password === password) {
                alert('Login successful!');
                // Redirect to the main app or dashboard page
                window.location.href = '/data';
            } else {
                alert('Invalid email or password');
            }
        } else {
            alert('No user found. Please sign up first.');
            window.location.href = '/data';
        }
    };

    const isFormValid = email && password;

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Login</Typography>
            <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                disabled={!isFormValid}
            >
                Login
            </Button>
        </Container>
    );
};

export default Login;
