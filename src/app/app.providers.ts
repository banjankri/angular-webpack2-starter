import { ActivityService } from './activity/activity.service';
import { ActivityActions } from './activity/activity.actions';
import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  ActivityActions,
  ActivityService
];
