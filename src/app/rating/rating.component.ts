import { NgClass } from '@angular/common';
import { Component, computed, model } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
    standalone: true,
    imports: [NgClass]
})
export class RatingComponent {
    rating = model.required<number>();
    feeling = computed(() => {
        switch (this.rating()) {
            case 1:
                return 'Bleh';
            case 2:
                return 'Meh';
            case 3:
                return 'Good';
            case 4:
                return 'Great'
            case 5:
                return 'Grand'
            default:
                return '';
        }
    });

    public scale = [1, 2, 3, 4, 5];

    rated(rating: number) {
        const calc = this.scale.length - rating + 1;
        this.rating.set(calc);
    }
}
