import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  counter = 0;
  rangeValues: number[] = [10, 300];

  onClick() {
    this.counter++;
  }
  ngOnInit() {
    setTimeout(() => {
      this.rangeValues = [10, 300];
    }, 5000);
  }
}
