import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {
    @Output() close = new EventEmitter();

    public hour: number = 0;
    public minute: number = 0;
    public second: number = 0;

    public running: boolean = false;

    ngOnInit(): void {
    }

    closeTimer() {
        this.close.emit();
    }

    startTimer() {
        this.running = true;
        this.stopWatch();
    }

    stopTimer() {
        this.running = false;
    }

    resetTimer() {
        this.running = false;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }

    stopWatch() {
        if (this.running) {
            this.second++;

            if (this.second == 60) {
                this.minute++;
                this.second = 0;
            }

            if (this.minute == 60) {
                this.hour++;
                this.minute = 0;
                this.second = 0;
            }

            setTimeout(() => this.stopWatch(), 1000)
        }
    }

}
