import { useEffect } from "react";

const ErudaLoader = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    if (window.__ERUDA_LOADED__) return;
    window.__ERUDA_LOADED__ = true;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/eruda";
    script.onload = () => {
      window.eruda.init();
    };
    document.body.appendChild(script);
  }, []);


  return null;
};

export default ErudaLoader;
