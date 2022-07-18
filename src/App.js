import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Text from './components/Text';
import Card from './components/Card';
import Img from './components/Img';
import Banner from './components/Banner';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Text />
      <Card />
      <Img />
      <Banner />
      <Review />
      <Footer />
    </>
  );
}

export default App;
