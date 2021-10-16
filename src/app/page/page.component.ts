import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'l1-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  text = '';

  constructor(private _service: AppService) {}

  ngOnInit(): void {
    this._service.observable.subscribe((text) => {
      this.text = text;
    });
  }
}
