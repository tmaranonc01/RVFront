import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coche } from 'src/app/coche/coche';
import { Pieza } from '../pieza';
import { PiezaService } from '../pieza.service';

@Component({
  selector: 'app-index-pieza',
  templateUrl: './index-pieza.component.html',
  styleUrls: ['./index-pieza.component.css']
})
export class IndexPiezaComponent implements OnInit{
  piezas: Pieza[] = [];
  nuevaPieza!: Pieza
  private router!: Router
  form!: FormGroup;
  coches: Coche[] = []

  constructor(public piezaService: PiezaService){}

  ngOnInit(): void{

    this.piezaService.getAll().subscribe((data: Pieza[])=>{
      this.piezas = data;
      console.log(this.piezas);
    })

    this.piezaService.getAllCoches().subscribe((data: Coche[])=>{
      this.coches = data;
    })

    this.form = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      id_coche: new FormControl('', Validators.required)
    });
  }

  public onOpenModal(pieza: Pieza, mode: string): void{
    if(mode === 'edit'){
      this.nuevaPieza = pieza;
    }
  }

  deletePieza(id:number){
    this.piezaService.delete(id).subscribe(res =>{
      this.piezas = this.piezas.filter(item => item.id !== id);
      console.log('Pieza eliminada');
      this.router.navigateByUrl('pieza/indexPieza')
    })
  }

  updatePieza(pieza: Pieza): void{
    console.log('pieza', pieza);
    this.piezaService.update(pieza).subscribe(
      (response: Pieza)=>{
        this.piezaService.getAll
      }
    )
  }

  get f(){
    return this.form.controls;
  }

}
