import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AuthorizationProvider } from '../../providers/authorization/authorization';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  
  email: string;
  password: string;
  currentUserData: any;
  authData: any;
  totalUsers: any;
  validEmail: any;

  constructor(public authorization: AuthorizationProvider,
    public navCtrl: NavController,
    public common: CommonProvider,
    public global: GlobalProvider) {
  
  }

  user = {
    email: this.email,
    password: this.password
  }

  ionViewDidEnter() {
    this.user.email = '';
    this.user.password = '';
    this.common.menuCtrl.swipeEnable(false);
    if (this.common.networkStatus() == 'none') {
      this.common.networkToast();
    }
  }

  ionViewWillLeave() {
    this.common.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {
    
  }

  submit() {
    if (this.global.isOnline == false) {
      this.common.networkToast();
      return;
    }
    if (this.user.email === null || this.user.email === '' || this.user.email === undefined) {
      this.common.toast('Enter your email address', 3000, 'bottom', '');
    } else if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
      this.common.toast('Enter your password', 3000, 'bottom', '');
    } else if (this.user.password && this.user.password.length < 6) {
      this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
    } else {
      this.validateUser();
    }
  }

  validateUser() {
    this.authorization.getLoginData().subscribe((data) => {
      this.authData = data;
      this.validEmail = this.authData.filter(
        user => user.email === this.user.email 
      );
      if (this.validEmail == '') {
        this.common.toast('Not a registered user. Please signup before logging in', 3000, 'bottom', '');
      } else {
        if (this.validEmail[0].password == this.user.password) {
          this.common.loading('Logging In', 1000, '');
          this.common.nativeStorage.setItem('LoggedIn_User', this.validEmail[0]);
          this.global.currentUser = this.validEmail[0];
          console.log("Valid Email" + JSON.stringify(this.global.currentUser));
          this.navCtrl.setRoot(HomePage);
        } else {
          this.common.toast('Invalid Credentials', 3000, 'bottom', '');
        }
      }
    }, (error) => {
      console.log("Validate User: " + error);
      this.common.toast(error, 5000, 'bottom', '');
    });
  }

  forgotPassword() {
    if (this.global.isOnline == false) {
      this.common.networkToast();
      return;
    }
    let alert = this.common.alertCtrl.create({
      title: 'Forgot Password',
      message: 'Type in your email address to receive your password',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter your email address'
        }
      ],
      cssClass: 'alert-width',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Send Email',
          handler: data => {
            
          }
        }
      ]
    });
    alert.present();
  }

  signUp() {
    if (this.global.isOnline == false) {
      this.common.networkToast();
      return;
    }
    this.navCtrl.push(SignupPage);
  }
}