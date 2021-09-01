import * as THREE from 'three'
import textureUrls from '../../textures'
import SetManagerDependency from './SetManagerDependency'

export default class TextureManager extends SetManagerDependency {
  private readonly textureLoader = new THREE.TextureLoader()

  async loadTextures (): Promise<THREE.Texture[]> {
    const textureLoaderPromises = textureUrls.map(async (url: string): Promise<THREE.Texture> => {
      return await new Promise((resolve, reject) => {
        this.textureLoader.load(
          url,
          resolve,
          () => {},
          reject
        )
      })
    })
    return await Promise.all(textureLoaderPromises)
  }

  getRandomTexture = (textures: THREE.Texture[]): THREE.Texture => {
    const index = Math.floor(Math.random() * textures.length)

    return textures[index]
  }
}
