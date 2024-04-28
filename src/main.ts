

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { ServiceData } from './app/data.service';

const routes: Routes = [
    { path: '', loadComponent: () => import('./app/goods-list/goods-list.component').then(m => m.GoodsListComponent) },
    { path: 'add', loadComponent: () => import('./app/good-add/good-add.component').then(m => m.GoodAddComponent) }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        importProvidersFrom(BrowserModule, ReactiveFormsModule, InMemoryWebApiModule.forRoot(ServiceData)),
    ]
})
    .catch(err => console.error(err));
