"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var admin_component_1 = require('./Admin/admin.component');
var user_component_1 = require('./EndUser/user.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(user_component_1.UserComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders]);
platform_browser_dynamic_1.bootstrap(admin_component_1.AdminComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders]);
//# sourceMappingURL=main.js.map