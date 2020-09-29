import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import { JwtAuthResponse } from './jwt-auth-response';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
import { OriginConfig } from '../origin-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = OriginConfig.origin + '/api/auth';
  private authTokenName = 'authenticationToken';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + "/signup", registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url + '/login', loginPayload)
      .pipe(map(data => {
        this.localStorageService.store(this.authTokenName, data.authenticationToken);
        this.localStorageService.store('username', data.username);
        return true;
      }));
  }
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }
  logout() {
    this.localStorageService.clear(this.authTokenName);
    this.localStorageService.clear('username');
  }
}
