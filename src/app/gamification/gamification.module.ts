import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreSharedModule } from '@/core/shared.module';
import { CoreBlockComponentsModule } from '@/core/features/block/components/components.module';
import { CoreCourseComponentsModule } from '@features/course/components/components.module';

import { IonicModule } from '@ionic/angular';

import { CoreNavBarButtonsComponent } from '@components/navbar-buttons/navbar-buttons';

import { GamificationPageRoutingModule } from './gamification-routing.module';

import { GamificationPage } from './gamification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreSharedModule,
    CoreBlockComponentsModule,
    CoreCourseComponentsModule,
    GamificationPageRoutingModule
  ],
  declarations: [GamificationPage]
})
export class GamificationPageModule {}
