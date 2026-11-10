import { Component } from '@angular/core';
import { Book } from '../model/model-book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-book',
  styles: ``,
  templateUrl: './update-book.html',
})
export class UpdateBook {
  bookCourant = new Book();
  tab_category: string[] = ['Roman classique', 'Dystopie', 'Conte philosophique', 'Aventure', 'Roman psychologique', 'Science-fiction', 'Fantastique'];

  constructor(private actRoute: ActivatedRoute, private rout: Router, private bookService: BookService) {
    this.bookCourant = this.bookService.viewBook(this.actRoute.snapshot.params['id']);
  }

  modifBook() {
    this.bookService.editBook(this.bookCourant);
    this.rout.navigate(['books']);
  }
}
