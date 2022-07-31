import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
  Text,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import {
  WelcomePage,
  Mentors,
  Mentees,
  HowItWorks,
  ActiveMentorships,
  MentorMenteesDetail,
  Events,
  Jobs,
  JobSeekers,
  JobDetail,
} from './pages';
import {
  HomeIcon,
  MentorIcon,
  MenteeIcon,
  HIWorksIcon,
  EventIcon,
  Job,
  JobSeeker,
} from './components/SVGR-Components';
import SwiperScreens from './OnBoarding/SwiperScreens';
import ChatBot from './components/ChatBot';
import Login from './OnBoarding/Login';
import SignUp from './OnBoarding/SignUp';
import SignUp1 from './OnBoarding/SignUp1';
import Login1 from './OnBoarding/Login1';
import Auth from './OnBoarding/auth';
import Auth1 from './OnBoarding/auth1';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
console.disableYellowBox = true;

const icons = {
  Home: <HomeIcon width={27} height={27} />,
  Mentors: <MentorIcon width={27} height={27} />,
  Mentees: <MenteeIcon width={27} height={27} />,
  HowItWorks: <HIWorksIcon width={27} height={27} />,
  Events: <EventIcon width={27} height={27} />,
  Jobs: <Job width={27} height={27} />,
  JobSeekers: <JobSeeker width={27} height={27} />,
};

function Tabs() {



  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => icons[route.name],
      })}
      tabBarOptions={{
        activeTintColor: '#18a990',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}>
      <Tab.Screen name="Home" component={WelcomePage} />
      <Tab.Screen
        name="Mentors"
        component={Mentors}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Mentees" component={Mentees} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}

function JobsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Jobs"
      screenOptions={({ route }) => ({
        tabBarIcon: () => icons[route.name],
      })}
      tabBarOptions={{
        activeTintColor: '#18a990',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}>
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="JobSeekers" component={JobSeekers} />
    </Tab.Navigator>
  );
}

const Router = () => {

  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Poppins-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Poppins-Thin',
        fontWeight: 'normal',
      },
    },
  };

  const Mytheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4186F5',
      secondary: '#814ED2',
      accent: '#F5B400',
      disabled: '#FF7CC3',
      error: '#F14F0A',
      backgroundLight: '#F4F4F4',
      text: '#3C3C3C',
      textBefore: '#F4F4F4',
      textAfter: '#7D7D7D',
      border: '#00FFA3',
    },
    fonts: configureFonts(fontConfig),
  };
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <PaperProvider>
      <NavigationContainer theme={Mytheme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SwiperScreens">
          <Stack.Screen name="SwiperScreens" component={SwiperScreens} />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}></Stack.Screen>
        {/* <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}></Stack.Screen> */}
          
        <Stack.Screen
          name="Login1"
          component={Login1}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          options={{ headerShown: false }}></Stack.Screen>

          <Stack.Screen name="ChatBot" component={ChatBot} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="MMDetail" component={MentorMenteesDetail} />
          <Stack.Screen
            name="ActiveMentorships"
            component={ActiveMentorships}
          />
          <Stack.Screen name="JobTabs" component={JobsTab} />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;