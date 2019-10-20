const express = require('express');
const Route = express.Router();

const categories = require('./routes/categoryRoute');
const companies = require('./routes/companyRoute');
const jobs = require('./routes/jobRoute');

Route.use('/categories', categories);
Route.use('/companies', companies);
Route.use('/jobs', jobs);

module.exports = Route;
