import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { db } from '@src/db';
import { medicosTable } from '@src/db/schema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const data = await db.select().from(medicosTable);

    const response = {
      statusCode: 200,
      body: JSON.stringify({ status: 200, msg: 'Ok!', data }),
    };
    return response;
  } catch (error) {
    console.error(error);

    const response = {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno!' }),
    };

    return response;
  }
};
