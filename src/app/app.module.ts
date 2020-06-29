import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AddItemContainerComponent } from './add-item-container/add-item-container.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemContainerComponent,
    ItemListComponent,
    EditItemComponent,
    EditItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
