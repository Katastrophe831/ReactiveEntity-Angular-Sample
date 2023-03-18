import { EntitySet, EntityType } from 'reactive-entity';
import { Hero, Hero2 } from './Hero';

export class Heroes extends EntitySet {
	protected get entityClass(): EntityType {
		return Hero;
	}
}
