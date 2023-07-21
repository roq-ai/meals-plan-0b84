import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PantryInterface {
  id?: string;
  item_name: string;
  quantity: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface PantryGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_name?: string;
  organization_id?: string;
}
