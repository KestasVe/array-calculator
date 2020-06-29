import { Component } from '@angular/core';
import { CalculatorInput } from 'src/shared/models/calculator-input.model';
import { UpdateEvent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isReachable: boolean = undefined;
  path: string = "";
  addedNumbers: CalculatorInput[] = Array<CalculatorInput>();

  addNumber(newNumber: CalculatorInput) {
    this.addedNumbers.push(newNumber);
    this.findPath(this.addedNumbers);
  }

  deleteItem(item: CalculatorInput) {
    let index = this.addedNumbers.indexOf(item);
    this.addedNumbers.splice(index, 1);
    this.findPath(this.addedNumbers);
  }

  updateNumber(updateEvent: UpdateEvent) {
    this.addedNumbers[this.addedNumbers.indexOf(updateEvent.old)] = updateEvent.new;
    this.findPath(this.addedNumbers);
  }

  findPath(input) {

    // Minimum steps to reach each element by index
    let minimumSteps: number[] = [0];

    // Position array from which each element is reachable
    let position: number[] = [null];

    // Create minimum steps and position arrays
    for (let i = 1; i < input.length; i++) {
      let stepsArray: number[] = [];
      let positionArray: number[] = [];
      for (let j = 0; j < i; j++) {
          if (i - j <= input[j].number) {
              positionArray.push(j);
              stepsArray.push(minimumSteps[j] + 1);
          }
      }
      minimumSteps.push(Math.min(...stepsArray));
      position.push(Math.min(...positionArray));
    }

    //Check for infinity values and show results
    if (minimumSteps.includes(Infinity) === true) {
      this.isReachable = false;
      this.path = "";
    } else if (minimumSteps.includes(Infinity) === false && input.length > 0) {
      this.isReachable = true;
      let i: number = position.length - 1;
      let path: number[] = [];
      for (i; i > 0; i = position[i]) {
          path.push(input[position[i]].number);
      }
      path = path.reverse();
      this.path = 'The most efficient path is ' + path.join("-->") + "-->" + input[input.length - 1].number;
    } else {
      this.isReachable = undefined;
      this.path = "";
    }
    
  }
}
