import { Component, Input, OnInit, input } from '@angular/core';
import { BakedGoodsService } from '../baked-goods.service';
import { Observable } from 'rxjs';
import { BakedGood } from '../data.service';
import { GoodViewComponent } from '../good-view/good-view.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-good-detail',
    standalone: true,
    imports: [CommonModule, GoodViewComponent],
    templateUrl: './good-detail.component.html',
    styleUrl: './good-detail.component.css'
})
export class GoodDetailComponent implements OnInit {
    id = input.required<number>();

    public bakedGood$!: Observable<BakedGood | null>;

    constructor(private bakedGoods: BakedGoodsService) { }

    ngOnInit(): void {
        this.bakedGood$ = this.bakedGoods.get(this.id());
    }
}
