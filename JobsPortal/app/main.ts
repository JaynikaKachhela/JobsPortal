import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {AdminComponent} from './Admin/admin.component'
import {UserComponent} from './EndUser/user.component'
import { appRouterProviders } from './app.routes';
bootstrap(UserComponent, [HTTP_PROVIDERS, appRouterProviders]);
bootstrap(AdminComponent, [HTTP_PROVIDERS, appRouterProviders]);
