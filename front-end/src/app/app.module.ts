import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { AppRoutingModule } from "./app-routing.module";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { NeedAuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CharacterDetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
