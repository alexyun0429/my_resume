import React from 'react'
import { Button } from '@mui/material';

import './Button.css';

// const theme = createTheme({
//   palette: {
//     primary: {
//         main: '#ffc500',
//         contrastText: '#000',
//     },
//     neutral: {
//       main: '#64748B',
//     },
//   },
// });
// const CustomButtons = styled(Button)({

//     background: '#ffc500',
//     color: '#000',
//     fontSize: '14px',
//     fontWeight: 500,
//     border: 0,
//     borderRadius: '50px',
//     padding: '1px 12px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     cursor: 'pointer',
//     outline: 'none',
//     minWidth: '100px',
//     lineHeight: '35px',
//   }) 

const CustomButton = ({text, icon}) => {
  return (
        <Button  className='custom_btn' 
            endIcon={
                icon ? (<div className='btn_icon_container'>{icon}</div>) : null
            }>
                <span className='btn_text'>{text}</span>
        </Button>
  )
}

export default CustomButton;