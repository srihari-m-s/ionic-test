import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'dist',
  server: {
    androidScheme: 'http://localhost:8100/home'
  }
};

export default config;
