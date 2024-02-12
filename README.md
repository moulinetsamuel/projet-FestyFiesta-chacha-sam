# Problématique

Simplifier l'organisation d'événement (anniversaire, soirée, repas, etc.).

## Exemple

Je souhaite organiser un repas (raclette) de famille le 15/09/24.
Avec 5 participants, il me faut :

- 2 chaises
- 1 kg de patates
- 2 oignons
- 2 paquets de fromage à raclette nature
- Fromage à raclettes ail des ours
- Charcuterie
- Boissons

Participant 1 :

- 2 chaises
- 1 kg de patates

Participant 2 :

- 2 oignons
- 2 paquets de fromage à raclette nature
- Fromage à raclettes ail des ours

Participant 3 :

- Charcuterie
- Boissons

## Cahier des charges

Style Kanban.
En-tête de page avec logo, connexion et inscription (à remplacer par déconnexion, profil si connecté).
Petite description/utilisation du site (photo, vidéo ???).
En dessous, bouton de création d'événement.

Si on clique sur le bouton "Créer un événement" :
- Connexion obligatoire pour être enregistré en base de données :
  - Nom
  - Prénom
  - Email

Une fois connecté, on peut créer un évènement :
- Formulaire pour créer un évènement qui s'affiche.
  **OBLIGATOIRE :**
  - Le nom de l'évènement
  - Le lieu
  - La date
  - Nom de l'organisateur
  - Description

### Dans mon évènement créé :

(Créera une carte automatiquement pour le créateur de l'évènement)
- Un bandeau avec les infos de l'évènement ainsi qu'un lien d'invitation qui demande l'authentification/création de compte pour pouvoir être invité à un évènement.
- Bouton supprimer :
  (Si on clique sur le bouton => supprimer l'évènement de la BDD et les liaisons avec les autres tables)
- Bouton modifier :
  (Si on clique sur le bouton => même formulaire que celui de création d'évènement)

### Dashboard

**Ajouter des participants**
- Une barre de recherche avec un bouton 'ajouter' :
  Pour ajouter les participants, permet de rechercher les utilisateurs dans la BDD par le nom et prénom.
- Une fois le participant ajouté => créer une carte avec un bouton 'supprimer'.

**Besoins**
- Une barre de recherche avec un bouton 'ajouter' :
  Pour ajouter les besoins (boissons, alimentaires, chaises, tables, etc...), permet de rechercher dans la table des besoins (si non présent devra cliquer sur le bouton de création du besoin).
- Un bouton de création :
  Permet de créer ce besoin (pop-up form => nom du produit (obligatoire), quantité (non obligatoire)).
- "Carte besoin" :
  Bouton supprimer (de la liste et non de la BDD) et modifier.
- Liste des besoins :
  Une fois créé ou trouvé en BDD, s'affiche dans cette liste.
- Drag & drop des cartes besoins.

### Idée future

Les invités peuvent en inviter d'autres si l'admin de l'évènement leur a donné les droits ?
Dashboard pour créer un événement.
Voir pour mettre l'option 'commentaires' pour les utilisateurs.
À voir pour gérer en BDD les besoins (supprimer ???).
