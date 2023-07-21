import axios from 'axios';
import queryString from 'query-string';
import { PantryInterface, PantryGetQueryInterface } from 'interfaces/pantry';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPantries = async (query?: PantryGetQueryInterface): Promise<PaginatedInterface<PantryInterface>> => {
  const response = await axios.get('/api/pantries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPantry = async (pantry: PantryInterface) => {
  const response = await axios.post('/api/pantries', pantry);
  return response.data;
};

export const updatePantryById = async (id: string, pantry: PantryInterface) => {
  const response = await axios.put(`/api/pantries/${id}`, pantry);
  return response.data;
};

export const getPantryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pantries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePantryById = async (id: string) => {
  const response = await axios.delete(`/api/pantries/${id}`);
  return response.data;
};
