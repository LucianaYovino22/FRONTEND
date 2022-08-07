import { SSkillsService } from 'src/app/service/skills.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill : Skills = null;

  constructor(private sSkillsService: SSkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sSkillsService.detail(id).subscribe(
        data => {
          this.skill = data;
        }, err =>{
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sSkillsService.update(id, this.skill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      )
    }

}
