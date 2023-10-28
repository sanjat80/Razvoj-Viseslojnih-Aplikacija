import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { GrupaComponent } from './components/model/grupa/grupa.component';
import { ProjekatComponent } from './components/model/projekat/projekat.component';
import { SmerComponent } from './components/model/smer/smer.component';

const routes: Routes = [
  {path: 'smer',component:SmerComponent},
  {path:'grupa',component:GrupaComponent},
  {path:'projekat',component:ProjekatComponent},
  {path:'about',component:AboutComponent},
  {path:'author',component:AuthorComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: '/home',pathMatch:'full'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
