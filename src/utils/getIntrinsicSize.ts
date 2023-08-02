import { promisify } from "util";
import imageSize from "image-size";
const sizeof = promisify(imageSize);

export const getIntrinsicSize = async (src: string) => {
  const dimensions = await sizeof("public/" + src);
  return {
    width: dimensions?.width,
    height: dimensions?.height,
  };
};
