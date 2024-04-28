import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { BakedGoodsStore } from '../baked-goods.store';
import { GoodViewComponent } from '../good-view/good-view.component';

@Component({
    selector: 'app-good-detail',
    standalone: true,
    imports: [CommonModule, GoodViewComponent],
    templateUrl: './good-detail.component.html',
    styleUrl: './good-detail.component.css'
})
export class GoodDetailComponent implements OnInit {
    id = input.required<number>();

    readonly store = inject(BakedGoodsStore);

    constructor() { }

    ngOnInit(): void {
        this.store.loadAll();
        this.store.selectId(this.id());
    }
}
