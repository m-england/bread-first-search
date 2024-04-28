import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimerComponent } from '../timer/timer.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    standalone: true,
    imports: [RouterLink, TimerComponent]
})
export class NavComponent {
    timerModal = viewChild.required('timerModal', { read: ElementRef<HTMLDialogElement> });

    openTimer() {
        this.timerModal().nativeElement.showModal();
    }

    closeTimer() {
        this.timerModal().nativeElement.close();
    }
}
