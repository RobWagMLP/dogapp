export const coalesce = (alt: string, ...args: Array<string | undefined>): string => {
    for(const o of args) {
        if(o != null) {
            return o;
        }
    }
    return alt;
}

export const valueFromNullableObject = (keys: string[], object?: {[key: string] : string }): string | undefined => {
    if(object == null) {
        return undefined;
    }
    for(const o of keys) {
        if(object[o] != null) {
            return object[o]
        }
    }
    return undefined;
}