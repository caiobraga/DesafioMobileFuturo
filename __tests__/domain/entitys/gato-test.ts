/**
 * @format
 */

 import 'react-native';

import { Gato } from '../../../src/domain/entitys/gato';


 test('teste gato entity declaration', async () => {
      

      let gato = new Gato("2gc", "https://cdn2.thecatapi.com/images/2gc.jpg", 500, 352 );

      expect(gato.getId()).toBe("2gc");
      expect(gato.getUrl()).toBe("https://cdn2.thecatapi.com/images/2gc.jpg");
      expect(gato.getWidth()).toBe(500);
      expect(gato.getHeight()).toBe(352);
 });

