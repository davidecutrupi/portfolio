import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import gsap from 'gsap'

export const init = (canvas) => {

	// Scene
	let sceneLoaded = false
	const scene = new THREE.Scene()
	scene.background = new THREE.Color(0xDDDDDD)

	// Overlay
	const overlayMaterial = new THREE.ShaderMaterial({
		transparent: true,
		uniforms: { uAlpha: { value: 1 } },
		vertexShader: `
			void main() {
				gl_Position = vec4(position, 1.0);
			}
		`,
		fragmentShader: `
			uniform float uAlpha;

			void main() {
				gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
			}
		`
	})
	const overlay = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 1, 1), overlayMaterial)
	scene.add(overlay)

	// Loaders
	const loadingBar = document.querySelector('.loading-bar')
	const loadingManager = new THREE.LoadingManager(
		// On load
		() => {
			window.setTimeout(() => {
				gsap.to(overlayMaterial.uniforms.uAlpha, { value: 0, duration: 3, delay: 1 })
				loadingBar.classList.add('ended')
			}, 500)
			window.setTimeout(() => sceneLoaded = true, 3000)
		},
		// On Progress
		(_, itemsLoaded, itemsTotal) => {
			const progress = itemsLoaded / itemsTotal
			loadingBar.style.transform = `scaleX(${progress})`
		}
	)
	const textureLoader = new THREE.TextureLoader(loadingManager)
	const furnitureTexture = textureLoader.load('/furnitureBaked.jpg')
	const plantTexture = textureLoader.load('/plantBaked.jpg')
	const shipTexture = textureLoader.load('/shipBaked.jpg')
	const hookahBowlTexture = textureLoader.load('/hookahBowlBaked.jpg')
	const gamesTexture = textureLoader.load('/gamesBaked.jpg')
	furnitureTexture.flipY = false
	plantTexture.flipY = false
	shipTexture.flipY = false
	hookahBowlTexture.flipY = false
	gamesTexture.flipY = false
	furnitureTexture.encoding = THREE.sRGBEncoding
	plantTexture.encoding = THREE.sRGBEncoding
	shipTexture.encoding = THREE.sRGBEncoding
	hookahBowlTexture.encoding = THREE.sRGBEncoding
	gamesTexture.encoding = THREE.sRGBEncoding
	const furnitureMaterial = new THREE.MeshBasicMaterial({ map: furnitureTexture })
	const plantMaterial = new THREE.MeshBasicMaterial({ map: plantTexture, side: THREE.DoubleSide })
	const shipMaterial = new THREE.MeshBasicMaterial({ map: shipTexture })
	const hookahBowlMaterial = new THREE.MeshBasicMaterial({ map: hookahBowlTexture })
	const gamesMaterial = new THREE.MeshBasicMaterial({ map: gamesTexture })
	
	const dracoLoader = new DRACOLoader(loadingManager)
	dracoLoader.setDecoderPath('/draco/') 

	const gltfLoader = new GLTFLoader(loadingManager)
	gltfLoader.setDRACOLoader(dracoLoader)

	// Future objects
	let leftMixer = undefined
	let rightMixer = undefined
	const animationsClips = []
	const furnitureObjects = []

	// Load glb
	gltfLoader.load('/furniture.glb', (gltf) => {
		
		// Save animations clip
		gltf.animations.forEach((animation) => {
			animationsClips.push(THREE.AnimationUtils.subclip(animation, `open${animation.name.charAt(0).toUpperCase() + animation.name.slice(1)}`, 0, 25, 24))
			animationsClips.push(THREE.AnimationUtils.subclip(animation, `close${animation.name.charAt(0).toUpperCase() + animation.name.slice(1)}`, 26, 51, 24))
		})

		gltf.scene.traverse((child) => {

			child.material = furnitureMaterial

			if (child.name.includes('Drawer')) {
				furnitureObjects.push(child)

				switch (child.name) {

					case 'leftDrawer':

						points.push({
							position: child.position.clone().setZ(child.position.z + .2).setX(child.position.x + .3),
							element: document.querySelector('.point-1')
						})

						document.querySelector('.point-1').addEventListener('click', ({ target }) => {
							// Open drawer
							if (target.innerText.includes('Open')) {
								leftMixer.uncacheClip(animationsClips[1])
								const action = leftMixer.clipAction(animationsClips[0])
								action.clampWhenFinished = true
								action.setLoop(THREE.LoopOnce)
								action.play()
								target.innerText = target.innerText.replace('Open', 'Close')
							}
							// Close drawer
							else {
								leftMixer.uncacheClip(animationsClips[0])
								const action = leftMixer.clipAction(animationsClips[1])
								action.clampWhenFinished = true
								action.setLoop(THREE.LoopOnce)
								action.play()
								target.innerText = target.innerText.replace('Close', 'Open')
							}
						})

						break

					case 'rightDrawer':

						points.push({
							position: child.position.clone().setZ(child.position.z + .2).setX(child.position.x - .3),
							element: document.querySelector('.point-2')
						})

						document.querySelector('.point-2').addEventListener('click', ({ target }) => {
							// Open drawer
							if (target.innerText.includes('Open')) {
								rightMixer.uncacheClip(animationsClips[3])
								const action = rightMixer.clipAction(animationsClips[2])
								action.clampWhenFinished = true
								action.setLoop(THREE.LoopOnce)
								action.play()
								target.innerText = target.innerText.replace('Open', 'Close')
							}
							// Close drawer
							else {
								rightMixer.uncacheClip(animationsClips[2])
								const action = rightMixer.clipAction(animationsClips[3])
								action.clampWhenFinished = true
								action.setLoop(THREE.LoopOnce)
								action.play()
								target.innerText = target.innerText.replace('Close', 'Open')
							}
						})

						break

					default: 
						break
				}
			}
		})

		scene.add(gltf.scene)
		leftMixer = new THREE.AnimationMixer(gltf.scene)
		rightMixer = new THREE.AnimationMixer(gltf.scene)

	})

	gltfLoader.load('/plant.glb', (gltf) => {
		gltf.scene.traverse(child =>  child.material = plantMaterial )
		scene.add(gltf.scene)
	})

	gltfLoader.load('/ship.glb', (gltf) => {
		gltf.scene.traverse(child =>  child.material = shipMaterial )
		scene.add(gltf.scene)
	})

	gltfLoader.load('/hookahBowl.glb', (gltf) => {
		gltf.scene.traverse(child =>  child.material = hookahBowlMaterial )
		scene.add(gltf.scene)
	})

	gltfLoader.load('/games.glb', (gltf) => {
		gltf.scene.traverse(child =>  child.material = gamesMaterial )
		scene.add(gltf.scene)
	})

	// Base camera
	const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
	camera.position.z = 1.5
	camera.position.y = .8
	camera.position.x = -1
	scene.add(camera)

	// Controls
	const controls = new OrbitControls(camera, canvas)
	controls.target.set(0, .5, 0)
	controls.enableDamping = true
	controls.minDistance = 1.2
	controls.maxDistance = 2.1
	controls.maxPolarAngle = Math.PI / 2
	controls.minPolarAngle = Math.PI / 6
	controls.minAzimuthAngle = - Math.PI / 2
	controls.maxAzimuthAngle = Math.PI / 2
	controls.rotateSpeed = .1
	controls.mouseButtons.MIDDLE = undefined
	controls.mouseButtons.RIGHT = undefined
	controls.touches.TWO = undefined

	// Zoom listener that change font label size
	canvas.addEventListener('wheel', () => {
		const zoom = controls.getDistance()
		const scale = ( zoom * -0.5 ) + 1.8
		document.querySelectorAll('.point:not(.behind) .label').forEach(elem => { elem.style.transform = `scale(${scale}, ${scale})`})
	})

	// Raycaster and points
	const raycaster = new THREE.Raycaster()
	const points = []

	// Renderer
	const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	renderer.setSize(canvas.clientWidth, canvas.clientHeight)
	renderer.outputEncoding = THREE.sRGBEncoding

	// Resize function
	const resizeCanvas = () => {
		const width = canvas.clientWidth
		const height = canvas.clientHeight
		renderer.setSize(width, height, false)
		camera.aspect = width / height
		camera.updateProjectionMatrix()
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	}
	const resizeObserver = new ResizeObserver(resizeCanvas)
	resizeObserver.observe(canvas, { box: 'content-box' })

	// Tick
	const clock = new THREE.Clock()
	let previousTime = 0
	const tick = () => {

		const elapsedTime = clock.getElapsedTime()
		const deltaTime = elapsedTime - previousTime
		previousTime = elapsedTime

		// Update controls
		controls.update()

		// Update points (labels) potision
		for (const point of points) {
			const screenPosition = point.position.clone().project(camera)

			// Check if the point is not behind an object
			raycaster.setFromCamera(screenPosition, camera)
			const intersectObjects = raycaster.intersectObjects(furnitureObjects)

			if (intersectObjects.length && intersectObjects[0].distance < point.position.distanceTo(camera.position)) {
				point.element.classList.add('behind')
				continue
			} else {
				sceneLoaded && point.element.classList.remove('behind')
			}

			const translateX = screenPosition.x * canvas.clientWidth * .5
			const translateY = - screenPosition.y * canvas.clientHeight * .5
			point.element.style.transform = `translate(${translateX}px, ${translateY}px)` 
		}

		// Update mixer
		leftMixer && leftMixer.update(deltaTime)
		rightMixer && rightMixer.update(deltaTime)

		// Render
		renderer.render(scene, camera)

		// Call tick again on the next frame
		window.requestAnimationFrame(tick)

	}
	tick()

}