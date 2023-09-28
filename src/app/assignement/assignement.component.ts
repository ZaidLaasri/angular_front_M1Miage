import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent implements OnInit {
  tittre = "Zaid page"
  ajoutActive = false;

  colorActive = "green";

  assignements = [{
    nom: "TP sgbd",
    dateRendu: "02/020/2",
    rendu: true,
    note: 3
  },
    {
      nom: "TP Angular",
      dateRendu: "02/020/2",
      rendu: true,
      note: 9
    },
    {
      nom: "TP IOT",
      dateRendu: "02/020/2",
      rendu: false,
      note: 11
    },
  ]

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
      this.colorActive = "blue";

    }, 3000);
  }

}
