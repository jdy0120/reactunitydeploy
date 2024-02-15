import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/20240215.loader.js",
    dataUrl: "Build/20240215.data.unityweb",
    frameworkUrl: "Build/20240215.framework.js.unityweb",
    codeUrl: "Build/20240215.wasm.unityweb",
  });

  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "black",
          zIndex: 100,
          opacity: 0.5,
        }}
      >
        Test Unity WebGL
      </h1>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </>
  );
}

export default App;
