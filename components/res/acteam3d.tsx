import Spline from "@splinetool/react-spline";

/**
 <div
       className="flex justify-center items-center"
       style={{ height: "50dvh", width: "99vw" }}
     >
       <Acteam3D />
     </div>
 */

const Acteam3D = () => (
  <Spline
    className="z-10"
    scene="https://prod.spline.design/uj3Rm42I9uyjugfM/scene.splinecode"
  />
);

export default Acteam3D;
