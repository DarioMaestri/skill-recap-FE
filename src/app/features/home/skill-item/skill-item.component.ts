import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/models/Skill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skills!: Skill[];

  @Output() onChangeSkill = new EventEmitter<Skill>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: Skill) {
    this.onChangeSkill.emit(event);
  }
}
