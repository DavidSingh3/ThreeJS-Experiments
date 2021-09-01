import * as THREE from 'three'
import '../styles/main.scss'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Cube from './classes/entities/Cube'
import SetManager from './classes/SetManager'

const init: () => Promise<void> = async () => {
  const setManager: SetManager = new SetManager()
  const {
    entityManager,
    textureManager,
    scene,
    axesHelper,
    camera,
    renderer
  } = setManager

  camera.position.z = 1

  scene.add(axesHelper)

  const textures = await textureManager.loadTextures()

  for (let i: number = 0; i < 1; i++) {
    const cube = new Cube(
      1,
      0,
      0,
      0,
      textureManager.getRandomTexture(textures)
    )

    cube.addToScene(scene)
    entityManager.addEntity(cube)
  }

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

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
