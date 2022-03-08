import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService) { }

  
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
              return this.rezepte;
      },
      error => console.log(error)
    );
}

}
