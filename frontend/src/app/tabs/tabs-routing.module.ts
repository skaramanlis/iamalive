import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        component: SearchComponent
      }
    ]
  }
];

@NgModule({
  declarations: [SearchComponent, ReportComponent, ContactComponent],
  exports: [SearchComponent, ReportComponent, ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsPageRoutingModule {}
