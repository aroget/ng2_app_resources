import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { APP_API } from './settings/api';

export const API_ENDPOINTS = {
  'QUESTION': 'question',
  'QUESTIONS': 'questions',
  'IMAGES': 'images',
  'TAG': 'tag',
  'ROLES': 'roles',
  'ROLE': 'role'
};


@Injectable()
export class BaseService {
  private API_URL;

  constructor(
    private http: Http
  ) {
    this.API_URL = APP_API;
  }

  get(api: string, endpoint: string, search?: URLSearchParams) {
    return this.http.get(`${api}/${endpoint}`, { search });
  }

  post(api: string, endpoint: string, data: any, headers?: any) {
    return this.http.post(`${api}/${endpoint}`, data, { headers });
  }

  put(api: string, endpoint: string, data: any) {
    return this.http.put(`${api}/${endpoint}`, data);
  }

  delete(api: string, endpoint: string) {
    return this.http.delete(`${api}/${endpoint}`);
  }
}
