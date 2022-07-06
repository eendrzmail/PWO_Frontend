import { PositionsService } from './../../../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeePOST } from 'src/app/models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    private positionsService: PositionsService
  ) { }

  employee: Omit<EmployeePOST, "id" | "data_rozpoczecia" | "status"> = {
    imie: '',
    nazwisko: '',
    id_stanowiska: 0
  }

  allPositions$ = this.positionsService.getPositions()

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
