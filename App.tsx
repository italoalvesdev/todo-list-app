import { StatusBar } from 'react-native';
import { ThemeProvider} from 'styled-components/native';
import { useFonts } from 'expo-font';

import theme from './src/global/styles/theme'

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent' 
        translucent
      />
      <Home />
    </ThemeProvider>
    </>
  );
}
