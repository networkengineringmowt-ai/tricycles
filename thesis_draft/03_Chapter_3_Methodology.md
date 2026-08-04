# CHAPTER THREE
# METHODOLOGY

## 3.1 Introduction
This chapter outlines the research methods we used to figure out the actual Passenger Car Unit (PCU) values for tricycles in Kampala City. Because Kampala’s traffic is so chaotic and mixed, we couldn't just use traditional automated counting machines like pneumatic road tubes. When vehicles don't stay in their lanes, those tubes get run over diagonally or miss smaller vehicles entirely, leading to terrible data. Instead, we decided to use a more labor-intensive but accurate approach: combining high-definition video recording from above with a lot of manual counting by trained enumerators, and then validating that data using traffic simulation software.

## 3.2 Study Area and Site Selection
The study was strictly confined to Kampala City, focusing on five specific intersections that are known for having high volumes of tricycles and terrible daily traffic jams.

![Kampala Study Sites Map](../../visualizations/kampala_study_sites_map_static.png)
*Figure 3.1: Map detailing the five high-density study locations across Kampala.*

We chose these five locations for very specific reasons:
1. **Wandegeya Junction:** This is a major hotspot near Makerere University. The conflict between pedestrians, boda-bodas, and tricycles here is intense.
2. **Kibuye Roundabout:** This is a notoriously complex multi-leg roundabout where high-speed traffic coming from Entebbe Road crashes into dense, slow-moving informal transit.
3. **Bakuli Intersection:** This acts as a vital artery linking the city center to the western suburbs. It's well known for the aggressive way matatus and tricycles park and stage right on the roadside.
4. **Bwaise Junction:** We specifically chose this northern gateway because it frequently floods. We wanted to see how extreme environmental factors—like dodging flooded potholes—change the tricycle PCU.
5. **Natete Junction:** This is a huge commercial hub where cargo tricycles are especially common, allowing us to compare passenger and cargo variations.

## 3.3 Research Design and Sampling Strategy

### 3.3.1 Temporal Scope
To make sure we captured the massive day-to-day changes in Kampala traffic, we collected data continuously over a 20-day period. This timeframe was long enough to cover both rainy and dry days. We focused our observations on the two busiest times of the day:
- **Morning Peak:** 07:00 AM – 11:00 AM
- **Evening Peak:** 04:00 PM – 10:00 PM (This allowed us to capture the severe traffic collapse that almost always happens around 6:30 PM).

### 3.3.2 Field Operation and Manpower
To pull this off, we relied heavily on a team of 16 trained manual enumerators. 
- At a standard 4-leg intersection (like Wandegeya), we deployed 4 enumerators per leg. 
- **Roles:** We split the tasks to avoid confusion. One enumerator was strictly responsible for logging the highly agile vehicles (motorcycles and tricycles), while another logged the heavier vehicles and passenger cars. 
- Meanwhile, other team members managed the elevated high-definition (1080p, 60fps) cameras. We made sure to mount these cameras at least 5.5 meters high so our view wouldn't be blocked by passing trucks.

## 3.4 Data Processing and PCU Estimation Techniques
Once we had the raw video and the manual tally sheets, we digitized everything. We processed the numbers using three different mathematical techniques to make sure our findings were solid.

### 3.4.1 Modified Headway Ratio Method
Our data extractors watched the 60fps footage frame-by-frame to find "clean headway pairs" during times when the traffic was actually flowing. A "clean pair" happens when a tricycle directly follows a passenger car (or vice versa) without swerving out of the lane.
We calculated the PCU of a tricycle ($PCU_t$) using the standard formula:
$$ PCU_t = \frac{H_t}{H_c} $$
Where $H_t$ is the average time headway of the tricycle, and $H_c$ is the average time headway of the passenger car. 

### 3.4.2 Multiple Linear Regression (MLR)
Because headways don't tell the whole story in mixed traffic, we also used MLR to look at the stream friction. We took the macroscopic lane flow counts and modeled the total time it took the stream to clear the intersection against the counts of each vehicle class. The regression coefficients gave us the relative static PCUs.

### 3.4.3 Dynamic PCU Modeling
To answer Objective 3, we stopped treating PCU as just a static number. We modeled it as a dynamic variable that changes based on the Volume-to-Capacity (V/C) ratio. We wrote Python scripts to calculate exactly how the tricycle PCU inflates as the intersection gets closer to total saturation ($V/C \geq 0.95$).

## 3.5 VISSIM Microsimulation Validation
Finally, to prove our empirical findings were correct, we coded the new dynamic PCUs into PTV VISSIM software. By default, VISSIM uses German driving behaviors (the Wiedemann 74/99 models), which obviously don't apply to Kampala. We had to manually calibrate parameters like "Standstill Distance" and "Lateral Clearance" to mimic how closely Kampala tuk-tuks follow each other and how aggressively they weave. We then ran the simulation and compared the resulting queue lengths and delays against our actual video logs to confirm the new PCU values were accurate.
