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
          "texte": ["Bonjour et bienvenu aux portes ouvertes d'Audencia ! je suis Emma et je suis en Master 1 à Audencia, je peux t’aider ?"],
          "suivant": {"personnage": "Pablo", "slide": "0", "paragraphe": "0"}
        },
        {
          "texte": ["Bien sûr, je suis là pour ça et mes camarades aussi ! Alors si tu me permets, je vais te faire voyager dans le temps à travers l’histoire d’Audencia, suis-moi !"]
        }
      ],
      "1": [
        {
          "texte": ["Super, on vient d’arriver, pile à l’endroit où je voulais !"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "0"}
        },
        {
          "texte": ["Toujours Nantes. Nous n’avons pas changé de lieu, mais de période!"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Mais non, ce sera très instructif tu vas voir. On va commencer par le commencement, lors des premières décennies de l’école, au début du XXème siècle. Je te laisse choisir quel témoignage tu souhaite découvrir…"]
        }
      ],
      "4": [
        {
          "texte": ["Alors Pablo, j’espère que tu as pu découvrir un peu plus ce qu’était Audencia à ses débuts. C’est une grande école avec une longue histoire comme tu as pu le remarquer. Mais ce n’est pas fini !Je vais t’emmener rencontrer d’autres personnes. Elles pourront t’en dire davantage. Continuons."],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "0"}
        },
        {
          "texte": ["Bon, on a fait un petit bon dans le temps, et on est en…. 1974 !"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Pas mal !  Et tu vas voir, l’école a aussi fait son bond en avant, et pas des moindres ! Mais je suis convaincue que d’autres pourront mieux te l’expliquer que moi…"]
        }
      ],
      "7": [
        {
<<<<<<< HEAD
          "texte": ["tu en sais un peu plus maintenant. J’ai encore une période à te faire découvrir. Tu verras tu ne seras pas déçu. C’est peut-être celle qui te parlera le plus."],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "0"}
        },
        {
          "texte": ["À présent, nous sommes déjà dans la période contemporaine de l’école. Beaucoup des éléments qu'on retrouve ici existe toujours d’ailleurs !"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "1"}
=======
          "texte": ["^1500Tu en sais un peu plus maintenant.^300 J’ai encore une période à te faire découvrir.^500", "Tu verra tu ne sera pas déçu.^300 C’est peut-être celle qui te parlera le plus.^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "0"}
        },
        {
          "texte": ["À présent,^150 nous sommes déjà sur la période contemporaine de l’école.^500", "Beaucoup des éléments qui s’y déroulent sont encore là dans l’école d’ailleurs !^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "1"}
>>>>>>> a9760816282aeaf10c27c7084f9dd13ecfa8d9c2
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
          "texte": ["Ça marche !"],
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

  "Pablo": {
    "personnage": "img/personnages/Pablo.png",
    "boite_dialogue": "img/boite_dialogue/Pablo.png",
    "personnage_periode_1": "img/personnages/Pablo_periode_1.png",
    "boite_dialogue_periode_1": "img/boite_dialogue/Pablo_periode_1.png",
    "dialogues": {
      "0": [
        {
          "texte": ["Bonjour, moi c’est Pablo, Je suis à la recherche d’une école pour l’année prochaine, et je voulais avoir quelques renseignements au sujet de celle-ci."],
          "suivant": {"personnage": "Emma", "slide": "0", "paragraphe": "1"}
        }
      ],
      "1": [
        {
          "texte": ["Et cet endroit, c’est…"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Ok, donc on est dans Retour vers le futur là ? C’est un peu vieux jeu non ?"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "2"}
        }
      ],
      "4": [
        {
          "texte": ["J’ai hâte !"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Plutôt grand comme bond ! Fin des Trentes Glorieuses, VGE président, les premières télés en couleur…  je vois le dessin !"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "2"}
        }
      ],
      "5": [
        {
          "texte": ["Bonjour, je m’appelle Pablo, enchanté, je suis intéressé par l’école que tu as fait et je voulais savoir : comment tes années à l’école se sont passées ? Pas trop compliqué ?"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "0"}
        },
        {
          "texte": ["D’accord, c’était vraiment le bon moment, alors !"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["J’imagine ! Et tous ces équipements t’ont aidé pendant tes années d’étudiant ?"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Très bien ! Et depuis, tes années à l’école t’ont aidé pour le monde du travail ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Plutôt oui ! En tout cas, merci beaucoup d’avoir pris le temps de discuter avec moi, j’ai beaucoup appris !"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "4"}
        }
      ],
      "6": [
        {
          "texte": ["Bonjour, je m’appelle Pablo, je suis très intéressé par l’école. J’ai pu en apprendre un peu plus sur ses débuts et je ne pensais pas qu’elle pouvait avoir une telle histoire. J’aimerais m’informer un peu plus."],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "0"}
        },
        {
          "texte": ["Pouvez-vous m'expliquer ce qu’est un MBA, c’est assez flou pour moi."],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["je comprends, cela à dû être très intéressant à vivre."],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["Je vous remercie de m’avoir consacré un peu de temps. Encore une fois l’histoire m’épate et me donne envie d’étudier dans cet établissement."],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "3"}
        }
      ],
      "7": [
        {
          "texte": ["je ne m’attendais pas à une telle histoire,^150 je suis ravi de la découvrir et de la connaître un peu plus.^500"],
          "suivant": {"personnage": "Emma", "slide": "7", "paragraphe": "1"}
        },
        {
          "texte": ["Cool,^150 donc un peu plus proche de ce que je pourrais faire à Audencia,^150 non ?^500"],
          "suivant": {"personnage": "Emma", "slide": "7", "paragraphe": "2"}
        }
      ],
      "10": [
        {
          "texte": ["Déjà ?^300 Mince,^150 c’est passé si vite !^300 Dans ce cas, retournons chez nous !^500"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "1"}
        },
        {
<<<<<<< HEAD
          "texte": ["Oui ! Je dois dire, je suis plutôt impressionné ! Je ne pensais pas qu’il y aurait autant d’histoires pour cette école !"],
=======
          "texte": ["Oui !^150 Je dois dire que je suis plutôt impressionné !^300", "Je ne pensais pas qu’il y aurait autant d’histoire pour cette école !^500"],
>>>>>>> a9760816282aeaf10c27c7084f9dd13ecfa8d9c2
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "3"}
        },
        {
          "texte": ["Évidemment !^150 J’ai hâte maintenant !^500"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "4"}
        }
      ]
    }
  },

  "Alain": {
    "personnage": "img/personnages/Alain.png",
    "boite_dialogue": "img/boite_dialogue/Alain.png",
    "dialogues": {
      "5": [
        {
          "texte": ["Non, pas tant que ça ! Il faut dire que j’ai eu de la chance : je suis arrivé dans des locaux flambant neufs, sur le campus des facultés de Nantes ! Et l’année d’après, de nouveaux ordinateurs ont été installés !"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["Oui, un très bon timing ! Surtout que le premier mini-ordinateur est arrivé dans l’école pendant ma dernière année ! Bon, à l’époque, ça n’avait de “mini” que le nom mais autant dire que j’ai accueilli ça à bras ouverts !"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Évidemment ! Je suis diplômé de la promo 1975 au sein du cursus “Finance-Comptabilité”, donc forcément, un ordinateur est un outil plus qu’important pour travailler dans les meilleures conditions."],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Bien sûr ! Cela fait 2 ans que je suis diplômé et j’ai toujours eu un poste à responsabilités depuis que je suis sorti de l’école. Aujourd’hui, je travaille au service comptabilité de KPMG à Paris. Ça te parle ?"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "4"}
        },
        {
          "texte": ["Au plaisir, et bon courage !^500"]
        }
      ]
    }
  },

  "Martine": {
    "personnage": "img/personnages/Martine.png",
    "boite_dialogue": "img/boite_dialogue/Martine.png",
    "dialogues": {
      "6": [
        {
          "texte": ["Bonjour Pablo, moi c’est Martine. Et je serais ravie de t’expliquer mon parcours ainsi que l’histoire de l’école, en tout cas l’histoire que j’ai pu voir. J’ai été diplômée en 1980 du cursus “distribution - commerce  extérieur”. Ce fut une très belle expérience pour moi. J’ai eu la chance de faire partie de la première promotion diplômée de la MBA de l’Oregon State University."],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["Bien sûr , il s’agit d’un diplôme international d’études supérieures de haut niveau de gestion et de management des entreprises. Faire partie des diplômés fut vraiment une fierté pour moi ainsi que mes parents."],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["En effet mais ce n’est pas tout, la période que j’ai vécu en tant qu’étudiante à Audencia fut très riche en innovations. Ce qui m’a particulièrement plu, c’est l’ouverture à l’internationale. Quel chance pour nous ainsi que les futurs étudiants! Un promotion entière est partie au Polytechnic Central London. Pour nous ce fut une nouveauté et une opportunité incroyable. Et puis l’ouverture d’un MBA et d’un institut de relations internationales a fait d’Audencia une école moderne. Et c’est sur cette note positive que j’ai terminé mes études."],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "3"}
        },
        {
          "texte": ["Je te souhaite de trouver ta voie. Bonne continuation Pablo.^500"]
        }
      ]
    }
  }
}
