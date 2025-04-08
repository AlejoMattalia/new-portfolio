import { useEffect, useRef } from "react";
import { Home } from "./components/home/Home";
import { Navbar } from "./layout/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/themeConfig";
import { Technologies } from "./components/technologies/Technologies";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Toaster } from "sonner";
import { ButtonScrollTop } from "./components/common/ButtonScrollTop";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const starCount = window.innerWidth < 600 ? 200 : 600;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      velocity: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      if (!ctx) return;

      // FONDO NEGRO
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.velocity;
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Toaster richColors position="bottom-right" className="z-[9999]" />

      <div className="relative w-full min-h-screen overflow-hidden pb-30">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        <Navbar />
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
