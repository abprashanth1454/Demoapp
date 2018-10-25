import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dob: any;
  phone: string;

  constructor(public navCtrl: NavController, public common: CommonProvider, public global: GlobalProvider) {
  
  }

  user = {
    employeeId: this.employeeId,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    gender: this.gender,
    dob: this.dob,
    phone: this.phone
  }

  ionViewDidEnter() {
    this.common.menuCtrl.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.common.menuCtrl.swipeEnable(true);
  }

  signup() {
    if (this.global.isOnline == false) {
      this.common.toast('Network is offline, please check your network connection.', 5000, 'bottom', '');
      return;
    }
    if (this.user.employeeId === null || this.user.employeeId === '' || this.user.employeeId === undefined) {
      this.common.toast('Enter employee id', 3000, 'bottom', '');
    } else if (this.user.firstName === null || this.user.firstName === '' || this.user.firstName === undefined) {
      this.common.toast('Enter first name', 3000, 'bottom', '');
    } else if (this.user.lastName === null || this.user.lastName === '' || this.user.lastName === undefined) {
      this.common.toast('Enter last name', 3000, 'bottom', '');
    } else if (this.user.email === null || this.user.email === '' || this.user.email === undefined) {
      this.common.toast('Enter email address', 3000, 'bottom', '');
    } else if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
      this.common.toast('Enter password', 3000, 'bottom', '');
    } else if (this.user.password && this.user.password.length < 6) {
      this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
    } else if (this.user.confirmPassword === null || this.user.confirmPassword === '' || this.user.confirmPassword === undefined) {
      this.common.toast('Enter confirm password', 3000, 'bottom', '');
    } else if (this.user.password !== this.user.confirmPassword) {
      this.common.toast('Your password & confirm password does not match', 3000, 'bottom', '');
    } else if (this.user.dob === null || this.user.dob === '' || this.user.dob === undefined) {
      this.common.toast('Select your date of birth', 3000, 'bottom', '');
    } else if (this.user.phone === null || this.user.phone === undefined) {
      this.common.toast('Enter your phone number', 3000, 'bottom', '');
    } else if (this.user.phone && this.user.phone.length < 10) {
      this.common.toast('Phone number must contain 10 digits', 3000, 'bottom', '');
    } else {
      this.common.loading('Signing Up', 1000, '');
      this.storeData(this.user);
    }
  }

  storeData(user) {
    this.common.nativeStorage.setItem('SignedUp_User', user);
    this.global.currentUser = {
      employeeId: user.employeeId,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.firstName + user.lastName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      dob: user.dob,
      phone: user.phone
    }
    this.navCtrl.setRoot(HomePage);
  }
}