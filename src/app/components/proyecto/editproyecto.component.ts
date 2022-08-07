import { ProyectosService } from 'src/app/service/proyectos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

  proy : Proyectos = null;

  constructor(private proyectosS: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosS.detail(id).subscribe(
        data => {
          this.proy = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosS.update(id, this.proy).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
}
