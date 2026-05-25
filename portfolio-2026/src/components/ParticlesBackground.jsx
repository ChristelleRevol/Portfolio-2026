import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const breakpoint = 750

const ParticlesBackground = ({ maskLeft = "18%", maskWidth = "64%", noMask = false, disabled = false }) => {
	const [init, setInit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < breakpoint)

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	// this should be run only once per application lifetime
	useEffect(() => {
    if (disabled) return
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, [disabled, isSmallScreen]);

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "#ffffff",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#24408e",
				},
				links: {
					color: "#24408e",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 100,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

  if (disabled || isSmallScreen) return null

	if (!init) return null; // attend que le moteur soit prêt

	return (
		<>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1,
					pointerEvents: "none",
				}}
			>
				<Particles id="tsparticles" options={options} />
				{/* masque central */}
        {!noMask && (
          <div style={{
            position: "absolute",
            top: 0,
            left: maskLeft,
            width: maskWidth,
            height: "100%",
            background: "white",
          }} />
        )}
			</div>
		</>
	);
};

export default ParticlesBackground;
