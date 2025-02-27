import SceneWrap from "./components/SceneWrap";



export default function Home() {
  return (
    <div className="h-[800vh]" >
      <div className="sceneWrap fixed z-[-10] top-0 h-screen w-full bg-[radial-gradient(circle,_rgba(153,153,153,1)_0%,_rgba(0,0,0,1)_100%)]">
        <SceneWrap/>
      </div>
      <main className="">
        <div className="page h-screen bg-amber-400 opacity-10">

        </div>
        <div className="page h-screen bg-red-400 opacity-10">

        </div>
        <div className="page h-screen bg-purple-400 opacity-10">

        </div>

      </main>
    </div>
  );
}
