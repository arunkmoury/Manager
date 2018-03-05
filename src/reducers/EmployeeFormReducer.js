import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]:action.payload.value } // sq brackets are not array & this is key interpolation
        case EMPLOYEE_CREATE: // to reset form after employee create
            return INITIAL_STATE;
        default:
            return state;
    }
}