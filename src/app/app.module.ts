import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgOptimizedImage } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { GreetingsSectionComponent } from './components/greetings-section/greetings-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { InViewDirective } from './directives/in-view.directive';
import { NgParticlesModule } from 'ng-particles';
import { HeroParticlesComponent } from './components/hero-particles/hero-particles.component';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClickOutsideDirective,
    NavbarComponent,
    HeroSectionComponent,
    GreetingsSectionComponent,
    FooterComponent,
    SkillsSectionComponent,
    TimelineComponent,
    InViewDirective,
    HeroParticlesComponent,
    TimelineCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatRippleModule,
    RouterOutlet,
    NgParticlesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
