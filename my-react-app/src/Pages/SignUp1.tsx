import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        password: false,
    });

    useEffect(() => {
        const validate = () => {
            const newErrors = {
                name: name === '',
                email: email === '',
                phone: phone === '',
                password: password === '',
            };
            setErrors(newErrors);
            setIsFormValid(!Object.values(newErrors).includes(true));
        };

        validate();
    }, [name, email, phone, password]);

    const handleSignup = () => {
        if (isFormValid) {
            const userData = { name, email, phone, password };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Signup successful!');
            window.location.href = '/login';
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Signup</Typography>
            <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                error={errors.name}
                helperText={errors.name ? 'Name is required' : ''}
            />
            <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                error={errors.email}
                helperText={errors.email ? 'Email is required' : ''}
            />
            <TextField
                fullWidth
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                margin="normal"
                required
                error={errors.phone}
                helperText={errors.phone ? 'Phone number is required' : ''}
            />
            <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                error={errors.password}
                helperText={errors.password ? 'Password is required' : ''}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSignup}
                disabled={!isFormValid}
            >
                Signup
            </Button>
        </Container>
    );
};

export default Signup;
