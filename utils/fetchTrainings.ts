import { Training } from "../types/training";
import { delay } from "./delay";

const fetchMockTrainings = async (): Promise<Training[]> => {
  await delay(300);

  return [
    {
      name: 'Dia A',
      description: 'Costas e bíceps',
      exercises: [
        {
          name: 'Pulley frente/costas',
          description: 'Treino para a musculação das costas.',
          image: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg',
          video: 'https://www.youtube.com/shorts/wmG3Z7ekpVM',
          series: 3,
          reps: 10,
          rest: 60,
          weight: 4,
        },
        {
          name: 'Puxador unilateral',
          description: 'Treino para a musculação das costas.',
          image: 'https://www.profitness.com.br/imagens/produtos/9960010623.jpg',
          video: 'https://www.youtube.com/watch?v=5uaUBHB9wYs',
          series: 3,
          reps: 12,
          rest: 60,
          weight: 30,
        },
      ],
    },
    {
      name: 'Dia B',
      description: 'Pernas',
      exercises: [],
    },
    {
      name: 'Dia C',
      description: 'Peito e tríceps',
      exercises: [],
    },
  ];
};

export const fetchTrainings = fetchMockTrainings;