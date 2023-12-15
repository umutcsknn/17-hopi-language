import { Platform, NativeModules } from 'react-native'
import { getLocales } from 'expo-localization'

const expoLanguageDetector = {
 type: "languageDetector",
 init:() => {},
 detect: () => {
    return getLocales()[0].languageCode;

 },
 cacheUserLanguage: () => {},
};

export default expoLanguageDetector
