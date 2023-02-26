import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Coche } from "../coche";
import { CocheService } from "../coche.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit{
  coches: Coche[] = [];
  newCoche!: Coche
  private router!: Router
  form!: FormGroup;
  
  constructor(public cocheService: CocheService, private formBuilder:FormBuilder){
    this.form=this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.cocheService.getAll().subscribe((data: Coche[])=>{
      this.coches = data;
      console.log(this.coches);
    })
  }

  public onOpenModal(coche: Coche, mode: string): void{
    if(mode==='edit'){
      this.newCoche=coche;
    }
  }

  deleteCoche(id:number){
    this.cocheService.delete(id).subscribe(res => {
      this.coches = this.coches.filter(item => item.id !== id);
      console.log("Eliminado ok");
      this.router.navigateByUrl('coche/index');
    })
  }

  public updateCoche(coche:Coche): void{
    console.log('coche', coche);
    this.cocheService.update(coche).subscribe(
      (response: Coche)=>{
        this.cocheService.getAll
      }
    )
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){}

}