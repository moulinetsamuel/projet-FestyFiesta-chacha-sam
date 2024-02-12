# Problematique

Simplifier l'organisation d'évenement ( anniversaire, soirée, repas, etc. )

## Exemple

Je souhaite organiser un repas de famille le 15/09/24.
Single page application style kanban.
en-tête de page logo, connexion et inscription (remplacer par déconexion, profil si connecté)
petite description/utilisation du site (photo, video ???)
en dessous btn de création d'event

si on click sur le btn créé event =>
Connexion obligatoire pour être enregistrer en bdd:
-nom
-prénom
-email

une foit connecté on peut créer un évènement =>
formulaire pour crée un évènement qui s'affiche
**OBLIGATOIRE:**

- le nom de l'évènement,
- le lieu,
- la date
- nom de l'organisateur,
- description

### Dans mon event créé :

(créera une carte automatiquement pour le créateur de l'event)
- un bandeau avec les info de l'event ainsi qu'un lien d'invitation qui demande l'authentification/création de compte
qui permet de pouvoir être inviter à un event.
- btn supprimer.
(si on click sur le btn => supprimer l'event de la BDD et les liaisons avec les autres tables)

- btn modifier
(si on click sur le btn => même formulaire que celui de création d'event)

### dashboard

**ajouter participants**

- une bare de recherche avec un btn 'ajouter' => pour ajouter les participants, permet de rechercher les users dans la BDD par le nom et prénom
- une fois le participant ajouter => créer une carte avec un btn 'supprimer'

**besoins**

- une barre de recherche avec btn 'ajouter' => pour ajouter les besoins (boissons, alimentaires, chaises, tables, etc...), permet de rechercher dans la tables des besoins (si non présent devra clicker sur le btn de création du besoin)
- un btn de création => permet de créer ce besoin (pop-up form => nom du produit(obligatoire), quantité(non obligatoire))
- "carte besoin" => btn supprimer (de la liste et non de la BDD) et modifier
- liste des besoins => une fois créé ou trouver en BDD, s'affiche dans cette liste
- drag & drop des cartes besoins

### Idée future

les inviter peuvent en inviter d'autre si l'admin de levent leur a donner les droit ?
dashboard pour cree event
voire pour mettre l'option 'commentaires' pour les users
A voir pour gérer en BDD les besoins (supprimer???)
Voir pour lier les cartes des users ensemble (si ils sont en couples)
