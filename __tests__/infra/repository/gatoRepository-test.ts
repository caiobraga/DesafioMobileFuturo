import { GatoRepository } from "../../../src/infra/repositories/gatoRepository";

test('teste GatoRepository declaration and get method', async () => {
      

    let gato = new GatoRepository();
    await gato.get()
    
    console.log(gato.GatoModel);
    expect(gato.GatoModel != null).toBe(true);

});
