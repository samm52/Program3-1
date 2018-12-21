import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import students from "./students";
import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddStudentScreen from './screens/AddStudentScreen';
import SectionListScreen from './screens/SectionListScreen';
import { fetchStudents } from './api';
import SettingsScreen from './screens/SettingsScreen';

const AppNavStack = createStackNavigator(
  {
    SectionList: SectionListScreen,
    //StudentScreen: StudentScreen,
    //AddStudentScreen: AddStudentScreen,
  },
  {
    initialRouteName: 'SectionList',
  }
);

const TabNavigator = createBottomTabNavigator({
  //Main: LoginScreen,
  SectionList: SectionListScreen,
  StudentScreen: StudentScreen,
  //AppNavStack: AppNavStack,
  SettingsScreen: SettingsScreen,
  //AddStudentScreen: AddStudentScreen,
});



AppNavStack.navigationOptions = {
  headerTintColor: '#a41034',
  headerStyle: {
    backgroundColor: 'lightskyblue',
  },
}

const AppNavigator = createSwitchNavigator(
  {
    Main: TabNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  state = {
    courses: [{
      title: "Test 1",
      id: "1",
      students: [],
    },
    {
      title: "Test 2",
      id: "2",
      students: [],
    },
    {
      title: "Test 3",
      id: "3",
      students: [],
    }],
  }

  getStudents = async (sectionID) => {
    let studentSections = [...this.state.courses];
    let loopIndex = studentSections.findIndex(loop => loop.id === sectionID)
    const answer = await fetchStudents(30); //this is the variable that is set for max students in a class
    studentSections[loopIndex].students = answer;
    this.setState({ courses: studentSections });
  }

  addStudent = (newStudent) => {
    this.setState(
      {
        students: [...this.state.students, newStudent],
      });
  }

  render() {
    return <AppNavigator screenProps={{ courses: this.state.courses, onSubmit: this.addStudent, loadStudents: this.getStudents }} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});