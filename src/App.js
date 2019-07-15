import React from 'react';
import Layout from './components/Layouts/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <div>Nice</div>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
