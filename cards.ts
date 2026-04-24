export function hello(): string {
  return "world";
}

class Card {
  color: number;
  number: Number;

  beats(other: Card): boolean {

    if (this.number === other.number) {
      return false;
    }

  }
}

enum colorValues {
  Ass = 14,
  König = 13,
  Ober = 12,
  Under = 11,
  Banner = 10
}

enum color {
  Rosen = 3,
  Schellen = 2,
  Schilten = 2,
  Eicheln = 1,
}


const card1 = new Card();
card1.number = colorValues.Ass;
card1.color = color.Rosen

const card2 = new Card();
card1.number = colorValues.Banner;
card1.color = color.Schellen

card1.beats(card2)