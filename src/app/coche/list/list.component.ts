import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  coches: Coche[] = [];

  constructor(private cocheService: CocheService, private router: Router){}

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

  updateCoche(id:number): void{
    console.log('coche', id);
    this.router.navigateByUrl('coche/edit/:id')
  }

  verCoche(coche: Coche): void{
    console.log('coche', coche);
    this.router.navigateByUrl('coche/view')
  }


}
