const scene_game = new CoreScene()

scene_game.start = () => {
    obj.instantiate('player', new Player(stage.mid.w, stage.mid.h))
}

scene_game.render = () => {
    const column = map1.column
    for (let i = 0; i < map1.data.length; i++) {
        const tile_index = map1.data[i]
        draw.strip_transformed(
            map1.tileset, tile_index,
            (i % column) * 64, Math.floor(i / column) * 64,
            0.5, 0.5, 0
        )
    }
}

scene_game.render_ui = () => {
    draw_debug()
}
