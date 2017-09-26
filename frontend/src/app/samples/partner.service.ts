import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { CookieService } from 'ngx-cookie-service';
import { HeaderBasicService } from '../services/header_basic_service';

import { Partner } from '../interface/partner';

import * as apiUrl from '../constants/api-url';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PartnerService extends HeaderBasicService {

  constructor(
    private http: Http,
    private cookieService: CookieService
  ) { super(cookieService); }

  getRequests(paramsState, paramsPage): Promise<any> {
    const params = new URLSearchParams();

    params.set('state', paramsState);
    params.set('page', paramsPage);

    return this.http
      .get(apiUrl.USER_REQUESTS_URL, {headers: this.commonHeader, search: params})
      .toPromise()
      .then(response => {
        const data = response.json();
        return {
          totalPages: data.total_requests,
          requests: data.list_user_requests,
          partner: data.partner
        };
      });
  }

  updateInfo(value): Promise<any> {
    return this.http
      .put(apiUrl.PARTNER_INFO_URL, value, {headers: this.commonHeader})
      .toPromise().then().catch(this.handleError);
  }

  getInfo(): Promise<Partner> {
    return this.http
      .get(apiUrl.PARTNER_INFO_URL, {headers: this.commonHeader})
      .toPromise()
      .then(response => response.json().data as Partner)
      .catch(this.handleError);
  }

  changeEmail(value): Promise<any> {
    const params = {
      current_email: value.currentEmail,
      current_password: value.currentPassword,
      email: value.newEmail
    };

    return this.http
      .put(apiUrl.PARTNER_UPDATE_EMAIL_URL, params, {headers: this.commonHeader})
      .toPromise().then().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
