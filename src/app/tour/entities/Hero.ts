import { Entity, NonPersistent, Readonly, Required } from 'reactive-entity';

export class Hero extends Entity {
	id!: number;
	name!: string;
	power!: string;
	alterEgo!: string;

	@NonPersistent
	isSubmitted: boolean = false;
}

export class Hero2 extends Hero {
	override get entityName(): string {
		return 'Hero';
	}

	@Required(true)
	override alterEgo!: string;

	protected override onInit(): void {
		super.onInit();
		//this.alterEgo = 'Really Smart';
		this.alterEgo = '';
	}
}
