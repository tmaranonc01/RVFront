import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './coche/create/create.component';
import { EditComponent } from './coche/edit/edit.component';
import { ListComponent } from './coche/list/list.component';
import { ViewComponent } from './coche/view/view.component';



const routes: Routes = [
  {path: 'coche', redirectTo: 'coche/index', pathMatch: 'full'},
  {path: 'coche/create', component: CreateComponent},
  {path: 'coche/list', component: ListComponent},
  {path: 'coche/view', component: ViewComponent},
  {path: 'coche/edit', component: EditComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
