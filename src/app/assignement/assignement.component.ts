import {Component, OnInit} from '@angular/core';
import {AssignementModel} from "./assignement.model";

@Component({
  selector: 'app-assignement',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})
export class AssignementComponent implements OnInit {
  tittre = "Zaid page"
  ajoutActive = false;

  dateDevoir: any;
  nomDevoir: any;
  renduDevoir: any;

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

  onSubmit() {
    console.log("on appuie");
    console.log(this.nomDevoir);
    const newAssignement = new AssignementModel();
    newAssignement.nom=this.nomDevoir;
    newAssignement.dateRendu=this.dateDevoir

    newAssignement.rendu=this.renduDevoir

    console.log(newAssignement);

  }

}
