import { Typography } from "@mui/material"
import { keyframes } from '@mui/system';

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

const CustomTypography = (props) => {
    const { text, styles = {}, animation = true} = props
    
    return  <Typography
      sx={{
        fontSize: '20px',
        fontWeight: 500,
        color: '#000000',
        textAlign: 'justify',
        ...(animation && {animation: `${fadeIn} 0.6s ease-out`}),
        ...styles,
      }}
    >
      {text}
    </Typography>
}

export default CustomTypography