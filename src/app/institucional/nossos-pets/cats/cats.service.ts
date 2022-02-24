import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cat } from "./cat";

@Injectable()
export class CatsService {

    constructor(private http: HttpClient) {}

    protected UrlServiceCats: string = "http://localhost:3000/cats/";

    obterCats(): Observable<Cat[]> {
       return this.http
       .get<Cat[]>(this.UrlServiceCats)
    }

}