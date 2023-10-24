const readUserRepository = require('../../../repositories/user/user.read')

module.exports = {


    
    async getById(req, res) {
        var user = await readUserRepository.getById(req.params.id);

        res.status(200).send(user);
    }
}