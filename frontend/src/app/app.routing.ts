import { UsersLayoutComponent } from './layouts/users-layout.component';
import { PartnersLayoutComponent } from './layouts/partners-layout.component';

import { Routes } from '@angular/router';
import { UserAuthGuard, PartnerAuthGuard } from './guard/auth-guard.service';

export const routes: Routes = [
  {
    // TODO: check if user already signed in, redirect to last step
    path: '',
    redirectTo: 'samples',
    pathMatch: 'full'
  },
  {
    // Temporary page that user/partner will be redirected to after sign up/in
    path: '',
    component: UsersLayoutComponent,
    children: [
      {
        path: 'samples',
        loadChildren: './sample/sample.module#SampleModule?sync=true'
      }
    ]
  },
  {
    path: 'users',
    component: UsersLayoutComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: '',
        loadChildren: './user/user.module#UserModule?sync=true'
      }
    ]
  },
  {
    path: 'partners',
    component: PartnersLayoutComponent,
    canActivate: [PartnerAuthGuard],
    children: [
      {
        path: '',
        loadChildren: './partner/partner.module#PartnerModule?sync=true'
      }
    ]
  }
];
