const engine = new RscEngine(960, 540)
const { input, time, stage, scene, draw } = engine

const scene_menu = scene.create('menu')
scene_menu.update = () => {
    // console.log('menu')
    if (input.is_pressed('Space')) {
        console.log('spacce press')
    }
    if (input.is_held('Space')) {
        console.log('spacce held')
    }
    if (input.is_released('Space')) {
        console.log('spacce released')
    }
}

scene_menu.render = () => {
}

const scene_play = scene.create('play')
scene_play.update = () => {
    console.log('play')
}

engine.start(scene_menu)
