"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var valSetting = require('../../constants/settings');
var RequestComponent = (function () {
    function RequestComponent(partnerService, paginationService) {
        this.partnerService = partnerService;
        this.paginationService = paginationService;
        this.items = valSetting.SELECT_USER_REQUEST_STATES;
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.getCurrentPage();
        this.getRequest();
    };
    RequestComponent.prototype.getRequest = function (state, page) {
        var _this = this;
        this.partnerService.getRequests(state, page).then(function (response) {
            _this.requests = response.requests;
            _this.partner = response.partner;
            _this.setPagination(response.totalPages, _this.currentPage);
        });
    };
    RequestComponent.prototype.getCurrentPage = function () {
        var _this = this;
        this.paginationService.getCurrentPages.subscribe(function (currentPage) {
            _this.currentPage = currentPage;
            _this.getRequest(_this.paramsSoftDefault, currentPage);
        });
    };
    RequestComponent.prototype.changedState = function (state) {
        if (state) {
            this.getRequest(state);
            this.paramsSoftDefault = state;
        }
        else {
            this.getRequest();
            this.paramsSoftDefault = undefined;
        }
        this.currentPage = 1;
        this.paginationService.resetCurrenPage(1);
    };
    RequestComponent.prototype.setPagination = function (totalPages, currentPages) {
        this.paginationService.getPagesInPaginate(totalPages, currentPages);
    };
    RequestComponent = __decorate([
        core_1.Component({
            templateUrl: './list-user-requests.component.html',
            styleUrls: ['list-user-requests.component.scss']
        })
    ], RequestComponent);
    return RequestComponent;
}());
exports.RequestComponent = RequestComponent;
