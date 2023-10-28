import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupa } from 'src/app/models/grupa';
import { Smer } from 'src/app/models/smer';
import { GrupaService } from 'src/app/services/grupa.service';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {
  public flag!: number;
  smerovi!: Smer[];

  constructor(private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<GrupaDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Grupa,
              private grupaService: GrupaService,
              private smerService:SmerService) { }

  ngOnInit(): void {
    this.smerService.getAllSmer().subscribe(
      smerovi=>{
        this.smerovi=smerovi;
      }
    );
  }

  public compare(a:Grupa,b:Grupa){
    return a.id==b.id;
  }
  public add(){
    this.grupaService.addGrupa(this.data).subscribe(
      data => {
        this.snackBar.open("Grupa: "+data.oznaka+"je uspjesno dodata.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public update(){
    this.grupaService.updateGrupa(this.data).subscribe(
      data => {
        this.snackBar.open("Grupa: "+this.data.oznaka+"je uspjesno modifikovana.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }
  public delete(){
    this.grupaService.deleteGrupas(this.data.id).subscribe(
      data => {
        this.snackBar.open("Grupa je uspjesno obrisana.","U redu",{duration:3500})
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
