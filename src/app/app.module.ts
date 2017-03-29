import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondpagePage } from '../pages/secondpage/secondpage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '9d1c3627'
  },
  'auth': {
    'google': {
      'webClientId': '416305214569-k3n6efi6lp5294ama1jc2k3f9c1jo3d7.apps.googleusercontent.com',
      'scope': ['https://www.googleapis.com/auth/calendar.readonly']
    },
    'facebook': {
      'scope': []
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondpagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
