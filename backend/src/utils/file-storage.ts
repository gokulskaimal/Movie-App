import fs from "fs/promises";
import path from "path";

const FAVORITES_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "favorites.json"
);

let writeQueue =
  Promise.resolve();

const ensureFavoritesFile =
  async () => {
    try {

      await fs.access(
        FAVORITES_PATH
      );

    } catch {

      await fs.mkdir(
        path.dirname(
          FAVORITES_PATH
        ),
        {
          recursive: true
        }
      );

      await fs.writeFile(
        FAVORITES_PATH,
        "{}"
      );
    }
  };

export const readFavoritesFile =
  async (): Promise<
    Record<string, any[]>
  > => {

    await ensureFavoritesFile();

    try {

      const file =
        await fs.readFile(
          FAVORITES_PATH,
          "utf-8"
        );

      return JSON.parse(file);

    } catch (err) {

      console.error(
        "Failed to read favorites file",
        err
      );

      return {};
    }
  };

export const writeFavoritesFile =
  async (
    data: Record<string, any[]>
  ): Promise<void> => {

    await ensureFavoritesFile();

    writeQueue =
      writeQueue.then(
        async () => {

          await fs.writeFile(
            FAVORITES_PATH,

            JSON.stringify(
              data,
              null,
              2
            )
          );
        }
      );

    return writeQueue;
  };