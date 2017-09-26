"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/toPromise');
var valSetting = require('../constants/settings');
var PaginationService = (function () {
    function PaginationService() {
        this.pages = new Subject_1.Subject();
        this.currentPage = new Subject_1.Subject();
        this.initCurrentPage = new Subject_1.Subject();
        this.getPages = this.pages.asObservable();
        this.getCurrentPages = this.currentPage.asObservable();
        this.resetCurrentPage = this.initCurrentPage.asObservable();
        //Event
        this.eventOfPaginate = new Subject_1.Subject();
        this.showEvent = this.eventOfPaginate.asObservable();
    }
    PaginationService.prototype.getPagesInPaginate = function (pages, currentPage, pageDistance, pageSize) {
        //Get Pages
        if (currentPage === void 0) { currentPage = 1; }
        if (pageDistance === void 0) { pageDistance = valSetting.DEFAULT_PAGE_SPACE; }
        if (pageSize === void 0) { pageSize = valSetting.DEFAULT_PAGE_SIZE; }
        var listPages = [];
        var totalPages = Math.ceil(pages / pageSize);
        var startPage, endPage;
        var event;
        if (totalPages === 0 || totalPages === 1) {
            event = false;
        }
        else if (totalPages < 2 * pageDistance) {
            startPage = 1;
            endPage = totalPages;
            event = true;
        }
        else {
            if (currentPage <= pageDistance) {
                startPage = 1;
                endPage = 2 * pageDistance + 1;
            }
            else if (currentPage + pageDistance > totalPages) {
                startPage = totalPages - 2 * pageDistance;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - pageDistance;
                endPage = currentPage + pageDistance;
            }
            event = true;
        }
        for (var i = startPage; i <= endPage; i++) {
            listPages.push(i);
        }
        this.pages.next(listPages);
        this.eventOfPaginate.next(event);
        this.lastPages = totalPages;
    };
    PaginationService.prototype.getCurrentPage = function (currentPage) {
        this.currentPage.next(currentPage);
    };
    PaginationService.prototype.resetCurrenPage = function (page) {
        this.initCurrentPage.next(page);
    };
    PaginationService = __decorate([
        core_1.Injectable()
    ], PaginationService);
    return PaginationService;
}());
exports.PaginationService = PaginationService;
