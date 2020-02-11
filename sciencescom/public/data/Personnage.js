let Personnage = {
  "Emma": {
    "personnage": "img/personnages/Emma.png",
    "boite_dialogue": "img/boite_dialogue/Emma.png",
    "personnage_periode_1": "img/personnages/Emma_periode_1.png",
    "boite_dialogue_periode_1": "img/boite_dialogue/Emma_periode_1.png",
    "personnage_periode_2": "img/boite_dialogue/Emma_periode_2.png",
    "boite_dialogue_periode_2": "img/boite_dialogue/Emma_periode_2.png",
    "dialogues": {
      "0": [
        {
          "texte": ["^1000Bonjour !^300 je suis Emma.^300 Je suis en Master 1 à Audencia,^150 je peux t’aider?^500"],
          "suivant": {"personnage": "Pablo", "slide": "0", "paragraphe": "0"}
        },
        {
          "texte": ["Bien sûr,^150 je suis la pour ça et mes camarades aussi !^300", "Alors si tu me permets,^150 je vais te faire voyager dans le temps à travers l’histoire d’Audencia,^300 suis-moi !^500"]
        }
      ],
      "1": [
        {
          "texte": ["^1500Super,^150 on vient d’arriver,^150 pile à l’endroit que je voulais !^500"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "0"}
        },
        {
          "texte": ["Toujours Nantes.^150 Nous n’avons pas changé de lieu,^150 mais de période!^500"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Mais non,^150 ce sera très instructif tu vas voir.^150 On va commencer au commencement,^300", "lors des premières décennies de l’école,^150 au début du XXème siècle.^300", "Je te laisse choisir quel témoignage tu souhaite découvrir…"]
        }
      ],
      "4": [
        {
          "texte": ["Alors Pablo, j’espère que tu as pu découvrir un peu plus ce qu’était Audencia à ses débuts.^500", " C’est une grande histoire avec un passé comme tu as pu le remarquer.^500"," Mais ce n’est pas fini je vais t’emmener rencontrer d’autres personnes. Elles pourront t’en dire davantage. Continuons.^500"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "0"}
        },
        {
          "texte": ["Bon, on a fait un petit bon dans le temps, et on est en…. 1974 !^500"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Pas mal !  Et tu vas voir, l’école a aussi fait son bon en avant, et pas des moindres !^500"," Mais je suis convaincue que d’autres pourront mieux te l’expliquer que moi…^500"]
        }
      ],
      "7": [
        {
          "texte": ["^1500Tu en sais un peu plus maintenant.^300 J’ai encore une période à te faire découvrir.^500", "Tu verra tu ne sera pas déçu.^300 C’est peut-être celle qui te parlera le plus.^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "0"}
        },
        {
          "texte": ["À présent,^150 nous sommes déjà sur la période contemporaine de l’école.^500", "Beaucoup des éléments qui s’y déroulent sont encore là dans l’école d’ailleurs !^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "1"}
        },
        {
          "texte": ["Exactement !^200 Et tu vas voir,^150 l’école a beaucoup changé ces 20 dernières années…^500"]
        }
      ],
      "10": [
        {
          "texte": ["Bon, je pense que tu en a déjà vu beaucoup ! Je vais te ramener à notre époque, le temps que tu digères tout ça !"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "0"}
        },
        {
          "texte": ["Ca marche !"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "2"}
        },
        {
          "texte": ["^1500Donc voilà,^150 maintenant tu en sais un peu plus sur l’histoire d’Audencia !^300 Alors, ça t’a plu?^500"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "1"}
        },
        {
          "texte": ["J’en suis ravie !^300 J’espère que ça t’a motivé pour nous rejoindre l’année prochaine !^500"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "2"}
        },
        {
          "texte": ["Super !^300 Bonne chance alors et à bientôt !^300"]
        }
      ]
    }
  },
