// @ts-check

const { parsed } = require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //CONSULTAR SE HA CAMBIADO A FALSE PARA QUE FUNCIONE react-beautiful-dnd
  swcMinify: true,
  // publicRuntimeConfig: {
  //   GOOGLE_ANALYTICS: parsed.GOOGLE_ANALYTICS,
  // },
  devIndicators: {
    // @ts-ignore
    autoPrerender: false,
  },
  env: {
    API: parsed?.NEXT_PUBLIC_API || '',
    apiKey: parsed?.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: parsed?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: parsed?.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: parsed?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    appId: parsed?.NEXT_PUBLIC_FIREBASE_APP_ID || '',
    messagingSenderId: parsed?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
