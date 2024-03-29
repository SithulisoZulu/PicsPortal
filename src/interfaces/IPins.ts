/**
 * Interface representing IPins.
 * 
 * @property {[]} photos - The photos property.
 * @property {string} width - The width property.
 * @property {string} height - The height property.
 * @property {string} url - The url property.
 * @property {string} id - The id property.
 * @property {[]} Photos - The Photos property.
 */
export interface IPins{
    photos       : [],
    per_page     : number,
    page         : number,
    total_results: number,
    next_page    : string,
}