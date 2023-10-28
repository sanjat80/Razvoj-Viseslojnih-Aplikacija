import { Component, OnInit,Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Grupa } from 'src/app/models/grupa';
import { Projekat } from 'src/app/models/projekat';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentDialogComponent } from '../../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {
  dataSource! : MatTableDataSource<Student>;
  displayedColumns = ['id','ime','prezime','broj_indeksa','projekat','actions'];
  subscription!: Subscription;
  @Input() selectedGrupaBottom!:Grupa;

  constructor(private studentService:StudentService,
    private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription=this.studentService.getStudentByGrupa(this.selectedGrupaBottom.id).subscribe
    (data => {this.dataSource=new MatTableDataSource(data)}),
    (error : Error )=> {console.log(error.name+" "+error.message)}
  }

  public openDialog(flag:number,id?:number,ime?:string,prezime?:string,brojIndeksa?:string,projekat?:Projekat){
    const dialogRef = this.dialog.open(StudentDialogComponent,{data:{id, ime, prezime, brojIndeksa,projekat}});
    dialogRef.componentInstance.flag=flag;
    dialogRef.componentInstance.data.grupa=this.selectedGrupaBottom
    dialogRef.afterClosed().subscribe(
      result =>{
        if(result==1){
          this.loadData();
        }
      }
    )
  }

}
