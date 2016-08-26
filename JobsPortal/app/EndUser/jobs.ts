import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Service } from '../app.service';
import { Job } from '../Model/job';


//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "jobs",
    templateUrl: "app/EndUser/jobs.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class JobComponent {
}