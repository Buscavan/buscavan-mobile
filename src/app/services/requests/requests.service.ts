import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private readonly backendURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public async get(path: string, url: string = this.backendURL): Promise<any> {
    const response = this.httpClient.get(`${url}/${path}`, { observe: 'response' });
    return response;
  }

  public async post(path: string, body: Object, url: string = this.backendURL): Promise<any> {
    const response = this.httpClient.post(`${url}/${path}`, body, { observe: 'response' });
    return response;
  }

  public async patch(path: string, body: Object, url: string = this.backendURL): Promise<any> {
    const response = this.httpClient.patch(`${url}/${path}`, body, { observe: 'response' });
    return response;
  }

  public async put(path: string, body: Object, url: string = this.backendURL): Promise<any> {
    const response = this.httpClient.put(`${url}/${path}`, body, { observe: 'response' });
    return response;
  }

  public async delete(path: string, url: string = this.backendURL): Promise<any> {
    const response = this.httpClient.delete(`${url}/${path}`, { observe: 'response' });
    return response;
  }
}
