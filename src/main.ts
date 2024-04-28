

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { ServiceData } from './app/data.service';

const routes: Routes = [
    { path: '', loadComponent: () => import('./app/goods-list/goods-list.component').then(m => m.GoodsListComponent) },
    { path: 'add', loadComponent: () => import('./app/good-add/good-add.component').then(m => m.GoodAddComponent) },
    { path: 'detail/:id', loadComponent: () => import('./app/good-detail/good-detail.component').then(m => m.GoodDetailComponent) },

];

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()),
        importProvidersFrom(BrowserModule, ReactiveFormsModule, InMemoryWebApiModule.forRoot(ServiceData)),
    ]
})
    .catch(err => console.error(err));
