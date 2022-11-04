import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  rangeValues: number[] = [18, 366];

  ngOnInit() {}
}
