import { Component } from '@angular/core';
import { Book } from '../model/model-book';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-search-book',
  styleUrl: './search-book.css',
  templateUrl: './search-book.html',
})
export class SearchBook {
  list_book: Book[];
  titreBook: string = '';
  auteurBook: string = '';
  critere: string = 'titre';
  tab_category = [
    'Roman classique',
    'Dystopie',
    'Conte philosophique',
    'Aventure',
    'Roman psychologique',
    'Science-fiction',
    'Fantastique',
  ];
  categoryRech: string = '';

  constructor(private bookService: BookService) {
    this.list_book = bookService.listBooks();
  }

  onCritereChange() {
    this.list_book = this.bookService.listBooks();
    this.titreBook = '';
    this.auteurBook = '';
    this.categoryRech = '';
  }

  chercherParTitre(title: string) {
    this.list_book = this.bookService.listBooks();
    this.list_book = this.list_book.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  chercherParAuteur(author: string) {
    this.list_book = this.bookService.listBooks();
    this.list_book = this.list_book.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  chercherParCategory() {
    this.list_book = this.bookService.listBooks();
    if (this.categoryRech && this.categoryRech !== '') {
      this.list_book = this.list_book.filter(
        (b) => b.category === this.categoryRech
      );
    }
  }
}
