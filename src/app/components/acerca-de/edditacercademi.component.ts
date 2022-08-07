import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edditacercademi',
  templateUrl: './edditacercademi.component.html',
  styleUrls: ['./edditacercademi.component.css']
})
export class EdditacercademiComponent implements OnInit {

  user: persona = null;
  
  constructor(
    private personaService: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.user = data;
      }, err =>{
         alert("Error al editar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.user).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}

