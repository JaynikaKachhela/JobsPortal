import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Service } from '../app.service';
import { Job } from '../Model/job';


//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "newJob",
    templateUrl: "app/Admin/newJob.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class NewJobcomponent {
    Jobs: Array<Job>;
    job: Job;
    fillForm: boolean = false;

    errorMessage: string;
    constructor(private adminservice: Service) {
        this.Jobs = new Array<Job>();
        this.job = new Job();
        this.job.NoOfPosition
    }
    onBack() {
        this.job = null;
        this.fillForm = false;
    }
    ngOnInit() {
    }
    onSubmit(job: Job) {
        console.log(job);
        var postOwner = this.adminservice.newJob(job)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.fillForm = true;
            });
        console.log("Added...");
    }
}