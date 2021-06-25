## Project Overview
The RedWater mission is to extract water from subterranean glaciers found on Mars. Honeybee robotics has contracted the PSTDL to conduct small scale tests in order to collect data on the power consumed by a high-density cartridge heater to melt through cryogenic clear ice at Martian atmospheric pressure.

## Images
![Redwater Image 1](/projects/redwater/RW2.JPG)
![Redwater Image 2](/projects/redwater/RW3.JPG)
![Redwater Image 3](/projects/redwater/RW4.JPG)
![Redwater Image 4](/projects/redwater/RW5.JPG)
![Redwater Image 5](/projects/redwater/RW6.JPG)
![Redwater CAD 1](/projects/redwater/RW7.PNG)

## CONOPS
### Phase 1: Create Clear Ice Blocks
Fill the modified insulated cooler with clean tap water. Ensure the water pump is secured and sets just below the surface of the water. Put the cooler in the large chest freezer and plug in the water pump. Pull the clear ice block out after a period of 24-32 hours.

### Phase 2: Ice Block Preparation
After making a clear ice block, drill holes in the ice block for thermocouple wires. After using the established template for drilling these holes, place the ice block back in the chest freezer until ready for conducting a test.

### Phase 3: Liquid Nitrogen Cooldown
When beginning the process of conducting a test, the first step is to turn on the
Liquid nitrogen supply. Once the inlet, outlet, and steel shroud temperatures reach 0℃ the clear ice block can be inserted.

### Phase 4: Insert and Secure Ice Block
When inserting the ice block, be sure to align the holes in the block with those on the steel shroud. After the ice block is secured, insert the thermocouple wires in the ice block and hook them up to their respective thermocouple feedthrough port.

### Phase 5: Pump Down to Desired Vacuum Level
Now the test setup is secured and ready for the test. Close the vacuum chamber and pump down to the desired vacuum level of ~7  Torr. Once the vacuum level has been reached, data acquisition can begin.

### Phase 6: Begin DAQ, Actuate Heater Probe
Upload the arduino code and begin data collection. The heater probe will actuate into the ice block and once the probe has displaced 3 inches into the ice block the test is complete and ready to be reset.

## Technical Details
* Operating Pressure: 7 Torr
* Target Ice Block Temperatures: -60 ℃ to -80 ℃