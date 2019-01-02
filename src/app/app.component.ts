import { Component, ViewChild } from '@angular/core';
import { IonicApp, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ReportPage } from '../pages/report/report';
import { CommonProvider } from '../providers/common/common';
import { GlobalProvider } from '../providers/global/global';
import { AppCenterCrashes } from '@ionic-native/app-center-crashes';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild('nav') navCtrl: NavController;
  rootPage: any;
  userName: any;
  isLoggedIn: any;
  deviceData: any;
  appVersionNumber: any;
  pages: Array<{title: string, component: any, icon: string}> = [
    {
      title: "Home",
      component: HomePage,
      icon: "ios-home-outline"
    },
    {
      title: "My Profile",
      component: ProfilePage,
      icon: "ios-person-outline"
    },
    {
      title: "Change Password",
      component: ChangepasswordPage,
      icon: "ios-lock-outline"
    },
    {
      title: "Report an issue",
      component: ReportPage,
      icon: "ios-create-outline"
    }
  ];

  constructor(public ionicApp: IonicApp,
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public common: CommonProvider,
    public global: GlobalProvider,
    public device: Device,
    public appVersion: AppVersion,
    private appCenterCrashes: AppCenterCrashes) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if (this.common.networkStatus() == 'none') {
        this.global.isConnected = false;
        this.global.isOnline = false;
        console.log('Network is offline: ' + this.global.isConnected);
        this.common.networkToast();
      } else {
        console.log('Network is online: ' + this.global.isConnected);
        this.global.isConnected = true;
        this.global.isOnline = true;
      }
      this.getNetworkStatus();
      this.getCurrentUserData();
      this.getAppData();
      this.appCenterCrashes.setEnabled(true).then(() => {
        this.appCenterCrashes.lastSessionCrashReport().then(report => {
          if (!report) {
            console.log('No Crash report');
          } else {
            console.log('Crash report', JSON.stringify(report));
          }
        });
      });
    });

    platform.registerBackButtonAction(() => {
      let activePortal = this.ionicApp._loadingPortal.getActive() || this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      if (this.common.menuCtrl.isOpen()) {
        this.common.menuCtrl.close()
      } else if (this.navCtrl.canGoBack()) {
        this.navCtrl.pop();
      } else if (activePortal) {
        activePortal.dismiss();
      } else {                
        if (this.navCtrl.getActive().name === "HomePage") {
          const alert = this.common.alertCtrl.create({
            title: 'Exit App',
            message: 'Are you sure you want to exit this app?',
            cssClass: 'alert-width',
            buttons: [{
              text: 'No',
              role: 'cancel'
            },{
              text: 'Yes',
              handler: () => {
                this.platform.exitApp();
              }
            }]
          });
          alert.present();
        }
      }
    });
  }

  getNetworkStatus() {
    this.common.network.onDisconnect().subscribe(() => {
      this.global.isOnline = false;
      console.log('Network is offline: ' + this.global.isOnline);
      this.common.networkToast();
    });
    this.common.network.onConnect().subscribe(() => {
      this.global.isOnline = true;
      console.log('Network is online: ' + this.global.isOnline);
      this.common.toast('Network is online', 3000, 'bottom', '');
    });
  }

  getCurrentUserData() {
    this.common.nativeStorage.getItem('LoggedIn_User').then((val) => {
      if (val) {
        this.global.currentUser = val;
        this.navCtrl.setRoot(HomePage);
      }
    }, (error) => {
      if (error.code == 2) {
        this.checkSignedUpUser();
      } else {
        console.log('Get Current User Data Error: ' + error);
      }
    });
  }

  checkSignedUpUser() {
    this.common.nativeStorage.getItem('SignedUp_User').then((val) => {
      if (val) {
        this.global.currentUser = val;
        this.navCtrl.setRoot(HomePage);
      }
    }, (error) => {
      if (error.code == 2) {
        this.rootPage = LoginPage;
      } else {
        console.log('Check Signed Up User Error: ' + error);
      }
    });
  }

  getAppData() {
    this.appVersion.getVersionNumber().then(version => {
      this.appVersionNumber = version;
      this.deviceData = {
        appVersion: this.appVersionNumber,
        platform: this.device.platform,
        version: this.device.version,
        model: this.device.model,
        manufacturer: this.device.manufacturer
      }
      this.common.nativeStorage.setItem('Device_Data', this.deviceData);
      console.log('Device Data: ' + JSON.stringify(this.deviceData));
    });
  }

  goto(page) {
    if (page.title === 'Home') {
      this.navCtrl.setRoot(page.component);
    } else {
      this.navCtrl.push(page.component);
    }
    this.common.menuCtrl.close();
  }

  logout() {
    this.common.menuCtrl.close();
    let alert = this.common.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to logout of this app?',
      cssClass: 'alert-width',
      buttons:[{
        text: 'No',
        role: 'cancel'
      },{
        text: 'Yes',
        handler: () => {
          this.common.nativeStorage.clear();
          this.navCtrl.setRoot(LoginPage);
        }
      }]
    });
    alert.present();
  }
}