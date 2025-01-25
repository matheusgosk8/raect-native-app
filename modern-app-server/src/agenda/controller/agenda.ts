import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import agendas from '@src/agenda/mocks/medicos.json';
import { db } from '@src/db';
import { medicosTable } from '@src/db/schema';

// Ignorando o lint de variáveis não utilizadas na próxima linha, como não foi pedido uma busca específica na db mock
//dos agendamentos não foi preciso criar nenhuma query string com a url da requisição.
//Os types seguem a documentação da aws.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Url da db: ', process.env.PG_LOCAL_URL);

  const dados = await db.select().from(medicosTable);

  console.log('dados da db-> ', dados);

  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify(agendas),
    };
    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Erro interno!',
    };
  }
};
