module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        let houses = await db.get_all_houses()
        res.status(200).send(houses)
    },
    addNewListing: async (req, res) => {
        const db = req.app.get('db')
        await db.add_new_listing(req.body)
        res.status(200).send('Added')
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        await db.delete_house_by_id(req.params.id)
        res.status(200).send('gone')
    }
}