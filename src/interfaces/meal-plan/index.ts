import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MealPlanInterface {
  id?: string;
  plan_name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface MealPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  plan_name?: string;
  organization_id?: string;
}
