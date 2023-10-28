import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from 'src/app/models/projekat';
import { Student } from 'src/app/models/student';
import { ProjekatService } from 'src/app/services/projekat.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  public flag! : number;
  projekti!: Projekat[];


  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentService,
    private projekatService: ProjekatService) { }

  ngOnInit(): void {
    this.projekatService.getAllProjekat().subscribe(
      projekti=>{
        this.projekti=projekti;
      }
    );
  }

  public add(){
    this.studentService.addStudent(this.data).subscribe(
      data => {
        this.snackBar.open("Student: "+this.data.brojIndeksa+"je uspjesno dodat.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public update(){
    this.studentService.updateStudent(this.data).subscribe(
      data => {
        this.snackBar.open("Student: "+this.data.brojIndeksa+"je uspjesno modifikovan.","U redu",{duration:3500})
      }
    ),
    (error: Error)=>{console.log(error.name+ " "+error.message),
        this.snackBar.open("Dogodila se greska","U redu",{duration:3500})}
  }

  public delete(){
    this.studentService.deleteStudent(this.data.id).subscribe(
      data => {
        this.snackBar.open("Student je uspjesno obrisan.","U redu",{duration:3500})
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
