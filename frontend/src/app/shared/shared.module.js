"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/common/http');
var core_2 = require('@ngx-translate/core');
var translation_loader_service_1 = require('../services/translation-loader.service');
var control_messages_component_1 = require('../shared/control-messages.component');
var error_handling_component_1 = require('../shared/error-handling.component');
var pagination_component_1 = require('./pagination/pagination.component');
var danger_text_directive_1 = require('../shared/danger-text.directive');
var Settings = require('../constants/settings');
var environment_1 = require('../../environments/environment');
function createTranslateLoader() {
    return new translation_loader_service_1.TranslationLoaderService();
}
exports.createTranslateLoader = createTranslateLoader;
var SharedModule = (function () {
    function SharedModule(translate) {
        this.translate = translate;
        translate.setDefaultLang(Settings.DEFAULT_LANGUAGE);
        if (!environment_1.environment.production && localStorage.getItem(Settings.LOCAL_STORAGE_LANGUAGE_KEY) !== null) {
            translate.use(localStorage.getItem(Settings.LOCAL_STORAGE_LANGUAGE_KEY));
        }
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                }),
                common_1.CommonModule
            ],
            declarations: [
                control_messages_component_1.ControlMessagesComponent,
                danger_text_directive_1.DangerTextDirective,
                error_handling_component_1.ErrorHandlingComponent,
                pagination_component_1.PaginationComponent
            ],
            exports: [
                core_2.TranslateModule,
                control_messages_component_1.ControlMessagesComponent,
                error_handling_component_1.ErrorHandlingComponent,
                danger_text_directive_1.DangerTextDirective,
                pagination_component_1.PaginationComponent
            ],
            providers: [http_1.HttpClient]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
