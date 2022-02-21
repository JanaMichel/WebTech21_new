import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';

@Component({
  selector: 'app-einfach',
  templateUrl: './einfach.component.html',
  styleUrls: ['./einfach.component.css']
})
export class EinfachComponent implements OnInit {
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
