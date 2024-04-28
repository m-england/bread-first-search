import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { BakedGoodsService } from '../baked-goods.service';
import { BakedGood } from '../data.service';
import { GoodViewComponent } from '../good-view/good-view.component';

@Component({
    selector: 'app-good-detail',
    standalone: true,
    imports: [CommonModule, GoodViewComponent],
    templateUrl: './good-detail.component.html',
    styleUrl: './good-detail.component.css'
})
export class GoodDetailComponent {
    id = input.required<number>();

    public bakedGood$!: Observable<BakedGood | null>;

    constructor(private bakedGoods: BakedGoodsService) { }

    ngOnInit(): void {
        this.bakedGood$ = this.bakedGoods.get(this.id());
    }
}
