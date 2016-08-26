"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var app_service_1 = require('../app.service');
var job_1 = require('../Model/job');
//Import for design purpose
var common_1 = require('@angular/common');
var NewJobcomponent = (function () {
    function NewJobcomponent(adminservice) {
        this.adminservice = adminservice;
        this.fillForm = false;
        this.Jobs = new Array();
        this.job = new job_1.Job();
        this.job.NoOfPosition;
    }
    NewJobcomponent.prototype.onBack = function () {
        this.job = null;
        this.fillForm = false;
    };
    NewJobcomponent.prototype.ngOnInit = function () {
    };
    NewJobcomponent.prototype.onSubmit = function (job) {
        var _this = this;
        console.log(job);
        var postOwner = this.adminservice.newJob(job)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.fillForm = true;
        });
        console.log("Added...");
    };
    NewJobcomponent = __decorate([
        core_1.Component({
            selector: "newJob",
            templateUrl: "app/Admin/newJob.html",
            providers: [app_service_1.Service],
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], NewJobcomponent);
    return NewJobcomponent;
}());
exports.NewJobcomponent = NewJobcomponent;
//# sourceMappingURL=newJob.js.map