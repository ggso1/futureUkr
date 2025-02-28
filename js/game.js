class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('button', 'assets/start.png');
    }

    create() {
        const button = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'button')
            .setInteractive()
            .on('pointerdown', this.startGame.bind(this));
    }

    startGame() {
        this.scene.start('GameScene');
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('sky', 'assets/13.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });


        this.load.script('arcade', 'https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser-arcade-physics.min.js');
    }

    create() {
        console.log(this.anims.anims.entries); // Log the animation entries

        this.add.tileSprite(0, 120, worldWidth, 1080, "sky").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, worldWidth, 1080);

        // Static platforms
        platforms = this.physics.add.staticGroup();
        for (let x = 0; x < worldWidth; x += 128) {
            platforms.create(x, 1050, 'ground').refreshBody();
        }

        const yPositions = [900, 800]; // Distance between platforms

        let movingPlatforms = this.physics.add.group();
        let platformSpacing = 200; // Minimum distance between platforms

        for (let i = 0; i < platformsPerScreen; i++) {
            let x, y, validPosition;
            do {
                x = Phaser.Math.Between(50, worldWidth - 200);
                y = yPositions[i % yPositions.length]; // Use modulo to cycle through yPositions
                validPosition = true;

                // Check for overlap with other platforms
                movingPlatforms.children.iterate(function (child) {
                    if (Math.abs(child.x - x) < platformSpacing) {
                        validPosition = false;
                    }
                });
            } while (!validPosition);

            const scale = 0.5;
            const v = 200; // Set the same speed for all platforms

            const platform = movingPlatforms.create(x, y, 'ground').setScale(scale).refreshBody();
            platform.body.setAllowGravity(false);
            platform.body.setImmovable(true);
            platform.body.setVelocityX(v); // Set the same speed
            platform.setCollideWorldBounds(true);
            platform.setBounce(1, 1);
        }

        // Player
        player = this.physics.add.sprite(200, 450, 'dude');
        player.setBounce(0.5);
        player.setCollideWorldBounds(true);
        player.setScale(1.5);

        // Player animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });

        // Colliders for player
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, movingPlatforms, function (player, platform) {
            if (platform.body.touching.up && player.body.touching.down) {
                player.setVelocityX(platform.body.velocity.x);
                player.body.velocity.y = platform.body.velocity.y; // Attach to platform
            }
        });

        // Stars
        stars = this.physics.add.group({
            key: 'star',
            repeat: 16.6 * countOfScreens,
            setXY: { x: 12, y: 0, stepX: 70 },
        });

        stars.children.iterate(function (child) {
            child.setBounce(0);
            child.setBounceY(0.4);
            child.setCollideWorldBounds(true);
            child.body.setAllowGravity(true);
            child.setVelocityX(0);
            child.setScale(0.1); // Reduce star size to 50%
        });

        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(stars, movingPlatforms, function (star, platform) {
            if (star.body.touching.down) {
                star.setVelocityX(platform.body.velocity.x);
            }
        });

        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        // Bombs
        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        // Expand world
        this.cameras.main.setBounds(0, 0, worldWidth, 1080);
        this.physics.world.setBounds(0, 0, worldWidth, 1080);

        // Follow player
        this.cameras.main.startFollow(player);

        // Timer update every second
        timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true,
        });
    }

    collectStar(player, star) {
        star.disableBody(true, true);
        score += 10;
        document.getElementById('score').innerText = score;

        if (stars.countActive(true) === 0) {
            stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
                child.body.setGravityY(Phaser.Math.Between(50, 100));
            });

            const x = Phaser.Math.Between(0, worldWidth);
            const bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }
    }

    hitBomb(player, bomb) {
        bomb.disableBody(true, true);
        lives -= 1;
        document.getElementById('lives').innerText = lives;

        if (lives === 0) {
            this.physics.pause();
            player.setTint(0xff0000);
            player.anims.play('turn');
            gameOver = true;
            score = 0;
            timer = 0;
        } else {
            this.resetPlayer();
        }
    }

    updateTimer() {
        if (!gameOver) {
            timer++;
            document.getElementById('time').innerText = timer;
        }
    }

    update() {
        cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            player.setVelocityX(-500);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(500);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [MainScene, GameScene]
};

let player;
let stars;
let bombs;
let platforms;
let cursors;
let score = 0;
let gameOver = false;
let countOfScreens = 1.5;
let worldWidth = 1200 * countOfScreens;
let platformsPerScreen = 3; // Reduced number of moving platforms to 3
let timer = 0;
let lives = 3;
let timerEvent;
const game = new Phaser.Game(config);
