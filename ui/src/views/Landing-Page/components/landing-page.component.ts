import { OnInit, OnDestroy, Component } from '@angular/core';


@Component ({
    selector : 'landing-page',
    templateUrl: '../views/landing-page.component.html',
    styleUrls : ['../resources/landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, OnDestroy {

    public ngOnDestroy() {
        throw new Error("Method not implemented.");
    }
    public ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}