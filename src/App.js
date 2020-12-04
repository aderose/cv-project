import React from 'react';
import Title from './components/Title';
import Details from './components/Details';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import './styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="container bg-white my-4 rounded-lg shadow py-3">
        <Title />
        <Details />
        <Experience />
        <Education />
        <Skills />
        <Interests />
      </div>
    );
  }
}

export default App;
