import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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
}
