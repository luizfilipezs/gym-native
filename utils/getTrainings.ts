import { Training } from "../types/training";

export const getTrainings = (): Training[] => {
  return [
    {
      day: 'Dia A',
      description: 'Costas e bíceps',
      exercices: [
        {
          name: 'Pulley frente/costas',
          description: 'Treino para a musculação das costas.',
          image: 'https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas.jpg',
          video: 'https://www.youtube.com/shorts/wmG3Z7ekpVM',
          series: 3,
          reps: 10,
          weight: 4,
        },
        {
          name: 'Puxador unilateral',
          description: 'Treino para a musculação das costas.',
          image: 'https://www.profitness.com.br/imagens/produtos/9960010623.jpg',
          video: 'https://www.youtube.com/watch?v=5uaUBHB9wYs',
          series: 3,
          reps: 12,
          weight: 30,
        }
      ],
    },
    {
      day: 'Dia B',
      description: 'Pernas',
      exercices: [],
    },
    {
      day: 'Dia C',
      description: 'Peito e tríceps',
      exercices: [],
    },
  ];
};