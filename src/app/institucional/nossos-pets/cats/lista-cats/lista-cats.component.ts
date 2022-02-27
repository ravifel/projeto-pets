import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from '../../live-form-dialog/live-form-dialog.component';
import { Cat } from '../cat';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats.component.html',
  styles: [
  ]
})
export class ListaCatsComponent implements OnInit {

  constructor(private catsService: CatsService, public dialog: MatDialog) { }

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


  abrirDialog(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
