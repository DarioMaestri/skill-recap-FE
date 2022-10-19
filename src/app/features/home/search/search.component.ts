import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillService } from 'src/app/services/skill/skill.service';
import { Skill } from 'src/app/core/models/Skill';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  skillsMap = new Map<string, Skill[]>();
  skillsSelectedMap = new Map<string, Skill[]>();

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(
      (skills) => this.getSkillNamesList(skills).forEach(
        skillName => this.skillsMap.set(
          skillName, skills.filter(
            skill => skill.name === skillName)
        )
      )
    );
  }

  getSkillNamesList(skills: Skill[]): string[] {
    let skillNames: string[] = [];

    skills.forEach(skill => {
      if (!skillNames.includes(skill.name)) {
        skillNames.push(skill.name);
      }
    });

    return skillNames.sort();
  }

  onChange(skill: Skill) {
    const skillName = skill.name;
    let skills = this.skillsSelectedMap.get(skillName);

    if (!!skills) {
      this.skillsSelectedMap.delete(skillName);
      if (skills.includes(skill)) {
        skills.splice(skills.indexOf(skill), 1);
      } else {
        skills.push(skill);
      }
    } else {
      skills = [];
      skills.push(skill);
    }

    if (skills.length > 0) {
      this.skillsSelectedMap.set(skillName, skills);
    }
  }

  getSkillsSelected(): Observable<Map<string, Skill[]>> {
    return of(this.skillsSelectedMap);
  }

}
