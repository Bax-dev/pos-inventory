import { useState } from 'react';
import axios from 'axios';
import { API_ROUTES } from '../services/apiService';
import { toast } from 'react-toastify';  // Import toast
import 'react-toastify/dist/ReactToastify.css'; 

export const useRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.REGISTER, formData);
      
      if (response.status === 200) {
        // Show toast notification for successful registration
        toast.success('Registration successful!');
        setFormData({ username: '', email: '', password: '' }); // Clear form data
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      toast.error('Registration failed. Please try again.');
    }
  };

  return { handleRegister, formData, setFormData, errorMessage };
};
