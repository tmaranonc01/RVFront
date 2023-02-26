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

  constructor(private cocheService: CocheService){}

  ngOnInit(): void {
    this.cocheService.getAll().subscribe(
      coches => this.coches = coches,
      error => console.error(error)
    );
  }

}
