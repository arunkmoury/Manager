import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'}); //either selected shift  else default shift 
    }

    render () {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    }
});

const mapStateToProps = (state)=>{
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate,
})(EmployeeCreate);