class Player extends CoreObject {
    speed: number = 1
    direction_deg: number = 0
    constructor(x: number, y: number) {
        super(x, y)
    }
    update(): void {
        const key_w = input.key_hold('ArrowUp')
        const key_a = input.key_hold('ArrowLeft')
        const key_s = input.key_hold('ArrowDown')
        const key_d = input.key_hold('ArrowRight')
        if (key_w) {
            this.y -= this.speed
        }
        if (key_a) {
            this.x -= this.speed
        }
        if (key_s) {
            this.y += this.speed
        }
        if (key_d) {
            this.x += this.speed
        }
    }
    render(): void {
        draw.rect(this.x, this.y, 32, 32)
    }
}

obj.add_name('player')
