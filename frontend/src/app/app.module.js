"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var ngx_cookie_service_1 = require('ngx-cookie-service');
var auth_guard_service_1 = require('./guard/auth-guard.service');
var angular2_flash_messages_1 = require('angular2-flash-messages');
var auth_service_1 = require('./services/auth.service');
var message_service_1 = require('./services/message-service');
var flash_message_service_1 = require('./services/flash-message.service');
var base_form_validator_service_1 = require('./services/base-form-validator.service');
var pagination_service_1 = require('./services/pagination.service');
var app_component_1 = require('./app.component');
var users_layout_component_1 = require('./layouts/users-layout.component');
var partners_layout_component_1 = require('./layouts/partners-layout.component');
var admins_layout_component_1 = require('./layouts/admins-layout.component');
var app_routing_module_1 = require('./app-routing.module');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                users_layout_component_1.UsersLayoutComponent,
                partners_layout_component_1.PartnersLayoutComponent,
                admins_layout_component_1.AdminsLayoutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                angular2_flash_messages_1.FlashMessagesModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule
            ],
            providers: [
                ngx_cookie_service_1.CookieService,
                auth_guard_service_1.PartnerAuthGuard,
                auth_guard_service_1.UserAuthGuard,
                auth_service_1.AuthService,
                message_service_1.MessageService,
                flash_message_service_1.FlashMessageService,
                base_form_validator_service_1.BaseFormValidatorService,
                pagination_service_1.PaginationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
