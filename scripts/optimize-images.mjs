import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

async function optimizeImages() {
  if (!fs.existsSync(imagesDir)) {
    console.log('No public/images directory found.');
    return;
  }

  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(imagesDir, file);
      const tempPath = path.join(imagesDir, `temp-${file}`);
      
      console.log(`Optimizing ${file}...`);

      try {
        await sharp(filePath)
          .resize(1200, 1200, { // Resize to max 1200px width/height
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: 70, mozjpeg: true }) // Convert to JPEG with 80% quality
          .toFile(tempPath);

        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`✅ Optimized ${file}`);
      } catch (error) {
        console.error(`❌ Failed to optimize ${file}:`, error);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

optimizeImages();
