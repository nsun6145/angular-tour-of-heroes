import { Injectable } from '@angular/core';
import {fromEventPattern, Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Hero} from './hero';
import {MessageService} from './message.service';

import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
  private messageService: MessageService,
  private http: HttpClient) { 

  }

  private heroesUrl = 'api/heroes';

  private log(message: string){
    this.messageService.add('HeroService:  ${message}');
  }

  getHero(id:number): Observable<Hero>{
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id ===id));
  }

  getHeroes(): Observable<Hero[]>{
    
    const heroes = of(HEROES); 
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    
   //return this.http.get<Hero[]>(this.heroesUrl);
  }
}
