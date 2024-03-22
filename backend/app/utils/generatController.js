import { ApiError } from '../error/apiError.js';
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

    if (!id) {
      throw new ApiError('Invalid parameter id', `${model.name}Error`);
    }

    const data = await model.findByPk(id);
    if (!data) {
      throw new ApiError(`This ${model.name} does not exist`, `${model.name}Error`, 0);
    }

    res.json(data);
  },
  async create(req, res) {
    const data = await model.create(req.body);

    res.status(201).json(data);
  },
  async update(req, res) {
    const id = Number(req.params.id);

    if (!id) {
      throw new ApiError('Invalid parameter id', `${model.name}Error`);
    }

    const [nbUpdated, dataUpdated] = await model.update(req.body, {

      where: {
        id,
      },

      returning: true,
    });

    if (nbUpdated === 0) {
      throw new ApiError(`This ${model.name} does not exist`, `${model.name}Error`, 0);
    }

    res.json(dataUpdated[0]);
  },
  async delete(req, res) {
    const id = Number(req.params.id);

    if (!id) {
      throw new ApiError('Invalid parameter id', `${model.name}Error`);
    }

    const nbDeleted = await model.destroy({
      where: {
        id,
      },
    });

    if (!nbDeleted) {
      throw new ApiError(`This ${model.name} does not exist`, `${model.name}Error`, 0);
    }

    // 204 => On retourne rien mais tout c'est bien passé
    res.status(204).end();
  },
});

export default generateController;
