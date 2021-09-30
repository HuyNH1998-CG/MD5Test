import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookListComponent } from './book-list/book-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
