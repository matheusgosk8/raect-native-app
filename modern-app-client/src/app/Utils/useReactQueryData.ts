const useReactQueryData = () => {
  const baseUrl = `http://192.168.1.64:3000`;

  const getData = async () => {
    const url = `http://192.168.1.64:3000/dev/api/agendas`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getMedicosData = async () => {
    const url = `http://192.168.1.64:3000/dev/api/medicos`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  type TCadastro = {
    nome: string;
    especialidade: string;
  };

  const cadastrarMedico = async (data: TCadastro) => {
    const url = "http://192.168.1.64:3000/dev/api/cadastro";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    getData,
    cadastrarMedico,
    getMedicosData,
  };
};

export { useReactQueryData };
