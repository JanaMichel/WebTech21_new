import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Rezepte } from '../shared/rezepte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-einfach',
  templateUrl: './einfach.component.html',
  styleUrls: ['./einfach.component.css']
})
export class EinfachComponent implements OnInit {
  rezepte!: Rezepte[];
  deleted = false;

  constructor(private bs: BackendService, private router: Router) { }

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
    this.bs.deleteOne(id).subscribe(
      (
        response: any) => {
          console.log('response : ', response);
          if(response.status == 204){
                  console.log(response.status);
                  this.reload(true);
                } else {
                  console.log(response.status);
                  console.log(response.error);
                  this.reload(false);
                }
        },
        error => console.log(error)
      );
  }
  
  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/Einfach');
  }
  
}
