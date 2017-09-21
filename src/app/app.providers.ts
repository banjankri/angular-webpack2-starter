import { PlantService } from './plant/plant.service';
import { PlantActions } from './plant/plant.actions';
import { AngularFireAuth } from 'angularfire2/auth';

import { ActivityService } from './activity/activity.service';
import { ActivityActions } from './activity/activity.actions';
import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { AuthGuard } from './services/auth.service';
import { GbifDataSourceService } from './services/data-sources/gbif.datasource.service';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  ActivityActions,
  ActivityService,
  AuthGuard,
  AngularFireAuth,
  GbifDataSourceService,
  PlantActions,
  PlantService
];
