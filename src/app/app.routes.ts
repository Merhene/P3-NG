import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path: 'signup', component: SignUpComponent},
    {path: 'user', component: UserProfileComponent},
    {path: 'menu', component: MenuComponent}
];
