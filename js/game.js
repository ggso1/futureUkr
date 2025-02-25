class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('button', '../assets/start.png'); // Вкажіть правильний шлях до кнопки
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
        this.load.image('sky', '../assets/13.png');
        this.load.image('ground', '../assets/platform.png');
        this.load.image('star', '../assets/star.png');
        this.load.image('bomb', '../assets/bomb.png');
        this.load.spritesheet('dude', '../assets/dude1.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        this.add.tileSprite(0, 120, worldWidth, 1080, "sky").setOrigin(0, 0);
        this.physics.world.setBounds(0, 0, worldWidth, 1080);

        // Статичні платформи
        platforms = this.physics.add.staticGroup();
        for (let x = 0; x < worldWidth; x += 128) {
            platforms.create(x, 1050, 'ground').refreshBody();
        }

        const yPositions = [900, 800]; // Відстань між платформами

        let movingPlatforms = this.physics.add.group();
        let platformSpacing = 200; // Мінімальна відстань між платформами

        for (let i = 0; i < platformsPerScreen; i++) {
            let x, y, validPosition;
            do {
                x = Phaser.Math.Between(50, worldWidth - 200);
                y = yPositions[i % yPositions.length]; // Use modulo to cycle through yPositions
                validPosition = true;

                // Перевірка на накладання з іншими платформами
                movingPlatforms.children.iterate(function (child) {
                    if (Math.abs(child.x - x) < platformSpacing) {
                        validPosition = false;
                    }
                });
            } while (!validPosition);

            const scale = 0.5;
            const v = 200; // Встановлення однакової швидкості для всіх платформ

            const platform = movingPlatforms.create(x, y, 'ground').setScale(scale).refreshBody();
            platform.body.setAllowGravity(false);
            platform.body.setImmovable(true);
            platform.body.setVelocityX(v); // Встановлення однакової швидкості
            platform.setCollideWorldBounds(true);
            platform.setBounce(1, 1);
        }

        // Гравець
        player = this.physics.add.sprite(200, 450, 'dude');
        player.setBounce(0.5);
        player.setCollideWorldBounds(true);
        player.setScale(1.5);

        // Анімації для гравця
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

        // Колайдери для гравця
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, movingPlatforms, function (player, platform) {
            if (platform.body.touching.up && player.body.touching.down) {
                player.setVelocityX(platform.body.velocity.x);
                player.body.velocity.y = platform.body.velocity.y; // Прикріплення до платформи
            }
        });


        // Зірки
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
            child.setScale(0.1); // Зменшення розміру зірки до 50%
        });

        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(stars, movingPlatforms, function (star, platform) {
            if (star.body.touching.down) {
                star.setVelocityX(platform.body.velocity.x);
            }
        });

        this.physics.add.overlap(player, stars, collectStar, null, this);

        // Бомби
        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, hitBomb, null, this);

        // Розширення світу
        this.cameras.main.setBounds(0, 0, worldWidth, 1080);
        this.physics.world.setBounds(0, 0, worldWidth, 1080);

        // Слідкування за гравцем
        this.cameras.main.startFollow(player);

        // Таймер оновлення кожну секунду
        timerEvent = this.time.addEvent({
            delay: 1000,
            callback: updateTimer,
            callbackScope: this,
            loop: true,
        });

        function collectStar(player, star) {
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

        function hitBomb(player, bomb) {
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
                resetPlayer();
            }
        }

        function updateTimer() {
            if (!gameOver) {
                timer++;
                document.getElementById('time').innerText = timer;
            }
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
let platformsPerScreen = 3; // Зменшено кількість рухомих платформ на 3
let timer = 0;
let lives = 3;
let timerEvent;
const game = new Phaser.Game(config);
