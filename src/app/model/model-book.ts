export class Book {
   id!: number;
   title!: string;
   author!: string;
   publicationDate!: Date;
   category!: string;
   price!: number;
   originalLanguage?: string;
   numberOfPages!: number;
   available!: boolean;
}
