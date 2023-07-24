import React from 'react';
import { Container, Grid, Switch } from '@mui/material';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Switch>
              <Routes>
                {/* <Route path = '/portfolio' element={<Portfolio />}/> */}
                <Route path = '/portfolio'>
                  <Portfolio />
                </Route>

                <Route path = '/'>
                  <Resume />
                </Route>
                
                {/* <Route path = '/' element={<Resume />} /> */}
                  
              </Routes>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;