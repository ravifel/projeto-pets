import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styles: [
  ]
})
export class LiveFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LiveFormDialogComponent>) { }

  ngOnInit(): void {
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }

}
