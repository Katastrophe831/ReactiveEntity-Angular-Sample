import { Component, Input } from '@angular/core';
import { User } from '../entities/User';

@Component({
	selector: 'app-entity-form',
	templateUrl: './entity-form.component.html',
	styleUrls: ['./entity-form.component.scss'],
})
export class EntityFormComponent {
	@Input()
	public entity!: User | null;
}
