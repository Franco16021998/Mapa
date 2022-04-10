import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

const MarkerWithBadge = props => {
  const initMarker = ref => {
    if (ref) {
      const popup = L.popup().setContent(props.children);
      ref.leafletElement
        .addTo(ref.contextValue.map)
        .bindPopup(popup, {
          className: "badge",
          closeOnClick: false,
          autoClose: false
        })
        .openPopup()
        // prevent badge from dissapearing onClick
        .off("click");
    }
  };
  return <Marker ref={initMarker} {...props} />;
};

export default MarkerWithBadge;