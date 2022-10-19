import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserLogoComponent } from './features/home/user-logo/user-logo.component';
import { SkillItemComponent } from './features/home/skill-item/skill-item.component';
import { SkillListComponent } from './features/home/skill-list/skill-list.component';
import { DropupComponent } from './features/home/dropup/dropup.component';
import { SearchComponent } from './features/home/search/search.component';
import { SearchBoxComponent } from './features/home/search-box/search-box.component';
import { SelectedComponent } from './features/home/selected/selected.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserLogoComponent,
    SkillItemComponent,
    SkillListComponent,
    DropupComponent,
    SearchComponent,
    SearchBoxComponent,
    SelectedComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
