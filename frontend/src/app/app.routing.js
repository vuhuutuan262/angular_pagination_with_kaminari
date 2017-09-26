"use strict";
var users_layout_component_1 = require('./layouts/users-layout.component');
var partners_layout_component_1 = require('./layouts/partners-layout.component');
var auth_guard_service_1 = require('./guard/auth-guard.service');
exports.routes = [
    {
        // TODO: check if user already signed in, redirect to last step
        path: '',
        redirectTo: 'samples',
        pathMatch: 'full'
    },
    {
        // Temporary page that user/partner will be redirected to after sign up/in
        path: '',
        component: users_layout_component_1.UsersLayoutComponent,
        children: [
            {
                path: 'samples',
                loadChildren: './sample/sample.module#SampleModule?sync=true'
            }
        ]
    },
    {
        path: 'users',
        component: users_layout_component_1.UsersLayoutComponent,
        canActivate: [auth_guard_service_1.UserAuthGuard],
        children: [
            {
                path: '',
                loadChildren: './user/user.module#UserModule?sync=true'
            }
        ]
    },
    {
        path: 'partners',
        component: partners_layout_component_1.PartnersLayoutComponent,
        canActivate: [auth_guard_service_1.PartnerAuthGuard],
        children: [
            {
                path: '',
                loadChildren: './partner/partner.module#PartnerModule?sync=true'
            }
        ]
    }
];
