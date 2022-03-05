/**
 * @format
 */

 import 'react-native';
import { GatoModel } from '../../../src/infra/models/gatoModel';



 test('teste GatoModel declaration and toJson function', async () => {
      

      let gatoModel = new GatoModel("2gc", "https://cdn2.thecatapi.com/images/2gc.jpg", 500, 352 );
      let json = "{\"id\":\"2gc\",\"url\":\"https://cdn2.thecatapi.com/images/2gc.jpg\",\"width\":500,\"height\":352}";

      expect(gatoModel.toJson()).toBe(json);
 });

 test('teste GatoModel getGatoModelFromJson', async () => {
      

  let gatoModel = new GatoModel("2gc", "https://cdn2.thecatapi.com/images/2gc.jpg", 500, 352 );
  
  let gatoModel2 = gatoModel.getGatoModelFromJson(gatoModel.toJson());

  expect(gatoModel2.toJson()).toBe("{\"id\":\"2gc\",\"url\":\"https://cdn2.thecatapi.com/images/2gc.jpg\",\"width\":500,\"height\":352}");
});

