import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQeEmFRS278veLisTfR4BVoiUQ9We2nrw4WuWonvpBZyf/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'NFT showcase',
  description: 'NFT showcase',
  openGraph: {
    title: 'NFT showcase',
    description: 'NFT showcase',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmQeEmFRS278veLisTfR4BVoiUQ9We2nrw4WuWonvpBZyf/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}