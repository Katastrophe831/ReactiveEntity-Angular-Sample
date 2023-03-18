import { Component, OnInit } from '@angular/core';
import { Hero } from '../entities/Hero';
import { Heroes } from '../entities/Heroes';

export const HEROES: any = [
	{ id: 12, name: 'Dr. Nice', power: null, alterEgo: null },
	{ id: 13, name: 'Bombasto', power: null, alterEgo: null },
	{ id: 14, name: 'Celeritas', power: null, alterEgo: null },
	{ id: 15, name: 'Magneta', power: null, alterEgo: null },
];

@Component({
	selector: 'app-tour-home',
	templateUrl: './tour-home.component.html',
	styleUrls: ['./tour-home.component.scss'],
})
export class TourHomeComponent implements OnInit {
	heroes!: Heroes;

	powers = ['', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	allSubmitted: boolean = false;

	constructor() {
		// Data from any REST API
		this.heroes = new Heroes(HEROES);
	}

	ngOnInit() {}

	submit(hero: Hero) {
		try {
			hero.validate();
			hero.isSubmitted = true;
		} catch (e) {
			// alert(e);
		}
	}

	addHero() {
		this.heroes.addNew();
	}

	submitAll() {
		try {
			this.heroes.toData();
			this.allSubmitted = true;
		} catch (e: any) {
			// alert(e.message);
		}
	}

	getAllData() {
		return this.heroes.toData();
	}

	getData(hero: Hero): any {
		try {
			return hero.toData();
		} catch (e: any) {}
	}
}
