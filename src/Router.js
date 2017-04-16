import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Overview from './components/overview';
import PoolList from './components/PoolList';
import SignUp from './components/signupfrom';
import Sliders from './components/DepositPage';
import MainPage from './components/main';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginBottom: 0 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Upstart" hideNavBar initial />
        <Scene key="register" component={SignUp} title="starting" hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene key="overview" component={MainPage} title="Overview" hideNavBar initial />
        <Scene key="PoolList" component={PoolList} title="PoolList" hideNavBar />
        <Scene key="deposit" component={Sliders} title="Deposit" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
