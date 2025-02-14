"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useGetState } from "ahooks";
import * as THREE from "three";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.min.css";
// import { useInView } from "react-intersection-observer";
export default function Section4() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [mySwiper, setMySwiper] = useState(null);
  const [width, setWidth] = useState(0);

  const handNowInnerWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (mySwiper !== null) mySwiper.slideTo(swiperIndex, 300, false);

    window.addEventListener("resize", handNowInnerWidth);

    return () => {
      window.removeEventListener("resize", handNowInnerWidth);
    };
  }, [swiperIndex, width]);

  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Optional: will trigger only once
  //   threshold: 0.1, // You can adjust this value to trigger earlier or later based on visibility
  // });

  return (
    <div className="banner4 w-full Hsm:w-[90%] Hmd:w-[98%] Hsm:h-[668px] Hmd:xxls:h-[576px] Mff:h-[970px] bg-[#D8E0F2] rounded-[24px] mb-6 relative overflow-hidden box-border mt-6 m-auto">
      <div className={`relative top-[40%] lg:Hsm:top-[30%] Hmd:Mffs:top-[10%]`}>
        <ThreeAnimation />
      </div>
      <div className="relative overflow-hidden pt-12">
        <div className="flex justify-center Hmd:pt-6">
          <h2 className="w-auto relative -left-[38.5rem] Hsm:left-0 Hmd:Hxl:-left-[26rem] Hxls:xxls:-left-[34.5rem] Hsm:text-[calc(1.425rem+2.1vw)] Hmd:text-[28px] xxl:text-[48px] font-[600]">
            发展历程
          </h2>
        </div>
        <div className=" flex flex-col items-center relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={"auto"}
            centeredSlides={true}
            navigation={{
              prevEl: ".banner_prev",
              nextEl: ".banner_next",
              disabledClass: "diasabled",
            }}
            onSlideChange={(c) => setSwiperIndex(c.realIndex)}
            className={`swiper1 w-full mt-[100px] pb-20 select-none Hsm:mt-8 Hmd:mt-6 Mff:mt-[6.5rem] ${
              width >= 1440 ? "befoer1" : "befoer2"
            }`}
          >
            {contents.map((content, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="max-w-[318px] pb-[5rem] box-border cursor-grab"
                >
                  <div className="text-center">
                    <h2 className="Mffs:text-[40px] textYear text-[4rem]">
                      {content.year}
                    </h2>
                    <p className=" text-[1.25rem] mt-6">{content.month}月</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="Hsm:w-full Hmd:w-[60%] h-[300px] max-w-[690px] absolute bottom-0 z-50"></div>
          <Swiper
            modules={[EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            // direction='vertical'
            allowTouchMove={false}
            centeredSlides={true}
            effect="fade"
            onSwiper={(c) => setMySwiper(c)}
            className="swiper2 Hsm:w-full h-[970px] max-w-[690px] text-center mt-[6rem] Mff:mt-[8rem] max-h-[213px] !px-6 ![overflow:unset]"
          >
            {contents.map((content, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="h-auto !flex justify-center"
                >
                  <ul className="textContent text-[#0633FF] text-[20px] text-left max-h-[240px] flex flex-col items-start list-disc pl-8">
                    {content.detail.map((arr, index) => {
                      return (
                        <li
                          key={index}
                          className=" w-auto font-[700] mb-1 p-0 cursor-text"
                        >
                          {arr}
                        </li>
                      );
                    })}
                  </ul>
                </SwiperSlide>
              );
            })}

            <div className="banner_prev absolute w-[52px] h-[52px] -top-[5%] Hsm:-top-[102%] Hmd:xxls:-left-[15%] xxl:-left-[45%] Hsm:left-[8%] cursor-pointer">
              <div className="w-[52px] h-[52px] !bg-white rounded-[50%] flex justify-center items-center">
                <div className="w-[15px] h-[15px] relative left-[5%] bg-[#282828] [clip-path:polygon(0%_0%,15%_0%,15%_85%,100%_85%,100%_100%,0%_100%)] rotate-[45deg]"></div>
              </div>
            </div>
            <div className="banner_next absolute w-[52px] h-[52px] -top-[5%] Hsm:-top-[102%] Hmd:xxls:-right-[15%] xxl:-right-[45%] Hsm:right-[13%] cursor-pointer">
              <div className="w-[52px] h-[52px] !bg-white rounded-[50%] flex justify-center items-center">
                <div className="w-[15px] h-[15px] relative -left-[5%] bg-[#282828] [clip-path:polygon(0%_0%,15%_0%,15%_85%,100%_85%,100%_100%,0%_100%)] -rotate-[135deg] before3"></div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const contents = [
  { year: 2024, month: 12, detail: ["荣获“高新技术企业”"] },
  { year: 2024, month: 9, detail: ["入库科技型中小企业"] },
  {
    year: 2024,
    month: 4,
    detail: ["荣膺“国家鼓励的软件企业“殊荣,实力备受认可"],
  },
  {
    year: 2024,
    month: 3,
    detail: ["正式加入深圳市软件行业协会,行业地位稳步提升"],
  },
  { year: 2023, month: 12, detail: ["乐数科技迁址新居,展现蓬勃发展新气象"] },
  { year: 2023, month: 12, detail: ["喜获专利授权,创新能力获肯定"] },
  {
    year: 2022,
    month: 7,
    detail: ["上线多款软件(包括数据恢复类、取证类、AI工具类)产品"],
  },
  {
    year: 2021,
    month: 12,
    detail: ["乐数科技有限责任公司正式落地,开启创新征程"],
  },
];

const ThreeAnimation = () => {
  const threeRef = useRef(null);
  const [, setCamera, getCamera] = useGetState(null);
  const [, setRenderer, getRenderer] = useGetState(null);
  const [, setScene, getScene] = useGetState(null);
  const [, setParticles, getParticles] = useGetState(null);
  const [, setCount, getCount] = useGetState(0);

  const SEPARATION = 100,
    AMOUNT_X = 200,
    AMOUNT_Y = 200;

  const init = () => {
    const newCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );

    newCamera.position.z = 1000;
    const newScene = new THREE.Scene();
    setScene(newScene);

    const numParticles = AMOUNT_X * AMOUNT_Y;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0,
      j = 0;

    for (let ix = 0; ix < AMOUNT_X; ix++) {
      for (let iy = 0; iy < AMOUNT_Y; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNT_X * SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - (AMOUNT_Y * SEPARATION) / 1; // z
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: { color: { value: new THREE.Color("#D8E0F2") } },
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = scale * ( 300.0 / - mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
          gl_FragColor = vec4( color, 1.0 );
        }
      `,
    });

    const newParticles = new THREE.Points(geometry, material);
    newScene.add(newParticles);
    setParticles(newParticles);

    const newRenderer = new THREE.WebGLRenderer({ antialias: true });
    newRenderer.setPixelRatio(window.devicePixelRatio);
    newRenderer.setSize(window.innerWidth, window.innerHeight);
    newRenderer.setClearColor("#D8E0F2", 1.0);
    threeRef.current.appendChild(newRenderer.domElement);
    setRenderer(newRenderer);

    window.addEventListener("resize", onWindowResize);
    setCamera(newCamera);

    animate(); // Start the animation loop
  };

  const onWindowResize = () => {
    const newCamera = getCamera();
    const newRenderer = getRenderer();

    if (!newCamera || !newRenderer) return;

    newCamera.aspect = window.innerWidth / window.innerHeight;
    newCamera.updateProjectionMatrix();
    newRenderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    render(); // Custom render logic
  }, []);

  const render = () => {
    const newCamera = getCamera();
    const newScene = getScene();
    const newParticles = getParticles();
    const newRenderer = getRenderer();
    const count = getCount();

    if (!newCamera || !newScene || !newParticles || !newRenderer) return;

    newCamera.position.x += (0 - newCamera.position.x) * 0.05;
    newCamera.position.y += (400 - newCamera.position.y) * 0.05;
    newCamera.lookAt(newScene.position);

    const positions = newParticles.geometry.attributes.position.array;
    const scales = newParticles.geometry.attributes.scale.array;

    let i = 0,
      j = 0;

    for (let ix = 0; ix < AMOUNT_X; ix++) {
      for (let iy = 0; iy < AMOUNT_Y; iy++) {
        positions[i + 1] =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
        scales[j] =
          (Math.sin((ix + count) * 0.3) + 1) * 20 +
          (Math.sin((iy + count) * 0.5) + 1) * 20;
        i += 3;
        j++;
      }
    }

    newParticles.geometry.attributes.position.needsUpdate = true;
    newParticles.geometry.attributes.scale.needsUpdate = true;

    newRenderer.render(newScene, newCamera);
    setCount(count + 0.1);
  };

  useEffect(() => {
    if (threeRef.current && !getCamera()) {
      init(); // Call initialization
    }
  }, [threeRef]);

  return (
    <div
      ref={threeRef}
      className="absolute -top-[100%] lg:w-full lg:left-0"
    ></div>
  );
};
