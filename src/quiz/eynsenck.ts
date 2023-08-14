export enum DimensionsEysenck {
  l = 'L',
  n = 'N',
  e = 'E',
}

export default class Quiz {
  name: string;
  possibles_answers: Array<string>;
  questions: Array<{
    id: number;
    question: string;
    answer: string;
    type: DimensionsEysenck;
  }>;
}

export class EysenckTest implements Quiz {
  name: string = 'Eysenck';
  possibles_answers: string[] = ['SI', 'NO'];
  questions: {
    id: number;
    question: string;
    answer: string;
    type: DimensionsEysenck;
  }[] = [
    {
      id: 1,
      question: '¿Le gusta a usted el bullicio?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 2,
      question:
        '¿Necesita usted a menudo de amigos comprensivos que lo animen?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 3,
      question: ' ¿Es usted despreocupado?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 4,
      question: ' ¿Le es a usted difícil aceptar que le digan que no?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 5,
      question: '¿Piensa usted mucho antes de hacer las cosas?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 6,
      question:
        'Si usted dice que hará algo, ¿siempre cumple su promesa sin importarle los inconvenientes que se le puedan presentar?',
      answer: 'SI',
      type: DimensionsEysenck.l,
    },
    {
      id: 7,
      question:
        '¿Cambia frecuentemente de estado de ánimo sintiéndose alegre o triste?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 8,
      question: '¿Generalmente hace y dice cosas sin detenerse a pensar?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 9,
      question: '¿Se siente a veces “muy infeliz” sin ninguna razón?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 10,
      question: '¿Le gusta a usted arriesgarse?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 11,
      question:
        '¿Se siente usted tímido cuando quiere hablarle a personas desconocidas atractivas?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 12,
      question: '¿A veces pierde el control y se pone bravo?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      id: 13,
      question: '¿Hace usted a menudo cosas precipitadamente, sin pensarlas?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 14,
      question:
        '¿Se preocupa a veces por cosas que usted no debería haber dicho o hecho?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 15,
      question:
        '¿Generalmente prefiere usted leer en vez de reunirse con amigos?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 16,
      question: '¿Es usted muy susceptible?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 17,
      question: '¿Le gusta mucho pensar?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 18,
      question: '¿Piensa usted cosas que no quisiera que los demás supieran?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      id: 19,
      question:
        '¿Está usted a veces rebosante de energía y otras veces demasiado desanimado?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 20,
      question: '¿Prefiere usted tener pocos pero buenos amigos?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 21,
      question: '¿Sueña usted mucho despierto?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 22,
      question: '¿Cuando la gente lo grita, responde usted también gritando?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 23,
      question: '¿A veces le preocupa que le remuerda la conciencia?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 24,
      question: '¿Son todos sus hábitos sanos?',
      answer: 'SI',
      type: DimensionsEysenck.l,
    },
    {
      id: 25,
      question:
        '¿Puede usted corrientemente dar rienda suelta a sus emociones y divertirse mucho en una fiesta?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 26,
      question: '¿Diría que usted es muy tenso (siempre está que revienta)?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 27,
      question: '¿Lo consideran a usted muy animado?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 28,
      question:
        'Después de que ha hecho algo importante, ¿se va usted a menudo sintiendo que ha podido hacerlo mejor?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 29,
      question: '¿Permanece usted muy tranquilo cuando está con otra gente?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 30,
      question: '¿A menudo usted murmura de los demás?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 31,
      question: '¿Piensa usted tanto que las ideas no lo dejan dormir?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 32,
      question:
        '¿Si existe algo que desea saber, prefiere consultar un libro antes que consultar con alguien?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 33,
      question: '¿Siente latidos o palpitaciones de su corazón?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 34,
      question: '¿Prefiere los trabajos que le requieren gran concentración?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 35,
      question: '¿Presenta accesos de temblor?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 36,
      question:
        '¿Declararía todo lo que lleva aunque sepa que no le van a registrar la maleta (en aduana o alcabala)?',
      answer: 'SI',
      type: DimensionsEysenck.l,
    },
    {
      id: 37,
      question:
        '¿Le repugna estar entre personas donde se hacen chistes unos con otros?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 38,
      question: '¿Es usted una persona irritable?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 39,
      question: '¿Le gusta hacer cosas en las cuales debe actuar rápidamente?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 40,
      question: '¿Se preocupa por cosas terribles que pudieran ocurrirle?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 41,
      question:
        'Una vez que ha decidido algo, ¿lo hace con calma y lentamente?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 42,
      question: '¿Ha llegado una vez tarde a una cita o al trabajo?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      id: 43,
      question: '¿Tiene muchas pesadillas?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 44,
      question:
        '¿Le gusta tanto hablar con la gente que no pierde la oportunidad de hablar a un extraño?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 45,
      question: '¿Se siente perturbado por molestias y dolores?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 46,
      question:
        '¿Se siente infeliz si no está acompañado la mayor parte del tiempo?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 47,
      question: '¿Se considera usted una persona nerviosa?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 48,
      question:
        'Entre la gente que conoce, ¿existen algunas personas que definitivamente no le caen bien (no le agradan)?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      id: 49,
      question: '¿Cree usted que tiene bastante confianza en sí mismo?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 50,
      question:
        '¿Se siente lastimado fácilmente cuando alguna persona encuentra una falla en usted o en su trabajo?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 51,
      question: '¿Se le hace difícil disfrutar de una fiesta animada?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 52,
      question: '¿Le preocupa sentirse inferior a los demás?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 53,
      question: '¿Puede usted animarse en una fiesta aburrida?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      id: 54,
      question:
        '¿Habla a menudo de cosas sobre las cuales usted no conoce nada?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      id: 55,
      question: '¿Se preocupa mucho por su salud?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      id: 56,
      question: '¿Le gusta jugarse con los demás?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      id: 57,
      question: '¿Sufre usted de insomnio (se desvela mucho)?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
  ];
}

export class EysenckRawResults {
  E: number;
  N: number;
  L: number;
}
