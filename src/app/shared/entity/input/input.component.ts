import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
	selector: 'entity-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseComponent {
	@Input()
	public type: 'text' | 'password' | 'number' = 'text';
}
