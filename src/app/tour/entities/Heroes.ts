import { EntitySet, EntityType } from 'reactive-entity';
import { Hero } from './Hero';

export class Heroes extends EntitySet {
	protected get entityClass(): EntityType {
		return Hero;
	}
}
