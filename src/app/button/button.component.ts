import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // button gets an emitter
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  // click emitter for button
  onClick() {
    this.btnClick.emit();
  }
}
