const mapping: Record<string, string> = {
  'meal-plans': 'meal_plan',
  organizations: 'organization',
  pantries: 'pantry',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
