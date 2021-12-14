(() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0,
        puntosComputadora = 0;

    // Referencias del HTML

    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComutadora = document.querySelector('#computadora-cartas');

    const puntosHTML = document.querySelectorAll('small');

    // Esta función crea una nueva baraja
    const crearDeck = () => {

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        // console.log(deck);
        deck = _.shuffle(deck)
        return deck;

    };

    crearDeck();

    // Esta función me permite coger una carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en la baraja';
        }

        const carta = deck.pop();
        return carta;

    };
    //pedirCarta();

    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : parseInt(valor);

        // let puntos = 0;
        // if(isNaN (valor)) {
        //     puntos = (valor === 'A') ? 11 : 10
        // } else {
        //     puntos = parseInt(valor) // también se puede hacer puntos = valor * 1 para pasarlo a num 
        // }
        // console.log(puntos)
    };

    // Turno de la computadora

    const turnoComputadora = (puntosMinimos) => {

        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;

            //   <img class="carta" src="../assets/cartas/3C.png">

            const imgCarta = document.createElement('img');
            imgCarta.src = `../assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta')
            divCartasComutadora.append(imgCarta);

            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('¡Empate!');
            } else if (puntosMinimos > 21) {
                alert('Computadora Gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100);

    };

    // Eventos

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador


        //  <img class="carta" src="../assets/cartas/2C.png"> 

        const imgCarta = document.createElement('img');
        imgCarta.src = `../assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divCartasJugador.append(imgCarta)

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21) {
            console.warn('¡21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        deck = [];
        deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[1].innerText = 0;
        puntosHTML[0].innerText = 0;
        divCartasComutadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });

})();
