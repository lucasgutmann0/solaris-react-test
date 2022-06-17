import React from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Maps() {
  // condicion de SI carga que pasaria
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA0f84J89Gurx0f_C9Tk91HuyKAa-6MRno"
  });

  //   si NO ha cargado, mostrar un esqueleto
  if (!isLoaded) {
    return <Skeleton count={10} />;
  }

  //ubicacion del centro del mapa
  const center = {
    lat: 3.4650554351146727,
    lng: -76.51412057057432,
  };

  // cuando cargue entonces:
  return (
    <div className="h-full">
      {/* Google Maps Box */}
      {/* centro del mapa */}
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Direcciones */}
      </GoogleMap>
    </div>
  );
}
