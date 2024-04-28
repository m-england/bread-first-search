import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { BakedGoodsStore } from '../baked-goods.store';
import { BakedGood } from '../data.service';
import { GoodViewComponent } from '../good-view/good-view.component';

@Component({
    selector: 'app-goods-list',
    templateUrl: './goods-list.component.html',
    styleUrl: './goods-list.component.css',
    standalone: true,
    imports: [GoodViewComponent, CommonModule, AsyncPipe]
})
export class GoodsListComponent implements OnInit {
    readonly store = inject(BakedGoodsStore);

    constructor() { }

    ngOnInit(): void {
        this.store.loadAll();
    }

    onRate(bakedGood: BakedGood, newRating: number) {
        bakedGood.rating = newRating;
    }
}
