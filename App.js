import { StyleSheet } from 'react-native';
import React from 'react';
import Router from './src/routes/Router';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './path/to/en.json';
import tr from './path/to/tr.json'; // Adjusted the import name for Turkish translations

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default function App() {
  return (
    <Router />
  );
}

const styles = StyleSheet.create({});
