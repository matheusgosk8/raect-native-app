export type TAgendamentos = {
  medico_id?: string | number;
  paciente_nome?: string;
  data_horario?: string;
};

export type TRespostaAgendamento = {
  mensagem: string;
  agendamento?: {
    medico?: string;
    paciente?: string;
    data_horario?: string;
  };
};
