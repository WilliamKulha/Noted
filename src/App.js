import React from 'react';
import './App.css';
import Layout from './components/hoc/Layout/Layout'
import Noted from './components/containers/Noted/Noted.jsx'

function App() {
  return (
    <>
    <Layout>
      <Noted />
    </Layout>
    </>
  );
}

export default App;
