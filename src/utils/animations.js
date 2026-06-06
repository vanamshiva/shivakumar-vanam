import { keyframes } from '@mui/system';

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
`;
