import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList, SectionList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class StudentScreen extends React.Component {
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
        title: 'Student View',
    };

    render() {
        const { navigate } = this.props.navigation;
        students = this.props.screenProps.courses.find(course => course.id === this.props.navigation.state.params.classID).students
        console.log(students)
        studentsByLetter = students.reduce((obj, student) => {
            const fLetter = student.name[0].toUpperCase()
            return {
                ...obj,
                [fLetter]: [...(obj[fLetter] || []), student],
            }
        }, {})
        sections = Object.keys(studentsByLetter).sort().map(letter => ({
            data: studentsByLetter[letter],
            title: letter,
        }))
        return (
            <View>
                <SectionList sections={sections} renderItem={this.renderItem} renderSectionHeader={this.renderSectionHeader} />
            </View>
        );
    }

    renderItem = (item) => {
        return (
            <Text>{item.item.name}</Text>
        )
    }
}