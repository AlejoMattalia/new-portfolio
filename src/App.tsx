import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Stats } from "./components/home/Stats";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme/themeConfig";
import { Technologies } from "./components/technologies/Technologies";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Services } from "./components/services/Services";
import { Timeline } from "./components/timeline/Timeline";
import { WorkProcess } from "./components/process/WorkProcess";
import { Certifications } from "./components/certifications/Certifications";
import { Contact } from "./components/contact/Contact";
import { Toaster } from "sonner";
import { ButtonScrollTop } from "./components/common/ButtonScrollTop";
import { Layout } from "./layout/Layout";
import { NotFound } from "./components/common/NotFound";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";
import { useMemo } from "react";

const AppContent = () => {
  const { mode } = useThemeContext();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Toaster richColors position="bottom-right" className="z-[9999]" />

      <Routes>
        <Route
          path="/"
          element={
            <div className="relative w-full min-h-screen overflow-hidden pb-30 bg-background transition-colors duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,0))] pointer-events-none" />
              <Layout />
              <Home />
              <section className="w-full flex flex-col items-center justify-center space-y-20 lg:space-y-40">
                <Timeline />
                <Services />
                <Stats />
                <Technologies />
                <Experience />
                <Projects />
                <Certifications />
                <WorkProcess />
                <Contact />
              </section>
              <ButtonScrollTop />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
