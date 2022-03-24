import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes?: Hero[];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes()

    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        this.heroes?.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() =>
      this.heroes = this.heroes?.filter(h => h !== hero)
    );

  }
}
