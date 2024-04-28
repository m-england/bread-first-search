import { Component, ElementRef, ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    standalone: true,
    imports: [RouterLink, TimerComponent]
})
export class NavComponent {
    @ViewChild('timerModal') timerModal!: ElementRef<HTMLDialogElement>;

    openTimer() {
        this.timerModal.nativeElement.showModal();
    }

    closeTimer() {
        this.timerModal.nativeElement.close();
    }
}
