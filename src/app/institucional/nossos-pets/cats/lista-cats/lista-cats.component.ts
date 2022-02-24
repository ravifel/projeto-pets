import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styles: [
  ]
})
export class ListaCatsComponent implements OnInit {

  constructor(private catsService: CatsService) { }

  public cats: Cat[];

  ngOnInit(): void {
    this.catsService.obterCats()
    .subscribe(
      cats => {
        this.cats = cats;
        console.log(cats);
      },
      error => console.log(error)
    );
  }

}
