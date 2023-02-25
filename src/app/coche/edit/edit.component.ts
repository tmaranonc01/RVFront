import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  nuevoCoche!: Coche
  form!: FormGroup;

  constructor(private cocheService: CocheService, private route: ActivatedRoute, private router: Router){  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cocheId'];
    this.cocheService.find(this.id).subscribe((data: Coche)=>{
      this.nuevoCoche = data;
    });
  }
  
  public updateCoche(coche: Coche):void{
    console.log('coche', coche);
    this.cocheService.update(coche).subscribe(
      (response: Coche)=>{
        this.router.navigateByUrl('coche/index')
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
}

