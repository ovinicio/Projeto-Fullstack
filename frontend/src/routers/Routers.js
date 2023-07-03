import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import EndPage from '../pages/endPage';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home />} />
                <Route path='/end-order' element = {<EndPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;