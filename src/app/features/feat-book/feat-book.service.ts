import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class FeatBookService {
    http = inject(HttpClient)

    books$ = new BehaviorSubject<any[]>([]);
    loading$ = new BehaviorSubject<boolean>(false);

    getBooks(): void {
        this.loading$.next(true);

        this.http
            .get<{ items: any[] }>(
                'https://www.googleapis.com/books/v1/volumes?maxResults=5&q=oliver%20sacks'
            )
            .subscribe((books) => {
                this.books$.next(books.items || []);
                this.loading$.next(false)
            });
    }
}