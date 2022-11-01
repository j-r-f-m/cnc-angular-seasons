import { Component, OnInit } from '@angular/core';
import { Guess } from '../guess';
import { SEASONS } from '../mockSeasons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  // users guess
  guess: Guess = {
    name: '',
  };
  constructor() {}

  ngOnInit(): void {}

  submitGuess() {
    // fires when button clicked

    let i = 0;
    while (i < SEASONS.length) {
      if (SEASONS[i].name === this.guess.name) {
        console.log(`Cool! Endlich ${this.guess.name}!`);
        return;
      }
      i++;
    }

    console.log('Sorry I dont know this season!');
  }
}
