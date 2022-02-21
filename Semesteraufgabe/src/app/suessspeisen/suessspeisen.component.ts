import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';

@Component({
  selector: 'app-suessspeisen',
  templateUrl: './suessspeisen.component.html',
  styleUrls: ['./suessspeisen.component.css']
})
export class SuessspeisenComponent implements OnInit {
  rezepte!: Rezepte[];

  constructor(private bs: BackendService) { }

  ngOnInit(): void {  
    this.readAll()
  }

  readAll(): void{
    this.bs.getAll().subscribe(
    (
      response: Rezepte[]) => {
              this.rezepte = response;
              console.log(this.rezepte);
              return this.rezepte;
      },
      error => console.log(error)
    );
  }

  delete(id: string): void {
    console.log("id :" ,id );
  }

}