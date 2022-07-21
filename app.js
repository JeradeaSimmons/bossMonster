console.log('Hero');

const heroes = {
    Spike: {
        health: 100,
        img: 'https://images.unsplash.com/photo-1606773061828-28a5ad536bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a25pZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

    },
    Zilla: {
        health: 100,
        img: 'https://images.unsplash.com/photo-1443803992021-689478c50dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29kemlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
}

const monsters = {
    Ghost_Cat: {
        health: 300,
        img: 'https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNjYXJ5JTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
}
console.log(heroes);

function drawHeroes() {
    let template = ''
    for (let key in heroes) {
        let hero = heroes[key]

        template += `
    <div id="heroes" class="col-6">
    <div>
        <img class="img-fluid charImg"
            src="${hero.img}"
            alt="">
    </div>
    <div class="progress">
        <div class="progress-bar progress-bar-striped
            bg-success" role="progressbar" aria-label="Success
            striped example" style="width: ${hero.health}%"
            aria-valuenow="${hero.health}" aria-valuemin="0"
            aria-valuemax="100"></div>
    </div>
    <p class="text-light">${key}<span> ${hero.health}</span></p>
</div>
  `
        console.log(template);
        let heroElm = document.getElementById('hero')
        console.log(heroElm);
        heroElm.innerHTML = template
    }
}

function drawMonster() {
    let template = ''
    for (let key in monsters) {
        let monster = monsters[key]
        template += `
        
        <div class="row">
                        <div>
                            <img class="img-fluid monster" onclick="attack()" src="${monster.img}"
                                alt="">
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped
                                bg-success" role="progressbar"
                                aria-label="Success
                                striped example" style="width:
                                ${monster.health}%"
                                aria-valuenow="${monster.health}"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p class="text-light">${key} <span> ${monster.health}</span></p>

                    </div>

        
        
        
        
        
        
        `
        let monsterElm = document.getElementById('monster')
        monsterElm.innerHTML = template
    }
}

function attack() {
    let monster = monsters
    console.log('attack', monster);
    for (let key in monsters) {
        let monster = monsters[key]
        monster.health -= 5
        if (monster.health < 0) {
            monster.health = 0
        }
    } drawMonster()
}

function damage() {
    for (let key in heroes) {
        let hero = heroes[key]
        hero.health -= 5
        if (hero.heath < 0) {
            hero.health = 0
        }

    } drawHeroes()
}

setInterval(damage, 3000)

drawMonster()
drawHeroes()