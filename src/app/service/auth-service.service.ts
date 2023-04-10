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
  getUserId() {
    const data = sessionStorage.getItem(this.USER_KEY);
    if (data) {
      return JSON.parse(data).id;
    } else {
      // handle case where data is null
      return null;
    }
  }
}
