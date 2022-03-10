import { GatoRepository } from "../../../src/infra/repositories/gatoRepository";

test('teste GatoRepository declaration and get method', async () => {
      

    let gato = new GatoRepository();
    await gato.get()
    
    expect(gato.GatoModel != null).toBe(true);

});
