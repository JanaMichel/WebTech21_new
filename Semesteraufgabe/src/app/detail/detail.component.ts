import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = '';
  rezepte!: Rezepte;
  rezepteform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
    ) 
    { 
      this.rezepteform = this.fb.group(
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
  }
 
  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
    (
      response: Rezepte) => {
              this.rezepte = response;
              console.log(this.rezepte);
              this.rezepteform.patchValue({
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
      const values = this.rezepteform.value;
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

  cancel(): void {
    this.location.back();
  }


}
