import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
