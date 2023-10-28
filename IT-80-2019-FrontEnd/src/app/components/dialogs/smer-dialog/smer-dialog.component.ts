import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Smer } from 'src/app/models/smer';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-smer-dialog',
  templateUrl: './smer-dialog.component.html',
  styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent implements OnInit {

  public flag!: number;

  constructor(private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<SmerDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Smer,
              private smerService: SmerService) { }

  ngOnInit(): void {
  }

  public add(){
    this.smerService.addSmer(this.data).subscribe(
      data => {
        this.snackBar.open("Smer: "+data.naziv+"je uspjesno dodat.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public update(){
    this.smerService.updateSmer(this.data).subscribe(
      data => {
        this.snackBar.open("Smer: "+this.data.naziv+"je uspjesno modifikovan.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }
  public delete(){
    this.smerService.deleteSmer(this.data.id).subscribe(
      data => {
        this.snackBar.open("Smer je uspjesno obrisan.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }
  public cancel(){
    this.dialogRef.close();
    this.snackBar.open("Odustali ste od izmjena","U redu",{duration:3500})

  }

}
