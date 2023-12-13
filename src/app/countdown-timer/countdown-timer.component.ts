import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
})
export class CountdownTimerComponent implements OnDestroy, OnChanges {
  @Input() initial: number = 60;
  timeRemaining: number = this.initial;
  isTimerRunning: boolean = false;
  timer: Subscription | undefined;

  start(): void {
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timer = interval(1000).subscribe(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
        } else {
          this.stop();
        }
      });
    }
  }
  stop(): void {
    if (this.timer) {
      this.timer.unsubscribe();
      this.isTimerRunning = false;
    }
  }
  reset(): void {
    this.stop();
    this.timeRemaining = this.initial;
  }
  adjust(seconds: number): void {
    const newTime = this.timeRemaining + seconds;
    this.timeRemaining = newTime >= 0 ? newTime : 0;
    if (this.timeRemaining === 0) {
      this.stop();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initial'] && !changes['initial'].firstChange) {
      this.timeRemaining = this['initial'];
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
