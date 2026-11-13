/* eslint-disable @next/next/no-img-element -- ImageResponse requires an ordinary image element. */
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 128, height: 128 };
export const contentType = 'image/png';

/** Reuse the approved parent-company logo, not a recreated mark. */
export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public', 'brand', 'inbs-logo.png'));
  const src = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <img src={src} width={128} height={128} alt="" style={{ objectFit: 'contain' }} />
    </div>,
    size,
  );
}
