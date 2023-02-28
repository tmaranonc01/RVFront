import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
    {path: 'coche', redirectTo: 'coche/list', pathMatch: 'full'},
    {path: 'coche/list', component: ListComponent},
    {path: 'coche/:id/view', component: ViewComponent},
    {path: 'coche/create', component: CreateComponent},
    {path: 'coche/:id/edit', component: EditComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CocheRoutingModule{}