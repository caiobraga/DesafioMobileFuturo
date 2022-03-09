export default class Colors{

    variant = 'default'

    primary = '#7367F0';
    secondary = '#82868B';
    success = '#28C76F';
    danger = '#EA5455';
    warning = '#FF9F43';
    info = '#00CFE8';
    dark = '#4B4B4B';
    ligth = '#BABFC7';

    constructor(variant?: ('default' | 'hover' | 'active' | 'focus' | 'disabled')){
        this.variant = variant? variant : 'dafault';

        if (variant == 'hover'){
            this.primary = 'rgba(115, 103, 240, 0.38)';
            this.secondary = 'rgba(130, 134, 139, 0.38)';
            this.success = 'rgba(40, 199, 111, 0.38)';
            this.danger = 'rgba(234, 84, 85, 0.65)';
            this.warning = 'rgba(255, 159, 67, 0.65)';
            this.info = 'rgba(0, 207, 232, 0.65)';
            this.dark = 'rgba(75, 75, 75, 0.65)';
            this.ligth = '#BABFC7';
        }

        if (variant == 'active'){
            this.primary = '#5E50EE ';
            this.secondary = '#75797E';
            this.success = '#24B263';
            this.danger = '#E73D3E';
            this.warning = '#FF922A';
            this.info = '#00B8CF';
            this.dark = '#343434';
            this.ligth = '#BABFC7';
        }

        if (variant == 'focus'){
            this.primary = '#5E50EE';
            this.secondary = '#75797E';
            this.success = '#24B263';
            this.danger = '#E73D3E';
            this.warning = '#FF922A';
            this.info = '#00B8CF';
            this.dark = '#343434';
            this.ligth = '#BABFC7';
        }

        if (variant == 'disabled'){
            this.primary = 'rgba(115, 103, 240, 0.65)';
            this.secondary = 'rgba(130, 134, 139, 0.65) ';
            this.success = 'rgba(40, 199, 111, 0.65)';
            this.danger = 'rgba(234, 84, 85, 0.65)';
            this.warning = 'rgba(255, 159, 67, 0.65)';
            this.info = 'rgba(0, 207, 232, 0.65)';
            this.dark = 'rgba(75, 75, 75, 0.65)';
            this.ligth = '#BABFC7';
        }

    }

   

}