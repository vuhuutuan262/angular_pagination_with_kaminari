"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PaginationComponent = (function () {
    function PaginationComponent(paginationService) {
        this.paginationService = paginationService;
        this.pages = [];
        this.totalPages = 0;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pagesSubscription = this.paginationService.getPages.subscribe(function (pages) {
            _this.pages = pages;
        });
        this.evenPaginateSubscription = this.paginationService.showEvent.subscribe(function (flag) {
            _this.canJumpPage = flag; // Show Event Of Pagination
        });
        this.currentPagesubscription = this.paginationService.resetCurrentPage.subscribe(function (pageReset) {
            _this.currentPage = pageReset; // Listening when use reset pages
        });
    };
    PaginationComponent.prototype.ngOnDestroy = function () {
        this.pagesSubscription.unsubscribe();
        this.evenPaginateSubscription.unsubscribe();
        this.currentPagesubscription.unsubscribe();
    };
    PaginationComponent.prototype.selectPagination = function (page) {
        this.currentPage = page;
        this.paginationService.getCurrentPage(page);
    };
    //Use Event Of Pagination
    PaginationComponent.prototype.eventOfPagination = function (isPreview, final) {
        var lastPages = this.paginationService.lastPages;
        var page = 0;
        if (isPreview) {
            final ? page = 1 : page = this.currentPage - 1 || 1;
        }
        else {
            if (final) {
                page = lastPages;
            }
            else {
                this.currentPage === lastPages ? page = lastPages : page = this.currentPage + 1 || 2;
            }
        }
        this.currentPage = page;
        this.selectPagination(page);
    };
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            templateUrl: 'pagination.component.html',
            styleUrls: ['pagination.component.scss']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
