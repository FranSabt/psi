import { Injectable } from '@nestjs/common';
import { EysenckTest } from 'src/quiz/eynsenck';

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

  ProcessTest(data: any) {
    console.log('Hello');

    const { test } = data;

    const TestEysenck = this.eysenckTest;

    const Eval = TestEysenck.questions.map((e) => {
      for (const q of test) {
        if (e.id === q.id) {
          q.answer = q.answer === e.answer;
          return q;
        }
      }
    });

    console.log(Eval);
  }
}
