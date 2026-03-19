// import removed
import { Home } from "./components/home/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/themeConfig";
import { Technologies } from "./components/technologies/Technologies";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Toaster } from "sonner";
import { ButtonScrollTop } from "./components/common/ButtonScrollTop";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Toaster richColors position="bottom-right" className="z-[9999]" />

      <div className="relative w-full min-h-screen overflow-hidden pb-30 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">
        <Layout />
        <Home />
        <section className="w-full flex flex-col items-center justify-center">
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </section>
      </div>

      <ButtonScrollTop />
    </ThemeProvider>
  );
}

export default App;
