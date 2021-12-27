import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-einfach',
  templateUrl: './einfach.component.html',
  styleUrls: ['./einfach.component.css']
})
export class EinfachComponent implements OnInit {

  rezepte = [
    {
      Name: "Forelle mit Möhren und Selleriepüree",
      Portionen: 4
    },
    {
      Name: "Jakobsmuschel mit Passionsfruchtcoulis und Thai",
      Portionen: 2
    },
    {
      Name: "Zander auf Rahmsauerkraut und Rieslingsauce",
      Portionen: 4
    },
    {
      Name: "Fisch-Lasagne",
      Portionen: 4
    },
    {
      Name: "Rochenflügel mit Zitronenbutter",
      Portionen: 4
    },
    {
      Name: "Miesmuschel, Grundrezept	",
      Portionen: 3
    },
    {
      Name: "Saltimbocca vom Seeteufel",
      Portionen: 4
    },
    {
      Name: "Flusskrebse im würzigen Sud	",
      Portionen: "o.a"
    },
    {
      Name: "Jakobsmuschel mit Passionsfruchtcoulis und Thai-Spargel	",
      Portionen: 2
    },
    {
      Name: "Pappardelle mit Spargel in Pesto	",
      Portionen: 4
    },
    {
      Name: "Schollen- Piccata",
      Portionen: "o.a"
    },
    {
      Name: "Fischauflauf mit Couscous und Spinat	",
      Portionen: 5
    },
    {
      Name: "Bouillabaisse",
      Portionen: 8
    },
    {
      Name: "Gratinierte Austern	",
      Portionen: 4
    },
    {
      Name: "Seezungen mit Zitronenbutter	",
      Portionen: 2
    },
    {
      Name: "Hechtfarce mit Panade",
      Portionen: 4
    },
    {
      Name: "Vitello tonnato mit kleinem Salat",
      Portionen: 4
    },
    {
      Name: "Jakobsmuscheln",
      Portionen: 4
    },
    {
      Name: "Hummerragout",
      Portionen: 4
    },
    {
      Name: "Lachsfilet mit Frischkäse im Blätterteig	",
      Portionen: 2
    },
    {
      Name: "Thunfisch im Seammantel mit Wasabi- Kartoffelpüree	",
      Portionen: 4
    },
    {
      Name: "Hummerfond",
      Portionen: "o.a"
    },
    {
      Name: "Krustentiersauce",
      Portionen: "o.a"
    },
    {
      Name: "Apfel- Kartoffelsuppe mit LachsKaviar	",
      Portionen: 4
    },
    {
      Name: "Bandnudeln mit Lachs	",
      Portionen: 2
    },
    {
      Name: "Zander mit Kartoffelkruste	",
      Portionen: 4
    },
    {
      Name: "Skrei / Cabillaud des Fjords	",
      Portionen: 4
    },
    {
      Name: "Dicke Bohnen mit Jakobsmuscheln und Hummerfleisch",
      Portionen: 5
    },
    {
      Name: "Matjes Schwedische Art",
      Portionen: "o.a"
    },
    {
      Name: "Paella",
      Portionen: 4
    },
    {
      Name: "Hummerravioli mit Hummersauce",
      Portionen: 6
    },
    {
      Name: "Bachsaibling auf Kartoffelpüree und geschmolzenen Basilikumtomaten",
      Portionen: "o.a"
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
