import { readFile } from "node:fs/promises";
import { join } from "node:path";

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type FontStyle = "normal" | "italic";

type FontOptions = {
  name: string;
  data: ArrayBuffer;
  weight: FontWeight;
  style: FontStyle;
};

type FontConfig = {
  name: string;
  file: string;
  weight: FontWeight;
  style: FontStyle;
};

const fonts: FontConfig[] = [
  // 100 — Thin
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Thin.ttf",
    weight: 100,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-ThinItalic.ttf",
    weight: 100,
    style: "italic",
  },

  // 200 — ExtraLight
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-ExtraLight.ttf",
    weight: 200,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-ExtraLightItalic.ttf",
    weight: 200,
    style: "italic",
  },

  // 300 — Light
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Light.ttf",
    weight: 300,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-LightItalic.ttf",
    weight: 300,
    style: "italic",
  },

  // 400 — Regular
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Regular.ttf",
    weight: 400,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Italic.ttf",
    weight: 400,
    style: "italic",
  },

  // 500 — Medium
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Medium.ttf",
    weight: 500,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-MediumItalic.ttf",
    weight: 500,
    style: "italic",
  },

  // 600 — SemiBold
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-SemiBold.ttf",
    weight: 600,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-SemiBoldItalic.ttf",
    weight: 600,
    style: "italic",
  },

  // 700 — Bold
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Bold.ttf",
    weight: 700,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-BoldItalic.ttf",
    weight: 700,
    style: "italic",
  },

  // 800 — ExtraBold
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-ExtraBold.ttf",
    weight: 800,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-ExtraBoldItalic.ttf",
    weight: 800,
    style: "italic",
  },

  // 900 — Black
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-Black.ttf",
    weight: 900,
    style: "normal",
  },
  {
    name: "Montserrat",
    file: "Montserrat/Montserrat-BlackItalic.ttf",
    weight: 900,
    style: "italic",
  },
];

async function loadFont(file: string): Promise<ArrayBuffer> {
  const filePath = join(process.cwd(), "assets/fonts", file);

  const buffer = await readFile(filePath);

  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

export async function getOgFonts(): Promise<FontOptions[]> {
  return Promise.all(
    fonts.map(async (font) => ({
      name: font.name,
      data: await loadFont(font.file),
      weight: font.weight,
      style: font.style,
    })),
  );
}
