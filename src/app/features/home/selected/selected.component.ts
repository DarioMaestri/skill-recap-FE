import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/models/Skill';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  @Input() skillsObserved!: Observable<Map<string, Skill[]>>;

  @Output() onDeleteSkillVersion = new EventEmitter<Skill>();

  faTrashAlt = faTrashAlt;

  skillsMap = new Map<string, Skill[]>();

  constructor() { }

  ngOnInit(): void {
    this.skillsObserved.subscribe(skillsMap => this.skillsMap = skillsMap);
  }

  onDelete(skill: Skill) {
    skill.known = false;
    this.onDeleteSkillVersion.emit(skill);
  }

}
