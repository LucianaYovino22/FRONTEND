import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-newacercade',
  templateUrl: './newacercade.component.html',
  styleUrls: ['./newacercade.component.css']
})
export class NewacercadeComponent implements OnInit {

  nombreP: string;
  apellidoP: string;
  imgP: string;
  tituloP: string;
  descP: string;

  constructor(private personaService:PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const user = new persona (this.nombreP, this.apellidoP, this.imgP,this.tituloP, this.descP);
    this.personaService.save(user).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}

