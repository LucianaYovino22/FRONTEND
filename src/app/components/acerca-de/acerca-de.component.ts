import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona []=[];  
  
  constructor(private personaService:PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(data => {this.persona = data;})
    
  }
  

  }


