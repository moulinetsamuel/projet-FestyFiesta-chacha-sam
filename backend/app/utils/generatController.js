import ApiError from '../../error/apiError.js';
/**
 *
 * @param {*} model Model Sequelize
 * @returns
 */
const generateController = (model) => ({
  async getAll(req, res) {
    const data = await model.findAll();
    res.json(data);
  },
  async getOne(req, res) {
    const id = Number(req.params.id);

    const data = await model.findByPk(id);
    if (!data) {
      throw new ApiError(400, `No ${model.name} with id ${id} found`);
    }

    res.json(data);
  },
  async create(req, res) {
    const data = await model.create(req.body);

    res.status(201).json(data);
  },
  async update(req, res) {
    const [nbUpdated, dataUpdated] = await model.update(req.body, {

      where: {
        id: req.params.id,
      },

      returning: true,
    });

    if (nbUpdated === 0) {
      throw new ApiError(400, `No ${model.name} with id ${req.params.id} found`);
    }

    res.json(dataUpdated[0]);
  },
  async delete(req, res) {
    const nbDeleted = await model.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!nbDeleted) {
      throw new ApiError(400, `No ${model.name} with id ${req.params.id} found`);
    }

    // 204 => On retourne rien mais tout c'est bien passé
    res.status(204).end();
  },
});

export default generateController;
