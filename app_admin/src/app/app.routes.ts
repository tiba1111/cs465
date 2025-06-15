import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListingComponent } from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';


// import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },

    { path: '', component: TripListingComponent, pathMatch: 'full' },
];