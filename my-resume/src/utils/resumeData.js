import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default {
    name: 'JaeWon Yun',
    title: 'Creative Developer',
    DOB: '29th April 1999',
    occupation: 'Student',
    email: 'alexyun0429@gmail.com',
    social: {
        LinkedIn: {
            title: 'LinkedIn: ',
            link: 'https://www.linkedin.com/in/jaewon-yun-308ab9239',
            text: "MyLinkedIn",
            icon: <LinkedInIcon />
        }, 
        GitHub: {
            title: 'GitHub: ',
            link: 'https://github.com/alexyun0429',
            text: "MyGitHub",
            icon: <GitHubIcon /> 
        }
    }
}