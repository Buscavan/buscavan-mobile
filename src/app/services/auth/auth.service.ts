import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userRegisteringData!: User;

  constructor(private localStorage: LocalStorageService) { }

  public async setUser(user: User) {
    return await this.localStorage.set('user', user);
  }

  public async getUser(): Promise<User> {
    const user: User = await this.localStorage.get('user');
    return user;
  }

  public async removeUser() {
    return await this.localStorage.remove('user');
  }

  public async setToken(token: string) {
    return await this.localStorage.set('token', token);
  }

  public async getToken(): Promise<string> {
    const token = await this.localStorage.get('token');
    return token;
  }

  public async removeToken() {
    return await this.localStorage.remove('token');
  }

  public getUserRegisteringData() {
    return this.userRegisteringData;
  }

  public setUserRegisteringData(data: User) {
    this.userRegisteringData = data;
  }
}
