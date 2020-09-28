import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor} from './http-client-interceptor';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    SignInComponent,
    HomeComponent,
    CreatePostComponent,
    ExploreComponent
  ],
  imports: [
    HttpClientModule,
    EditorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'create-post', component: CreatePostComponent},
      {path: 'explore', component: ExploreComponent}
    ])
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
