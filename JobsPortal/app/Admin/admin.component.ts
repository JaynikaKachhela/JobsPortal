import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../app.service';
import {NewJobcomponent } from './newJob';


@Component({
    selector: 'my-admin',
    templateUrl: 'app/Admin/admin-form.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Service],
    precompile: [NewJobcomponent]
})
export class AdminComponent {
}