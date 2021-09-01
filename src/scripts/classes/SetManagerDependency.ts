import SetManager from './SetManager'

export default abstract class SetManagerDependency {
  protected readonly setManager: SetManager
  constructor (setManager: SetManager) {
    this.setManager = setManager
  }
}
