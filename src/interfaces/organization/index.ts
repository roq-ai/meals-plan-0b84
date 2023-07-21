import { MealPlanInterface } from 'interfaces/meal-plan';
import { PantryInterface } from 'interfaces/pantry';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  meal_plan?: MealPlanInterface[];
  pantry?: PantryInterface[];
  user?: UserInterface;
  _count?: {
    meal_plan?: number;
    pantry?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
