/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Main from './src/Main-Functional';
import Main from './src/Main-Class';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
