import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AgendaActivitiesPage from './pages/AgendaActivitiesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import PageNotFound from './pages/PageNotFound';
import ProfilePage from './pages/ProfilePage';
import Example from './pages/Example';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route exact path="/" element={<LandingPage />} errorElement={<PageNotFound />} />,
    <Route path="/profil-desa" element={<ProfilePage />} />,
    <Route path="/galeri-desa" element={<GalleryPage />} />,
    <Route path="/berita-seputar-desa" element={<NewsPage />} />,
    <Route path="/agenda-kegiatan-desa" element={<AgendaActivitiesPage />} />,
    <Route path="/kontak" element={<ContactPage />} />,
    <Route path="/example" element={<Example />} />,
  ]),
);

export default router;
