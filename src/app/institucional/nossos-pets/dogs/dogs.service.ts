import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Dog } from "./dog";

@Injectable()
export class DogsService {

    constructor(private http: HttpClient) {}

    protected UrlServiceDogs: string = "http://localhost:3000/dogs/"

    obterDogs() : Observable<Dog[]> {
        return this.http
        .get<Dog[]>(this.UrlServiceDogs);
    }


}