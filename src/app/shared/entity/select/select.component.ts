import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
	selector: 'entity-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BaseComponent {
	@Input()
	options!: string[];
}
