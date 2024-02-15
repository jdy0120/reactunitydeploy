import { useEffect } from "react";
import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "Build/20240215_ProjectM.loader.js",
    dataUrl: "Build/20240215_ProjectM.data.unityweb",
    frameworkUrl: "Build/20240215_ProjectM.framework.js.unityweb",
    codeUrl: "Build/20240215_ProjectM.wasm.unityweb",
  });

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);

  return (
    <>
      {isLoaded === false && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
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
