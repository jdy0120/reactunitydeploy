import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data.unityweb",
    frameworkUrl: "Build/Build.framework.js.unityweb",
    codeUrl: "Build/Build.wasm.unityweb",
  });

  return (
    <>
      <Unity unityProvider={unityProvider} />
    </>
  );
}

export default App;
