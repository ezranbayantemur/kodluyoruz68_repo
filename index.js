/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainFunctional from './src/Main-Functional';
import MainClass from './src/Main-Class';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainClass);
