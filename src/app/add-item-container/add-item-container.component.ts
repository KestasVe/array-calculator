import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatorInput } from 'src/shared/models/calculator-input.model';

@Component({
  selector: 'app-add-item-container',
  templateUrl: './add-item-container.component.html',
  styleUrls: ['./add-item-container.component.css']
})
export class AddItemContainerComponent implements OnInit {

  @Input() item: CalculatorInput = new CalculatorInput(null);
  @Output() formSubmit: EventEmitter<CalculatorInput> = new EventEmitter<CalculatorInput>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
