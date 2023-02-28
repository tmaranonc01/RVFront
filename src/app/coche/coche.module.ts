import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { CocheRoutingModule } from './coche-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'coche', component: ListComponent}
    ]),
    CocheRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ],
    exports:[
    ]
})
export class CocheModule { }
