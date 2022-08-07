import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nombreS: string = '';
  descripcionS: number ;

  constructor(private sSkillsService: SSkillsService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(this.nombreS, this.descripcionS);
    this.sSkillsService.save(skill).subscribe(
      (data) => {
        alert('Skill añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}
