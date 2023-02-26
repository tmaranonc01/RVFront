import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coche } from 'src/app/coche/coche';
import { PiezaService } from '../pieza.service';

@Component({
  selector: 'app-create-pieza',
  templateUrl: './create-pieza.component.html',
  styleUrls: ['./create-pieza.component.css']
})
export class CreatePiezaComponent implements OnInit {
  coches: Coche[]=[]
  form!: FormGroup;

  constructor(
    public piezaService: PiezaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.piezaService.getAllCoches().subscribe((data: Coche[])=>{
      this.coches = data;
      console.log(this.coches);
    })
    this.form = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      coche_id: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.piezaService.create(this.form.value).subscribe((res:any)=>{
      console.log("Pieza creada");
      this.router.navigateByUrl('pieza/indexPieza');
    })
  }

}
