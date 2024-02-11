export class TypeChecker {
    static betterNumbers = false; //opt in or out of using 'float' and 'int' 
    static typeRegistry = {
        Map: Map,
        Set: Set, 
    } 
    static type_of(thing){
        if(thing === null) return "null"
        const T = typeof thing
        if(TypeChecker.betterNumbers && T === "number"){
            if(Math.trunc(thing) === thing) return "int"
            return "float"
        }
        if(typeof thing === "object"){
            if(Array.isArray(thing)) return "array"
            for(const type in TypeChecker.typeRegistry)
                if(thing instanceof TypeChecker.typeRegistry[type]) return type
        }
        return T;
    }
}
 
