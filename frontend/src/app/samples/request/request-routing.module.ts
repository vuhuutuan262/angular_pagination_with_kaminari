import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestComponent } from './list-samples.component';

const routes: Routes = [
  {
    path: '', component: RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RequestRoutingModule { }
