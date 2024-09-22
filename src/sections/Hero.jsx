import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Hackerroom from '../components/Hackerroom';
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index';
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' && '(max-width: 1024px)' });
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });

    const sizes = calculateSizes(isMobile, isTablet, isSmall);

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, my name is Moises <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Building Products & Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <Hackerroom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero