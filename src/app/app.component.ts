import { Component } from '@angular/core';
import {GithubService} from './github.service';
@Component({
  selector: 'app-root',
  template: '<profile></profile>',
  providers: [GithubService]
})
export class AppComponent {
}
