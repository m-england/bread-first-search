import { NgClass } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
    standalone: true,
    imports: [NgClass]
})
export class RatingComponent {
    rating = model.required<number>();

    public scale = [1, 2, 3, 4, 5];

    rated(rating: number) {
        const calc = this.scale.length - rating + 1;
        this.rating.set(calc);
    }
}
