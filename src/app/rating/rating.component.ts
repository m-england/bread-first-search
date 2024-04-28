import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css',
    standalone: true,
    imports: [NgFor, NgClass]
})
export class RatingComponent {
    @Input() rating!: number;
    @Output() ratingUpdated = new EventEmitter<number>();
    public scale = [1, 2, 3, 4, 5];

    rated(rating: number) {
        const calc = this.scale.length - rating + 1;
        this.ratingUpdated.emit(calc);
    }
}
