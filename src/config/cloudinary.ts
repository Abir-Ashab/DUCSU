import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Initialize Cloudinary configuration function
export const initializeCloudinary = () => {
  // Configure Cloudinary
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Validate Cloudinary configuration
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Warning: Cloudinary environment variables are not properly configured');
    console.error('CLOUDINARY_CLOUD_NAME:', !!process.env.CLOUDINARY_CLOUD_NAME);
    console.error('CLOUDINARY_API_KEY:', !!process.env.CLOUDINARY_API_KEY);
    console.error('CLOUDINARY_API_SECRET:', !!process.env.CLOUDINARY_API_SECRET);
  } else {
    console.log('✅ Cloudinary configuration loaded successfully');
  }
};

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ducsu-users',
    allowed_formats: ['jpeg', 'jpg', 'png', 'gif'],
    transformation: [
      { width: 500, height: 500, crop: 'limit' },
      { quality: 'auto' }
    ]
  } as any
});

export const upload = multer({ storage });

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    // Check if Cloudinary is properly configured before attempting deletion
    if (!process.env.CLOUDINARY_API_KEY) {
      throw new Error('Cloudinary API key is not configured');
    }
    
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error);
    throw error;
  }
};

export const extractPublicIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  return filename.split('.')[0];
};
