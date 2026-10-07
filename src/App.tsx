/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import FloatingPhoneButton from "./components/FloatingPhoneButton";
import ReviewBadge from "./components/ReviewBadge";
import Home from "./pages/Home";
import DotPhysicals from "./pages/DotPhysicals";
import AdrenalFatigue from "./pages/AdrenalFatigue";
import Anxiety from "./pages/Anxiety";
import Cholesterol from "./pages/Cholesterol";
import ErectileDysfunction from "./pages/ErectileDysfunction";
import Fibromyalgia from "./pages/Fibromyalgia";
import LowLibido from "./pages/LowLibido";
import LymeDisease from "./pages/LymeDisease";
import SexualDysfunctionWomen from "./pages/SexualDysfunctionWomen";
import TestosteroneTherapy from "./pages/TestosteroneTherapy";
import Sitemap from "./pages/Sitemap";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-slate-800">
        <Navbar />
        <Breadcrumbs />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dot-physicals" element={<DotPhysicals />} />
            <Route path="/adrenal-fatigue" element={<AdrenalFatigue />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/cholesterol" element={<Cholesterol />} />
            <Route path="/erectile-dysfunction" element={<ErectileDysfunction />} />
            <Route path="/fibromyalgia" element={<Fibromyalgia />} />
            <Route path="/low-libido" element={<LowLibido />} />
            <Route path="/lyme-disease" element={<LymeDisease />} />
            <Route path="/sexual-dysfunction-women" element={<SexualDysfunctionWomen />} />
            <Route path="/testosterone-therapy" element={<TestosteroneTherapy />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
        <FloatingPhoneButton />
        <ReviewBadge />
      </div>
    </Router>
  );
}
