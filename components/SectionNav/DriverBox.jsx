import React from 'react';
import Image from 'next/image';
import { Badge } from 'react-bootstrap';

const DriverBox = ({
  el: {
    id,
    city,
    map_url,
    origin_station_code,
    state,
    destination_station_code,
    station_path,
    date,
    distance,
  },
}) => {
  const dt = new Date(date);
  const formattedDate = (() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    // Mar/15/2022 13:26
    // Date : 15th Feb 2022 16:33
    return `${dt.getDate().toString().padStart(2, '0')} ${months[
      dt.getMonth() + 1
    ]
      .toString()
      .padStart(2, '0')} ${dt.getFullYear().toString().padStart(4, '0')} ${dt
      .getHours()
      .toString()
      .padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
  })();
  return (
    <div className="driver-item">
      <div className="driver-map">
        <Image src={map_url} alt="map" width="296" height="148" />
      </div>
      <div className="driver-data">
        <p>
          Rider Id: <span>{id}</span>
        </p>
        <p>
          Origin Station: <span>{origin_station_code}</span>
        </p>
        <p>
          Station Path: <span>{JSON.stringify(station_path)}</span>
        </p>
        <p>
          Date: <span>{formattedDate}</span>
        </p>
        <p>
          Distance: <span>{distance}</span>
        </p>
      </div>
      <div className="driver-actions">
        <Badge className="me-1">{city}</Badge>
        <Badge>{state}</Badge>
      </div>
    </div>
  );
};

export default DriverBox;
