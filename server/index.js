require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const housesCtrl = require('./Controller/HousesController')

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log('listening on', SERVER_PORT))
})

app.get('/api/houses', housesCtrl.getAllHouses)

app.post('/api/wizard', housesCtrl.addNewListing)

app.delete('/api/houses/:id', housesCtrl.deleteHouse)