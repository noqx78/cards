export function hello(): string {
  return "world";
}

export class Card {
  color: number;
  value: Number;

  beats(other: Card): boolean {
    if (this.value === other.value) {
      return(this.color > other.color)
    } else {
      return(this.value > other.value)
    }
  }
}

export enum colorValues {
  Ass = 14,
  König = 13,
  Ober = 12,
  Under = 11,
  Banner = 10,
  Neun = 9,
  Acht = 8,
  Sieben = 7,
  Sechs = 6
}

export enum color {
  Rosen = 3,
  Schellen = 2,
  Schilten = 2,
  Eicheln = 1,
}