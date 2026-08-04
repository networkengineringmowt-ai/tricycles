# CHAPTER FOUR
# DATA PRESENTATION, ANALYSIS, AND RESULTS

## 4.1 Introduction
This chapter breaks down the empirical data we collected over the 20 days at Kampala's major intersections. We processed all the raw counts and video footage using Python to extract dynamic Passenger Car Unit (PCU) values for tricycles, looking specifically at how they behave under different weather and traffic conditions. 

## 4.2 Overall Traffic Composition
Before we could calculate any PCU values, we first needed to understand the baseline traffic mix at our study sites. Our manual counts quickly confirmed just how much informal transit dominates the roads. 

![Uganda Traffic Composition](../../visualizations/uganda_traffic_viz.png)
*Figure 4.1: Traffic modal share across the five study intersections.*

As you can see in Figure 4.1, passenger cars still make up the largest raw count. However, boda-bodas and tricycles combined take up a massive proportion of the traffic stream. Tricycles specifically held a steady 8–11% modal share across the sites. This proves that they are no longer just a fringe option; they are a core, permanent piece of Kampala's transport system.

## 4.3 Static PCU Estimation Results
Using both the Modified Headway Ratio and the Multiple Linear Regression (MLR) methods, we calculated baseline static PCU values for the tricycles. 

**Table 4.1: Baseline Static PCU Values by Intersection**

| Intersection | Tricycle PCU (Headway Method) | Tricycle PCU (MLR Method) | Boda-boda PCU |
| :--- | :--- | :--- | :--- |
| Wandegeya | 0.82 | 0.85 | 0.45 |
| Kibuye Roundabout | 0.91 | 0.94 | 0.52 |
| Bakuli | 0.84 | 0.87 | 0.48 |
| Bwaise | 0.96 | 1.02 | 0.55 |
| Natete (Cargo Heavy) | 0.94 | 0.98 | 0.50 |

*Analysis:* Looking at the data, it's clear that tricycles cause significantly more friction in the traffic stream than boda-bodas. At Bwaise and Kibuye, the MLR method (which looks at the turbulence of the entire traffic stream) gave us PCU values that were close to, or even above, 1.0. This is a huge finding. It means that in severe mixed traffic, a single tricycle disrupts the flow almost as much as a standard passenger car. This happens because they weave erratically but don't have the engine power to accelerate quickly out of bottlenecks.

## 4.4 Dynamic PCU Modeling: The Impact of Congestion
To address Objective 3, we analyzed how the tricycle PCU changes depending on how congested the road is (the Volume-to-Capacity, or V/C, ratio). 

![Tricycle PCU Infographic](../../visualizations/tricycle_pcu_infographic.png)
*Figure 4.2: Dynamic PCU fluctuations mapped against V/C sensitivity.*

During the mid-morning off-peak hours when traffic is flowing reasonably well ($V/C \approx 0.4$), the tricycle PCU hovers around 0.75. But when the evening rush hour hits around 6:30 PM and the road reaches total saturation ($V/C \geq 0.95$), the tricycle PCU spikes all the way to 1.15. 

### 4.4.1 The "Blocking Friction" Phenomenon
When we reviewed the video footage, the reason for this spike became obvious. In a complete gridlock, boda-bodas can filter through stationary cars by lane-splitting, which keeps their PCU relatively low. Tricycles, however, are about 1.5 meters wide, so they can't filter. Instead, the drivers try to weave, but they usually just get stuck diagonally between lanes. They act like a physical blockade. This "blocking friction" causes the intersection's capacity to completely collapse, proving that using static PCU values severely underestimates how much damage tricycles do to traffic flow during peak hours.

## 4.5 Environmental Impacts: Wet vs. Dry Pavement
We also managed to log a lot of data during heavy tropical downpours, especially at the flood-prone Bwaise Junction. The change in driving behavior was immediate and drastic.

- **Dry Pavement Average PCU:** 0.85
- **Wet Pavement Average PCU:** 1.05

When the potholes filled with water, tricycle operators had to swerve wildly to avoid them, mostly because tuk-tuks don't have the suspension of an SUV. This unpredictable swerving forced the passenger cars behind them to leave much larger gaps, which artificially inflated the tricycle's PCU.

## 4.6 VISSIM Microsimulation Validation
Finally, we fed our new dynamic values into a PTV VISSIM simulation model of the Wandegeya Junction. 

![Tricycle Weaving Kampala](../../visualizations/tricycle_weaving_kampala.png)
*Figure 4.3: VISSIM visual output demonstrating tricycle lane indiscipline.*

When we replaced the software's default static PCU (which was around 0.5) with our empirical dynamic PCU curve (0.85 - 1.15), the simulation perfectly replicated the massive 150-meter queues we saw in real life. Even better, when we used the simulation to theoretically optimize the traffic light signals based on these *new* accurate PCUs, the saturation flow improved by 14.2%. This validates just how critical it is to use localized PCU parameters.
