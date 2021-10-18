import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordpressPostsComponent } from './components/wordpress-posts/wordpress-posts.component';
import { PostComponent } from './components/wordpress-posts/post/post.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table'
import { WordpressService } from './services/wordpress.service';
import { HttpClientModule} from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransformPipe } from './transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WordpressPostsComponent,
    PostComponent,
    GoogleMapsComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBPt3eZ2u-oxl5pA6x8C5uGAQeuY5-lcU4"
    }),
    GooglePlaceModule
  ],
  providers: [WordpressService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
