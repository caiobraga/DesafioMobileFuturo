export class GatoModel {
    private id: string;
    private url: string;
    private width: number;
    private height: number;
    

    constructor(id?:string, url?:string, width?:number, height?:number){
        
        this.id = id ? id : "";
        this.url = url? url : "";
        this.width = width? width : 0;
        this.height = height? height : 0;
    }

    getId(){
      return this.id;
    }

    getUrl(){
      return this.url;
    }

    getWidth(){
      return this.width;
    }

    getHeight(){
      return this.height;
    }

     toMap(): Map<String, any> {
        const GatoMap = new Map<String, any>();

        GatoMap.set("id", this.id);
        GatoMap.set("url", this.url);
        GatoMap.set("width", this.width);
        GatoMap.set("height", this.height);
        
        return GatoMap;
      }
    
      getGatoModelfromMap(map: Map<String,any>) : GatoModel {
        if (map == null) return null;
    
        return new GatoModel(map['id'], map['url'], map['width'],map['height']);
      }
    
       toJson(): string {
          return JSON.stringify(Object.fromEntries(this.toMap()));
       }

      getGatoModelFromJson(source: string) : GatoModel {
        return this.getGatoModelfromMap(JSON.parse(source));
      }
}