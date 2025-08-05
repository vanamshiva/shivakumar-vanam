import { Button, CircularProgress } from "@mui/material";
import { keyframes } from '@mui/system';
import React from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CustomButton = (props) => {
    const {
        text,
        onClick,
        styles = {},
        animation = true,
        isLoading = false,
    } = props
    
    return (
        <Button
            onClick={onClick}
            disabled={isLoading}
            sx={{
                fontSize: '16px',
                padding: '8px 20px',
                fontWeight: '600',
                borderRadius: '8px',
                textTransform: 'none',
                color: '#fff',
                backgroundColor: '#1976d2',
                '&:hover': {
                    backgroundColor: '#1565c0',
                },
                ...(animation && { animation: `${fadeIn} 0.5s ease-out` }),
                ...styles,
            }}
        >
            {isLoading ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : text}
        </Button>
    );
};

export default CustomButton;
