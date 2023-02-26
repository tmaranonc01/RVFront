import { Component, OnInit } from '@angular/core';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  coches: Coche[] = [];
  router: any;

  constructor(private cocheService: CocheService){}

  ngOnInit(): void {
    this.cocheService.getAll().subscribe(
      coches => this.coches = coches,
      error => console.error(error)
    );
  }

  deleteCoche(id:number){
    this.cocheService.delete(id).subscribe(res => {
      this.coches = this.coches.filter(item => item.id !== id);
      console.log("Eliminado ok");
      this.router.navigateByUrl('coche/list');
    })
  }

  updateCoche(coche:Coche): void{
    console.log('coche', coche);
    this.cocheService.update(coche).subscribe(
      (response: Coche)=>{
        this.cocheService.getAll
      }
    )
  }
  
}
