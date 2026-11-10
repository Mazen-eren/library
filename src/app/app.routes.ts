import { Routes } from '@angular/router';
import { Books } from './books/books';
import { AddBook } from './add-book/add-book';
import { UpdateBook } from './update-book/update-book';
import { SearchBook } from './search-book/search-book';

export const routes: Routes = [
  { path: 'books', title: 'Liste des livres', component: Books },
  { path: 'add-book', title: "Ajout d'un livre", component: AddBook },
  { path: 'search-book', title: 'Recherche de livres', component: SearchBook },
  { path: 'updateBook/:id', title: "Modification d'un livre", component: UpdateBook },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];
