import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BakedGood } from '../data.service';

@Component({
    selector: 'app-good-view',
    templateUrl: './good-view.component.html',
    styleUrl: './good-view.component.css'
})
export class GoodViewComponent {
    @Input() bakedGood!: BakedGood;
    @Output() deleteGood = new EventEmitter<number>();
    @Output() rateGood = new EventEmitter<number>();

    deleteClicked() {
        this.deleteGood.emit(this.bakedGood.id);
    }

    rateClicked(rating: number) {
        this.rateGood.emit(rating);
    }
}
