import * as THREE from 'three'
import EntityInterface from '../../interfaces/EntityInterface'

export default class Cube implements EntityInterface {
  x: number
  y: number
  z: number
  delay: number
  geometry: THREE.BoxGeometry
  material: THREE.Material
  cube: THREE.Mesh
  public constructor (size: number, x: number, y: number, z: number, map: THREE.Texture) {
    this.x = x
    this.y = y
    this.z = z
    this.delay = Math.random() * 60
    this.geometry = new THREE.BoxGeometry(size, size, size)
    this.material = new THREE.MeshPhongMaterial({ map })
    this.cube = new THREE.Mesh(this.geometry, this.material)
  }

  tick (elapsedTime: number): void {
    const speed: number = 0.01
    this.rotate(
      speed * 0.1,
      speed * 0.2,
      speed * 0.3
    )
    this.setPosition(
      0.6 * Math.cos(speed * (elapsedTime + this.delay)),
      0.6 * Math.sin(speed * (elapsedTime + this.delay)),
      0.6 * Math.sin(speed * (elapsedTime + this.delay))
    )
  }

  public addToScene (scene: THREE.Scene): void {
    scene.add(this.cube)
  }

  public setPosition (x: number, y: number, z: number): void {
    this.cube.position.set(
      x + this.x,
      y + this.y,
      z + this.z
    )
  }

  public rotate (x: number, y: number, z: number): void {
    this.geometry.rotateX(x)
    this.geometry.rotateY(y)
    this.geometry.rotateZ(z)
  }
}
