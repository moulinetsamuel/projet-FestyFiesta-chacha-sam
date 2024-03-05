import {
  Event, User, Object, EventUser,
} from '../app/models/index.js';

const pretty = (obj) => JSON.stringify(obj, null, 2);
const cpretty = (obj) => console.log(pretty(obj));

const run = async () => {
  try {
    const event = await Event.findByPk(1);
    const participant = await User.findByPk(1);

    await event.addParticipant(participant);
    // console.log(test);
    const updatedEvent = await Event.findByPk(1, {
      include: [
        {
          model: User,
          as: 'author',
        },
        {
          model: User,
          as: 'participants',
        },
      ],
    });

    cpretty(updatedEvent);
  } catch (error) {
    console.error('Erreur lors de la création', error);
  }
};

run();
