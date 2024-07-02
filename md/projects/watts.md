## Project Overview
Wired Watts Wherever and Whenever you Want (W<sup>5</sup>) is a lunar power infrastructure deployment mission capable of delivering power at up to 93% efficiency from a 10kW source using superconding tethers. W5 is a successor to the [T-REX mission](/projects/t-rex). The W5 technology will be raised to TRL-6 by mid 2023 for Phase B of the Watts on the Moon Challenge.

## CONOPS
### Phase 1:
The concept of operations for W5 is as follows: After touchdown, the W5 Rover performs a systems checkout and egresses from the lander via a ramp or similar method. During egress, the rover deploys a conventional conducting tether (CCT) composed of flat aluminum from its secondary spool. W5 is remotely operated for the duration of its mission and line of sight comms to the powerplant is assumed.

### Phase 2:
Next, the rover will traverse from the powerplant towards the shaded refinery in the  PSR. The tether voltage is boosted from the powerplant via boost converter(s) to minimize DC line losses. 500m of conventional tether is baselined in the technical approach document but this value can vary between 1km or 0km of CCT depending on ratio of shaded to illuminated region the rover must traverse.

### Phase 3:
Upon reaching the PSR of a crater, the rover will stop movement until the primary superconducting tether (SCT) spool stored on top of the rover has cooled below the operating temperature of 92K. Cooling is done passively by utilizing the harsh cold of the PSR. This operation should take 6 hours (based on a PSR which is 70K). 

### Phase 4:
Once this temperature is reached, it will eject the secondary spool and start a powered, low-tension unspooling from the primary spool attached in series. This primary spool holds a variable length SCT which can conduct up to 90 amperes of power. The SCT is unspooled using an active system.

### Phase 5:
After traversing downward slopes up to 45 deg, the rover approaches the water refinery. It dockss with the refinery using a coupling interface which allows for power and heat transfer. The tether voltage is then downconverted to provide power to the refinery on request. Heating of the rover hardware and refinery is done using heat dissipated from the power converters and internal heating elements. The rover remains attached for the rest of the mission.

## Reports and Presentations
* [Pitch Video Link](https://www.youtube.com/watch?v=N0o_wM0lnQ0&ab_channel=PaulvanSusante)
* [NASA News Link](https://www.nasa.gov/directorates/spacetech/centennial_challenges/500k-awarded-in-first-phase-of-5m-watts-on-the-moon-challenge.html)
* [1]	M. C. Guadagno and P. J. van Susante, “Providing Wired Power and Data in Lunar Permanently Shadowed Regions with a Rover-Deployed Superconducting Tether,” pp. 660–672, Apr. 2021, doi: [10.1061/9780784483374.062](https://ascelibrary.org/doi/10.1061/9780784483374.062)