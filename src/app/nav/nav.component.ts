import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
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
