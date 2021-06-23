## Members Involved:
* Elijah Cobb
* Travis Wavrunek

## Description
The Infrared Gravity Offloading (IRGO) device is an active 3-axis crane inside the PSTDL lunar simulant sandbox that continuously positions itself over an object with a constant upward force simulating lunar gravity by tracking with an infrared LED.

## Images

## Technical Details
* X & Y axis are positioned by a control loop referencing the relative offset of the LED
* Z axis will provide continuous upward force to simulate lunar gravity
* Stepper motors for accuracy
* Controlled by IR tracking or manual control with keyboard/controller
* Only requirement is that the tether is attached to the center of gravity.
* Written entirely in C++
* Uses opencv for CV