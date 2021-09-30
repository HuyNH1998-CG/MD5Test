import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  id!: number;
  message = '';

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(data.get('id')!);
      this.getBook(this.id)
    })
  }

  ngOnInit(): void {
  }

  getBook(id: number) {
    return this.bookService.getBookById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      })
    })
  }

  onSubmit() {
    const {title, author, description} = this.bookForm.value;
    this.bookService.editBook(this.id, title, author, description).subscribe(() => {
      this.message = 'Đã Sửa'
    });
  }
}
