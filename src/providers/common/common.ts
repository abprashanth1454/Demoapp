import { Injectable } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

@Injectable()

export class CommonProvider {
  
  networkType: string;

  constructor(public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public nativeStorage: NativeStorage,
    public network: Network,
    public toastCtrl: ToastController) {
    
  }

  networkStatus() {
    return this.network.type;
  }

  alert(alertTitle, alertSubTitle, alertCss, alertButtonText) {
    const alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSubTitle,
      cssClass: alertCss,
      buttons: [alertButtonText]
    });
    alert.present();
  }

  loading(loadingMessage, loadingDuration, loadingCss) {
    const loader = this.loadingCtrl.create({
      content: loadingMessage,
      duration: loadingDuration,
      cssClass: loadingCss
    });
    loader.present();
  }

  toast(toastMessage, toastDuration, toastPosition, toastCss) {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: toastDuration,
      position: toastPosition,
      cssClass: toastCss
    });
    toast.present();
  }

  networkToast() {
    const networkToast = this.toastCtrl.create({
      message: 'Network is offline, please check your internet connection.',
      duration: 5000,
      position: 'bottom',
      cssClass: ''
    });
    networkToast.present();
  }
}