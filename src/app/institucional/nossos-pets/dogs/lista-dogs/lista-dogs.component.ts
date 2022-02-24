import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-lista-dogs',
  templateUrl: './lista-dogs.component.html',
  styles: [
  ]
})
export class ListaDogsComponent implements OnInit {

  constructor(private dogsService: DogsService) { }

  public dogs: Dog[];

  ngOnInit(): void {
    this.dogsService.obterDogs()
    .subscribe(
      dogs => {
        this.dogs = dogs;
        console.log(dogs);
      },
      error => console.log(error)
    );
  }

}
