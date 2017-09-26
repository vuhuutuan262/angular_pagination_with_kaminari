import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './list-samples.component';
import { PartnerService } from '../partner.service';

@NgModule({
  imports: [
    RequestRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RequestComponent
  ],
  providers: [
    PartnerService
  ]
})

export class RequestModule { }
