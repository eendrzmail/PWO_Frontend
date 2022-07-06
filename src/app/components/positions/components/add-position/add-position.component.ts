import { PositionsGET } from './../../../../models/positions';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPositionComponent>
  ) { }

  position: PositionsGET = { id: 0, nazwa: "", podstawa: 0 };

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
