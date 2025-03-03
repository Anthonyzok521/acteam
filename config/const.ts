import {
  Game,
  Multiplatform,
  Npm,
  PlayStore,
  Python,
  Software,
  Terminal,
  VSCode,
} from "@/components/res/icons";
import { IWord } from "@/types";

export const words: IWord[] = [
  { title: "Extensiones de VS Code", icon: VSCode },
  { title: "Paquetes de Python", icon: Python },
  { title: "Software", icon: Software },
  { title: "Videojuegos", icon: Game },
  { title: "Aplicaciones", icon: PlayStore },
  { title: "Paquetes de npm", icon: Npm },
  { title: "CLI", icon: Terminal },
  { title: "Multiplataforma", icon: Multiplatform },
];
