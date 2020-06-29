import { Component, OnInit, Inject } from '@angular/core';
import { CalculatorInput } from 'src/shared/models/calculator-input.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: CalculatorInput
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: CalculatorInput) {
    this.dialogRef.close(updatedItem);
  }

}
