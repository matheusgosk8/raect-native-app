import { db } from '@src/db';
import { medicosTable } from '@src/db/schema';
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    console.log('Dados do FE: ', event.body);

    const { nome, especialidade }: { nome: string; especialidade: string } = JSON.parse(event.body || '{}');

    const insertedData = await db.insert(medicosTable).values({
      nome: nome,
      especialidade: especialidade,
    });

    console.log(insertedData);

    if (!insertedData || !nome || !especialidade) {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: 500, msg: 'Erro, parâmetros faltando!' }),
      };
      return response;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({ status: 200, msg: 'Ok' }),
    };
    return response;
  } catch (error) {
    console.error(error);
    const response = {
      statusCode: 500,
      body: JSON.stringify({ status: 500, msg: 'Erro interno!' }),
    };

    return response;
  }
};
