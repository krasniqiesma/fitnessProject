import { RouterModule, Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    {
        path: '', component: ViewsComponent, children: [
            {path: 'home', component: HomeComponent },
            {path: 'about', component: AboutComponent},
            {path: 'contact-us', component: ContactUsComponent}
        ]
    }
];

export const ViewsRoutingModule = RouterModule.forChild(routes);