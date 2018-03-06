import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate , employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {

    componentWillMount(){
        // Taking all the attributes employee and stuffing them prefilled value of elements
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProp, { employeeUpdate, employeeSave })(EmployeeEdit);