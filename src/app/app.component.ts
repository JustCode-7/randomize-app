import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {NgStyle} from "@angular/common";
import {TabMenueComponent} from "./modules/main/components/tab-menue/tab-menue.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    NgStyle,
    TabMenueComponent
  ]
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
