import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private readonly backendURL = 'http://localhost:3333';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public async get(path: string, url: string = this.backendURL): Promise<any> {
    const token = await this.authService.getToken();
    const response = this.httpClient.get(`${url}/${path}`, {
      observe: 'response',
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }

  public async post(
    path: string,
    body: any,
    isFormData: boolean = false,
    url: string = this.backendURL
  ): Promise<any> {
    const token = await this.authService.getToken();

    if (isFormData) {
      const formData = new FormData();

      formData.append('file', body.file)
      formData.append('dtoString', JSON.stringify(body))
      const response = this.httpClient.post(`${url}/${path}`, formData, {
        observe: 'response',
        headers: { Authorization: `Bearer ${token}`, enctype: 'multipart/form-data' },
      });
      return response;
    } else {
      const response = this.httpClient.post(`${url}/${path}`, body, {
        observe: 'response',
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    }
  }

  public async patch(
    path: string,
    body: Object,
    url: string = this.backendURL
  ): Promise<any> {
    const token = await this.authService.getToken();
    const response = this.httpClient.patch(`${url}/${path}`, body, {
      observe: 'response',
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }

  public async put(
    path: string,
    body: Object,
    url: string = this.backendURL
  ): Promise<any> {
    const token = await this.authService.getToken();
    const response = this.httpClient.put(`${url}/${path}`, body, {
      observe: 'response',
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }

  public async delete(
    path: string,
    url: string = this.backendURL
  ): Promise<any> {
    const token = await this.authService.getToken();
    const response = this.httpClient.delete(`${url}/${path}`, {
      observe: 'response',
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }
}
