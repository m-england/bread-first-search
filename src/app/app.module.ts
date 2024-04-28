import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceData } from './data.service';
import { GoodAddComponent } from './good-add/good-add.component';
import { GoodViewComponent } from './good-view/good-view.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { NavComponent } from './nav/nav.component';
import { RatingComponent } from './rating/rating.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        GoodAddComponent,
        GoodViewComponent,
        GoodsListComponent,
        RatingComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(ServiceData)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
