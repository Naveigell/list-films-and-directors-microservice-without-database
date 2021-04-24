import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public title = 'frontend';
    public films = [];
    public directors = [];

    constructor(private http: HttpClient){}

    ngOnInit() {
        this.http.get<any>("http://localhost:1000/films").subscribe(data => {
            this.films = data;
        });

        this.http.get<any>("http://localhost:1000/directors").subscribe(data => {
            this.directors = data;
        });
    }

    public removeDirector(index) {
        this.directors.splice(index, 1);
    }

    public removeFilms(index) {
        this.films.splice(index, 1);
    }
}
