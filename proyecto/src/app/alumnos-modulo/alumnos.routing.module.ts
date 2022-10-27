import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarAlumnosComponent } from "./components/agregar-alumnos/agregar-alumnos.component";
import { EditarAlumnosComponent } from "./components/editar-alumnos/editar-alumnos.component";
import { ListaAlumnosComponent } from "./components/lista-alumnos/lista-alumnos.component";


    const routes: Routes = [
        { path: '', component: ListaAlumnosComponent}
        , { path: 'alumno/editar/:id', component: EditarAlumnosComponent}
        , { path: 'alumno/agregar/:nuevo', component: AgregarAlumnosComponent}
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AlumnosRoutingModule { }