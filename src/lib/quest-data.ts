export interface Quest {
  id: string;
  titleRw: string;
  titleEn: string;
  category: 'srh' | 'mental_health' | 'nutrition' | 'hygiene';
  difficulty: number;
  creditsReward: number;
  icon: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  contentRw: string;
  contentEn: string;
  question: {
    textRw: string;
    textEn: string;
    options: { labelRw: string; labelEn: string }[];
    correctIndex: number;
  };
}

export const quests: Quest[] = [
  {
    id: 'q1',
    titleRw: 'Ubuzima bw\'imyororokere',
    titleEn: 'Reproductive Health Basics',
    category: 'srh',
    difficulty: 1,
    creditsReward: 15,
    icon: '🌱',
    lessons: [
      {
        id: 'q1-l1',
        contentRw: 'Ubuzima bw\'imyororokere ni ingenzi cyane ku bana b\'ingimbi. Kumenya imihindagurikire y\'umubiri ni intambwe ya mbere yo kwita ku buzima bwawe.',
        contentEn: 'Reproductive health is vital for adolescents. Understanding body changes is the first step to caring for your health.',
        question: {
          textRw: 'Ni iki kigaragaza ubuzima bw\'imyororokere bwiza?',
          textEn: 'What indicates good reproductive health?',
          options: [
            { labelRw: 'Kwirinda ibiganiro', labelEn: 'Avoiding conversations' },
            { labelRw: 'Kumenya imihindagurikire y\'umubiri', labelEn: 'Understanding body changes' },
            { labelRw: 'Kwirengagiza ibimenyetso', labelEn: 'Ignoring symptoms' },
            { labelRw: 'Kutagira umujyanama', labelEn: 'Having no counselor' },
          ],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'q2',
    titleRw: 'Ubuzima bwo mu mutwe',
    titleEn: 'Mental Wellness',
    category: 'mental_health',
    difficulty: 1,
    creditsReward: 10,
    icon: '🧠',
    lessons: [
      {
        id: 'q2-l1',
        contentRw: 'Ubuzima bwo mu mutwe ni ingenzi nk\'ubuzima bw\'umubiri. Kumva ibyiyumvo byawe no kubibwira umuntu wizeye ni intambwe ikomeye.',
        contentEn: 'Mental health is as important as physical health. Acknowledging your feelings and talking to someone you trust is a powerful step.',
        question: {
          textRw: 'Ni iki cyo gukora iyo umva ubabaye?',
          textEn: 'What should you do when feeling sad?',
          options: [
            { labelRw: 'Kwihisha', labelEn: 'Hide it' },
            { labelRw: 'Kubivuga ku muntu wizeye', labelEn: 'Talk to someone you trust' },
            { labelRw: 'Kwirengagiza', labelEn: 'Ignore it' },
            { labelRw: 'Kuba wenyine', labelEn: 'Be alone' },
          ],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'q3',
    titleRw: 'Imirire myiza',
    titleEn: 'Healthy Nutrition',
    category: 'nutrition',
    difficulty: 2,
    creditsReward: 12,
    icon: '🥗',
    lessons: [
      {
        id: 'q3-l1',
        contentRw: 'Kurya ibiribwa bitandukanye buri munsi bigufasha kugira imbaraga n\'ubuzima bwiza. Imboga, imbuto, n\'amagi ni ingenzi.',
        contentEn: 'Eating a variety of foods daily gives you energy and good health. Vegetables, fruits, and eggs are essential.',
        question: {
          textRw: 'Ni ikihe giribwa kigira intungamubiri nyinshi?',
          textEn: 'Which food is most nutritious?',
          options: [
            { labelRw: 'Ibinyamisogwe', labelEn: 'Sugary snacks' },
            { labelRw: 'Imboga n\'imbuto', labelEn: 'Vegetables and fruits' },
            { labelRw: 'Ibinyobwa bisukari', labelEn: 'Soft drinks' },
            { labelRw: 'Chips gusa', labelEn: 'Only chips' },
          ],
          correctIndex: 1,
        },
      },
    ],
  },
  {
    id: 'q4',
    titleRw: 'Isuku y\'umubiri',
    titleEn: 'Personal Hygiene',
    category: 'hygiene',
    difficulty: 1,
    creditsReward: 10,
    icon: '🧼',
    lessons: [
      {
        id: 'q4-l1',
        contentRw: 'Gukaraba intoki n\'isabune mu gihe cy\'amasegonda 20 birinda indwara nyinshi. Buri gihe ukarabe mbere yo kurya no nyuma yo gukoresha igikoni.',
        contentEn: 'Washing hands with soap for 20 seconds prevents many diseases. Always wash before eating and after using the toilet.',
        question: {
          textRw: 'Gukaraba intoki bigomba kumara igihe kingana iki?',
          textEn: 'How long should handwashing take?',
          options: [
            { labelRw: 'Amasegonda 5', labelEn: '5 seconds' },
            { labelRw: 'Amasegonda 20', labelEn: '20 seconds' },
            { labelRw: 'Umunota 1', labelEn: '1 minute' },
            { labelRw: 'Ntabwo birakenewe', labelEn: 'Not needed' },
          ],
          correctIndex: 1,
        },
      },
    ],
  },
];

export const categoryLabels: Record<string, { rw: string; en: string }> = {
  srh: { rw: 'Imyororokere', en: 'SRH' },
  mental_health: { rw: 'Ubuzima bwo mu mutwe', en: 'Mental Health' },
  nutrition: { rw: 'Imirire', en: 'Nutrition' },
  hygiene: { rw: 'Isuku', en: 'Hygiene' },
};
