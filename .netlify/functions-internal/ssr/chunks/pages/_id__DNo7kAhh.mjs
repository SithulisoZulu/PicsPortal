import '@astrojs/internal-helpers/path';
import { P as PHOTOS_PER_PAGE, l as links, a as $$Link, b as $$Logosm, A as API_BASE_URL, c as $$Avatar, d as $user, e as $$BackToTop, S as SITE_NAME, f as SITE_DESCRIPTION, g as SITE_CONTENT_SOURCE, h as $$Footer, $ as $$Layout } from './404_Bp5o1INs.mjs';
/* empty css                           */
import { A as AstroError, i as InvalidImageService, j as ExpectedImageOptions, E as ExpectedImage, k as FailedToFetchRemoteImageDimensions, c as createAstro, d as createComponent, l as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, e as renderComponent, F as Fragment, g as renderSlot } from '../astro_BczyccTm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { createClient } from 'pexels';
import { clsx } from 'clsx';
import { i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_BdtIFXDO.mjs';
/* empty css                           */

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  // eslint-disable-next-line regexp/prefer-d
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_BdtIFXDO.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$n = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/node_modules/astro/components/Image.astro", void 0);

const $$Astro$m = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const outDir = new URL("file:///C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/dist/");
					new URL("_astro", outDir);
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$l = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="dark:text-white text-3xl tracking-2 font-bold font-display"><span class="text-rose-500 font-mono">Pics</span>Portal<span class="text-rose-500">.</span></div>` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Logo.astro", void 0);

const $$Astro$k = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Input;
  const { type, id, name, placeholder, required, disabled, autofocus, error, value, hidden } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(id, "autocomplete")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(value, "value")}${addAttribute(disabled, "disabled")}${addAttribute(autofocus, "autofocus")}${addAttribute(clsx(`form-input py-3 px-4 block w-full rounded-lg text-semibold border-0 ring-1 ring-gray-300 ring-inset  focus:ring-inset focus:ring-sky-600 disabled:opacity-50 disabled:pointer-events-none me-2 sm:text-sm sm:leading-6  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500`, disabled && "opacity-80 pointer-events-none", error && "ring-2 ring-rose-600", hidden && "hidden"), "class")}>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/UI/Input.astro", void 0);

const $$Astro$j = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Button;
  const { type, outline, id } = Astro2.props;
  const fullButton = "w-full sm:w-auto whitespace-nowrap p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-non focus:bg-opacity-60";
  const outlineButton = "w-full sm:w-auto whitespace-nowrap p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-blue-500  text-blue-600 hover:bg-blue-700 hover:bg-opacity-20 hover:border-blue-700 disabled:opacity-50 disabled:pointer-events-non focus:pointer-events-none focus:bg-opacity-60";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(outline ? outlineButton : fullButton, "class")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </button> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/UI/Button.astro", void 0);

const client = createClient("F6D0e09UEtsHzGNJzfGGw51YZpigj5e0STTj0Q5nXDLAOn5B5QUHfSY9");

const getPins = async () => {
  try {
    return await client.photos.curated({ per_page: PHOTOS_PER_PAGE });
  } catch (error) {
    console.log(error);
  }
};

const $$Astro$i = createAstro();
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { user, activeLink } = Astro2.props;
  const profileLetter = user[0]?.name.charAt(0);
  const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";
  return renderTemplate`${maybeRenderHead()}<nav> <div class="flex flex-col justify-between bg-white h-full min-w-210 hide-Scrollbar"> <div class="flex flex-col"> ${renderComponent($$result, "Link", $$Link, { "to": "/", "className": "flex px-5 gap-2 my-6 pt-1 w-190 items-center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Logosm", $$Logosm, {})} ` })} <div class="flex flex-col gap-5"> ${renderComponent($$result, "Link", $$Link, { "to": "/", "className": !activeLink ? isActiveStyle : isNotActiveStyle }, { "default": ($$result2) => renderTemplate` <i class="fa fa-home" aria-hidden="true"></i>
home
` })} <h3 class="mt-2 px-5 text-base 2xl:text-xl">Discover more</h3> ${links?.slice(0, links?.length - 3).map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `${link.name.toLowerCase()}`, "className": activeLink?.toLowerCase() === link.name?.toLowerCase() ? isActiveStyle : isNotActiveStyle }, { "default": ($$result2) => renderTemplate`<i${addAttribute(`${link?.icon}`, "class")} aria-hidden="true"></i> ${link.name}` })}`)} ${activeLink === "search" && links?.slice(2, links?.length - 2).map((link) => renderTemplate`<div${addAttribute(isActiveStyle, "class")}><i${addAttribute(`${link?.icon}`, "class")} aria-hidden="true"></i> ${link.name}</div>`)} ${user[0] ? renderTemplate`<div${addAttribute(isNotActiveStyle, "class")}> <form${addAttribute(`${API_BASE_URL}/auth/logout.json`, "action")}> <button id="logout" class="focus:text-gray-400"><i class="fa fa-sign-out mr-3" aria-hidden="true"></i>Logout
<span> <div id="logoutLoader" class="hidden animate-spin  size-3 ml-3 border-[3px] border-current border-t-transparent text-black rounded-full dark:text-black" role="status" aria-label="loading"> <span class="sr-only">Loading...</span> </div> </span> </button> </form> </div>` : renderTemplate`<a href="auth"${addAttribute(isNotActiveStyle, "class")}><i class="fa fa-sign-out mr-0" aria-hidden="true"></i>Signin</a>`} ${links.slice(3, links.length - 1).map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `${link.name.toLowerCase()}`, "className": activeLink?.toLowerCase() === link.name?.toLowerCase() ? isActiveStyle : isNotActiveStyle }, { "default": ($$result2) => renderTemplate`<i${addAttribute(`${link?.icon}`, "class")} aria-hidden="true"></i> ${link.name}` })}`)} </div> </div> ${user[0] && renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `profile/${user[0]?._id}`, "className": "flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Avatar", $$Avatar, { "avatar": profileLetter })} <p class="font-bold">${user[0]?.name}</p> ` })}`} </div> </nav> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/SideBar.astro", void 0);

const $$Astro$h = createAstro();
const $$TopBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TopBar;
  const profileLetter = $user?.value[0]?.name.charAt(0);
  return renderTemplate`${maybeRenderHead()}<nav> <div class="flex gap-2 md:gap-5 w-full mt-5 pb-7"> <div class="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm"> <form action="/search" class="flex w-full"> <button> <i class="fa fa-search ml-1 p-3 hover:text-rose-500 transition-none duration-500 ease-in-out" aria-hidden="true"></i> </button> <input type="text" placeholder="Search..." name="query" class="w-full p-2 bg-white outline-none"> <select name="type" class="p-2 px-5 bg-white outline-none font-semibold rounded-lg"> <option value="photo"${addAttribute(true, "selected")}>Photo</option> <option value="video">Video</option> </select> </form> </div> <div class="flex gap-3"> ${$user?.value[0] && renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `profile/${$user?.value[0]?._id}`, "className": "hidden md:block" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Avatar", $$Avatar, { "avatar": profileLetter })} ` })}
          ${renderComponent($$result, "Link", $$Link, { "to": `saves/${$user?.value[0]?._id}`, "className": "bg-black text-white rounded-md w-8 h-9  md:w-10 md:h-9 flex justify-center items-center" }, { "default": ($$result2) => renderTemplate` <i class="bi bi-download"></i> ` })}`} </div> </div> </nav>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/TopBar.astro", void 0);

const getLikes = async () => {
  if ($user?.value && $user?.value?.length > 0) {
    const res = await fetch(`${API_BASE_URL}/likes/getUserLikes.json`);
    if (res.ok) {
      return await res.json();
    } else {
      return new Response(`Failed to get user likes ${JSON.stringify(res)}`);
    }
  }
};

const $$Astro$g = createAstro();
const $$Pin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Pin;
  const { pin, likes, target } = Astro2.props;
  const saved = likes?.some((like) => {
    return like.photoId.toString() === pin.id.toString();
  });
  return renderTemplate`${maybeRenderHead()}<div class="m-2" data-astro-cid-ia34fhkh> <div class="relative cursor-none w-auto rounded-lg overflow-hidden transition-all duration-500 ease-in-out Photo" id="Photo" data-astro-cid-ia34fhkh> ${renderComponent($$result, "Image", $$Image, { "width": pin?.width, "height": pin?.height, "class": "h-full w-96 md:h-auto md:w-full rounded-lg", "loading": "lazy", "src": pin.src.original ? pin.src.original : pin.src.medium, "alt": pin.alt, "data-astro-cid-ia34fhkh": true })} <div class="hidden absolute top-0 w-[385px] md:w-full h-full flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50 hover:bg-blackOverlay menu animate-slide-fwd rounded-lg transition-all duration-500 ease-in-out" id="menu" data-astro-cid-ia34fhkh> <div class="flex items-center justify-between" data-astro-cid-ia34fhkh> <div class="flex gap-2" data-astro-cid-ia34fhkh> <a id="download" download${addAttribute(pin.src.original ? pin.src.original : pin.src.medium, "href")} class="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none" onclick="downloadImage(pin.src.original ? pin.src.original : pin.src.medium)" data-astro-cid-ia34fhkh> <i class="fa fa-arrow-circle-down" aria-hidden="true" data-astro-cid-ia34fhkh></i> </a> </div> ${!saved && renderTemplate`<div data-astro-cid-ia34fhkh> <button type="submit"${addAttribute(`bg-rose-500 opacity-70 hover:opacity-100 text-white  p-2 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none`, "class")} id="likeButton"${addAttribute(pin.src.original ? pin.src.original : pin.src.medium, "data-photo-url")}${addAttribute(pin?.id ? pin?.id : "00000000", "data-photo-id")} data-astro-cid-ia34fhkh> <i class="fa fa-heart" aria-hidden="true" data-astro-cid-ia34fhkh></i> <div id="likeLoader" class="hidden animate-spin  size-3 ml-3 border-[3px] border-current border-t-transparent text-white rounded-full transition-all duration-500 ease-in-out" role="status" aria-label="loading" data-astro-cid-ia34fhkh> <span class="sr-only" data-astro-cid-ia34fhkh>Loading...</span> </div> </button> </div>`} </div> <div class="flex justify-between items-start gap-2 w-full" data-astro-cid-ia34fhkh> <a${addAttribute(`/details/${pin?.id}`, "href")}${addAttribute(target, "target")} class="bg-white flex items-center gap-2 text-black font-bold p-1 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md mb-2" data-astro-cid-ia34fhkh> <i class="bi bi-arrow-up-right-circle-fill" data-astro-cid-ia34fhkh></i> ${`view details...`} </a> ${saved && renderTemplate`<div data-astro-cid-ia34fhkh> <button type="submit"${addAttribute(`${saved ? "bg-red-500" : "bg-red-500"} p-1 opacity-70 hover:opacity-100 text-white px-2 py-1 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none mb-2 transition-all duration-500 ease-in-out`, "class")}${addAttribute(likes?.find((like) => like.photoId === pin.id.toString())?._id, "data-id")} aria-label="Delete like" data-astro-cid-ia34fhkh> <i class="bi bi-trash2-fill" data-astro-cid-ia34fhkh></i> <div id="dealeteLoader" class="hidden animate-spin  size-3 ml-3 border-[3px] border-current border-t-transparent text-white rounded-full transition-all duration-500 ease-in-out" role="status" aria-label="loading" data-astro-cid-ia34fhkh> <span class="sr-only" data-astro-cid-ia34fhkh>Loading...</span> </div> </button> </div>`} </div> </div> </div> </div> ${renderComponent($$result, "Link", $$Link, { "to": pin?.photographer_url, "className": "flex gap-2 mb-2 items-center ml-3", "target": target, "data-astro-cid-ia34fhkh": true }, { "default": ($$result2) => renderTemplate` <i class="bi bi-person-circle icon" data-astro-cid-ia34fhkh></i> <p class="font-bold capitalize mb-1" data-astro-cid-ia34fhkh> ${pin?.photographer} </p> ` })}  `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Pin.astro", void 0);

const $$Astro$f = createAstro();
const $$Loader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Loader;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex felx-col justify-center items-center w-full h-full transition-all duration-500 ease-in-out" id="loader"> <div class="flex flex-col"> <div class="flex justify-center"> <span class="sr-only">${text ? text : "Loading..."}</span> <div class="relative w-10 h-10 border-8 border-dotted rounded-full  border-sky-500 animate-spin-slow"> <div class="relative w-6 h-6 border-8 border-dashed rounded-full  border-sky-500 animate-reverse-spin shadow-sm"></div> </div> </div> <p class="text-lg font-bold text-center px-2 my-2">${`we are loading ${text || "content"} to your feed.`}</p> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Loader.astro", void 0);

const $$Astro$e = createAstro();
const $$Pins = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Pins;
  const { pins, loadingText, show, target } = Astro2.props;
  const likes = await getLikes();
  return renderTemplate`${maybeRenderHead()}<div class="px-2 md:px-5 relative" id="main"> <div class="bg-gray-50"> ${show && renderTemplate`${renderComponent($$result, "TopBar", $$TopBar, {})}`} </div> ${renderComponent($$result, "Loader", $$Loader, { "text": loadingText })} <div class="w-[470px] max-sm:flex max-sm:flex-col justify-center columns-1 md:columns-3 lg:columns-3 xl:columns-4 md:w-[600px] lg:w-[1000px] xl:w-[1300px] space-y-3 pb-28 p-3 md:px-4 lg:px-8 lg:py-16 mx-auto mt-15 animate-slide-fwd relative pl-8 md:pl-0"> ${pins?.map((pin) => renderTemplate`${renderComponent($$result, "Pin", $$Pin, { "pin": pin, "likes": likes, "target": target })}`)} ${renderComponent($$result, "BackToTop", $$BackToTop, {})} </div> </div> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Pins.astro", void 0);

const $$Astro$d = createAstro();
const $$VideoPin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$VideoPin;
  const { pin } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="m-2" data-astro-cid-q6mwlgmd> <div class="relative cursor-none w-auto rounded-lg overflow-hidden transition-all duration-500 ease-in-out video" id="Video" data-astro-cid-q6mwlgmd> <video class="h-full w-96 md:h-auto md:w-full rounded-lg" autoplay${addAttribute(false, "controls")}${addAttribute(true, "muted")}${addAttribute(pin.video_files[0].link, "src")} data-astro-cid-q6mwlgmd></video> ${renderTemplate`<div class="hidden absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50 hover:bg-blackOverlay menu" id="menu" data-astro-cid-q6mwlgmd> <div class="flex items-center justify-between" data-astro-cid-q6mwlgmd> <div class="flex gap-2" data-astro-cid-q6mwlgmd> <a id="download"${addAttribute(pin.video_files[0].link, "href")} download="true" class="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none" data-astro-cid-q6mwlgmd> <i class="fa fa-arrow-circle-down" aria-hidden="true" data-astro-cid-q6mwlgmd></i> </a> </div> <div data-astro-cid-q6mwlgmd> <form action="/" data-astro-cid-q6mwlgmd> <button type="submit"${addAttribute(`${"bg-green-500"} opacity-70 hover:opacity-100 text-white px-3 py-1 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none`, "class")} data-astro-cid-q6mwlgmd> ${"Save"} </button> </form> </div> </div> <div class="flex justify-between items-start gap-2 w-full" data-astro-cid-q6mwlgmd> <a${addAttribute(`/details/${pin?.id}`, "href")} target="_blank" class="bg-white flex items-center gap-2 text-black font-bold p-1 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md mb-2" data-astro-cid-q6mwlgmd> <i class="bi bi-arrow-up-right-circle-fill" data-astro-cid-q6mwlgmd></i> ${`view deatils...`} </a> <div data-astro-cid-q6mwlgmd> <form action="/" data-astro-cid-q6mwlgmd> <button type="submit"${addAttribute(`${"bg-red-500"} p-1 opacity-70 hover:opacity-100 text-white px-2 py-1 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none mb-2`, "class")} data-astro-cid-q6mwlgmd> <i class="bi bi-trash2-fill" data-astro-cid-q6mwlgmd></i> </button> </form> </div> </div> </div>`} </div> ${renderComponent($$result, "Link", $$Link, { "to": pin?.user?.url, "className": "flex gap-2 mb-2 items-center", "target": "_blank", "data-astro-cid-q6mwlgmd": true }, { "default": ($$result2) => renderTemplate` <i class="bi bi-person-circle icon" data-astro-cid-q6mwlgmd></i> <p class="font-bold capitalize mb-1" data-astro-cid-q6mwlgmd> ${pin?.user?.name} </p> ` })} </div>  `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/VideoPin.astro", void 0);

const $$Astro$c = createAstro();
const $$VideoPins = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$VideoPins;
  const { pins, loadingText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-2 md:px-5"> <div class="bg-gray-50"> ${renderComponent($$result, "TopBar", $$TopBar, {})} </div> ${renderTemplate`${renderComponent($$result, "Loader", $$Loader, { "text": loadingText })}`} <div class="w-[350px] max-sm:flex max-sm:flex-col justify-center columns-1 md:columns-3 lg:columns-4 xl:columns-4 gap-3 md:w-[600px] lg:w-[1100px] xl:w-[1300px] space-y-3 pb-28 p-3 lg:px-8 lg:py-16 mx-auto mt-15 animate-slide-fwd"> ${// pins?.video_files?.map((pin: IVideoPin) => <VideoPin pin={pin} />)
  pins?.map((pin) => renderTemplate`${renderComponent($$result, "VideoPin", $$VideoPin, { "pin": pin })}`)} </div> </div> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/VideoPins.astro", void 0);

const $$Astro$b = createAstro();
const $$NoPinsFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NoPinsFound;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-2 md:px-5"> <div class="bg-gray-50"> ${renderComponent($$result, "TopBar", $$TopBar, {})} </div> </div> <div class="w-fill mt-5 text-white rounded-md p-9 m-6 animate-slide-fwd bg-red-500 text-center font-bold bg-opacity-90"> <p class="text-sm">Oops something went wrong</p> <p class="text-2xl">No ${item || "content"} found</p> <p class="text-sm mt-5">Try reloading the page</p> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/NoPinsFound.astro", void 0);

const $$Astro$a = createAstro();
const $$FeatureComingSoon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FeatureComingSoon;
  return renderTemplate`${maybeRenderHead()}<div> <div class="px-2 md:px-5"> ${renderComponent($$result, "TopBar", $$TopBar, {})} </div> <div class="mt-52 flex flex-col justify-center items-center"> ${renderComponent($$result, "Logosm", $$Logosm, {})} <h1 class="text-4xl font-bold mb-4">Coming Soon</h1> <p class="text-lg mb-8 px-4 md:px-0">We're working hard to bring you something awesome. Stay tuned!</p> <div class="flex justify-center items-center space-x-4"> <div data-hs-overlay="#hs-vertically-centered-modal" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Learn More</div> <a href="contact" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</a> </div> </div> ${renderComponent($$result, "FeatureComingSoonDetails", $$FeatureComingSoonDetails, {})} </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/FeatureComingSoon.astro", void 0);

const $$Astro$9 = createAstro();
const $$FeatureComingSoonDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FeatureComingSoonDetails;
  return renderTemplate`${maybeRenderHead()}<div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"> <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl"> <div class="flex justify-between items-center py-3 px-4 border-b"> <h3 class="font-bold text-lx">
Feature Coming Soon
</h3> <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal"> <span class="sr-only">Close</span> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div class="p-4 overflow-y-auto"> <p class="text-base font-semibold">
Exciting news, everyone! 🎉 Get ready for a brand new feature that is coming your way soon! 🚀 We are thrilled to announce that our team has been working hard behind the scenes to bring you something special that will enhance your user experience. Stay tuned for updates as we prepare to roll out this awesome addition to our platform. 🌟 Get ready to level up your experience with us! 💻
</p> </div> <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
Sound good
</button> </div> </div> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/FeatureComingSoonDetails.astro", void 0);

const $$Astro$8 = createAstro();
const $$NoLikedFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NoLikedFound;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="m-3 border border-gray-500 p-6 rounded-md flex justify-center items-center"> <div class="flex flex-col justify-center items-center"> <h1 class="font-bold text-2xl">No liked ${item} found</h1> <p class="font-semibold text-base mt-3">Seems like you haven't liked any ${item}. You can go to ho home to explore more ${item}</p> <a href="/" class="mt-5 font-semibold bg-black rounded-full text-white p-3 px-5">Expore more <i class="ml-2 bi bi-emoji-smile"></i></a> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/NoLikedFound.astro", void 0);

const $$Astro$7 = createAstro();
const $$SavedImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SavedImage;
  const { like } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="m-2"> <div class="relative cursor-none w-auto rounded-lg overflow-hidden transition-all duration-500 ease-in-out Photo hover:shadow-sm" id="Photo"> ${renderComponent($$result, "Image", $$Image, { "width": "350", "height": "350", "src": like.photoUrl, "alt": "img", "class": "rounded-md", "format": "webp", "loading": "eager" })} <div class="hidden absolute top-0 w-[350px] rounded-md  h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50 hover:bg-blackOverlay menu" id="menu"> <div class="flex items-center justify-between"> <div class="flex gap-2"> <a id="download"${addAttribute(like.photoUrl, "href")} download="image.jpg" download class="bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none" onclick="downloadImage()"> <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> </a> </div> <div class="hidden"> <form action="/"> <button type="submit"${addAttribute(`${"bg-green-500"} opacity-70 hover:opacity-100 text-white px-3 py-1 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none`, "class")}>
Saved
</button> </form> </div> </div> <div class="flex justify-between items-start gap-2 w-full"> ${renderComponent($$result, "Link", $$Link, { "to": `/details/${like.photoId}`, "className": "flex gap-2 mb-2 bg-white items-center text-black font-bold p-1 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md ", "target": "_blank" }, { "default": ($$result2) => renderTemplate` <i class="bi bi-arrow-up-right-circle-fill"></i> ${`view details...`}` })} <div> <button type="submit"${addAttribute(`bg-red-500 p-1 opacity-70 hover:opacity-100 text-white px-2 py-1 font-bold rounded-full flex items-center justify-center hover:shadow-md outline-none mb-2 transition-all duration-500 ease-in-out`, "class")}${addAttribute(like._id, "data-id")} aria-label="Delete like"> <i class="bi bi-trash2-fill"></i> <div id="dealeteLoader" class="hidden animate-spin  size-3 ml-3 border-[3px] border-current border-t-transparent text-white rounded-full transition-all duration-500 ease-in-out" role="status" aria-label="loading"> <span class="sr-only">Loading...</span> </div> </button> </div> </div> </div> </div> </div> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/SavedImage.astro", void 0);

const $$Astro$6 = createAstro();
const $$SavedImages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SavedImages;
  const liked = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="grid grid-cols-2 md:grid-cols-3 mt-5"> ${liked.liked?.map(
    (like) => renderTemplate`${renderComponent($$result, "SavedImage", $$SavedImage, { "like": like })}`
  )} </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/SavedImages.astro", void 0);

const $$Astro$5 = createAstro();
const $$DeleteAccountConfirmation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DeleteAccountConfirmation;
  return renderTemplate`${maybeRenderHead()}<div id="hs-danger-alert" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto"> <div class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden"> <div class="absolute top-2 end-2"> <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-danger-alert"> <span class="sr-only">Close</span> <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div class="p-4 sm:p-10 overflow-y-auto"> <div class="flex gap-x-4 md:gap-x-7"> <!-- Icon --> <span class="flex-shrink-0 inline-flex justify-center items-center size-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 "> <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path> </svg> </span> <!-- End Icon --> <div class="grow"> <h3 class="mb-2 text-xl font-bold text-gray-800 ">
Delete Personal Account
</h3> <p class="text-gray-500">
Permanently remove your Personal Account and all of its contents from the ${SITE_NAME} platform. This action is not reversible, so please continue with caution.
</p> </div> </div> </div> <div class="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-danger-alert">
Cancel
</button> <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none" href="#">
Delete personal account
</a> </div> </div> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/DeleteAccountConfirmation.astro", void 0);

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<!-- ========== MAIN CONTENT ========== -->${maybeRenderHead()}<main id="content" role="main" class=" max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col justify- sm:items-center mx-auto  before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"> <div class="text-center px-4 sm:px-6 lg:px-8"> <!-- <Logosm /> --> <h2 class="sm:mt-3 text-4xl font-bold text-white sm:text-6xl mt-10 md:mt-20"> <span class="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">${SITE_NAME}</span> </h2> <p class="mt-5 font-semibold">${SITE_DESCRIPTION}</p> <h1 class="text-2xl md:text-3xl font-bold mb-5 mt-10">FAQs</h1> <div class="hs-accordion-group mb-5"> <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl " id="hs-active-bordered-heading-one"> <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none " aria-controls="hs-basic-active-bordered-collapse-one"> <i class="fa fa-info-circle" aria-hidden="true"></i> How to download ${SITE_NAME}'s content.?
<svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path></svg> </button> <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one"> <div class="pb-4 px-5"> <p class="text-gray-800 "> <em>This is how you can download our content.</em> You have to click on the download button on the top left corner of the video of photo you want to download, You will be redirected to a different page where you will see the image or video in full. from that page right click or log press on mobile then press save image.
<br> <br> <em class="mt-3"> <strong>Please Note:</strong> This is a tamporary solution out team is working to provide you with a seamless browsing experience.</em> </p> </div> </div> </div> <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl mt-2" id="hs-active-bordered-heading-one"> <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none " aria-controls="hs-basic-active-bordered-collapse-two"> <i class="fa fa-info-circle" aria-hidden="true"></i> is ${SITE_NAME} free to use.?
<svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path></svg> </button> <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one"> <div class="pb-4 px-5"> <p class="text-gray-800 "> ${SITE_NAME} Is a free online world of high quality videos and photos for enthusiasts, creatives, and professionals alike.
<br> <br> <em class="mt-3"> <strong>Please Note:</strong> We intend to keep this planform free forever! 🎉.</em> </p> </div> </div> </div> </div> <!-- Review Form --> <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> <div class="mx-auto max-w-2xl"> <div class="text-center"> <h2 class="text-xl text-gray-800 font-bold sm:text-3xl">
Leave a review
</h2> </div> <!-- Card --> <div class="mt-5 p-4 relative  bg-white border rounded-xl sm:mt-10 md:p-10 text-start"> <form> <div class="mb-4 sm:mb-8"> <label for="hs-feedback-post-comment-name-1" class="block mb-2 text-sm font-medium">Full name</label> ${renderComponent($$result, "Input", $$Input, { "id": "fullName", "name": "fullName", "placeholder": "Fullname", "required": true, "type": "text" })} </div> <div class="mb-4 sm:mb-8"> <label for="hs-feedback-post-comment-email-1" class="block mb-2 text-sm font-medium">Email address</label> ${renderComponent($$result, "Input", $$Input, { "id": "fullName", "name": "fullName", "placeholder": "Fullname", "required": true, "type": "email" })} </div> <div> <label for="hs-feedback-post-comment-textarea-1" class="block mb-2 text-sm font-mediu">Review</label> <div class="mt-1"> <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" class="form-input py-3 px-4 block w-full rounded-lg text-semibold border-0 ring-1 ring-gray-300 ring-inset  focus:ring-inset focus:ring-sky-600 disabled:opacity-50 disabled:pointer-events-none me-2 sm:text-sm sm:leading-6  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="Leave your review here..."></textarea> </div> </div> <div class="mt-6 grid"> <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">Submit</button> </div> </form> </div> <!-- End Card --> </div> </div> <!-- End Review Form --> <p class="mt-7 text-sm text-gray-500"></p><div class="inline-flex items-center"> <span class="size-2 inline-block bg-pink-500 rounded-full me-2 animate-pulse"></span> </div> ${SITE_CONTENT_SOURCE}  <div class="text-gray-500  mt-5 mb-20">
Pexels official website: <a href="https://www.pexels.com/" target="_blank" class="text-sky-600">pexels.com</a> </div> </div></main> <!-- ========== END MAIN CONTENT ========== --> <!-- ========== FOOTER ========== --> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- ========== END FOOTER ========== -->`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`<!-- Pagination -->${maybeRenderHead()}<nav class="flex items-center gap-x-1 mt-3"> <a${addAttribute(`/?page=${currentPage - 1}`, "href")}${addAttribute(disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none dark:bg-gray-700" : "transition-all ease-in-out duration-300 bg-indigo-100 dark:bg-indigo-400 dark:hover:bg-indigo-600 dark:text-white px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}> <span>Previous</span> </a> ${Array.from({ length: totalPages }, (_, i) => renderTemplate`<a${addAttribute(`/?page=${i + 1}`, "href")}${addAttribute(`transition-all ease-in-out duration-300 min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === i + 1 ? "bg-indigo-100 text-gray-900 dark:bg-indigo-400 dark:hover:bg-indigo-600" : "bg-gray-200 text-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-700 hover:text-white"} py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500 ${currentPage === i + 1 ? "active" : ""}`, "class")}${addAttribute(currentPage === i + 1 ? "page" : void 0, "aria-current")}> ${i + 1} </a>`)} <a${addAttribute(`/?page=${currentPage + 1}`, "href")}${addAttribute(disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none dark:bg-gray-700" : "transition-all ease-in-out duration-300 bg-indigo-100 px-3 py-2 hover:bg-indigo-600 text-white rounded-lg dark:bg-indigo-400 dark:hover:bg-indigo-600", "class")}> <span>Next</span> </a> </nav> <!-- End Pagination -->`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/components/Pagination.astro", void 0);

function randomize(array) {
  return array.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
}

const $$Astro$2 = createAstro();
const $$id$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$id$2;
  const photoId = Astro2.params.id;
  const image = await client.photos.show({ id: photoId });
  const pins = await getPins();
  const rand = randomize(pins?.photos);
  return renderTemplate`${renderComponent($$result, "ProfileLayout", $$Layout, { "SITE_PAGE": image?.alt }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-2"> <div class="flex justify-center items-center gap-1 mt-5"> <div class="relative cursor-none w-auto rounded-lg overflow-hidden transition-all duration-500 ease-in-out Photo md:px-26" id="Photo"> <div class="mb-3 font-bold text-center w-[280px]"> <h1>${image?.alt && image?.alt}</h1> </div> ${renderComponent($$result2, "Image", $$Image, { "width": 300, "height": 300, "src": image?.src?.original, "alt": image?.alt })} <div class="flex justify-between items-center"> ${renderComponent($$result2, "Link", $$Link, { "to": image.photographer_url, "className": "flex gap-2 mb-2 mt-2 bg-white items-center text-black font-bold p-1  pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md ", "target": "_blank" }, { "default": ($$result3) => renderTemplate` <i class="bi bi-person-circle icon"></i> <p class="font-bold capitalize mb-1"> ${image?.photographer} </p> ` })} <a${addAttribute(image?.src?.original, "href")} download class=""><i class="bi bi-download text-lg font-bold hover:shadow-md outline-none rounded-full p-2 animate-bounce" aria-hidden="true"></i></a> </div> </div> </div> <div class="w-full flext justify-center items-center text-center mt-10 border-t py-5 md:px-32"> <h1 class="text-2xl md:text-3xl font-bold">Explore more related pictures</h1> </div> <div class="lg:px-40 md:mx-20"> ${renderComponent($$result2, "Pins", $$Pins, { "pins": rand && rand, "loadingText": "Related Pictures", "show": false, "target": "" })} </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/details/[id].astro", void 0);

const $$file$2 = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/details/[id].astro";
const $$url$2 = "/details/[id]";

const _id_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const liked = await getLikes();
  return renderTemplate`${renderComponent($$result, "ProfileLayout", $$Layout, { "SITE_PAGE": "Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center top-0 left-0 bottom-0"> <div class="w-32 h-32 mt-10 bg-gray-400 rounded-full flex justify-center items-center text-3xl font-semibold ">${$user?.value[0]?.name.charAt(0)}</div> <h1 class="text-3xl md:text-5xl font-bold mt-4">${$user?.value[0]?.name}</h1> <span class="inline-flex items-center mt-2 gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">Active</span> <div class="md:px-46 mt-20"> <div class="w-full"> <nav class="m-3 pace-x-2" aria-label="Tabs" role="tablist"> <button type="button" class="active text-gray-500 hover:text-black font-semibold hs-tab-active:bg-black hs-tab-active:text-white hs-tab-active:font-bold rounded-full p-3 px-4 w-[190px] mr-5 transition-all duration-500 ease-in capitalize" id="unstyled-tabs-item-1" data-hs-tab="#unstyled-tabs-1" aria-controls="unstyled-tabs-1" role="tab">
Saved Photo${liked?.length > 1 && "s"} <span class="text-gray-400 font-normal">${liked?.length}</span> </button> <button type="button" class="text-gray-500 hover:text-black font-semibold hs-tab-active:bg-black hs-tab-active:text-white hs-tab-active:font-bold rounded-full p-3 px-4 w-[190px] mr-5 transition-all duration-500 ease-in capitalize" id="unstyled-tabs-item-2" data-hs-tab="#unstyled-tabs-2" aria-controls="unstyled-tabs-2" role="tab">
Saved Videos <span class="text-gray-400 font-normal">0</span> </button> <button type="button" class="text-gray-500 hover:text-black font-semibold hs-tab-active:bg-black hs-tab-active:text-white hs-tab-active:font-bold rounded-full p-3 px-4 w-[190px] mr-5 transition-all duration-500 ease-in capitalize" id="unstyled-tabs-item-2" data-hs-tab="#unstyled-tabs-3" aria-controls="unstyled-tabs-2" role="tab">
Profile Information
</button> </nav> </div> <div class="mt-3 mb-10"> <div class="mt-10" id="unstyled-tabs-1" role="tabpanel" aria-labelledby="unstyled-tabs-item-1"> ${liked?.length > 0 ? renderTemplate`${renderComponent($$result2, "SavedImagies", $$SavedImages, { "liked": liked })}` : renderTemplate`${renderComponent($$result2, "NoLikedFound", $$NoLikedFound, { "item": "Photos" })}`} </div> <div id="unstyled-tabs-2" class="hidden mt-10" role="tabpanel" aria-labelledby="unstyled-tabs-item-2"> ${liked?.length < 0 ? renderTemplate`${renderComponent($$result2, "SavedImagies", $$SavedImages, { "liked": liked })}` : renderTemplate`<div class="mt-2 flex flex-col justify-center items-center"> <h1 class="text-4xl font-bold mb-4">Coming Soon</h1> <p class="text-lg mb-8 px-4 md:px-0">We're working hard to bring you something awesome. Stay tuned!</p> <div class="flex justify-center items-center space-x-4"> <div data-hs-overlay="#hs-vertically-centered-modal" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Learn More</div> <a href="contact" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</a> </div> </div>`} </div> <div id="unstyled-tabs-3" class="hidden flex-col items-start justify-start mt-5" role="tabpanel" aria-labelledby="unstyled-tabs-item-3"> <div class="mt-5 w-auto"> <div class="grid md:grid-cols-2 gap-5 mt-5 p-5 md:p-0"> <div> <h2 class="block text-2xl md:text-3xl font-bold mb-5 mt-5">Update account details</h2> <div class="md:w-[465px]"> <!-- Form --> <form${addAttribute(`${API_BASE_URL}/auth/update.json`, "action")} method="post"> <div class="grid gap-y-4"> <!-- Form Group --> <div> <label for="name" class="block text-sm mb-2">full name</label> <div class="relative"> ${renderComponent($$result2, "Input", $$Input, { "type": "text", "id": "name", "name": "name", "placeholder": "Enter full name", "required": true, "autofocus": false, "value": $user?.value[0]?.name })} <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <label for="email" class="block text-sm mb-2">Email address</label> <div class="relative"> ${renderComponent($$result2, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "placeholder": "Enter email address", "required": true, "autofocus": false, "value": $user?.value[0]?.email })} <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> </div> <!-- End Form Group --> <!-- Form Group --> <div> <div class="flex justify-between items-center"> <label for="password" class="block text-sm mb-2 ">Password</label> </div> <div class="relative"> ${renderComponent($$result2, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "placeholder": "Enter your password", "required": true, "autofocus": false })} <div class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p> </div> <!-- End Form Group --> ${renderComponent($$result2, "Button", $$Button, { "type": "submit" }, { "default": ($$result3) => renderTemplate`Update details <i class="fa fa-edit"></i>` })} </div> </form> <!-- End Form --> </div> </div> <div class="flex justify-center items-start mt-5 p-7"> <div class="flex flex-col"> <h2 class="block text-2xl md:text-3xl font-bold mb-5 mt-5">Delete your ${SITE_NAME} account?</h2> <button class="w-full sm:w-auto whitespace-nowrap p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-non focus:bg-opacity-60" data-hs-overlay="#hs-danger-alert">Delete Account <i class="bi bi-trash2-fill"></i> </button> </div> </div> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "DeleteAccountConfirmation", $$DeleteAccountConfirmation, {})} ` })} `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/profile/[id].astro", void 0);

const $$file$1 = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/profile/[id].astro";
const $$url$1 = "/profile/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const liked = await getLikes();
  return renderTemplate`${renderComponent($$result, "ProfileLayout", $$Layout, { "SITE_PAGE": "Saves" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center top-0 left-0 bottom-0"> <div class="items-start justify-start md:px-56 mt-20"> <nav class="m-3 pace-x-2" aria-label="Tabs" role="tablist"> <button type="button" class="active text-gray-500 hover:text-black font-semibold hs-tab-active:bg-black hs-tab-active:text-white hs-tab-active:font-bold rounded-full p-3 px-4 w-[190px] mr-5 transition-all duration-500 ease-in capitalize" id="unstyled-tabs-item-1" data-hs-tab="#unstyled-tabs-1" aria-controls="unstyled-tabs-1" role="tab">
Saved Photo${liked.length > 1 && "s"} <span class="text-gray-400 font-normal">${liked.length}</span> </button> <button type="button" class="text-gray-500 hover:text-black font-semibold hs-tab-active:bg-black hs-tab-active:text-white hs-tab-active:font-bold rounded-full p-3 px-4 w-[190px] mr-5 transition-all duration-500 ease-in capitalize" id="unstyled-tabs-item-2" data-hs-tab="#unstyled-tabs-2" aria-controls="unstyled-tabs-2" role="tab">
Saved Videos <span class="text-gray-400 font-normal">0</span> </button> </nav> <div class="mt-3 mb-10"> <div class="mt-10" id="unstyled-tabs-1" role="tabpanel" aria-labelledby="unstyled-tabs-item-1"> ${liked.length > 0 ? renderTemplate`${renderComponent($$result2, "SavedImages", $$SavedImages, { "liked": liked })}` : renderTemplate`${renderComponent($$result2, "NoLikedFound", $$NoLikedFound, { "item": "Photos" })}`} </div> <div id="unstyled-tabs-2" class="hidden mt-10" role="tabpanel" aria-labelledby="unstyled-tabs-item-2"> ${liked.length > 90 ? renderTemplate`${renderComponent($$result2, "SavedImages", $$SavedImages, { "liked": liked })}` : renderTemplate`<div class="mt-2 flex flex-col justify-center items-center"> <h1 class="text-4xl font-bold mb-4">Coming Soon</h1> <p class="text-lg mb-8 px-4 md:px-0">We're working hard to bring you something awesome. Stay tuned!</p> <div class="flex justify-center items-center space-x-4"> <div data-hs-overlay="#hs-vertically-centered-modal" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Learn More</div> <a href="contact" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</a> </div> </div>`} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/saves/[id].astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/PicsPortal/src/pages/saves/[id].astro";
const $$url = "/saves/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SideBar as $, _id_$2 as _, $$Pins as a, $$NoPinsFound as b, client as c, $$FeatureComingSoon as d, $$VideoPins as e, $$About as f, $$Button as g, $$Input as h, $$Logo as i, getConfiguredImageService as j, imageConfig as k, getPins as l, _id_$1 as m, _id_ as n };
