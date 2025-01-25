import { TAgendamentos } from '@src/agendamento/types/agendamentosTypes';
import { realizandoAgendamento } from '@src/utils/getAgendamentos';

const testDataPass: TAgendamentos = {
  medico_id: 1,
  paciente_nome: 'Carlos Almeida',
  data_horario: '2024-10-05 09:00',
};
const testMedicoFail: TAgendamentos = {
  medico_id: 7,
  paciente_nome: '---',
  data_horario: '---',
};
const testHorarioFail: TAgendamentos = {
  medico_id: 1,
  paciente_nome: 'Carlos Almeida',
  data_horario: '2024-11-05 09:00',
};

describe('Teste das agendas: ', () => {
  it('Teste Ok!', () => {
    expect(realizandoAgendamento(testDataPass)).not.toBeNull();
  });
});

describe('Teste das agendas: ', () => {
  it('Teste médico não encontrado!', () => {
    expect(realizandoAgendamento(testMedicoFail)).toStrictEqual({
      mensagem: 'Não foi possível encontrar o médico selecionado!',
    });
  });
});

describe('Teste das agendas: ', () => {
  it('Teste horário indisponível!', () => {
    expect(realizandoAgendamento(testHorarioFail)).toStrictEqual({ mensagem: 'Horário indisponível!' });
  });
});
