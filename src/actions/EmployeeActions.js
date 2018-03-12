import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ( {name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`) // use backtick 
            .push({ name, phone, shift }) // pushing data to firebase store
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.main({ type: 'reset' }); //type: 'reset' will reset navigation stack and there will be no back button after employee create on Employeelist
        });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }); //to fetch data call val function
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
            .set({  name, phone, shift })
            .then(() => {
                Actions.main({ type: 'reset' });
            });
    }
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
            .remove()
            .then(() => {
                Actions.main( { type: 'reset' });
            })
    }
};