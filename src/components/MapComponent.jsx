// components/MapComponent.js
import { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const marker = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const position = new AMap.LngLat(113.879517, 22.562339);

      map.current = new AMap.Map(mapContainer.current, {
        zoom: 16,
        center: position,
        resizeEnable: true,
      });

      const markerContent = `
      <div class="custom-content-marker" style="position: relative;">
        <svg t="1720582834937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4326" width="48" height="48"><path d="M512 68.191078c-171.531702 0-310.666552 139.133827-310.666552 310.666552 0 232.999658 310.666552 576.951291 310.666552 576.951291s310.666552-343.951633 310.666552-576.951291C822.665529 207.324906 683.531702 68.191078 512 68.191078zM512 489.809605c-61.245899 0-110.951975-49.706075-110.951975-110.951975S450.754101 267.904633 512 267.904633 622.951975 317.611731 622.951975 378.857631 573.245899 489.809605 512 489.809605z" p-id="4327" fill="#d81e06"></path></svg>
        <div class="marker-text" style="position: absolute;top: -68px;left: -73px;width: 190px;height: 82px;background: #fff;display: flex;flex-direction: column;align-items: center;justify-content: center;box-shadow: 0px 6px 16px 0px rgba(76, 78, 100, 0.22);border-radius: 4px;">
        <p style="font-size: 12px;color:#484848">深圳市乐数科技有限责任公司</p>
        <p style="font-size: 12px;margin-top:10px;color:#484848">华美居商务中心南区-B区</p>
        </div>

        <div style="position: absolute;top: 2px;left: 8px;">
        <svg t="1720583686789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5345" width="32" height="32"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" fill="#ffffff" p-id="5346"></path></svg>
        </div>

      </div>
    `;

      marker.current = new AMap.Marker({
        position: position,
        content: markerContent,
        offset: new AMap.Pixel(-13, -30),
      });

      map.current.add(marker.current);
    };

    const clearMarker = () => {
      if (map.current && marker.current) {
        map.current.remove(marker.current);
      }
    };

    if (!window.AMap) {
      const script = document.createElement("script");
      script.src =
        "https://webapi.amap.com/maps?v=2.0&key=12246b1116cbc96728fe81821cf591ba";
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }

    // Clean up on unmount
    return () => {
      clearMarker();
      if (map.current) {
        map.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id="container"
      ref={mapContainer}
      style={{ width: "100%", height: "412px" }}
    ></div>
  );
};

export default MapComponent;
