/**
 *
 * @param {*} model Model Sequelize
 * @returns
 */
const generateController = (model) => ({
  async getAll(req, res) {
    try {
      const data = await model.findAll();
      res.json(data);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
  async getOne(req, res) {
    try {
      const id = Number(req.params.id);

      const data = await model.findByPk(id);
      if (!data) {
        res.status(404).send('Not Found');
        return;
      }

      res.json(data);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
  async create(req, res) {
    try {
      const data = await model.create(req.body);

      res.status(201).json(data);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
  async update(req, res) {
    try {
      // update retourne un tableau avec en première position le nombre de lignes modifiées
      // J'utilise la destructuration pour récupérer la première valeur du tableau
      const [nbUpdated, dataUpdated] = await model.update(req.body, {
        // On précise quelles lignes on veut mettre à jour
        // Celle dont l'id correspond au paramètre de la route
        where: {
          id: req.params.id,
        },
        // returning me permet de récupérer les données modifiées
        // je les récupère dans le deuxième élément du tableau retourné par update
        returning: true,
      });

      if (nbUpdated === 0) {
        res.status(404).send('Not Found');
        return;
      }

      // techniquement, le update peut retourner plusieurs lignes
      // moi dans mon cas, je modifie en filtrant sur l'id, donc je suis sûr
      // de n'avoir qu'une seule ligne modifiée, je retourne donc le 1er élément du tableau
      res.json(dataUpdated[0]);
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
  async delete(req, res) {
    try {
      await model.destroy({
        where: {
          id: req.params.id,
        },
      });

      // 204 => On retourne rien mais tout c'est bien passé
      res.status(204).end();
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
});

export default generateController;
