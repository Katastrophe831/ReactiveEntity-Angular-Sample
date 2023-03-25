import { Entity, Field } from 'reactive-entity';

export class Hero extends Entity {
	@Field()
	id!: number;

	@Field()
	name!: string;

	@Field()
	power!: string;

	@Field()
	alterEgo!: string;

	@Field({
		nonPersistent: true,
	})
	isSubmitted: boolean = false;
}
