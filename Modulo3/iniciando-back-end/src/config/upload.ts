import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

export const tmpFolfer = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolfer,
  storage: multer.diskStorage({
    destination: tmpFolfer,
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
