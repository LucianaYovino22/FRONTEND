import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skills[] = [];
  
  constructor(private sSkillsService: SSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.sSkillsService.lista().subscribe(data => { this.skill = data; });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sSkillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("no se pudo borrar la 'skill'");

        }
      )
    }
  }
}
