import { Injectable } from '@angular/core';
import { Book } from '../model/model-book';

@Injectable({ providedIn: 'root' })
export class BookService {
  tab_book: Book[];

  constructor() {
    this.tab_book = [
      {
        id: 1,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        publicationDate: new Date('04/03/1862'),
        category: 'Roman classique',
        price: 24.5,
        originalLanguage: 'Français',
        numberOfPages: 1462,
        available: true,
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        publicationDate: new Date('06/08/1949'),
        category: 'Dystopie',
        price: 18.0,
        originalLanguage: 'Anglais',
        numberOfPages: 328,
        available: false,
      },
      {
        id: 3,
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        publicationDate: new Date('04/06/1943'),
        category: 'Conte philosophique',
        price: 12.5,
        originalLanguage: 'Français',
        numberOfPages: 96,
        available: true,
      },
      {
        id: 4,
        title: "L'Alchimiste",
        author: 'Paulo Coelho',
        publicationDate: new Date('05/15/1988'),
        category: 'Aventure',
        price: 15.0,
        originalLanguage: 'Portugais',
        numberOfPages: 208,
        available: true,
      },
      {
        id: 5,
        title: 'Crime et Châtiment',
        author: 'Fiodor Dostoïevski',
        publicationDate: new Date('01/01/1866'),
        category: 'Roman psychologique',
        price: 22.0,
        originalLanguage: 'Russe',
        numberOfPages: 671,
        available: false,
      },
    ];
  }

  listBooks(): Book[] {
    return this.tab_book;
  }

  addBook(b: Book) {
    this.tab_book.push(b);
    console.log(b.title, 'ajouté avec succès');
  }

  delBook(b: Book) {
    const pos = this.tab_book.indexOf(b);
    if (pos > -1) {
      this.tab_book.splice(pos, 1);
      console.log(b.title, 'supprimé avec succès');
    } else {
      console.log(b.title, "n'existe pas dans la liste");
    }
  }

  viewBook(i: number): Book {
    return this.tab_book.find(b => b.id == i)!;
  }

  editBook(b: Book) {
    this.delBook(b);
    this.addBook(b);
    this.tab_book.sort((a: Book, b: Book) => a.id < b.id ? -1 : 1);
    console.log('modifié avec succès', b.title, b.author, b.publicationDate, b.price, b.numberOfPages);
  }
}
