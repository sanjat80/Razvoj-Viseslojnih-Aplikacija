import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primjer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primjer-components/automobil/automobil.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { SmerComponent } from './components/model/smer/smer.component';
import { ProjekatComponent } from './components/model/projekat/projekat.component';
import { GrupaComponent } from './components/model/grupa/grupa.component';
import { StudentComponent } from './components/model/student/student.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { SmerDialogComponent } from './components/dialogs/smer-dialog/smer-dialog.component';
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';
import { GrupaDialogComponent } from './components/dialogs/grupa-dialog/grupa-dialog.component';
import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    SmerComponent,
    ProjekatComponent,
    GrupaComponent,
    StudentComponent,
    AuthorComponent,
    AboutComponent,
    HomeComponent,
    SmerDialogComponent,
    ProjekatDialogComponent,
    GrupaDialogComponent,
    StudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
