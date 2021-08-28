import EntityInterface from '../interfaces/EntityInterface'

export default class EntityManager {
  private readonly entities: EntityInterface[] = []

  addEntity (entity: EntityInterface): void {
    this.entities.push(entity)
  }

  tick (elapsedTime: number): void {
    this.entities.forEach(entity => entity.tick(elapsedTime))
  }
}
