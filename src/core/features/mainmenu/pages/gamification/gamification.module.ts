import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreSharedModule } from '@/core/shared.module';
import { CoreBlockComponentsModule } from '@/core/features/block/components/components.module';
import { CoreCourseComponentsModule } from '@features/course/components/components.module';
import { CoreMainMenuComponentsModule } from '@features/mainmenu/components/components.module';

import { IonicModule } from '@ionic/angular';

import { CoreNavBarButtonsComponent } from '@components/navbar-buttons/navbar-buttons';

import { GamificationPageRoutingModule } from './gamification-routing.module';

import { GamificationPage } from './gamification.page';

// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideAuth, getAuth } from '@angular/fire/auth';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CoreSharedModule,
    CoreBlockComponentsModule,
    CoreCourseComponentsModule,
    CoreMainMenuComponentsModule,
    GamificationPageRoutingModule,


    // provideFirebaseApp(()=>initializeApp(firebase)),
    // provideFirestore(() => getFirestore())

  ],
  declarations: [GamificationPage]
})
export class GamificationPageModule {}
