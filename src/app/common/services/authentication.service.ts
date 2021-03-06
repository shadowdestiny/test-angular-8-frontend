import {Injectable} from '@angular/core';
import {API} from '../../config/api';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  hasSession = false;
  user: any;

  constructor(
    public http: HttpClient, public sessionStorage: SessionStorageService) {

  }

  public isLoggedIn() {
    const user = this.sessionStorage.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public login(email: string, password: string) {
    const url = `${API.AUTH_SERVICES_BASE_URL}/users/login`;

    return this.http.post(url, {
      username: email,
      password,
    });
  }

  public logout() {
    this.user = null;
    this.hasSession = false;
    this.sessionStorage.clear('user');
  }
}
