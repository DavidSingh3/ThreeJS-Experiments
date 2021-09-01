import EntityInterface from '../interfaces/EntityInterface'
import SetManagerDependency from './SetManagerDependency'

export default class EntityManager extends SetManagerDependency {
  private readonly entities: EntityInterface[] = []

  addEntity (entity: EntityInterface): void {
    this.entities.push(entity)
  }

  tick (elapsedTime: number): void {
    this.entities.forEach(entity => entity.tick(elapsedTime))
  }
}
