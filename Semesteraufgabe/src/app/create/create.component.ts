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
          name: ['', Validators.required, Validators.minLength(3)],
          kategorie: ['', Validators.required],
          portion: ['', Validators.required],
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
                console.log(this.rezepte)
                return this.rezepte;
        },
        error => console.log(error)
      );
  }
  
    create(): void {
      if(window.confirm("Rezept niederschreiben?"))
      {
        const values = this.rezepteform.value;
        this.rezepte.Name = values.name;
        this.rezepte.Kategorie = values.kategorie;
        this.rezepte.Portion = values.portion;
        this.bs.create(this.rezepte)
          .subscribe(
            response => {
              console.log(response);
              console.log(response._id);
            },
            error => {
              console.log(error);
              
            }
          );
        this.router.navigateByUrl('/');
        }
    }
  
    cancel(): void {
      this.location.back();
    }

}
