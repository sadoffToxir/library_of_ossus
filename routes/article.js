const express = require('express')
const controller = require('../controllers/articles')

const router = express.Router()

router.get('/people/', controller.getCatalog)
router.get('/people/:id', controller.getCatalogById)
router.get('/films/', controller.getCatalog)
router.get('/films/:id', controller.getCatalogById)
router.get('/starships/', controller.getCatalog)
router.get('/starships/:id', controller.getCatalogById)
router.get('/vehicles/', controller.getCatalog)
router.get('/vehicles/:id', controller.getCatalogById)
router.get('/species/', controller.getCatalog)
router.get('/species/:id', controller.getCatalogById)
router.get('/planets/', controller.getCatalog)
router.get('/planets/:id', controller.getCatalogById)

module.exports = router;
