export const getAgendas = async () => {
  const url = process.env.GET_API_URL || `http://localhost:3000/dev/api/agendas`;
  try {
    const res = await fetch(url);
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
