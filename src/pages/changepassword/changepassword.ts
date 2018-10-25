import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})

export class ChangepasswordPage {
  
  password: string;
  confirmPassword: string;

  constructor(public navCtrl: NavController, public common: CommonProvider, public global: GlobalProvider) {
  
  }

  user = {
    password: this.password,
    confirmPassword: this.confirmPassword
  }

  ionViewDidLoad() {
    
  }

  changePassword() {
    if (this.global.isOnline == false) {
      this.common.networkToast();
      return;
    }
    if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
      this.common.toast('Enter your new password', 3000, 'bottom', '');
    } else if (this.user.password.length < 6) {
      this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
    } else if (this.user.confirmPassword === null || this.user.confirmPassword === '' || this.user.confirmPassword === undefined) {
      this.common.toast('Enter confirm password', 3000, 'bottom', '');
    } else if (this.user.confirmPassword.length < 6) {
      this.common.toast('Confirm Password must contain atleast 6 characters', 3000, 'bottom', '');
    } else if (this.user.password !== this.user.confirmPassword) {
      this.common.toast('Your new password & confirm password does not match', 3000, 'bottom', '');
    } else {
      this.common.menuCtrl.close();
      this.common.nativeStorage.clear();
      this.navCtrl.setRoot(LoginPage);
    }
  }
}