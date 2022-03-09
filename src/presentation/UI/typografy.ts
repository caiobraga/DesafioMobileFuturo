export default class Typografy{

    variant: string;

    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    color: string;
    constructor(variant?: ('basic' | 'dis1' | 'dis2' | 'dis3' | 'dis4' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pLead'| 'p' | 'psb' | 'pb' | 'psm' | 'psmsb' | 'psmb' | 'btsm' | 'btmd' | 'btlg' | 'labelsm' | 'labelmd' | 'labellg' | 'inputsm' | 'inputmd' | 'inputlg' | 'placeholdersm' | 'placeholdermd' | 'placeholderlg')){
        this.variant = variant? variant : 'basic';

        if (variant == 'basic'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 14;
            this.lineHeight= 21;
            this.color="#6E6B7B";
        }
        if (variant == 'dis1'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 84;
            this.lineHeight= 102;
            this.color="#6E6B7B";
        }
        if (variant == 'dis2'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 77;
            this.lineHeight= 84;
            this.color="#6E6B7B";
        }
        if (variant == 'dis3'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 63;
            this.lineHeight= 77;
            this.color="#6E6B7B";
        }
        if (variant == 'dis4'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 49;
            this.lineHeight= 60;
            this.color="#6E6B7B";
        }
        if (variant == 'h1'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 28;
            this.lineHeight= 34;
            this.color="#6E6B7B";
        }
        if (variant == 'h2'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 24;
            this.lineHeight= 29;
            this.color="#6E6B7B";
        }
        if (variant == 'h3'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 21;
            this.lineHeight= 26;
            this.color="#6E6B7B";
        }
        if (variant == 'h4'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 18;
            this.lineHeight= 22;
            this.color="#6E6B7B";
        }
        if (variant == 'h5'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 15;
            this.lineHeight= 24;
            this.color="#6E6B7B";
        }
        if (variant == 'h6'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 14;
            this.lineHeight= 23;
            this.color="#6E6B7B";
        }
        if (variant == 'pLead'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 14;
            this.lineHeight= 21;
            this.color="#6E6B7B";
        }
        if (variant == 'p'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "600";
            this.fontSize= 16;
            this.lineHeight= 20;
            this.color="#6E6B7B";
        }
        if (variant == 'psb'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "bold";
            this.fontSize= 12;
            this.lineHeight= 18;
            this.color="#6E6B7B";
        }
        if (variant == 'pb'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "bold";
            this.fontSize= 14;
            this.lineHeight= 21;
            this.color="#6E6B7B";
        }
        if (variant == 'psm'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 12;
            this.lineHeight= 18;
            this.color="#6E6B7B";
        }
        if (variant == 'psmsb'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "600";
            this.fontSize= 12;
            this.lineHeight= 18;
            this.color="#6E6B7B";
        }
        if (variant == 'psmb'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "bold";
            this.fontSize= 12;
            this.lineHeight= 18;
            this.color="#6E6B7B";
        }
        if (variant == 'btsm'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 11;
            this.lineHeight= 13;
            this.color="#FFF";
        }
        if (variant == 'btmd'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 14;
            this.lineHeight= 17;
            this.color="#FFF";
        }
        if (variant == 'btlg'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "500";
            this.fontSize= 16;
            this.lineHeight= 20;
            this.color="#FFF";
        }
        if (variant == 'labelsm'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 10;
            this.lineHeight= 12;
            this.color="#5E5873";
        }
        if (variant == 'labelmd'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 12;
            this.lineHeight= 15;
            this.color="#5E5873";
        }
        if (variant == 'labellg'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 16;
            this.lineHeight= 20;
            this.color="#5E5873";
        }
        if (variant == 'inputsm'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 10;
            this.lineHeight= 12;
            this.color="#6E6B7B";
        }
        if (variant == 'inputmd'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 12;
            this.lineHeight= 15;
            this.color="#6E6B7B";
        }
        if (variant == 'inputlg'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 16;
            this.lineHeight= 20;
            this.color="#6E6B7B";
        }
        if (variant == 'placeholdersm'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 12;
            this.lineHeight= 10;
            this.color="#B9B9C3";
        }
        if (variant == 'placeholdermd'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 12;
            this.lineHeight= 24;
            this.color="#B9B9C3";
        }
        if (variant == 'placeholderlg'){
            this.fontFamily= "Montserrat";
            this.fontStyle= "normal";
            this.fontWeight= "normal";
            this.fontSize= 16;
            this.lineHeight= 20;
            this.color="#B9B9C3";
        }



    }

   

}