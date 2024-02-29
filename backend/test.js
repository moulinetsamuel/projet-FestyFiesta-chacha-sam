import {
  Event, User, Object,
} from './app/models/index.js';

const run = async () => {
  try {
    const author = await User.findByPk(1);
    const event = await Event.create({
      name: 'test',
      place: 'test',
      date: 'test',
      description: 'test',
      authorId: author.id,
    });

    await event.addParticipant(author);
    console.log('Événement créé avec succès :', event);
  } catch (error) {
    console.error("Erreur lors de la création de l'événement :", error);
  }
};

run();
