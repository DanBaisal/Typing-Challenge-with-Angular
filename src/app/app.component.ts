import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'; // here a pending class will be returned and applied if nothing was entered
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}

// There are 2 possible solutions to conditionally showing/hiding the success message, I'll  use one of them
