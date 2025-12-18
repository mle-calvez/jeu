// ================== data.js ==================
// Exemple pour le jeu de piste

const etapes = {
  1: {
    question: "Où se trouve le trésor ?",
    reponse: "A",
    token: "TOKEN_ETAPE1",
    background: "images/etape1.jpg",
    music: "audio/etape1.mp3",
    suivante: 2
  },
  2: {
    question: "Quelle est la couleur du dragon ?",
    reponse: "Rouge",
    token: "TOKEN_ETAPE2",
    background: "images/etape2.jpg",
    music: "audio/etape2.mp3",
    suivante: 3
  },
  3: {
    question: "Combien de clés y a-t-il ?",
    reponse: "3",
    token: "TOKEN_ETAPE3",
    background: "images/etape3.jpg",
    music: "audio/etape3.mp3",
    suivante: null
  }
};

/*
Comment créer un QR correct pour la première étape :

URL du QR : reponse.html?etape=1&token=TOKEN_ETAPE1

- etape=1 correspond à la clé de l'étape dans data.js
- token=TOKEN_ETAPE1 doit correspondre exactement à etapes[1].token

Pour l'étape 2 : reponse.html?etape=2&token=TOKEN_ETAPE2
Pour l'étape 3 : reponse.html?etape=3&token=TOKEN_ETAPE3
*/