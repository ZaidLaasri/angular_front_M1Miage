import { Component } from '@angular/core';
import {AssignementModel} from "../assignement.model";

@Component({
  selector: 'app-assignment-add',
  templateUrl: './assignment-add.component.html',
  styleUrls: ['./assignment-add.component.css']
})
export class AssignmentAddComponent {
  ajoutActive = false;

  dateDevoir: any;
  nomDevoir: any;
  renduDevoir: any;

  colorActive = "green";



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
