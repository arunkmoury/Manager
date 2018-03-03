import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar={true} navigationBarStyle={{ backgroundColor: '#81b71a' }}>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main" navigationBarStyle={{ backgroundColor: '#8fff1f' }}>
                    <Scene 
                        rightTitle="Add"
                        onRight={()=>console.log('right!!!')}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;