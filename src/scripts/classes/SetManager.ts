import * as THREE from 'three'
import EntityManager from './EntityManager'
import LightsManager from './LightsManager'
import TextureManager from './TextureManager'

export default class SetManager {
  public readonly lightsManager: LightsManager
  public readonly entityManager: EntityManager
  public readonly textureManager: TextureManager
  public readonly scene: THREE.Scene = new THREE.Scene()
  public readonly axesHelper: THREE.AxesHelper = new THREE.AxesHelper(5)
  public readonly renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true })
  public readonly camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  constructor () {
    this.lightsManager = new LightsManager(this)
    this.entityManager = new EntityManager(this)
    this.textureManager = new TextureManager(this)

    this.lightsManager.setAmbientLight()
    this.lightsManager.setPointLight()

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }, false)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
  }
}
