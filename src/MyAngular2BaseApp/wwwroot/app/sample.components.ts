import {Component, OnInit} from "angular2/core";
import {Http, Response} from "angular2/http";
import 'rxjs/Rx';

@Component({
    selector: 'sample-link',
    templateUrl: "./app/templates/sample.html"
})
export class SampleComponent { }

@Component({
    selector: "another-sample",
    templateUrl:"./app/templates/anotherSample.html"
})
export class AnotherSampleComponent implements OnInit {
    private values: string[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        return this.http.get("/api/values")
            .map((res: Response) => <string[]>res.json())
            .subscribe((data: string[]) => this.values = data);
    }
}