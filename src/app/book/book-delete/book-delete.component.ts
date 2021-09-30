import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: any;
  id!: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = parseInt(data.get('id')!)
      this.getBook(this.id)
    })
  }

  ngOnInit(): void {
  }

  getBook(id: number) {
    return this.bookService.getBookById(this.id).subscribe(data => {
      this.book = {
        id: data.id,
        title: data.title,
        author: data.author,
        description: data.description
      }
    })
  }

  delete() {
    this.bookService.deleteBook(this.id).subscribe(() => {
      this.toList()
    })
  }

  toList() {
    this.router.navigateByUrl('/books')
  }
}
