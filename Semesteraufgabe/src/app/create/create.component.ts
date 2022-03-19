import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id: string = '';
  rezepte!: Rezepte;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
    ) 
    { 
      this.form = this.fb.group(
        {
          nameControl: ['', Validators.required, Validators.minLength(3)],
          kategorieControl: ['', Validators.required],
          portionControl: ['', Validators.required],
        }
      );
    }

  
    ngOnInit(): void {  
      this.id = this.route.snapshot.paramMap.get('id') || '';
      this.readOne(this.id);
      this.form.setValue({
        nameControl: this.rezepte?.Name,
        kategorieControl: this.rezepte?.Kategorie,
        portionControl: this.rezepte?.Portion
      });
    }
   
    readOne(id: string): void {
      this.bs.getOne(id).subscribe(
      (
        response: Rezepte) => {
                this.rezepte = response;
                console.log(this.rezepte);
                this.form.patchValue({
                  nameControl: this.rezepte?.Name,
                  kategorieControl: this.rezepte?.Kategorie,
                  portionControl: this.rezepte?.Portion
                });
                return this.rezepte;
        },
        error => console.log(error)
      );
  }
  
  update(): void {
    if(window.confirm("Rezept verbessern?"))
    {
      const values = this.form.value;
      this.rezepte.Name = values.nameControl;
      this.rezepte.Kategorie = values.kategorieControl;
      this.rezepte.Portion = values.portionControl;
      this.bs.update(this.id, this.rezepte)
        .subscribe(
          response => {
            console.log(response);
            console.log(response._id);
          },
          error => {
            console.log(error);
          }
        );
      this.router.navigateByUrl('/Einfach');
      }
  }

  create(): void {
    if(window.confirm("Rezept verbessern?"))
    {
      const values = this.form.value;
      this.rezepte.Name = values.nameControl;
      this.rezepte.Kategorie = values.kategorieControl;
      this.rezepte.Portion = values.portionControl;
      this.bs.create(this.id, this.rezepte)
        .subscribe(
          response => {
            console.log(response);
            console.log(response._id);
          },
          error => {
            console.log(error);
          }
        );
      this.router.navigateByUrl('/Einfach');
      }
  }


cancel(): void {
  this.location.back();
}


}
