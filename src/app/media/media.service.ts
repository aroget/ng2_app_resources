import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { APP_API } from '../settings/api';
import { API_ENDPOINTS, BaseService } from '../app.service';

@Injectable()
export class MediaService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getMedia(search?: URLSearchParams) {
    return super.get(APP_API.MEDIA, API_ENDPOINTS.IMAGES, search).map(res => res.json());
  }

  uploadMedia(media: File) {
    let headers = new Headers();
    let formData: FormData = new FormData();
    let options = new RequestOptions({ headers: headers });

    formData.append('file', media, media.name);
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return super.post(APP_API.MEDIA, API_ENDPOINTS.IMAGES, formData, options).map(res => res.json());
  }
}
