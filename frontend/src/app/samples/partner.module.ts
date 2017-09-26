import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PartnerRoutingModule } from './partner-routing.module';

import { PartnerService } from './partner.service';

import { ValidatorMessageService } from '../services/validator-message.service';
import { PartnerService } from './partner.service';

import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ValidatorMessageService,
    PartnerService
  ],
  declarations: [
    FaqsComponent,
    TermsComponent
  ]
})

export class PartnerModule { }
