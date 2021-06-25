## Project Overview
The Tethered permanently-shadowed Region EXplorer is an infrastructure technology demonstration mission whose goal is to provide reliable power and data to other operations within PSRs of the Moon, where conventional line-of-sight radiofrequency communications and solar power generation is limited.

## Images
![T-REX Image 1](/projects/t-rex/T1.JPG)
![T-REX Image 2](/projects/t-rex/icon.JPG)
![T-REX Image 3](/projects/t-rex/T3.JPG)
![T-REX Image 4](/projects/t-rex/T4.JPG)
![T-REX Image 5](/projects/t-rex/T5.JPG)

## CONOPS
Upon a successful landing via a commercial lunar payload services (CLPS) lander, T-REX will initiate a health check of all subsystems prior to entering its deployment phase of the mission. T-REX will egress from the CLPS lander via ramp or other means, once all systems report nominal operation. During egress, T-REX will initiate an onboard secondary spooling system and begin deploying a round conventionally conducting tether (CCT). Movement control, telemetry, and vision with T-REX are done via commands issued through the Deep Space Network (DSN) and relayed by the selected CLPS lander. 

T-REX will traverse to the rim of a PSR inside a crater while deploying the CCT. In this mission scenario originally provided by the BIG Idea Challenge competition, the CLPS lander will land a nominal 125m distance from the rim of a crater. The CCT is passively deployed using the initial tension between T-REX and the lander, then later the tension between T-REX and the already deployed CCT. T-REX was designed to deploy up to 250m of CCT to account for a non-direct path towards the PSR.

Temperatures in the illuminated south pole of the Moon are nominally 200K but can be as high as 350K. The CCT is used for deployment in the illuminated regions because the T-REX’s superconducting tether (SCT) cannot operate in a superconducting state at temperatures above 93K. All other components of T-REX are designed to operate in both illuminated and shaded regions. 

T-REX will descend the crater rim and enter the PSR. Upon reaching a sufficiently shaded region, T-REX will halt movement and wait for the SCT to be cooled by the ambient cryogenic temperatures in the PSR. Temperatures in these regions can reach as low as 38K but the spool only needs to cool below 92K. The SCT uses a flat four-conducting-path tape-like tether with a cross-sectional area of 0.2mm x 4mm. Two kilometers of SCT are stored in the rover in this mission configuration. The current SCT deployed by T-REX is capable of conducting 75 amperes of power while maintaining nominal transmissions. If needed, the SCT and CCT can be customized for mission-specific applications to provide higher current.

Once mission operators have determined that the SCT has reached superconducting temperatures, the CCT spool will be ejected from T-REX onto the surface of the lunar PSR. The spool maintains a tethered electrical connection between T-REX and the CLPS lander while acting as a thermal break between the CCT and the SCT. This interface shortens the distance at which T-REX can start deploying the SCT by radiating heat carried by the CCT from the illuminated region. 

The SCT is connected to the detached secondary spool via a slip ring at one end of the spool. Unspooling is actively controlled to minimize tension. While the SCT is strong enough to suspend the T-REX in Earth gravity, tension is minimized at all times to reduce the chance of damaging the tether. SCT deployment continues for up to 2 km or until the bottom of the PSR is reached. Longer cables are possible, as needed, depending on the lander location and size of the PSR. A 2km spool of SCT has a mass of 5kg and can transfer kilowatts of power.

Upon successful traversal to the selected location within the PSR, T-REX will park and enter the service phase of its mission. T-REX will then relay power and communication for other missions within the PSR. A HOTDOCK detachable, coupling interface is activated on T-REX. This connector then provides up to 1kW of power to any rover mates coupling mechanisms with T-REX. Once a client mission utilizing T-REX has received an adequate charge, the client mission can detach and continue its mission. 

Communications within the PSR between T-REX and client missions are performed using a full-duplex RF communication system. Commands can be sent from Earth via the DSN,  through the tether, into T-REX, and are broadcast into the PSR to client missions. Video feed and telemetry provided by T-REX follow the opposite route back to Earth. Two-way communication is done using the Very-high-speed Digital Subscriber Line (VDSL) protocol. While the bit rate is lower compared to optical fiber, speeds offered by VDSL are an order of magnitude faster than current high-TRL wired communication protocols like RS-485, at long range . Data rates provided by the DSN are the current bottleneck of the mission at 10Mbit/s.VDSL retains signal integrity up to 5km and can use the existing SCT substrate to transfer power. The VDSL protocol is an ideal balance between simplicity, technology readiness level (TRL), durability, and bandwidth. 

The T-REX mission is baselined to last 12-14 Earth days, as outlined by the BIG Idea Challenge guidelines. This period is from the duration a CLPS lander is continuously illuminated by the Sun at the lunar poles. The lander will no longer be able to provide power to T-REX when eclipsed and is not designed to operate during the lunar night. T-REX will have completed all mission objectives by the time the CLPS lander is no longer illuminated.

## Technical Details
* 250 m conventional conducting tether
* 2 km superconducting tether
* COM and power over tether
* Mission duration is a 12-14 days
* Can conduct 75 amperes of power.
* SCT weighs ~5kg