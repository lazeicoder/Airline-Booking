const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error(`Something went wrong in the Crud Repo : create`);
            throw error;
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data 
                }
            });
            return response;
        } catch (error) {
            Logger.error(`Something went wrong in the Crud Repo : create`);
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error(`Something went wrong in the Crud Repo : create`);
            throw error;
        }
    }
}