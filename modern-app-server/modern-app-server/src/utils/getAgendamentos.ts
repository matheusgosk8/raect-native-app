import { TAgendamentos, TRespostaAgendamento } from '@src/agendamento/types/agendamentosTypes';
import medicos from '@src/agenda/mocks/medicos.json';
import { TAgenda } from '@src/agenda/types/agendaTypes';

export const realizandoAgendamento = (agendamento: TAgendamentos): TRespostaAgendamento | null => {
  try {
    const medicosJs = JSON.parse(JSON.stringify(medicos) || ``);
    const data: TAgenda[] = medicosJs.medicos;

    const medicoSelecionado = data.find((i: TAgenda) => {
      return i.id === agendamento.medico_id;
    });

    const horarioSelecionado = medicoSelecionado?.horarios_disponiveis.find((horario: string) => {
      return horario === agendamento.data_horario;
    });

    switch (true) {
      case !medicoSelecionado:
        return {
          mensagem: 'Não foi possível encontrar o médico selecionado!',
        };
      case medicoSelecionado && !horarioSelecionado:
        return {
          mensagem: 'Horário indisponível!',
        };
      default:
        return {
          mensagem: 'Agendamento realizado com sucesso',
          agendamento: {
            medico: medicoSelecionado.nome,
            paciente: agendamento.paciente_nome,
            data_horario: horarioSelecionado,
          },
        };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
