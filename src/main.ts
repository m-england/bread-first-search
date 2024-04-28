

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { ServiceData } from './app/data.service';
import { GoodAddComponent } from './app/good-add/good-add.component';
import { GoodsListComponent } from './app/goods-list/goods-list.component';

const routes: Routes = [
    { path: '', component: GoodsListComponent },
    { path: 'add', component: GoodAddComponent }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        importProvidersFrom(BrowserModule, ReactiveFormsModule, InMemoryWebApiModule.forRoot(ServiceData)),
    ]
})
    .catch(err => console.error(err));
