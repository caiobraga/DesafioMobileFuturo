
/**
 * @format
 */

 import 'react-native';
import  Colors  from '../../../src/presentation/UI/colors.ts';



 test('teste Colors declaration', async () => {
      

      let colors = new Colors();
      expect(colors.primary).toBe('#7367F0');
 });

 
