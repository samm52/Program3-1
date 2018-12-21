import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class SectionListScreen extends React.Component {
    componentDidMount() {
        for (let a = 0; a < this.props.screenProps.courses.length; a++) {
            this.props.screenProps.loadStudents(this.props.screenProps.courses[a].id);
        }
    }

    //Navigates to the home screen
    openHome = () => {
        this.props.navigation.navigate('Main')
    };

    openStudent = (classID) => {
        this.props.navigation.navigate('StudentScreen', { classID: classID })
    }

    static navigationOptions = {
        title: 'Section List',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            //<View style={styles.container}>
            //        <Text style={styles.text}>You are currently logged out.</Text>
            <ScrollView>
                <Button title="Press to Log Out to Home" onPress={this.openHome} />
                <Text>The button above navigates to the Home Page.</Text>
                <TouchableOpacity>
                    <Button title={this.props.screenProps.courses[0].title} onPress={() => this.openStudent("1")} />
                    <Button title={this.props.screenProps.courses[1].title} onPress={() => this.openStudent("2")} />
                    <Button title={this.props.screenProps.courses[2].title} onPress={() => this.openStudent("3")} />
                </TouchableOpacity>
            </ScrollView>
            //    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    }
});