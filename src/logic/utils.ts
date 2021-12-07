/**
 * to avoid tons of ternary operators in components for null-checks, this method returns the first argument that is not null
 * @param alt alternative in case any argument is null
 * @param args arguments to check
 * @returns first argument that is not null or alt
 */

export const coalesce = (alt: string, ...args: Array<string | undefined>): string => {
    for(const o of args) {
        if(o != null) {
            return o;
        }
    }
    return alt;
}