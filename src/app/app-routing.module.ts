import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodAddComponent } from './good-add/good-add.component';

const routes: Routes = [
    { path: '', component: GoodsListComponent },
    { path: 'add', component: GoodAddComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
