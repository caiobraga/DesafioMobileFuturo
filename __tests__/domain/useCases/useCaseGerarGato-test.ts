import {GatoRepository} from "../../../src/infra/repositories/gatoRepository"
import { Gato } from "../../../src/domain/entitys/gato";
import  UseCaseGerarGato  from "../../../src/domain/useCases/useCaseGerarGato";

test('teste useCase declaration', async () => {
      

    let gato = await new UseCaseGerarGato().action();

    expect(gato.getData().url != null).toBe(true);

});
