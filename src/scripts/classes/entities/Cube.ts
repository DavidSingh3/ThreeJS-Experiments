import * as THREE from 'three'

export default class Cube implements EntityInterface {
    size: number;
    x: number;
    y: number;
    z: number;
    delay: number;
    geometry: THREE.BoxGeometry;
    material: THREE.MeshLambertMaterial;
    cube: THREE.Mesh;
    public constructor(size: number, x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
        this.delay = Math.random() * 60
        this.geometry = new THREE.BoxGeometry(size, size, size);
        const color = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.material = new THREE.MeshLambertMaterial({ color });
        this.cube = new THREE.Mesh(this.geometry, this.material);
    }

    tick(elapsedTime: number): void {
        this.rotate(0.01, 0.02, 0.03)
        const speed: number = 0.1
        this.setPosition(
            0.6 * Math.cos(speed * (elapsedTime + this.delay)),
            0.6 * Math.sin(speed * (elapsedTime + this.delay)),
            0.6 * Math.sin(speed * (elapsedTime + this.delay)),
        )
    }

    public addToScene(scene: THREE.Scene) {
        scene.add(this.cube)
    }

    public setPosition(x: number, y: number, z: number) {
        this.cube.position.set(
            x + this.x,
            y + this.y,
            z + this.z
        )
    }

    public rotate(x: number, y: number, z: number) {
        this.geometry.rotateX(x)
        this.geometry.rotateY(y)
        this.geometry.rotateZ(z)
    }
}