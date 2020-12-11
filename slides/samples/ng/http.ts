import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';

// app.module.ts
@NgModule({
  imports: [
    HttpClientModule,
    // rest of the imports
  ],
  // declarations, bootstrap, providers
})
export class AppModule {}

// my.service.ts
@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

// my-comp.component.ts
@Component({
  selector: 'app-my-comp',
  template: ` <div></div> `,
  providers: [MyService],
})
export class MyCompComponent implements OnInit {
  // Inject the service
  constructor(private myService: MyService) {}

  ngOnInit() {
    // use the service
    this.myService.getPosts().subscribe({
      next: (posts: Post[]) => {
        console.log('http result: posts', posts);
      },
      error: (err: any) => {
        console.error('http error', err);
      },
    });
  }
}
