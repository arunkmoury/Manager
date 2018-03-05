import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection, Card } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;
        return (
            <Card>
                <CardSection>
                    <Text>
                        {name}
                    </Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});

export default ListItem;