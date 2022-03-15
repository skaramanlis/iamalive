import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
