import { Component, input, output } from '@angular/core';
import { BakedGood } from '../data.service';
import { RatingComponent } from '../rating/rating.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-good-view',
    templateUrl: './good-view.component.html',
    styleUrl: './good-view.component.css',
    standalone: true,
    imports: [RatingComponent, RouterLink]
})
export class GoodViewComponent {
    bakedGood = input.required<BakedGood>();

    deleteGood = output<number>();

    deleteClicked() {
        this.deleteGood.emit(this.bakedGood().id);
    }
}
