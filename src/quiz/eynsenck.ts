export enum DimensionsEysenck {
  l = 'L',
  n = 'N',
  e = 'E',
}

export default class Quiz {
  questions: Array<{
    question: string;
    answer: string;
    type: DimensionsEysenck;
  }>;
}

export class Eysenck implements Quiz {
  questions: { question: string; answer: string; type: DimensionsEysenck }[] = [
    {
      question: '¿Le gusta a usted el bullicio?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question:
        '¿Necesita usted a menudo de amigos comprensivos que lo animen?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: ' ¿Es usted despreocupado?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question: ' ¿Le es a usted difícil aceptar que le digan que no?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Piensa usted mucho antes de hacer las cosas?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      question:
        'Si usted dice que hará algo, ¿siempre cumple su promesa sin importarle los inconvenientes que se le puedan presentar?',
      answer: 'SI',
      type: DimensionsEysenck.l,
    },
    {
      question:
        '¿Cambia frecuentemente de estado de ánimo sintiéndose alegre o triste?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Generalmente hace y dice cosas sin detenerse a pensar?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿Se siente a veces “muy infeliz” sin ninguna razón?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Le gusta a usted arriesgarse?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question:
        '¿Se siente usted tímido cuando quiere hablarle a personas desconocidas atractivas?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿A veces pierde el control y se pone bravo?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      question: '¿Hace usted a menudo cosas precipitadamente, sin pensarlas?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question:
        '¿Se preocupa a veces por cosas que usted no debería haber dicho o hecho?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question:
        '¿Generalmente prefiere usted leer en vez de reunirse con amigos?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿Es usted muy susceptible?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Le gusta mucho pensar?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿Piensa usted cosas que no quisiera que los demás supieran?',
      answer: 'NO',
      type: DimensionsEysenck.l,
    },
    {
      question:
        '¿Está usted a veces rebosante de energía y otras veces demasiado desanimado?',
      answer: 'NO',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿Prefiere usted tener pocos pero buenos amigos?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Sueña usted mucho despierto?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Cuando la gente lo grita, responde usted también gritando?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿A veces le preocupa que le remuerda la conciencia?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Son todos sus hábitos sanos?',
      answer: 'SI',
      type: DimensionsEysenck.l,
    },
    {
      question:
        '¿Puede usted corrientemente dar rienda suelta a sus emociones y divertirse mucho en una fiesta?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question: '¿Diría que usted es muy tenso (siempre está que revienta)?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
    {
      question: '¿Lo consideran a usted muy animado?',
      answer: 'SI',
      type: DimensionsEysenck.e,
    },
    {
      question:
        'Después de que ha hecho algo importante, ¿se va usted a menudo sintiendo que ha podido hacerlo mejor?',
      answer: 'SI',
      type: DimensionsEysenck.n,
    },
  ];
}
