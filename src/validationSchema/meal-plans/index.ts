import * as yup from 'yup';

export const mealPlanValidationSchema = yup.object().shape({
  plan_name: yup.string().required(),
  organization_id: yup.string().nullable(),
});
