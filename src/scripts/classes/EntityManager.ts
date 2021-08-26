export default class EntityManager {
    
    private entities: EntityInterface[] = []

    addEntity(entity: EntityInterface) {
        this.entities.push(entity)
    }
    
    tick(elapsedTime: number): void {
        this.entities.forEach( entity => entity.tick(elapsedTime) )
    }
}