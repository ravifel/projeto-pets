import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from '../../live-form-dialog/live-form-dialog.component';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-lista-dogs',
  templateUrl: './lista-dogs.component.html',
  styles: [
  ]
})
export class ListaDogsComponent implements OnInit {

  constructor(private dogsService: DogsService, public dialog: MatDialog) { }

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


  abrirDialog(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
