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
          "texte": ["tu en sais un peu plus maintenant. J’ai encore une période à te faire découvrir. Tu verra tu ne sera pas déçu. C’est peut-être celle qui te parlera le plus."],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "0"}
        },
        {
          "texte": ["À présent, nous sommes déjà sur la période contemporaine de l’école. Beaucoup des éléments qui s’y déroulent sont encore là dans l’école d’ailleurs !"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Exactement ! Et tu vas voir, l’école a beaucoup changé ces 20 dernières années…"]
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
          "texte": ["Donc voilà, maintenant tu en sais un peu plus sur l’histoire d’Audencia ! Alors, ça t’a plu?"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "1"}
        },
        {
          "texte": ["J’en suis ravie ! J’espère que ça t’a motivé pour nous rejoindre l’année prochaine !"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "2"}
        },
        {
          "texte": ["Super ! Bonne chance alors et à bientôt !"]
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
          "texte": ["Bonjour,^150 moi c’est Pablo,^150 Je suis à la recherche d’une école pour l’année prochaine,^300", "et je voulais avoir quelques renseignements au sujets de celle-ci.^500"],
          "suivant": {"personnage": "Emma", "slide": "0", "paragraphe": "1"}
        }
      ],
      "1": [
        {
          "texte": ["Et cet endroit, c’est…^500"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Ok, donc on est dans Retour vers le futur là ?^150 C’est un peu vieu jeu non ?^500"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "2"}
        }
      ],
      "4": [
        {
          "texte": ["J’ai hâte !^300"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Plutôt grand comme bon ! Fin des Trentes Glorieuses, VGE président, les premières télés en couleur…  je vois le dessin !^800"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "2"}
        }
      ],
      "5": [
        {
          "texte": ["Bonjour, je m’appelle Pablo, enchanté, je suis intéressé par l’école que tu as fait et je voulais savoir :^500"," comment tes années à l’école se sont passées ? Pas trop compliqué ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "0"}
        },
        {
          "texte": ["D’accord, c’était vraiment le bon moment, alors !^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["J’imagine ! Et tous ces équipements t’ont aidés pendant tes années d’étudiant ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Très bien ! Et depuis, tes années à l’école t’ont aidé pour le monde du travail ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Plutôt oui ! En tout cas, merci beaucoup d’avoir pris le temps de discuter avec moi, j’ai beaucoup appris !^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "4"}
        }
      ],
      "6": [
        {
          "texte": ["Bonjour, je m’appelle Pablo, je suis très intéressé par l’école.^500"," J’ai pu en apprendre un peu plus sur ses débuts et je ne pensais pas qu’elle pouvait avoir une telle histoire.^500"," J’aimerais m’informer un peu plus.^400"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "0"}
        },
        {
          "texte": ["Pouvez-vous m'expliquer ce qu’est un MBA, c’est assez flou pour moi.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["je comprends, cela à dû être très intéressant à vivre.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["Je vous remercie de m’avoir consacré un peu de temps.^500"," Encore une fois l’histoire m’épate et me donne envie d’étudier dans cet établissement.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "3"}
        }
      ],
      "7": [
        {
          "texte": ["je ne m’attendais pas à une telle histoire je suis ravi de la découvrir et de la connaître un peu plus."],
          "suivant": {"personnage": "Emma", "slide": "7", "paragraphe": "1"}
        },
        {
          "texte": ["Cool, donc un peu plus proche de ce que je pourrais faire à Audencia, non ?"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "2"}
        }
      ],
      "10": [
        {
          "texte": ["Déjà ? Mince, c’est passé si vite ! Dans ce cas, retournons chez nous !"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "1"}
        },
        {
          "texte": ["Oui ! Je dois dire, je suis plutôt impressionné ! Je ne pensais pas qu’il y aurait autant d’histoire pour cette école !"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "3"}
        },
        {
          "texte": ["Évidemment ! J’ai hâte maintenant !"],
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
          "texte": ["Non, pas tant que ça ! Il faut dire que j’ai eu de la chance :^500"," je suis arrivé dans des locaux flambant neufs, sur le campus des facultés de Nantes !^500"," Et l’année d’après, de nouveaux ordinateurs ont été installés !^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["Oui, un très bon timing !^300"," Surtout que le premier mini-ordinateur est arrivé dans l’école pendant ma dernière année !^500"," Bon, à l’époque, ça n’avait de “mini” que le nom mais autant dire que j’ai accueilli ça à bras ouverts !^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Évidemment ! Je suis diplômé de la promo 1975 au sein du cursus “Finance-Comptabilité”,^500"," donc forcément, un ordinateur est un outil plus qu’important pour travailler dans les meilleures conditions.^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Bien sûr !^300"," Cela fait 2 ans que je suis diplômé et j’ai toujours eu un poste à responsabilités depuis que je suis sorti de l’école.^500"," Aujourd’hui, je travaille au service comptabilité de KPMG à Paris. Ça te parle ?^500"],
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
          "texte": ["Bonjour Pablo, moi c’est Martine.^300"," Et je serais ravie de t’expliquer mon parcours ainsi que l’histoire de l’école, en tout cas l’histoire que j’ai pu voir.^500"," J’ai été diplômée en 1980 du cursus “distribution - commerce  extérieur”.^400"," Ce fut une très belle expérience pour moi.^400"," J’ai eu la chance de faire partie de la première promotion diplômée de la MBA de l’oregon state university.^600"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["Bien sûr ,^300"," il s’agit d’un diplôme international d’études supérieures de haut niveau de gestion et de management des entreprises.^500"," Faire partie des diplômés fut vraiment une fierté pour moi ainsi que mes parents.^500"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["En effet mais ce n’est pas tout, la période que j’ai vécu en tant qu’étudiante à Audencia fut très riche en innovations.^500"," Ce qui m’a particulièrement plu, c’est l’ouverture  à l’internationale.^400"," Quel chance pour nous ainsi que les futurs étudiants!^400"," Un promotion entière est parties au Polytechnic Central London.^500"," Pour nous ce fut une nouveauté et une opportunité incroyable.^500"," Puis l’ouverture d’un MBA à audencia et d’un institut de relations internationales^500"," a fait d’Audencia une école moderne.^400"," Et c’est sur cette note positive que j’ai terminé mes études.^500"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "3"}
        },
        {
          "texte": ["Je te souhaite de trouver ta voie. Bonne continuation Pablo.^500"]
        }
      ]
    }
  }
}

