import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertFilmesComponent } from '../insert-filmes/insert-filmes.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog() {
    const dialogRef = this.dialog.open(InsertFilmesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}



