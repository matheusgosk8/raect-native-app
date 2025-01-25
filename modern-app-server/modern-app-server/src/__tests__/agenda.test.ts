import { getAgendas } from '@src/utils/getAgendas';

describe('Teste das agendas: ', () => {
  it('Teste Ok!', () => {
    expect(getAgendas()).not.toBeNull();
  });
});
