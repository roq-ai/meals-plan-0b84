interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Pantry Manager', 'Meal Planner'],
  tenantName: 'Organization',
  applicationName: 'Meals plan',
  addOns: ['notifications', 'file', 'chat'],
};
