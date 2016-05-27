import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { SampleComponent, AnotherSampleComponent } from './sample.components';

@Component({
    selector: 'my-app',
    templateUrl: "./app/templates/base.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/sample', name: 'Sample', component: SampleComponent, useAsDefault: true },
    { path: '/another-sample', name: 'AnotherSample', component: AnotherSampleComponent },
    { path: '/**', redirectTo: ['Sample'] }
])
export class AppComponent { }