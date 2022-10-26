import { styled } from '@mui/material';

import bgphoto from '../../assets/svg/real_time_collaboration_c62i.svg';

const SignUpContainer = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  height: '100vh',
  backgroundImage: `url(${bgphoto})`,
  backgroundColor: '#f2f2f2',
  [theme.breakpoints.down('sm')]: {
    backgroundPosition: '80% 0%',
    height: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

export default SignUpContainer;
