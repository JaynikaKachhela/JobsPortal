import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../Model/job';
import { Service } from '../app.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {JobComponent}from './jobs'


@Component({
    selector: 'my-user',
    templateUrl: 'app/EndUser/user.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Service],
    precompile: [JobComponent]
})
export class UserComponent {
}