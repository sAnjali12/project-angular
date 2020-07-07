import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import "@angular/compiler"



import { AppComponent } from './app.component'
import { LoginComponent } from './user/login/login.component'
import { HomeComponent } from './home/home.component'
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component'
import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  {path: 'home',component: HomeComponent,canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
