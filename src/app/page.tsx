"use client";
import dynamic from "next/dynamic";
import FadingText from "./components/ui/fading-text";
import FloatingText from "./components/ui/floating-text";
import { useState, useEffect } from "react";
import Loading from "./loading";
import IconGroup from "./components/ui/icon-group";
import { usePortal } from "@/hooks/usePortal";
import { ReactLenis } from "lenis/react";

const SceneWrap = dynamic(() => import("./components/SceneWrap"), {
  ssr: false,
});
const FluidElement = dynamic(() => import("./components/ui/fluid-element"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const iconPortal = usePortal(
    <div className="fixed z-[999] bottom-[25px] left-5 pointer-events-auto">
      <IconGroup />
    </div>
  );

  return (
    <>
      {isLoading ? (
        <main className="h-screen bg-zinc-400/20 w-full flex justify-center items-center">
          <Loading />
        </main>
      ) : (
        <>
          <ReactLenis root />
          <main className="h-[800vh] relative z-[-100] py-[25px] py-5">
            <h1 className="text-2xl sticky top-5 left-5 py-5 px-5 font-bold text-zinc-800">
              NISSAN
            </h1>
            {iconPortal}
            <div className="fixed z-[-25] top-0 h-screen w-full bg-zinc-400/20" />
            <div className="sceneWrap fixed -z-10 top-0 h-screen w-full pointer-events-none">
              <SceneWrap />
            </div>
            <div className="page h-screen">
              <FadingText transform={[800, 2000, 2800]} opacityVal={[0, 1, 0]}>
                <h1 className="text-7xl lg:text-[16rem] font-bold text-zinc-800">
                  NISSAN
                </h1>
              </FadingText>
            </div>
            <div className="page h-screen">
              <FluidElement />
              <div className="container m-auto flex flex-col justify-center items-center w-full">
                <FadingText
                  transform={[4000, 6000, 6800]}
                  opacityVal={[0, 1, 1]}
                  className="text-center w-full px-5 text-lg lg:text-2xl lg:w-1/2"
                >
                  <FloatingText
                    className="text-lg lg:text-2xl text-wrap"
                    letterClassName="text-wrap"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta cum modi deserunt inventore qui quam nihil eaque unde amet harum fugiat neque ut labore rem molestias, dolor excepturi. Sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. unt inventore qui quam nihil eaque unde amet harum fugiat neque ut labore rem molestias, dolor excepturi. Sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                  />
                </FadingText>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
