import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../../core/models/Skill';

@Component({
  selector: 'app-dropup',
  templateUrl: './dropup.component.html',
  styleUrls: ['./dropup.component.css'],
})
export class DropupComponent implements OnInit {
  @Input() skills!: Skill[];

  @Output() onChangeSkill = new EventEmitter<Skill>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(skill: Skill) {
    skill.known = !skill.known;
    this.onChangeSkill.emit(skill);
  }
}
