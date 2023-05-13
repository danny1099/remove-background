import { Cloudinary } from '@cloudinary/url-gen';
import { removeBackground } from '@cloudinary/url-gen/actions/effect';

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

const cloudinary = new Cloudinary({
  cloud: { cloudName: CLOUD_NAME },
  url: { secure: true },
});

export default function useTransform(publidId) {
  const image = cloudinary.image(publidId);
  image.effect(removeBackground());
  return image.toURL();
}
