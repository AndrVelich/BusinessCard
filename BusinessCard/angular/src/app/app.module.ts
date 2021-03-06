import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, UrlSerializer } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { LowerCaseUrlSerializer } from "@extensions/lowerCaseUrlSerializer";

import {
    MatDialogModule
} from '@angular/material/dialog';

import { PortfolioService } from '@services/portfolio.service';
import { ContactService } from '@services/contact.service';

import { routes } from './routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        HeroComponent,
        MenuComponent,
        PortfolioComponent,
        ResumeComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        {
            provide: "window",
            useValue: window
        },
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        },
        PortfolioService,
        ContactService,
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
