import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { CocheService } from './coche.service';


@NgModule({
  declarations: [
    IndexComponent,
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
    ReactiveFormsModule,
    FormsModule
    ],
    exports:[
    ]
})
export class CocheModule { }
