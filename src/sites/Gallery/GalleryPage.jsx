import Gallery from '@/components/gallery/Gallery';
import { Navbar } from "@/components/globals";
import './GalleryPage.scss';

export default function GalleryPage() {
  return (
    <>
    <Navbar />
    <main className='gallery-section'>
      <Gallery />
    </main>
    </>
  );
};

// export default GalleryPage;
