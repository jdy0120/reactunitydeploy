import { useEffect } from "react";
import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "Build/test_build.loader.js",
    dataUrl: "Build/test_build.data.gz",
    frameworkUrl: "Build/test_build.framework.js.gz",
    codeUrl: "Build/test_build.wasm.gz",
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
