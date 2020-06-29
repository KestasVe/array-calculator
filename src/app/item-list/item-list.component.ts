import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorInput } from 'src/shared/models/calculator-input.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  @Input() addedNumbers: CalculatorInput[];
  @Output() delete: EventEmitter<CalculatorInput> = new EventEmitter<CalculatorInput>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNumberClick(item: CalculatorInput) {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    });
  }

  onDelete(item: CalculatorInput) {
    this.delete.emit(item);
  }

}

export interface UpdateEvent {
  old: CalculatorInput;
  new: CalculatorInput;
}
