import React from 'react';
import './App.css';
// import CustomTabs from  './component/tabs/tabs';
import FullWidthTabs from './component/tabs/tabs-2';
// import MiniDrawer from './component/navigation/head/SideDrawer';

import Layout from './hoc/Layout/Layout';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <MiniDrawer /> */}
      {/* <CustomTabs /> */}
      
      {/* <FullWidthTabs /> */}
      <Layout />
      
    </div>
  );
}

export default App;
