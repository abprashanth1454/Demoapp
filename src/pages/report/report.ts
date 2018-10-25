import { Component } from '@angular/core';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})

export class ReportPage {
  
  constructor(public common: CommonProvider) {
    
  }

  ionViewDidLoad() {
    
  }
}
