import React from 'react'

import GaugeChart from 'react-gauge-chart';

const MeterChart = () => {
  return (
    <div>
    <GaugeChart
      id="gauge-chart3"
      nrOfLevels={2}
      arcsLength={[1, 0.25]}
      colors={["#3F435B", "#F2CD91"]}
      arcWidth={0.3}
      needleColor={"#3F435B"}
      needleBaseColor={"#F2CD91"}
      percent={0.80}
      textColor={'black'}
      // hideText={true} // If you want to hide the text
    />
  </div>
  )
}

export default MeterChart