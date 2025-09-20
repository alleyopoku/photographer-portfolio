import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'testimonials.json');
  const testimonials = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (req.method === 'POST') {
    testimonials.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(testimonials, null, 2));
    return res.status(200).json({ success: true });
  }

  res.status(200).json(testimonials);
}
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // your logic
}
import type { Testimonial } from '../../types/testimonial';
import Link from 'next/link';
