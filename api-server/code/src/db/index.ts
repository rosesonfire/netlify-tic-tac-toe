import CONFIG from '@config';
import { Game } from '@graphql';

export default class Db {
  static fetchGame = (): Promise<Game | null> => Db
    .get()
    .then(stringified => (stringified ? Game.deserialize(stringified) : null));

  private static get = (
  ): Promise<string | null> => {};

  static saveGame = (
    game: Game,
  ): Promise<Game> => Db.set(game.serialize()).then(() => game);

  private static set = (
    value: string,
  ): Promise<SuccessResponse> => {};
}
