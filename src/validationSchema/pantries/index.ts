import * as yup from 'yup';

export const pantryValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
