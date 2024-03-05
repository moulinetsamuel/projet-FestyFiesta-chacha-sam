import {
  Event, Object, EventUser, User, ObjectEventUser,
} from '../app/models/index.js';

const pretty = (obj) => JSON.stringify(obj, null, 2);
const cpretty = (obj) => console.log(pretty(obj));

const transferObjectToParticipant = async (eventId, objectId, participantId) => {
  try {
    // Récupérer l'événement
    const event = await Event.findByPk(eventId);
    // cpretty(event);

    // Vérifier si l'événement existe
    if (!event) {
      console.log(`L'événement avec l'identifiant ${eventId} n'existe pas.`);
      return;
    }

    // Récupérer le participant
    const participant = await EventUser.findOne({
      where: {
        eventId,
        userId: participantId,
      },
    });

    // Vérifier si le participant existe
    if (!participant) {
      console.log(`Le participant avec l'identifiant ${participantId} n'existe pas.`);
      return;
    }
    // Récupérer l'objet à transférer
    const object = await Object.findByPk(objectId);

    // Vérifier si l'objet existe
    if (!object) {
      console.log(`L'objet avec l'identifiant ${objectId} n'existe pas.`);
      return;
    }

    // Retirer l'objet de l'événement
    await event.removeObject(object);

    // Associer l'objet au participant
    await participant.addObject(object);

    console.log(`L'objet a été transféré avec succès au participant ${participant.username}.`);
  } catch (error) {
    console.error('Erreur lors du transfert de l\'objet au participant', error);
  }
};

// Appeler la fonction pour transférer un objet de l'événement au participant spécifié
transferObjectToParticipant(1, 2, 1);
// Exemple : Transférer l'objet avec l'ID 2 de l'événement avec l'ID 1 au participant avec l'ID 3
