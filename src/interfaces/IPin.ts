/**
 * Interface representing a pin.
 * @interface
 * @property {number} id - The ID of the pin.
 * @property {number} width - The width of the pin.
 * @property {number} height - The height of the pin.
 * @property {string} url - The URL of the pin.
 * @property {string} photographer - The name of the photographer.
 * @property {string} photographer_url - The URL of the photographer's profile.
 * @property {number} photographer_id - The ID of the photographer.
 * @property {string} avg_color - The average color of the pin.
 * @property {string} alt - The alternative text for the pin.
 * @property {object} src - The source URLs for different sizes of the pin.
 * @property {string} src.original - The URL of the original size pin.
 * @property {string} src.large2x - The URL of the 2x large size pin.
 * @property {string} src.large - The URL of the large size pin.
 * @property {string} src.medium - The URL of the medium size pin.
 * @property {string} src.small - The URL of the small size pin.
 * @property {string} src.portrait - The URL of the portrait size pin.
 * @property {string} src.landscape - The URL of the landscape size pin.
 * @property {string} src.tiny - The URL of the tiny size pin.
 */

export interface IPin {
  id              : number;
  width           : number;
  height          : number;
  url             : string;
  photographer    : string;
  photographer_url: string;
  photographer_id : number;
  avg_color       : string;
  alt             : string;

  src: {
    original : string;
    large2x  : string;
    large    : string;
    medium   : string;
    small    : string;
    portrait : string;
    landscape: string;
    tiny     : string;
  }
} 