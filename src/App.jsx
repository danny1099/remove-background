import { Header, Footer, Container } from '@/components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { DropProvider } from '@/context';
import { Home, Transform, Upload } from '@/pages';

function App() {
  return (
    <Container>
      <DropProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/transform' element={<Transform />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DropProvider>
      <Toaster />
    </Container>
  );
}

export default App;
