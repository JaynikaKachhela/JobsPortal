"use strict";
var router_1 = require('@angular/router');
var newJob_1 = require('./Admin/newJob');
var jobs_1 = require('./EndUser/jobs');
var routes = [
    {
        path: 'newJob',
        component: newJob_1.NewJobcomponent
    },
    {
        path: 'jobs',
        component: jobs_1.JobComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map