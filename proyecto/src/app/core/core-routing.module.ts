import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";


    const routes: Routes = [
      
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }
