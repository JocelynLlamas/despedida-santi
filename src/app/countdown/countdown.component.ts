import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  eventDate: Date = new Date(new Date().setDate(new Date().getDate() + 25)); // Fecha en 27 días
  daysLeft: number = 0;
  hoursLeft: number = 0;
  minutesLeft: number = 0;
  secondsLeft: number = 0;

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000); // Actualizar cada segundo
  }

  updateCountdown(): void {
    const now = new Date();
    const timeDifference = this.eventDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      this.daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      this.daysLeft = this.hoursLeft = this.minutesLeft = this.secondsLeft = 0;
    }
  }
}
