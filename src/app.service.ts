import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/*
  ENVIAR EL TEST
    -Llamar al test
    -Colocar las preguntas en orden ramdon
    -Crear objeto
      {
        nombre del test,
        [
          {
            id
            pregunta
            espacio para respuesat
          }
        ]
      }

      * asegurarse de no repetir preguntas
      * no enviar respuesta correcta
      * 
  
  RECIBIR TEST

      - Comparar id y respuesta obtenida con la clase
      - Puntuar
      - Guardar resutados
      - Enviar resultados
*/
