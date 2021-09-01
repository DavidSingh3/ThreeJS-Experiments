import * as THREE from 'three'
import '../styles/main.scss'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Cube from './classes/entities/Cube'
import EntityManager from './classes/EntityManager'
import TextureManager from './classes/TextureManager'

const init: () => Promise<void> = async () => {
  const scene: THREE.Scene = new THREE.Scene()

  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 1

  {
    const color: number = 0xffffff
    const intensity: number = 0.6
    const light = new THREE.AmbientLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  {
    const color = 0xffffff
    const intensity = 1
    const light = new THREE.PointLight(color, intensity)
    light.position.set(-1, 4, 6)
    scene.add(light)
  }

  const entityManager = new EntityManager()
  const textureManager = new TextureManager()
  const textures = await (textureManager).loadTextures()

  for (let i: number = 0; i < 500; i++) {
    const cube = new Cube(
      ((Math.random() * 0.07) + 0.01),
      (Math.random() * 2) - 1,
      (Math.random() * 2) - 1,
      (Math.random() * 2) - 1,
      textureManager.getRandomTexture(textures)
    )
    cube.rotate(
      Math.random(),
      Math.random(),
      Math.random()
    )
    cube.addToScene(scene)
    entityManager.addEntity(cube)
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }, false)

  const clock = new THREE.Clock()
  clock.start()
  function tick (): void {
    entityManager.tick(clock.getElapsedTime())
    renderer.render(scene, camera)
    controls.update()
  }
  renderer.setAnimationLoop(tick)
}

init().catch(console.error)
