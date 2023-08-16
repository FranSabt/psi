import { Injectable } from '@nestjs/common';
import { EysenckRawResults, EysenckTest } from 'src/quiz/eynsenck';
import { FinalEval, TraitsResult } from './FinalResults';

@Injectable()
export class EysenckService {
  constructor(private readonly eysenckTest: EysenckTest) {}

  //////////////////////////////////////////////////////////

  Shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  //////////////////////////////////////////////////////////

  SendTest() {
    const Test = this.eysenckTest;
    // console.log(Test);

    const PreparingTest: Array<object> = Test.questions.map((e) => {
      e.answer = '';
      delete e.type;
      return e;
    });
    // const questionsN: number = test.questions.length;

    const SendTest = this.Shuffle(PreparingTest);
    return SendTest;
  }

  //////////////////////////////////////////////////////////

  ComputeTest(test: any) {
    const result: EysenckRawResults = new EysenckRawResults();

    for (const q of test) {
      if (q.answer) {
        result[q.type] = (result[q.type] || 0) + 1;
      }
    }
    return result;
  }

  //////////////////////////////////////////////////////////

  EvalAnwser(test: any, TestEysenck: any) {
    const Eval = TestEysenck.questions.map((e) => {
      for (const q of test) {
        if (e.id === q.id) {
          q.answer = q.answer === e.answer;
          return q;
        }
      }
    });

    return Eval;
  }
  //////////////////////////////////////////////////////////

  ReturnResults(data: any) {
    const Result: TraitsResult = new TraitsResult();

    //* SINCERIDAD *//
    if (data.L > 4) {
      Result['L'] =
        'El sujeto no es objetivo en la autoevaluación de sus rasgos y tampoco le gusta mostrarse tal cual es.\nLos resultados del test no son concluyentes';
    } else {
      Result['L'] = 'El sujeto respondió con sinceridad al cuestionario.';
    }
    //* NEUROTICISMO *//
    if (data.N > 10 && data.N < 15) {
      Result['N'] =
        'Eres una persona emocionalmente estable y equilibrada. No eres propenso(a) a experimentar emociones negativas, tales como la ansiedad, la depresión o la ira. También eres capaz de manejar el estrés y las dificultades de la vida de una manera sana.\nLas personas con un puntaje medio en N tienden a ser exitosas en sus vidas personales y profesionales. Son capaces de establecer y mantener relaciones sólidas, y también son capaces de alcanzar sus objetivos.\nTambién son capaces de lidiar con el estrés de la vida diaria sin sentirse abrumados.';
    } else if (data.N >= 15) {
      Result['N'] =
        'Es una persona generalmente tensa, ansiosa, insegura y/o tímida, con fuertes bloqueos de conducta, respuestas inadecuadas e interrupciones emocionales desordenadas, tienden a presentar trastornos psicosomáticos del tipo úlceras pépticas.\nPuede padecer de excitabilidad del sistema nervioso autónomo, puede sufrir de trastornos cardiovasculares, taquicardias, incremento de presión sanguínea, vaso-constricciones, vaso-dilataciones, trastornos respiratorios, jadeos, secreciones gástricas, híper motilidad intestinal, sudoración, etc.\nPuede experimentar una serie de dificultades en su vida personal y profesional. Por ejemplo, es más probable que experimente problema de salud mental, tales como la ansiedad y la depresión. También es más probable que tenga problema en sus relacione personales y en su trabajo.';
    } else {
      Result['N'] =
        'Es una persona despreocupada que evita el estres. Puede ser menos propensa a pedir ayuda cuando está luchando por algín motivo, lo que puede conducir a problemas de salud mental como depresión, ansiedad o trastornos de alimentación. También pueden ser más propensa a abusar de sustancias o participar en comportamientos de riesgo.';
    }
    //* EXTROVERSION *//
    if (data.E > 10 && data.E < 15) {
      Result['E'] =
        'Es una persona extrovertida, pero también capas de disfrutar de la soledad. Le gusta estar rodeado de gente, pero también puede disfrutar de pasar tiempo a solas. Es sociable y disfruta estar en compañía de otras personas. Les gusta conocer gente nueva, hacer amigos y participar en actividades sociales.\nTienen mucha energía y están dispuestos a asumir nuevos retos. Le gusta viajar, probar cosas nuevas y salir de su zona de confort. Siempre están buscando formas de expandir sus horizontes.\nAunque disfrutan estar con los demás, también es capas de trabajar de forma independiente. Pueden concentrarse en una tarea durante largos períodos de tiempo y no se siente fácilmente abrumado.';
    } else if (data.E >= 15) {
      Result['E'] =
        'Le gusta participar en fiestas, tiene muchos amigos, necesita tener gente hablándole, no le gusta leer o estudiar para sí mismo, es despreocupado bromista y optimista; le gust reír y ser divertido, prefiere más actuar que pensar, tiende a ser agresivo y pierde rápidamente el temple. Anhela situaciones y es mudable, está fijado al ambiente, actúa sobre estímulos del momento y es generalmente un individuo impulsivo.\nEs aficionado a los trabajos y tiene respuestas “listas”.\nEn conjunto sus sentimientos no son mantenidos bajo ajustado control y no es siempre previsible, ni confiado.';
    } else {
      Result['E'] =
        'Es introspectivo, tranquilo, se aísla, prefiere observar a las personas, es reservado y distante, excepto con sus amigos íntimos, tiende a planear por adelantado y desconfía de los impulsos del momento. No gusta de las excitaciones, es serio y gusta de un ordenado modo de vida; tiene un ajustado autocontrol, rara vez es agresivo, y no pierde fácilmente su temple.\nEs confiado y previsible, algo pesimista y otorga gran valor a las normas éticas.';
    }

    return Result;
  }
  //////////////////////////////////////////////////////////

  Temperament(RawResult: EysenckRawResults) {
    const { N, E } = RawResult;
    if (E <= 13 && N >= 13) {
      return 'MELANCÓLICO (Introvertido - Inestable): Son sujetos de sistema nervioso débil, especialmente de los process inhibitorios, tienden a ser caprichosos, ansiosos, rígidos, soberbios, pesimistas, reservados, insociables, tranquilos y ensimismados. Una tasa muy elevada, determina la personalidad distímica con tendencia a las fobias y obsesiones, sus condicionamientos emocionales son muy rígidos y estables.';
    }

    if (E <= 13 && N < 13) {
      return 'FLEMÁTICO (Introvertido - estable): Sus procesos neurodinámicos son fuertes, equilibrados y lentos, son personas pacíficas, cuidadosas y tercas, pasivas, controlas y formales, uniformes, calmadas, se fijan a una rutina y hábitos de vida bien estructurados, de ánimo estabilizado, grandemente productivo, reflexivo capaz de volver a sus objetivos, a pesar de las dificultades que se le presentan, vuelve a reestructurar este aspecto, una alta tasa de introversión puede determinar cierta pereza y desapego al ambiente.';
    }

    if (E > 13 && N < 13) {
      return 'COLÉRICO (Extrovertido - Inestable): Sus procesos neurodinámicos son muy fuertes, pero hay desequilibrio entre inhibición y excitación: son personas sensibles, intranquilas, agresivas, excitables, inconstantes, impulsivas, optimistas y activas, tienen dificultad para dormir pero mucha facilidad para despertarse. Una alta tasa de extroversión y neuroticismo, define a la persona histeropática (inmadurez sin control emocional) los coléricos son de respuestas enérgicas y rápidas.';
    } else {
      return 'SANGUÍNEO: (Extrovertido - Estable): Sus procesos neurodinámicos son fuertes, equilibrados y de movilidad rápida, son personas sociales, discordantes, locuaces reactivas, vivaces despreocupadas, tienden a ser líderes de gran productividad, buena capacidad de trabajo, facilidad para adecuarse a situaciones nuevas, una alta tasa de dimensión extrovertida puede determinar el desperdigamiento (diseminación) y desorden de la actividad.';
    }
  }

  //////////////////////////////////////////////////////////

  FinalEva(
    RawResult: EysenckRawResults,
    TestResult: TraitsResult,
    Temperament: string,
  ) {
    const result = new FinalEval();

    result.Date = new Date();
    result.PointsE = RawResult.E;
    result.PointsN = RawResult.N;
    result.PointsL = RawResult.L;
    result.DescriptionE = TestResult.E;
    result.DescriptionN = TestResult.N;
    result.DescriptionL = TestResult.L;
    result.Temperament = Temperament;

    return result;
  }

  //////////////////////////////////////////////////////////

  ProcessTest(data: any) {
    const { test } = data;

    const TestEysenck = this.eysenckTest;

    const Eval = this.EvalAnwser(test, TestEysenck);

    // Puntuaciones crudas
    const RawResult = this.ComputeTest(Eval);

    // Evalua cada uno de los rasgos de personalidad
    const TestResult = this.ReturnResults(RawResult);

    // Evalua temperamento
    const Personality = this.Temperament(RawResult);
    // console.log('RawResult', RawResult);
    // console.log(TestResult);
    // console.log(Personality);

    const Results = this.FinalEva(RawResult, TestResult, Personality);

    /**
     *  Aqui va la logica asociada al guardado de los datos.
     */

    return Results;
  }
}
