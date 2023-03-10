import { Component, OnInit } from '@angular/core';
import { CocheService } from '../coche.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public cocheService: CocheService,private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      modelo: new FormControl('', [Validators.required]),
      motor: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.cocheService.create(this.form.value).subscribe((res:any)=> {
      console.log('Coche creado');
      this.router.navigateByUrl('coche/list');
    })
  }
}
