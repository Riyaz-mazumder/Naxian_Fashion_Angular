import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  USER_KEY = 'user_key';

  saveUser(data: any): void {
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(data));
  }
  getUser() {
    return sessionStorage.getItem(this.USER_KEY);
  }
}
