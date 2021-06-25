## Description
The Infrared Gravity Offloading (IRGO) device is an active 3-axis crane inside the PSTDL lunar simulant sandbox that continuously positions itself over an object with a constant upward force simulating lunar gravity by tracking with an infrared LED.

## Images
![IRGO Image 2](/facilities/irgo/gravity-offload.png)
![IRGO Image 1](/facilities/irgo/GA_Assembly3.png)
![IRGO Image 3](/facilities/irgo/mark-III-diagram.jpg)

## Technical Details
* X & Y axis are positioned by a control loop referencing the relative offset of the LED
* Z axis will provide continuous upward force to simulate lunar gravity
* Stepper motors for accuracy
* Controlled by IR tracking or manual control with keyboard/controller
* Only requirement is that the tether is attached to the center of gravity.
* Written entirely in C++
* Uses opencv for CV