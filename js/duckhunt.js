// Main configuration was using JQuery.

// DOG CONFIGURATION
function Dog(e, t) {
    this.id = e, this.game = t, this.sounds = {
        sniff: $("#sniff"),
        bark: $("#bark"),
        laugh: $("#laugh")
    }, this.intervals = {
        sniffInterval: null
    }, this.animationQueue = {
        jump: null
    }, $('<div id="' + this.id + '" class="theDog"></div>').appendTo(this.game), this.DOM = $("#" + this.id), this.DOM.hide()
}

// DUCK CONFIGURATION
function Duck(e, t, n, r) {
    return this.id = e, this.className = t, this.speed = 0, this.game = r, this.DOM = null, this.setSpeed(n), this.hatch(), this.sounds = {
        quackHit: $("#quak"), // quak is the initial sound the duck does.
        thud: $("#thud") // thud is the sound the duck does when hits the ground.
    },this;
}

// GUN CONFIGURATION
function Gun(e, t) {
    this.name = e.name, this.spread = e.spread, this.reloadTime = e.reloadTime, this.audio1 = $(e.audio1), this.audio2 = $(e.audio2), this.game = t, this.ammo = 0, this.lastAudio = null, this.magazine = $("#ammo")
}

// PLAYER CONFIGURATION
function Player(e, t) {
    this.id = e, this.name = t, this.score = 0, this.totalKills = 0, this.totalMisses = 0, this.shotsTaken = 0, this.levelStats = [], this.weapon = null;
}
Dog.prototype.intro = function(e) {
    this.DOM.addClass("searchDog"), this.DOM.show(), this.intervals.sniffInterval = setInterval(_.bind(function() {
        this.sounds.sniff[0].play() // Generates the sound as soon as the game starts.
    }, this), 2e3), this.DOM.sprite({
        fps: 6,
        no_of_frames: 4
    }), this.DOM.animate({
        left: "240"
    }, 5300, "linear", _.bind(function() {
        clearInterval(this.intervals.sniffInterval), this.sounds.bark[0].play(), this.DOM.destroy(), this.DOM.css("background-position", "-632px 0px"), this.animationQueue.jump = setTimeout(_.bind(function() {
        this.css({
            "background-image": "url(img/jumpDog.png)", // Sprite for the Dog when it jumps
            bottom: "75px",
            "background-position": "0 0"
        }), this.sprite({
            fps: 50,
            no_of_frames: 2,
            play_frames: 2
        }), this.fadeOut().promise().then(_.bind(function() {
            this.attr("style", ""), this.removeClass("searchDog"), e.resolve();
        }, this)), this.spStop(), this.destroy();
    }, this.DOM), 500)
}, this))
}, Dog.prototype.fetch = function() {
    this.DOM.stop(!0, !1), this.DOM.show(), this.DOM.css("background-position", "0px 0px"), this.sounds.ohYeah[0].play(), this._upDown();
}, Dog.prototype.laugh = function() {
    this.DOM.stop(!0, !1), this.DOM.show(), this.DOM.css("background-position", "-276px 0px"), this.sounds.laugh[0].play(), this._upDown();
}, Dog.prototype._upDown = function() {
    this.DOM.animate({
        bottom: "110"
    }, 400, function() {
        setTimeout(_.bind(function() {
            this.animate({
                bottom: "-10"
            }, 500);
        }, $(this)), 700);
    })
}, Dog.prototype.inTheCrate = function() {
    this.DOM.hasClass("searchDog") && (clearTimeout(this.animationQueue.jump), this.DOM.attr("style", ""), this.DOM.spStop(), this.DOM.destroy(), this.DOM.removeClass("searchDog"), this.DOM.hide(), clearInterval(this.intervals.sniffInterval));
}, Duck.prototype.bindEvents = function() {
    let e = this;
    this.DOM.on("mousedown", function() {
        e.die();
    })
}, Duck.prototype.unbindEvents = function() {
    this.DOM.off("mousedown")
}, Duck.prototype.die = function() {
    let e = this;
    return this.sounds.quackHit[0].play(), this.game.trigger("duck:died", e), $._spritely.instances[this.id].stop_random = !0, this.DOM.stop(!0, !1), this.DOM.addClass("deadSpin"), this.DOM.spStop(!0), this.DOM.spState(5), setTimeout(function() {
        e.deathSpin()
    }, 500), this
}, Duck.prototype.deathSpin = function() {
    this.DOM.spState(6), this.DOM.spStart(), this.DOM.animate({
        top: "420"
    }, 800, _.bind(function() {
        this.sounds.thud[0].play(), delete $._spritely.instances[this.id], this.DOM.attr("class", "deadDuck"), this.game.trigger("duck:down");
    }, this));
}, Duck.prototype.hatch = function() {
    $('<div id="' + this.id + '" class="duck ' + this.className + '"></div>').appendTo(this.game), this.DOM = $("#" + this.id), this.bindEvents();
}, Duck.prototype.fly = function() {
    let e = this;
    return this.DOM.sprite({
        fps: 6,
        no_of_frames: 3,
        start_at_frame: 1
    }), this.DOM.spRandom({
        top: 400,
        left: 700,
        right: 0,
        bottom: 0,
        speed: e.speed,
        pause: 0
    }), this;
}, Duck.prototype.escape = function() {
    return this.unbindEvents(), this.DOM.hasClass("deadSpin") || (this.game.trigger("duck:miss"), this.game.animate({
    backgroundColor: "#fbb4d4" // Turns background color to a soft red when a duck is not killed.
    }, 900), $._spritely.instances[this.id].stop_random = !0, this.DOM.spState(2), this.DOM.animate({
        top: "-200",
        left: "460"
    }, 500, function() {
        delete $._spritely.instances[this.id], $(this).attr("class", "deadDuck");
    })), this
}, Duck.prototype.setSpeed = function(e) {
    switch (e) {
        case 0:
            this.speed = 3e3;
            break;
        case 1:
            this.speed = 2800;
            break;
        case 2:
            this.speed = 2500;
            break;
        case 3:
            this.speed = 2e3;
            break;
        case 4:
            this.speed = 1800;
            break;
        case 5:
            this.speed = 1500;
            break;
        case 6:
            this.speed = 1300;
            break;
        case 7:
            this.speed = 1200;
            break;
        case 8:
            this.speed = 800;
            break;
        case 9:
            this.speed = 600;
            break;
        case 10:
            this.speed = 500
    }
}, Gun.prototype.updateMagazine = function() { // Displays the bullet images on the top left corner and removes one after a bullet was
    let e = "",
        t = this.ammo > 15 ? 15 : this.ammo;
    for (let n = 0; n < t; n++) e += '<img src="img/bullet.png" align="absmiddle"/>';
    this.magazine.html("<strong>Balas: </strong>" + e)
}, Gun.prototype.shoot = function() {
    this.ammo > 0 && (this.ammo -= 1, this.sound(), this.game.trigger("gun:fire"), this.updateMagazine()), this.ammo === 0 && this.outOfAmmo()
}, Gun.prototype.sound = function() {
    this.lastAudio === this.audio1 ? (this.audio2.get(0).play(), this.lastAudio = this.audio2) : (this.audio1.get(0).play(), this.lastAudio = this.audio1)
}, Gun.prototype.outOfAmmo = function() {
    this.game.trigger("gun:out_of_ammo")
}, Gun.prototype.getAmmo = function() {
    return this.ammo
}, Gun.prototype.setAmmo = function(e) {
    this.ammo = e, this.updateMagazine()
}, Gun.prototype.reload = function() {
    this.game.trigger("gun:reloaded")
}, Gun.prototype.getSpread = function() {
    return this.spread
}, Gun.prototype.getReloadTime = function() {
    return this.reloadTime
}, Player.prototype.getScore = function() {
    return this._formatScore(this.score.toString())
}, Player.prototype.updateScore = function(e) {
    this.score += e, $("#scoreboard").html(this.getScore())
}, Player.prototype.setWeapon = function(e) {
    this.weapon = e
}, Player.prototype.getWeapon = function() {
    return this.weapon
}, Player.prototype.pushLevelStats = function(e) {
    this.levelStats.push(e)
}, Player.prototype._formatScore = function(e) {
    e += "", x = e.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
    let t = /(\d+)(\d{3})/;
    while (t.test(x1)) x1 = x1.replace(t, "$1,$2");
    return x1 + x2
};
let weapons = {
    rifle: {
        name: "rifle",
        spread: 0,
        reloadTime: 0,
        audio1: "#gunSound",
        audio2: "#gunSound2"
    }
},
levels = [{
    id: 1,
    title: "Nivel 1",
    waves: 3,
    ducks: 2,
    pointsPerDuck: 200,
    speed: 2,
    bullets: 4,
    time: 13
}, {
    id: 2,
    title: "Nivel 2",
    waves: 5,
    ducks: 3,
    pointsPerDuck: 300,
    speed: 3,
    bullets: 5,
    time: 10
}, {
    id: 3,
    title: "Nivel 3",
    waves: 6,
    ducks: 3,
    pointsPerDuck: 400,
    speed: 4,
    bullets: 5,
    time: 10
}, {
    id: 4,
    title: "Nivel 4",
    waves: 3,
    ducks: 10,
    pointsPerDuck: 500,
    speed: 4,
    bullets: 12,
    time: 18
}, {
    id: 5,
    title: "Nivel 5",
    waves: 5,
    ducks: 2,
    pointsPerDuck: 600,
    speed: 5,
    bullets: 4,
    time: 13
}, {
    id: 6,
    title: "Nivel 6",
    waves: 3,
    ducks: 25,
    pointsPerDuck: 1000,
    speed: 5,
    bullets: 27,
    time: 35
}],
duckhunt = {
    playfield: "#game",
    level: null,
    curLevel: 0,
    curWave: 0,
    duckMax: 0,
    waveEnding: !1,
    liveDucks: [],
    levelStats: {},
    player: null,
    dog: null,
    gameTimers: {
        waveTimer: null
    },
    sounds: {},
    gameInfoPanels: {},
    init: function() {
        this.playfield = $(this.playfield), this.gameInfoPanels = {
            ammo: $("#ammo"),
            duckBoard: $("#duckBoard"),
            waves: $("#waves")
        }, this.sounds = {
            quacking: $("#quacking"),
            win: $("#victory"),
            lose: $("#defeat")
        }, this.player = new Player("1", "Player 1"), this.player.setWeapon(new Gun(weapons.rifle, this.playfield)), this.dog = new Dog("theDog", this.playfield), this.playfield.on("wave:time_up", _.bind(function(e, t) {
            this.endWave(t)
        }, this)), this.playfield.on("wave:end", _.bind(function(e, t) {
            this.endWave(t)
        }, this)), this.playfield.on("wave:missedDucks", _.bind(function() {
            this.flyAway(), this.dog.laugh()
        }, this)), this.playfield.on("game:next_level", _.bind(function() {
            this.nextLevel()
        }, this)), this.playfield.on("game:defeat", _.bind(function() {
            this.defeat()
        }, this)), this.playfield.on("game:victory", _.bind(function() {
            this.victory()
        }, this)), this.playfield.on("duck:died", _.bind(function(e, t) {
            this.killDuck(t), this.player.updateScore(this.level.pointsPerDuck)
        }, this)), this.playfield.on("duck:down", _.bind(function() {
            this.dog.fetch()
        }, this)), this.playfield.on("gun:out_of_ammo", _.bind(function() {
            this.outOfAmmo()
        }, this)), this.playfield.on("gun:fire", _.bind(function() {
            this.flashScreen()
        }, this))
    },
    bindInteractions: function() {
        this.playfield.on("mousedown", _.bind(function() {
            this.fireGun()
        }, this)), this.showLevelInfo()
    },
    unbindInteractions: function() {
        this.playfield.off("mousedown"), this.liveDucks.map(function(e) {
            e.unbindEvents()
        })
    },
    loadLevel: function(e) {
        this.clearTimers(), this.unbindInteractions(), this.hideLevelInfo(), this.level = e, $("#nivel").html(e.title).fadeIn(), this.curWave = 0, this.levelStats = {
            levelID: this.level.id,
            totalDucks: this.level.ducks * this.level.waves,
            ducksKilled: 0,
            shotsFired: 0
        };
        if (e.id !== 0) {
            let t = $.Deferred();
            this.dog.intro(t), t.always(_.bind(function() {
                $("#nivel").fadeOut(), this.doWave()
            }, this))
        } else this.curLevel--, $("#nivel").fadeOut(), this.doWave()
    },
    doWave: function() {
        this.playfield.animate({
            backgroundColor: "#64b0ff"
        }, 900), this.curWave++;
        if (this.curWave > this.level.waves) {
            this.hideLevelInfo(), this.playfield.trigger("game:next_level");
            return
        }
        this.gameInfoPanels.waves.html("Ola " + this.curWave + " de " + this.level.waves), this.bindInteractions(), this.player.getWeapon().setAmmo(this.level.bullets), this.releaseDucks(), this.sounds.quacking[0].play(), this.gameTimers.waveTimer = setTimeout(_.bind(function(e) {
            this.playfield.trigger("wave:time_up", this.curWave)
        }, this), this.level.time * 1e3)
    },
    endWave: function(e) {
        this.curWave == e && !this.waveEnding && (clearTimeout(this.gameTimers.waveTimer), this.waveEnding = !0, this.liveDucks.length > 0 && this.playfield.trigger("wave:missedDucks"), this.sounds.quacking[0].pause(), this.drawDucks(), setTimeout(_.bind(function() {
            this.waveEnding = !1, this.unbindInteractions(), this.doWave()
        }, this), 4e3))
    },
    hideLevelInfo: function() {
        let e = [this.gameInfoPanels.ammo, this.gameInfoPanels.waves, this.gameInfoPanels.duckBoard];
        _.each(e, function(e) {
            e.fadeOut()
        })
    },
    showLevelInfo: function() {
        let e = [this.gameInfoPanels.ammo, this.gameInfoPanels.waves, this.gameInfoPanels.duckBoard];
        _.each(e, function(e) {
            e.fadeIn()
        })
    },
    nextLevel: function() {
        let e = this.levelStats.ducksKilled / this.levelStats.totalDucks * 100;
        if (e < 70) {
            this.playfield.trigger("game:defeat");
            return
        }
        this.player.pushLevelStats(this.levelStats), this.curLevel += 1, this.curLevel === levels.length ? this.playfield.trigger("game:victory") : (this.gameInfoPanels.duckBoard.html(""), this.loadLevel(levels[this.curLevel]))
    },
    releaseDucks: function() {
        for (let e = 0; e < this.level.ducks; e++) {
            let t = e % 2 === 0 ? "duckA" : "duckB";
            this.duckMax++, this.liveDucks.push((new Duck(this.duckMax.toString(), t, this.level.speed, this.playfield)).fly())
        }
    },
    killDuck: function(e) {
        this.levelStats.ducksKilled += 1, this.liveDucks = _(this.liveDucks).reject(function(t) {
            return t.id === e.id
        }), this.liveDucks.length === 0 && this.playfield.trigger("wave:end", this.curWave)
    },
    drawDucks: function() {
        let e = "",
            t = this.level.ducks * this.curWave - this.levelStats.ducksKilled;
        t = t > 25 ? 25 : t;
        let n = this.levelStats.ducksKilled > 25 ? 25 : this.levelStats.ducksKilled;
        for (let r = 0; r < t; r++) e += "<img src='img/duckLive.png'/>";
        for (r = 0; r < n; r++) e += "<img src='img/duckDead.png'/>";
        this.gameInfoPanels.duckBoard.html(e)
    },
    fireGun: function() {
        this.levelStats.shotsFired += 1, this.player.getWeapon().shoot()
    },
    outOfAmmo: function() {
        this.unbindInteractions(), this.playfield.trigger("wave:end", this.curWave)
    },
    flyAway: function() {
        this.liveDucks.map(function(e) {
            e.escape()
        }), this.liveDucks = []
    },
    victory: function() {
        this.unbindInteractions(), this.sounds.win[0].play(), $(".winner").css("display", "block")
    },
    begin: function() {
    this.unbindInteractions(), this.sounds.start[0].play(), $(".start").css("display", "block")
},
    defeat: function() {
        this.unbindInteractions(), this.showLevelInfo(), this.sounds.lose[0].play(), $(".loser").css("display", "block")
    },
    retry: function() {
        $(".messages").css("display", "none"), this.loadLevel(levels[this.curLevel])
    },
    clearTimers: function() {
        _.map(this.gameTimers, function(e, t) {
            clearTimeout(e)
        })
    },
    clearField: function() {
        this.clearTimers(), this.dog.inTheCrate(), this.playfield.trigger("wave:missedDucks"), $(".messages").css("display", "none")
    },
    flashScreen: function() {
        $(".theFlash").css("display", "block"), setTimeout(function() {
            $(".theFlash").css("display", "none")
        }, 70)
    }
};