import React, { Fragment, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

import { formatNumberDecimal } from "./utils";
import ButtonContainer from './children/ButtonContainer';
import { STYLES_MAP, ZOOM } from "./constants";

const MapArgentina = ({ data }) => {
  const [zoom, setZoom] = useState(2);

  const handleZoomChange = zoom => setZoom(zoom);

  const handleZoomIn = () => handleZoomChange(zoom + ZOOM);

  const handleZoomOut = () => handleZoomChange(zoom - ZOOM);

  const handleResetZoom = () => setZoom(2);

  const { width, height, center, scale, currency, map } = data;
  return (
    <Fragment>
      <ButtonContainer
        handleResetZoom={handleResetZoom}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
      />
      <hr />
      <ComposableMap
        projectionConfig={{ scale }}
        width={width}
        height={height}
      >
        <ZoomableGroup zoom={zoom} center={center}>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map(geography => {
                const geographyValue = `${currency} ${formatNumberDecimal(
                  geography.properties.VALUE
                )}`;
                return (
                  <Geography
                    key={geography.properties.NAME}
                    data-tip={`${
                      geography.properties.NAME
                    } ${geographyValue}`}
                    geography={geography}
                    projection={projection}
                    precision={0.5}
                    style={{
                      default: STYLES_MAP.default,
                      hover: STYLES_MAP.hover,
                      pressed: STYLES_MAP.pressed
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip />
    </Fragment>
  );
};

MapArgentina.defaultProps = {
  width: 600,
  height: 500,
  center: 0,
  scale: 350,
  zoom: 0,
  currency: ""
};

MapArgentina.propTypes = {
  data: PropTypes.object
};

export default MapArgentina;
