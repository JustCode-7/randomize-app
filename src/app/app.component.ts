import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'randomize-app';
  appVersion: string = environment.appVersion;

  constructor() {
  }

  ngOnInit(): void {

    //TODO: get  version from github-repsoitory
    // let req: HttpRequest = new HttpRequest();
    // req.set("Access-Control-Allow-Origin", "https://github.com/JustCode-7/randomize-app/blob/master/package.json");
    // req.setHeaders()
    // window
    //   .fetch((input: { headers: { set: (arg0: string, arg1: string) => Promise<any>; }; })
    //     => input.headers.set())
    //   .then(r => {
    //     console.log(r.json())
    //   })
  }
}
