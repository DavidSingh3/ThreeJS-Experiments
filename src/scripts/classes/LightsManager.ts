import * as THREE from 'three'
import SetManagerDependency from './SetManagerDependency'

export default class LightsManager extends SetManagerDependency {
  setAmbientLight (): void {
    const color: number = 0xffffff
    const intensity: number = 0.6
    const light = new THREE.AmbientLight(color, intensity)
    light.position.set(-1, 2, 4)
    this.setManager.scene.add(light)
  }

  setPointLight (): void {
    const color = 0xffffff
    const intensity = 1
    const light = new THREE.PointLight(color, intensity)
    light.position.set(-1, 4, 6)
    this.setManager.scene.add(light)
  }
}
