var express = require('express')
var router = express.Router()
var axios = require('axios')

var url = 'https://phantombuster.s3.amazonaws.com/L0GHa2EvBCs/32J1x6oMgxrlokkDDjk0zg/result.json'

router.get('/', function (req, res, next) {
    axios.get(url)
        .then(response => {
            return res.status(200).send(response.data)
        })
        .catch(error => {
            return res.status(400).send(error)
        })
})

module.exports = router