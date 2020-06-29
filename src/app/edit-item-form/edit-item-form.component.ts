import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatorInput } from 'src/shared/models/calculator-input.model';

@Component({
  selector: 'app-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {

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
