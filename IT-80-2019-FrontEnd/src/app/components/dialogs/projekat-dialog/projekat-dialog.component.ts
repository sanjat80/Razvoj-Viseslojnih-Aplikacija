import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from 'src/app/models/projekat';
import { ProjekatService } from 'src/app/services/projekat.service';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  public flag! : number;

  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProjekatDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Projekat,
    private projekatService: ProjekatService) { }

  ngOnInit(): void {
  }

  public add(){
    this.projekatService.addProjekat(this.data).subscribe(
      data => {
        this.snackBar.open("Projekat: "+data.naziv+"je uspjesno dodat.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public update(){
    this.projekatService.updateProjekat(this.data).subscribe(
      data => {
        this.snackBar.open("Projekat: "+this.data.naziv+"je uspjesno modifikovan.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public delete(){
    this.projekatService.deleteProjekat(this.data.id).subscribe(
      data => {
        this.snackBar.open("Projekat je uspjesno obrisan.","U redu",{duration:3500})
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
