import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "./pages/PageHome";
import PageMembers from "./pages/PageMembers";
import PagePI from "./pages/PagePI";
import PageResearch from "./pages/PageResearch";
import PagePublication from "./pages/PagePublications";
import PageGallery from "./pages/PageGallery";
import PageJoinUs from "./pages/PageJoinUs";
import PageMember from "./pages/PageMember";
import PageResearch4 from "./pages/PageReserach4";
import PageResearch3 from "./pages/PageReserach3";
import PageResearch2 from "./pages/PageReserach2";
import PageResearch1 from "./pages/PageReserach1";

// YU0E9BrFeOrzmAtX
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/"                 element={<PageHome />}          />
                    <Route path="/pi"               element={<PagePI />}            />
                    <Route path="/members"          element={<PageMembers />}       />
                    <Route path="/member/:name"     element={<PageMember />}        />
                    <Route path="/research"         element={<PageResearch />}      />
                    <Route path="/research1"        element={<PageResearch1 />}      />
                    <Route path="/research2"        element={<PageResearch2 />}      />
                    <Route path="/research3"        element={<PageResearch3 />}      />
                    <Route path="/research4"        element={<PageResearch4 />}      />
                    <Route path="/publications"     element={<PagePublication />}   />
                    <Route path="/gallery"          element={<PageGallery />}       />
                    <Route path="/joinus"           element={<PageJoinUs />}        />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;