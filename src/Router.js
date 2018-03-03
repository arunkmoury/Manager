import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
                        onRight={()=> Actions.employeeCreate() }
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;