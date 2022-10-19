import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skill } from 'src/app/core/models/Skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
  @Input() skillsMap!: Map<string, Skill[]>;

  @Output() onChangeSkill = new EventEmitter<Skill>();

  skillsMapSelected = new Map<string, Skill[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: Skill) {
    this.onChangeSkill.emit(event);
  }
}
