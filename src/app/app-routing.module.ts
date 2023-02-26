import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './coche/create/create.component';
import { IndexComponent } from './coche/index/index.component';
import { ListComponent } from './coche/list/list.component';
import { CreatePiezaComponent } from './pieza/create-pieza/create-pieza.component';
import { IndexPiezaComponent } from './pieza/index-pieza/index-pieza.component';


const routes: Routes = [
  {path: 'coche', redirectTo: 'coche/index', pathMatch: 'full'},
  {path: 'coche/index', component: IndexComponent},
  {path: 'coche/create', component: CreateComponent},
  {path: 'coche/list', component: ListComponent},
  {path: 'pieza', redirectTo: 'pieza/index', pathMatch: 'full'},
  {path: 'pieza/index', component: IndexComponent},
  {path: 'pieza/createPieza', component: CreatePiezaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
