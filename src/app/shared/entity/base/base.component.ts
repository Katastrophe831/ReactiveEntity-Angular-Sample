import { Component, HostBinding, Input } from '@angular/core';
import { Entity } from 'reactive-entity';
import { EntityDirective } from '../entity.directive';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
	@HostBinding('class.entity-input') entityInput: boolean = true;

	@Input()
	public attribute!: string;

	public entity!: Entity | null;

	constructor(private _entity: EntityDirective) {}

	ngOnInit(): void {
		this.entity = this._entity.entity;
	}

	public get value() {
		if (this.entity) {
			return (this.entity as any)[this.attribute as any];
		}
		return null;
	}

	public set value($event: any) {
		if (this.entity) {
			(this.entity as any)[this.attribute as any] = $event;
		}
	}

	hasFieldMessage(): boolean {
		return this.entity?.hasFieldMessage(this.attribute as any) || false;
	}

	isFieldRequired(): boolean {
		return this.entity?.isFieldRequired(this.attribute as any) || false;
	}

	isFieldReadonly(): boolean {
		return this.entity?.isFieldReadonly(this.attribute as any) || false;
	}

	isFieldHidden(): boolean {
		return this.entity?.isFieldHidden(this.attribute as any) || false;
	}

	getFieldMessage(): string {
		const msg = this.entity?.getFieldMessage(this.attribute as any);
		return msg ? msg.message : '';
	}
}
