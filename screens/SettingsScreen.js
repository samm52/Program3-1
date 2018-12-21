import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class SettingsScreen extends React.Component {
    openHome = () => {
        this.props.navigation.navigate("Main");
        // this.props.navigation.navigate("AddStudentScreen");
    };

    openStudentScreen = () => {
        this.props.navigation.navigate("StudentScreen");
    }

    openSectionList = () => {
        this.props.navigation.navigate("SectionList");
    }

    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Button title="Press to go to Student Screen" onPress={this.openStudentScreen} />
                <Text>Works!</Text>
                <Button title="Press to go to Section List" onPress={this.openSectionList} />
                <Text>Works!</Text>
            </ScrollView>
        );
    }
}