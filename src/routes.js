const express = require('express');

const DocumentController = require('./controllers/Document');
const ReportController = require('./controllers/Reports');

const routes = express();

routes.get('/documents', DocumentController.listAllDocuments);
routes.get('/documents/:id', DocumentController.searchDocument);
routes.post('/documents', DocumentController.insertDocument);
routes.patch('/documents/:id', DocumentController.deleteDocument);
routes.get('/weekday-after', ReportController.dayOfWeek);

module.exports = routes;
