import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthorizationProvider {
  
  authData: any;

  constructor(public http: HttpClient) {
    
  }

  getLoginData(): Observable<any> {
    return this.http.get('assets/login.json').map((res: Response) => res);
  }
}