import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TAgendamentos } from '../types/agendamentosTypes';
import { realizandoAgendamento } from '@src/utils/getAgendamentos';

//Os types seguem a documentação da aws.
export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const request = _event.body;

    const jsResponse: TAgendamentos = JSON.parse(request || `Nenhuma informação encontrada!`);

    if (!jsResponse.data_horario || !jsResponse.medico_id || !jsResponse.paciente_nome) {
      return {
        statusCode: 500,
        body: 'Erro na requisição, verifique os dados informados!',
      };
    }

    const agendamento = realizandoAgendamento(jsResponse);

    console.log('Agendamento: ', agendamento);

    if (agendamento === null) {
      return {
        statusCode: 500,
        body: 'Erro ao realizar o agendamento!',
      };
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(agendamento),
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
