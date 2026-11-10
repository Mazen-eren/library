import { Component } from '@angular/core';
import { Book } from '../model/model-book';
import { BookService } from '../services/book';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-book',
  styleUrl: './add-book.css',
  templateUrl: './add-book.html',
})
export class AddBook {
  newBook: Book = new Book();
  tab_category = ['Roman classique', 'Dystopie', 'Conte philosophique', 'Aventure', 'Roman psychologique', 'Science-fiction', 'Fantastique'];

  constructor(private bookService: BookService, private rout: Router) {}

  ajouterBook() {
    this.bookService.addBook(this.newBook);
    this.rout.navigate(['books']);
  }
}
