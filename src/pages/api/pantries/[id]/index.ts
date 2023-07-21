import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { pantryValidationSchema } from 'validationSchema/pantries';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.pantry
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPantryById();
    case 'PUT':
      return updatePantryById();
    case 'DELETE':
      return deletePantryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPantryById() {
    const data = await prisma.pantry.findFirst(convertQueryToPrismaUtil(req.query, 'pantry'));
    return res.status(200).json(data);
  }

  async function updatePantryById() {
    await pantryValidationSchema.validate(req.body);
    const data = await prisma.pantry.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deletePantryById() {
    const data = await prisma.pantry.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
