import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';
import NotFound from '../pages/NotFound';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<About />} />
            <Route exact path='/logement/:id' element={<Housing />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}