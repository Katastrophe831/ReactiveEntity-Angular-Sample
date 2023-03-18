import { Directive, Input, OnInit } from '@angular/core';
import { Entity } from 'reactive-entity';

@Directive({
	selector: '[entity]',
})
export class EntityDirective implements OnInit {
	@Input()
	public entity: Entity | null = null;

	constructor() {}

	ngOnInit(): void {}
}
