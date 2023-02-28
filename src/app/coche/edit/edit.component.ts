import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!:number;
  nuevoCoche!: Coche;
  form!: FormGroup;
  cocheId!: Coche

  constructor(private cocheService: CocheService, private route: ActivatedRoute, private router: Router){ 
   // this.id =+this.route.snapshot.paramMap.get('id');
    //this.cocheService.find(this.id).subscribe(coche => this.nuevoCoche = coche);
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.cocheService.find(this.id).subscribe((data: Coche)=>{
      this.nuevoCoche = data;
    });

    this.form = new FormGroup({
      modelo: new FormControl('', Validators.required),
      motor: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required)
    });
  }
  
  updateCoche(coche: Coche):void{
    console.log('coche', coche);
    this.cocheService.update(this.id, this.form.value).subscribe(
      (response: Coche)=>{
        this.router.navigateByUrl('coche/index')
      }
    )
  }

  obtenerCoche(id:number){
    this.cocheService.find(id).subscribe((data)=> {
      this.nuevoCoche = data;
    }
    )
  }
  
  get f(){
    return this.form.controls;
  }

  public onOpenModal(coche: Coche, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type= 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === 'edit'){
      this.nuevoCoche = coche;
      button.setAttribute('data-target', '#updateAutorModal');
    }

    container!.appendChild(button);
    button.click();
  }

  submit(){
    console.log(this.form.value);
    this.cocheService.update(this.id, this.form.value).subscribe((res:any)=>{
      console.log("Actualizado");
      this.router.navigateByUrl('coche/list');
    })
  }
}

