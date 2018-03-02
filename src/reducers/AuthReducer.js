// Handle everything to deal with authentication
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';


const INITIAL_STATE = { 
    email : '',
    password: '',
    user: null,
    error: '',
    loading: false,
};

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload, error: '' };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE,user: action.payload} //Either use ...INITIAL_STATE to reset or use manual reseting error: '', loading: false, email: '', password: ''
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed', password: '', loading: false }
        default:
            return state;
    }
}