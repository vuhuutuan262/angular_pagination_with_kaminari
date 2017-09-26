import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule?sync=true'
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule?sync=true'
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'requests',
        loadChildren: './request/request.module#RequestModule?sync=true'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PartnerRoutingModule { }
