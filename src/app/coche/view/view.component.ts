import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  coche!: Coche;

  constructor(
    public cocheService: CocheService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cocheService.find(this.id).subscribe((data: Coche) =>{
      this.coche = data;
    });
  }

}
