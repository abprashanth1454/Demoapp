import { Component} from '@angular/core';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public common: CommonProvider, public global: GlobalProvider) {
    
  }

  ionViewDidLoad() {
    
  }
}