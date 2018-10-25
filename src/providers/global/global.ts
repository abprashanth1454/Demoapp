import { Injectable } from '@angular/core';

@Injectable()

export class GlobalProvider {

  isConnected: boolean = true;
  isOnline: boolean = true;
  currentUser:any = {
    employeeId: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    phone: ''
  }
}