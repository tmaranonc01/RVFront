import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePiezaComponent } from './create-pieza/create-pieza.component';
import { IndexPiezaComponent } from './index-pieza/index-pieza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PiezaService } from './pieza.service';



@NgModule({
  declarations: [
    CreatePiezaComponent,
    IndexPiezaComponent
  ],
  providers:[ PiezaService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PiezaModule { }
