import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../../core/models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl: string = 'http://localhost:8080/skills';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }
}
