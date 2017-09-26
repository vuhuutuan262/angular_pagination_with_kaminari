import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthGuard, PartnerAuthGuard } from './guard/auth-guard.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message-service';
import { FlashMessageService } from './services/flash-message.service';
import { BaseFormValidatorService } from './services/base-form-validator.service';
import { PaginationService } from './services/pagination.service';

import { AppComponent } from './app.component';
import { UsersLayoutComponent } from './layouts/users-layout.component';
import { PartnersLayoutComponent } from './layouts/partners-layout.component';
import { AdminsLayoutComponent } from './layouts/admins-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersLayoutComponent,
    PartnersLayoutComponent,
    AdminsLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlashMessagesModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    CookieService,
    PartnerAuthGuard,
    UserAuthGuard,
    AuthService,
    MessageService,
    FlashMessageService,
    BaseFormValidatorService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
