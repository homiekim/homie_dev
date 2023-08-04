import Image from 'next/image'
import { getIntrinsicSize } from '@/utils/getIntrinsicSize'

interface Props {
  src: string
  alt: string
}

const CustomImage = async ({ src, alt }: Props) => {
  const size = await getIntrinsicSize(src)
  return <Image src={src} alt={alt} width={size.width} height={size.height} />
}

export default CustomImage
