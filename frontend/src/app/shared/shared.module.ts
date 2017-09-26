import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslationLoaderService } from '../services/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';

import { ControlMessagesComponent } from '../shared/control-messages.component';
import { ErrorHandlingComponent } from '../shared/error-handling.component';
import { PaginationComponent } from './pagination/pagination.component';

import { DangerTextDirective } from '../shared/danger-text.directive';

import * as Settings from '../constants/settings';
import { environment } from '../../environments/environment';

export function createTranslateLoader() {
  return new TranslationLoaderService();
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    CommonModule
  ],
  declarations: [
    ControlMessagesComponent,
    DangerTextDirective,
    ErrorHandlingComponent,
    PaginationComponent
  ],
  exports: [
    TranslateModule,
    ControlMessagesComponent,
    ErrorHandlingComponent,
    DangerTextDirective,
    PaginationComponent
  ],
  providers: [HttpClient]
})

export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(Settings.DEFAULT_LANGUAGE);
    if (!environment.production && localStorage.getItem(Settings.LOCAL_STORAGE_LANGUAGE_KEY) !== null) {
      translate.use(localStorage.getItem(Settings.LOCAL_STORAGE_LANGUAGE_KEY));
    }
  }
}
