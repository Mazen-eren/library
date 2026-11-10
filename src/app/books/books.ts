import { Component } from '@angular/core';
import { Book } from '../model/model-book';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-books',
  styleUrl: './books.css',
  templateUrl: './books.html',
})
export class Books {
  tab_book: Book[];
  styleAvis = { color: 'blue' };

  constructor(private bookService: BookService) {
    this.tab_book = this.bookService.listBooks();
  }

  suppBook(b: Book) {
    let rep = confirm(
      'Etes-vous sûr de vouloir supprimer le livre : ' + b.title + ' ?'
    );
    if (rep) {
      this.bookService.delBook(b);
      console.log('Suppression avec succes : ' + b.title);
    }
  }
}
