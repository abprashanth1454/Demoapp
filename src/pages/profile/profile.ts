import { Component } from '@angular/core';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  myProfile: any;

  constructor(public common: CommonProvider, public global: GlobalProvider) {
    this.myProfile = this.global.currentUser;
  }

  ionViewWillLoad() {
    
  }
}