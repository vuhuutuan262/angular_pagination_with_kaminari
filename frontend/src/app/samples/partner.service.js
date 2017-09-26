"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var header_basic_service_1 = require('../services/header_basic_service');
var apiUrl = require('../constants/api-url');
require('rxjs/add/operator/toPromise');
var PartnerService = (function (_super) {
    __extends(PartnerService, _super);
    function PartnerService(http, cookieService) {
        _super.call(this, cookieService);
        this.http = http;
        this.cookieService = cookieService;
    }
    PartnerService.prototype.getRequests = function (paramsState, paramsPage) {
        var params = new http_1.URLSearchParams();
        params.set('state', paramsState);
        params.set('page', paramsPage);
        return this.http
            .get(apiUrl.USER_REQUESTS_URL, { headers: this.commonHeader, search: params })
            .toPromise()
            .then(function (response) {
            var data = response.json();
            return {
                totalPages: data.total_requests,
                requests: data.list_user_requests,
                partner: data.partner
            };
        });
    };
    PartnerService.prototype.updateInfo = function (value) {
        return this.http
            .put(apiUrl.PARTNER_INFO_URL, value, { headers: this.commonHeader })
            .toPromise().then().catch(this.handleError);
    };
    PartnerService.prototype.getInfo = function () {
        return this.http
            .get(apiUrl.PARTNER_INFO_URL, { headers: this.commonHeader })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PartnerService.prototype.changeEmail = function (value) {
        var params = {
            current_email: value.currentEmail,
            current_password: value.currentPassword,
            email: value.newEmail
        };
        return this.http
            .put(apiUrl.PARTNER_UPDATE_EMAIL_URL, params, { headers: this.commonHeader })
            .toPromise().then().catch(this.handleError);
    };
    PartnerService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    PartnerService = __decorate([
        core_1.Injectable()
    ], PartnerService);
    return PartnerService;
}(header_basic_service_1.HeaderBasicService));
exports.PartnerService = PartnerService;
