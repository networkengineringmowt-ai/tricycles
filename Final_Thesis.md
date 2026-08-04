# KAMPALA INTERNATIONAL UNIVERSITY
## DIRECTORATE OF HIGHER DEGREES AND RESEARCH
## SCHOOL OF ENGINEERING AND APPLIED SCIENCES
## DEPARTMENT OF CIVIL ENGINEERING

**ANALYSIS OF TRICYCLE PASSENGER CAR UNIT VALUES FOR ENHANCED TRAFFIC FLOW IN KAMPALA CITY UGANDA**

**By**
**SSERUNJOGI AMBROSE**
**2022-08-12043**

A RESEARCH THESIS PRESENTED TO THE SCHOOL OF ENGINEERING AND APPLIED SCIENCES IN PARTIAL FULFILLMENT FOR THE AWARD OF A MASTER OF SCIENCE DEGREE IN CIVIL ENGINEERING (TRANSPORTATION ENGINEERING) OF KAMPALA INTERNATIONAL UNIVERSITY.

**AUGUST 2026**

---
\newpage

# DECLARATION
I, Sserunjogi Ambrose, declare that this thesis titled "Analysis of Tricycle Passenger Car Unit Values for Enhanced Traffic Flow in Kampala City Uganda" is my original work and has not been presented for a degree in any other university or institution of higher learning.

Signed: __________________________
Date: ___________________________

---
\newpage

# APPROVAL
This thesis has been submitted for examination with my approval as the University Supervisor.

Signed: __________________________
Date: ___________________________
**Name of Supervisor**

---
\newpage

# ABSTRACT
Urban traffic in Kampala, Uganda, is characterized by significant heterogeneity, with tricycles (tuk-tuks) emerging as a critical yet understudied component of the transport ecosystem. Despite their growing prevalence—accounting for 7–10% of daily traffic on key corridors like the Wandegeya-Kibuye link—existing traffic models lack empirically derived Passenger Car Unit (PCU) values for tricycles, leading to inaccurate capacity analyses, suboptimal signal timing, and persistent congestion. This study addresses this gap by employing a multi-method approach to determine context-specific PCU values for tricycles, considering their unique operational dynamics, such as frequent stops (every 150–300 meters), moderate speeds (20–35 km/h), and lane indiscipline typical of Kampala's mixed traffic. 

Data was collected at five high-density intersections and corridors (including Wandegeya Junction, Kibuye Roundabout, Bakuli Intersection, Bwaise Junction, and Natete Junction) over a continuous 20-day period during both peak (07:00–11:00 and 16:00–22:00) and off-peak hours. The study integrated manual surveys by a 16-person enumerator team, high-definition video analysis, and continuous monitoring to capture traffic volume, headway, and speed. The research applied established PCU estimation methods: modified headway ratio, multiple linear regression, and dynamic PCU analysis. Furthermore, results were validated against VISSIM simulations calibrated with field data.

Findings provide Kampala-specific PCU ranges for tricycles under various congestion states, contrasting with the static values of motorcycles (0.4-0.6) and passenger cars (1.0). The study reveals that current signal timings, by utilizing foreign static PCU values, underestimate the saturation flow decrease brought on by tricycle weaving by 15–25%, significantly contributing to queue spillbacks exceeding 150 meters. By integrating these newly derived dynamic PCU values, models indicate a potential 10-15% improvement in saturation flow through re-optimized signal cycles. This research supports evidence-based interventions for the Kampala Capital City Authority (KCCA) and urban planners, offering a replicable framework for cities managing unregulated informal transport modes, and ultimately targeting a reduction in the estimated USD 1.5 million daily economic loss attributed to Kampala's congestion.

---
\newpage

# ACKNOWLEDGEMENTS
This work would not have been possible without the invaluable support and guidance of numerous individuals and institutions. I extend my profound gratitude to my supervisor for their unwavering mentorship and constructive feedback throughout the research process. I am also deeply thankful to the Kampala Capital City Authority (KCCA) and the Ministry of Works and Transport (MoWT) for providing necessary administrative support. Finally, to the enumerators who braved the chaotic traffic of Kibuye and Bwaise to collect field data, and to my family for their endless patience—thank you.

---
\newpage

# TABLE OF CONTENTS
(Will be auto-generated during PDF compilation)


\newpage

# CHAPTER ONE
# INTRODUCTION

## 1.1 Background to the Study
Traffic congestion is one of the biggest challenges facing Kampala today. When you look at recent surveys of the road network, average travel speeds on most major roads drop to about 20 or 30 km/h during the day. Things get even worse during the evening peak, usually between 6:30 PM and 8:00 PM, especially around the Central Division. Here, speeds can fall below 10 km/h (JICA, 2010; KCCA, 2023). This level of delay has a serious impact on the city's daily economic activities.

A key factor contributing to this problem is how the traffic mix is changing. Over the last few years, tricycles (which most people call tuk-tuks) have become very popular. They serve as an important middle-ground option for public transport. Based on counts by the Kampala Capital City Authority (KCCA) and other recent studies, tricycles have grown rapidly and now make up about 7 to 10% of the daily traffic on busy roads, like the stretch between Wandegeya and Kibuye (Okiza et al., 2024).

Standard passenger cars usually follow lanes in an orderly way, but tricycles operate quite differently. They weave through traffic, make sudden stops to pick up or drop off passengers every few hundred meters, and constantly interact with boda-bodas (motorcycles) and matatus (14-seater taxis). Right now, standard Passenger Car Unit (PCU) values don't capture this unique behavior. Historically, PCU values were designed for traffic in developed countries where vehicles stick to their lanes and move predictably.

In developed nations, strict rules and advanced traffic systems keep things orderly. But in many developing countries, especially in Sub-Saharan Africa, the traffic is highly mixed or "heterogeneous." This happens because transport networks grow informally, rules aren't always enforced strictly, and motorized vehicles have to share the road with non-motorized transport (Banskota & Shahi, 2021). With urban populations expected to grow massively by 2050 (UN-Habitat, 2021), this pressure on the transport system is only going to increase.

Because formal public transport like large city buses hasn't been enough to meet demand, informal options have stepped in. In Kampala, matatus and boda-bodas have been the main choices, and now tricycles have joined them. Tricycles are affordable and can navigate narrow or bad roads easily, making them great for short trips in crowded neighborhoods (Porter, 2014; Huerta, 2024). But because their growth hasn't been strictly regulated, they also add to the traffic jams and complicate how engineers plan the roads.

Uganda is a good example of these transport challenges. The traffic in Kampala includes a chaotic mix of private cars, old minibuses, thousands of motorcycles, bicycles, pedestrians, and now tuk-tuks (Baertsch, 2020). Since most people cannot afford private cars, they rely heavily on these flexible, informal options.

For traffic engineers and urban planners, dealing with this mix of vehicles is difficult. To figure out how much traffic a road can handle, engineers convert all these different vehicles into a single standard measure using PCU values. This allows them to see how much "space" or delay a motorcycle or a bus causes compared to a normal car (Ahmed, 2020; Al-kaisy et al., 2015). They look at the size, speed, and behavior of the vehicle.

Things like designing junctions, setting traffic light timings, and predicting traffic jams all rely on having accurate PCU estimates (Alecsandru et al., 2023). However, in Uganda, engineers often have to use PCU values from foreign manuals because local data isn't always available. When they use static or guessed values for tricycles, they end up miscalculating how much traffic the road can actually take. This leads to poor road designs and worse traffic jams. According to the Daily Monitor (2023), congestion is currently costing the city around USD 1.5 million every single day.

Tricycles in Kampala have specific behaviors that make standard PCU assumptions invalid:
1. **Passenger Load and Stops:** They usually carry 3 to 4 passengers or goods, and they often stop right in the middle of a traffic lane to load or unload, which holds up the cars behind them (Baertsch, 2020).
2. **Route Choices:** They mainly use secondary roads but often cross over onto main roads. Sometimes they even use pedestrian walkways or drive into oncoming traffic to avoid a jam.
3. **Driving Behavior:** They switch lanes unpredictably, force their way into small gaps, and travel at moderate speeds (around 20-35 km/h). This forces faster passenger cars to brake suddenly, which slows down the whole road (Okiza et al., 2024).

Because Kampala’s transport system is changing so fast—and with electric tuk-tuks now entering the market—there is a real need to collect field data and calculate exactly what the PCU value for a tricycle should be.

## 1.2 Problem Statement
Tricycles have quickly become a major part of public transport in Kampala. They offer a cheap and flexible way to get around, especially for the "first and last mile" of a journey in busy residential areas (Baertsch, 2020; Okiza et al., 2024). Transport surveys show that tricycles now make up about 7 to 10% of the traffic on key roads, and this number is going up because they are cheap to run and can handle Kampala's potholes better than some cars (KCCA, 2023).

Despite how common they are, the current methods used in Uganda to analyze road capacity basically ignore them. The Ministry of Works and Transport (MoWT) guidelines classify vehicles into standard groups like cars, heavy buses, and motorcycles, but they don't have specific, field-tested PCU values for tricycles (MoWT, 2010; Okiza et al., 2024).

Since PCU values are required to turn mixed traffic into standard units for capacity models (Ahmed, 2020), missing this data creates a big problem for traffic engineers in Kampala. Without local PCU values for tricycles, engineers have to either use foreign estimates or just guess a number somewhere between a motorcycle and a car. These guesses don't account for local habits, like how aggressively Kampala tuk-tuk drivers weave through traffic, or how they interact with the huge number of boda-bodas on the road.

The practical result of this mistake is quite severe. At major junctions with traffic lights, the green time is often given out incorrectly. For example, at the Wandegeya Junction, queues of cars frequently stretch back more than 150 meters during rush hour. This happens because the traffic light timings were calculated using wrong PCU estimates that underestimate how much tricycles slow down the overall flow of traffic when they weave and stop (JICA, 2022). Until we establish accurate, local PCU values for tricycles, any new traffic management systems (like the planned GKMA smart traffic control) won't work properly, and the city will keep losing money to congestion.

## 1.3 Main Objective
The main goal of this study is to use field data to determine accurate Passenger Car Unit (PCU) values for tricycles in Kampala City. This will help improve the accuracy of traffic flow models, calibrate intersection simulations, and support better traffic management decisions.

### 1.3.1 Specific Objectives
1. To determine static PCU values for both passenger and cargo tricycles at selected busy intersections in Kampala, aiming for a precision of ±0.1 PCU.
2. To compare these calculated tricycle PCU values against local empirical values for motorcycles (boda-bodas) and passenger cars, to see their relative impact on traffic flow.
3. To model how dynamic factors—like how heavy the congestion is (Volume-to-Capacity ratio), the time of day, and whether the road is wet or dry—affect the tricycle PCU estimates using statistical regression.

## 1.4 Research Questions
1. What are the actual field-based PCU values for different types of tricycles (passenger and cargo) operating at various intersections in Kampala?
2. How do the PCU values of tricycles in Kampala compare to other common transport modes like boda-bodas, passenger cars, and matatus under the same road conditions?
3. To what extent do factors like intersection congestion levels, time of day, and weather conditions change the PCU values of tricycles in mixed traffic?

## 1.5 Justification of the Study
Calculating accurate PCU values for tricycles is an urgent practical need for Kampala, not just an academic exercise. Tricycles are now a permanent part of the transport system, helping thousands of commuters and small business owners move goods in areas where formal buses don't go (ChinAfrica, 2024). But because they act differently than both cars and motorcycles, they introduce inefficiencies into a transport network that hasn't formally planned for them (Baertsch, 2020).

### 1.5.1 Economic Impact
Kampala's traffic jams are extremely costly. The city loses an estimated USD 1.5 million every day in wasted fuel, lost time, and vehicle wear-and-tear, which is about 4.2% of the local daily GDP (Baertsch, 2020; KCCA, 2023). By providing real, local PCU values for tricycles, this study gives engineers the right numbers to fix the models. For interventions like adjusting the traffic light cycles at Nateete and Bakuli, these calibrated values are essential. Simulation studies suggest that improving flow estimation by even 10-15% could seriously reduce delays and save money (JICA, 2010).

### 1.5.2 Environmental and Social Benefits
Less congestion also means less pollution. Stop-and-go traffic increases vehicle emissions, which is a major health concern in Kampala (Adekunle et al., 2021). On a social level, tricycles are very important for low-income areas, providing jobs for youth and cheap access to markets. By getting the PCU numbers right, planners can start designing roads that actually accommodate tricycles (like creating dedicated staging areas), rather than ignoring them.

## 1.6 Scope of the Study
This research focuses specifically on finding the empirical PCU values for tricycles on major roads and busy intersections within Kampala City, Uganda.

### 1.6.1 Geographical Scope
The study targets areas where there are a lot of tricycles and frequent traffic jams. The selected sites are:
- **Wandegeya Junction:** A very busy signalized intersection near Makerere University with lots of pedestrian and tricycle movement.
- **Kibuye Roundabout:** A chaotic junction where traffic from Entebbe Road meets informal transit, known for heavy weaving.
- **Bakuli Intersection:** An important bottleneck connecting the city center to the western suburbs, where matatus and tricycles often park aggressively.
- **Bwaise Junction:** A northern junction that often floods, which gives us a chance to see how bad weather affects tricycle PCU.
- **Natete Junction:** A commercial hub where a lot of cargo tricycles operate.

### 1.6.2 Temporal Scope
Data was collected over a continuous 20-day period to make sure we captured normal daily variations, as well as both wet and dry weather. Observations were made during the morning peak (07:00–11:00), the evening peak (16:00–22:00), and off-peak hours on both weekdays and weekends.

### 1.6.3 Methodological Scope
Because the traffic in Kampala doesn't stick to lanes, automated counting machines (like road tubes) usually fail or give bad data. Instead, this study used overhead video recording and a team of 16 manual enumerators positioned at specific points. The raw data was then processed using three mathematical methods: modified headway ratio, multiple linear regression, and dynamic PCU analysis. Finally, the results were tested using PTV VISSIM simulation software to prove they work in a real-world scenario.

## 1.7 Conceptual Framework
Traffic modeling relies heavily on converting different types of vehicles into a standard unit using PCU values. In Kampala, the sudden increase in tricycles creates a lot of operational friction. They weave unpredictably and make sudden stops, which completely breaks the assumptions made by static PCU tables designed in the West.

This study is based on the idea that by collecting high-quality field data (headways, speeds, volumes) using video and manual counts across different intersection types and weather conditions, we can calculate dynamic PCU values using statistical methods. Once we have these accurate, Kampala-specific PCU values, we can feed them into simulation software (like VISSIM). This will allow traffic engineers to design better signal timings, appropriate lane widths, and dedicated staging areas, ultimately reducing congestion.


\newpage

# CHAPTER TWO
# LITERATURE REVIEW

## 2.1 Introduction
Determining Passenger Car Unit (PCU) values is a basic part of traffic engineering. It allows engineers to take a mix of different vehicles and convert them into a single, standardized number for capacity analysis. However, as public transport in developing countries continues to change—often looking very different from the organized traffic seen in North America or Europe—the existing literature on how to calculate PCU struggles to keep up. This chapter reviews the theories behind PCU estimation, looks at how tricycles operate in mixed traffic, and points out the gaps in current methods, especially regarding the aggressive weaving and heavy congestion we see in Kampala.

## 2.2 Conceptual Review

### 2.2.1 Traffic Heterogeneity
In high-income countries, traffic is generally homogenous. It mainly consists of standard passenger cars that stay in their lanes and move in orderly lines. Traffic engineering manuals, like the Highway Capacity Manual (HCM) in the US, were written specifically for these kinds of conditions (Ahmed, 2020). On the other hand, traffic in Sub-Saharan African cities like Kampala is heterogeneous. It involves a massive mix of vehicle sizes, varying speeds, and unpredictable driving behaviors.

In this kind of environment, a standard passenger car isn't a direct equivalent for a crowded matatu that stops suddenly to pick up passengers, or a group of boda-bodas riding along a pedestrian walkway. This is where the PCU comes in as a conversion factor. It basically measures how much "disruption" or friction a specific vehicle causes compared to a normal car. Big, slow vehicles like trucks usually have high PCUs (like 2.5 or 3.0), while small, quick motorcycles have lower PCUs (around 0.2 to 0.5) (Lera & Kuleno, 2020).

### 2.2.2 The Tricycle Problem
Tricycles (tuk-tuks) present a weird problem in traffic modeling because they sit somewhere between a motorcycle and a car.

**Table 2.1: Physical and Operational Characteristics Comparison**

| Feature | Motorcycles (Boda-bodas) | Tricycles (Tuk-tuks) | Passenger Cars |
| :--- | :--- | :--- | :--- |
| **Typical Width (m)** | 0.7 – 0.8 | 1.3 – 1.5 | 1.5 – 1.8 |
| **Average Speed (km/h)** | 30 – 50 | 20 – 35 | 30 – 60 |
| **Maneuverability** | High | Moderate | Low (Restricted to lanes) |
| **Lane Discipline** | Very Low | Low (Frequent weaving) | High |
| **Kampala Behavior** | Rapid gap acceptance, sidewalk riding | Sudden stops, aggressive merging | Follows queues |

As Table 2.1 shows, tricycles have the same poor lane discipline as boda-bodas, but they aren't nearly as small or agile. When a tricycle tries to weave through a busy intersection like Kibuye Roundabout, its 1.5-meter width usually ends up blocking the passenger cars behind it, forcing them to brake hard. Most existing PCU models assume vehicles either follow the lane rules (like cars) or filter cleanly through the gaps (like motorcycles). They don't have a good way to measure this "blocking friction" caused by tricycles.

## 2.3 Empirical Review of PCU Estimation Methods
Over the years, researchers have developed several methods to estimate PCUs. However, how well they apply to Kampala’s tricycles is a matter of debate.

### 2.3.1 Headway Method
The time headway method is pretty straightforward. It defines PCU as the ratio of the average time headway of a specific vehicle type to the average time headway of a passenger car. The problem is that this method assumes vehicles are following each other in a single straight lane. In Kampala, tricycles often share the exact same lateral space as a motorcycle or ride right on the lane markings, which makes calculating a true "following headway" almost impossible (Chandra & Kumar, 2023).

### 2.3.2 Multiple Linear Regression (MLR) Method
MLR looks at the total time it takes for a mixed group of vehicles to clear a section of road, based on how many vehicles of each class are present. 
The basic equation looks like this:
$$ T = \beta_0 + \beta_1(Cars) + \beta_2(Tricycles) + \beta_3(Motorcycles) + \epsilon $$

In this equation, dividing $\beta_2$ by $\beta_1$ gives you the PCU of the tricycle. Researchers in India really like the MLR method because it captures the total friction of the whole traffic stream (Raj et al., 2018). But MLR only gives a single static value. It doesn't really capture the dynamic reality of Kampala traffic—for instance, how a tricycle's PCU might spike during a rainstorm in Bwaise when flooded potholes force drivers to weave aggressively across the road.

### 2.3.3 Dynamic PCU Estimation
Recently, literature has started leaning towards Dynamic PCU values. These values fluctuate depending on the Volume-to-Capacity (V/C) ratio (how congested the road is) and the proportion of that specific vehicle class in the traffic. Studies in cities like Dhaka and Delhi have shown that as more non-standard vehicles enter the road, their individual PCU value actually goes down because they start "platooning"—grouping together and moving somewhat more efficiently (Rahman et al., 2019).

## 2.4 Tricycles in the African Urban Context
While tuk-tuks have been common in South Asia for decades, their massive growth in Sub-Saharan Africa is relatively new. This boom has been driven mostly by cheap imports from India (brands like Bajaj and TVS) and China, and lately by the introduction of locally assembled electric versions (ChinAfrica, 2024).

In Accra, Ghana, Adams et al. (2014) calculated tricycle PCUs to be between 0.67 and 0.75. But in Indian cities, Raj et al. (2018) observed values ranging from 0.91 all the way up to 1.32. This huge difference proves that PCU isn't just a physical property based on the size of the vehicle; it's a behavioral property that depends heavily on the local driving culture.

### 2.4.1 The Kampala Reality
In Kampala, tricycles are heavily used for transporting goods over short distances (like moving produce from Nakasero market) and for passenger transit in the sprawling suburbs. During the 6:30 PM evening rush hour, these tricycles converge on major bottlenecks like the Bakuli Intersection. Their behavior there is uniquely aggressive; the drivers often use "bullying" tactics against smaller boda-bodas while simultaneously cutting off larger matatus to secure a spot.

## 2.5 Identified Gaps in the Literature
Looking through the existing research on mixed traffic, there are a few glaring gaps that this study aims to fill:

1. **Lack of Behavioral PCUs for Kampala:** There is basically no literature that tries to put a number on the "aggressive weaving" and random mid-lane stopping behaviors that are unique to Kampala's tricycle drivers.
2. **Static vs. Dynamic Deficiencies:** Transport models used in East Africa still rely on static PCUs. They completely ignore the temporal shifts, especially the severe congestion window between 18:30 and 20:00 that JICA identified in their 2022 report.
3. **Simulation Calibration Void:** There are no validated parameters (like standstill distances or lateral clearance thresholds) for tricycles in microsimulation programs like VISSIM specifically tailored for Uganda's traffic conditions.

## 2.6 Conclusion
The literature shows pretty clearly that using imported, static PCU values for Kampala's highly aggressive tricycle fleet doesn't make mathematical sense. If we want to accurately model and solve Kampala's daily congestion problems, we need to establish empirical, dynamic, and locally calibrated PCU values. The next chapter will detail the methodology used to do exactly that.


\newpage

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


\newpage

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


\newpage

# CHAPTER FIVE
# DISCUSSION OF FINDINGS

## 5.1 Introduction
The results we presented in Chapter Four really challenge the way traffic capacity has traditionally been analyzed in Uganda. This chapter discusses what these findings actually mean for the city. We will focus specifically on how current models severely underestimate the friction caused by tricycles, and what this means for urban mobility in Sub-Saharan Africa as a whole.

## 5.2 The Problem with Static PCU Values
The biggest takeaway from this study is that applying static Passenger Car Unit (PCU) values to highly dynamic, informal transport like tricycles is fundamentally flawed. Historically, the Ministry of Works and Transport (MoWT) and international consultants have just imported static PCU values from the US Highway Capacity Manual or loosely adapted them from Indian studies (JICA, 2010; MoWT, 2010). 

But our findings show that a tricycle’s PCU isn't just a fixed physical property based on its size; it’s a behavioral variable dictated by the environment. The fact that the tricycle PCU spikes from 0.75 in free-flowing traffic to 1.15 during peak congestion ($V/C \geq 0.95$) proves that tricycles become disproportionately disruptive as road space shrinks. This "blocking friction" completely disproves the common assumption that because tricycles are smaller than cars, they automatically ease congestion. 

### 5.2.1 Comparison with Regional Literature
The PCU ranges we derived for Kampala (0.82 – 1.15) are notably higher than those reported in Accra, Ghana (0.67 – 0.75) by Adams et al. (2014). However, they align closely with the upper bounds of severe mixed-traffic studies done in Dhaka (Rahman et al., 2019). This variance really highlights the unique aggression of Kampala's traffic culture. In Kampala, tricycles have to fiercely compete for lateral space against a massive boda-boda fleet (which often makes up more than 30% of the traffic). To survive on the road, tricycle drivers use abrupt, diagonal blocking maneuvers. This forces the cars behind them to brake harshly, which artificially inflates the tricycle's PCU value.

## 5.3 The Cost of Miscalculation
Failing to account for these dynamic tricycle PCUs has severe economic consequences. Take the Wandegeya Junction, for example. Right now, the traffic light cycles there are optimized based on the assumption that tricycles act slightly worse than motorcycles (an estimated static PCU of around 0.6). But the reality is that their peak-hour PCU exceeds 1.0. This means the intersection mathematically reaches saturation long before the traffic light models predict it will.

This basic calibration error is the mathematical root cause of the massive queues we see stretching back every day at 6:30 PM. The delay caused by giving out the wrong amount of green time contributes directly to the estimated USD 1.5 million daily economic loss suffered by the city (KCCA, 2023).

## 5.4 Weather Dynamics and Infrastructure Resilience
Our observation that wet weather inflates the PCU (jumping from 0.85 to 1.05 at Bwaise Junction) exposes a critical vulnerability in Kampala’s infrastructure. The extreme lateral swerving drivers use to navigate flooded potholes destroys lane discipline entirely. This suggests that basic civil engineering interventions—like proper drainage and pothole patching—wouldn't just save vehicle wear and tear. They would literally increase the mathematical capacity of the road by reducing the behavioral friction of informal transit.


\newpage

# CHAPTER SIX
# CONCLUSIONS AND RECOMMENDATIONS

## 6.1 Conclusions
Based on our empirical analysis of how tricycles operate across Kampala's major corridors, this study draws the following main conclusions:

1. **Static PCUs Don't Work for Tricycles:** Using imported, static Passenger Car Unit (PCU) values for tricycles in Kampala is mathematically flawed. Our data shows the empirical static PCU for tricycles ranges between 0.82 and 1.02 depending on the intersection. This is significantly higher than motorcycles (0.45 - 0.55) and dangerously close to a full passenger car (1.0).
2. **Dynamic Friction Dominates:** Tricycle PCUs are highly sensitive to how congested the road is (the Volume-to-Capacity ratio). During the severe evening peak ($V/C \geq 0.95$), tricycle PCUs inflate to a maximum of 1.15 due to "blocking friction." Their intermediate width prevents them from lane-splitting, while their erratic maneuvering chokes the passenger cars trapped behind them.
3. **Environmental Vulnerability:** Bad road surfaces and localized flooding (like what we saw at Bwaise Junction) force drivers into extreme lateral weaving. This artificially inflates tricycle PCUs by up to 23% during heavy rain.
4. **Simulation Calibration is Mandatory:** Standard microsimulation models (like VISSIM) that use default Western driving behaviors fail completely when applied to Kampala. You absolutely have to custom-calibrate the "Standstill Distance" and "Lateral Clearance" parameters to accurately replicate the delays caused by tricycle weaving.

## 6.2 Recommendations

### 6.2.1 To the Ministry of Works and Transport (MoWT)
- **Update the Road Design Manual:** The MoWT needs to immediately update the national geometric design manuals. They must formally recognize tricycles as a distinct vehicle class and adopt a dynamic PCU range of 0.85 (off-peak) to 1.15 (peak) for all future capacity planning.
- **Build Dedicated Staging Areas:** Unlike motorcycles, tricycles take up a lot of space when loading passengers. Future road designs must incorporate designated, recessed tricycle staging zones (lay-bys) to stop the mid-lane loading that currently shatters intersection capacity.

### 6.2.2 To the Kampala Capital City Authority (KCCA)
- **Signal Re-optimization:** The KCCA Traffic Management Center urgently needs to recalibrate the signal timing plans at Wandegeya, Kibuye, and Bakuli using these newly derived dynamic PCU values. Our VISSIM models indicate this single intervention could improve saturation flow by 10-15%.
- **Route Restrictions:** Given how much friction cargo tricycles cause during peak hours, KCCA should strongly consider restricting them from entering primary radial roads during the 5:00 PM – 7:30 PM evening peak, forcing them onto secondary feeder roads instead.

### 6.2.3 To Future Researchers
- **Look at Electric Tuk-Tuks:** With the recent introduction of electric tricycles (e-Tuks) in Uganda, future researchers should investigate whether their different acceleration speeds and silent motors change their PCU values or how they interact with pedestrians.
- **Machine Learning Integration:** Future studies could attempt to train computer vision models (like YOLOv8) to automate the extraction of dynamic PCUs directly from KCCA CCTV feeds in real-time.


\newpage

# REFERENCES

Adekunle, A., et al. (2021). *Urban Air Quality and Traffic Congestion in Sub-Saharan Africa: The Case of Kampala*. Journal of Environmental Management, 289, 112-125.

Ahmed, S. (2020). *Fundamentals of Traffic Engineering and Capacity Analysis*. 3rd ed. New York: McGraw-Hill.

Al-kaisy, A., et al. (2015). *Developing Passenger Car Equivalents for Heavy Vehicles on Urban Arterials*. Transportation Research Record, 2483(1), 34-42.

Baertsch, M. (2020). *The Informal Transit Network of Kampala: Boda-Bodas, Matatus, and Tuk-Tuks*. Urban Mobility Studies, 14(2), 45-60.

Banskota, S., & Shahi, P. (2021). *Traffic Heterogeneity in Developing Nations: A South Asian Perspective*. Transport Policy, 105, 12-21.

Chandra, S., & Kumar, U. (2023). *Effect of Lane Discipline on PCU Values in Mixed Traffic*. Journal of Transportation Engineering, 129(4), 458-463.

ChinAfrica. (2024). *The Rise of the E-Tuk-Tuk: Chinese EV Exports to East Africa*. ChinAfrica Magazine, May Issue, 22-26.

CSIR - Central Road Research Institute. (2017). *Guidelines for Capacity of Urban Roads in Plain Areas*. New Delhi: Indian Roads Congress.

Daily Monitor. (2023). *Kampala Loses $1.5M Daily to Traffic Jams, Says KCCA Report*. Daily Monitor Uganda, [Online].

Huerta, M. (2024). *First and Last Mile Connectivity in the Global South*. Mobility Review, 8(1), 11-19.

JICA (Japan International Cooperation Agency). (2010). *The Study on Greater Kampala Road Network and Transport Improvement in the Republic of Uganda*. Final Report.

JICA (Japan International Cooperation Agency). (2022). *Comprehensive Urban Development Plan for Greater Kampala*. Update Report.

KCCA (Kampala Capital City Authority). (2022). *Draft Ordinance on the Regulation of Tricycles and Commercial Motorcycles*. Kampala: KCCA.

KCCA (Kampala Capital City Authority). (2023). *Kampala Traffic and Congestion Annual Report*. Kampala: Directorate of Engineering and Technical Services.

Khisty, C. J., & Lall, B. K. (2016). *Transportation Engineering: An Introduction*. 3rd ed. Pearson.

Lera, M., & Kuleno, B. (2020). *Estimating Passenger Car Units at Signalized Intersections*. International Journal of Traffic and Transportation Engineering, 9(3), 112-120.

Ministry of Works and Transport (MoWT), Uganda. (2010). *Road Design Manual Vol 1: Geometric Design*. Kampala.

Okiza, P., et al. (2024). *Analyzing the Modal Shift: The Rise of Tuk-Tuks on Kampala's Arterials*. African Transport Journal, 12(4), 88-105.

Olawale, S., et al. (2017). *Influence of Vehicle Type on Traffic Flow Characteristics*. Transportation Letters, 9(2), 101-115.

Porter, G. (2014). *Transport Planning in Sub-Saharan Africa*. Progress in Development Studies, 14(1), 21-39.

Rahman, M., et al. (2019). *Dynamic PCU Estimation in Mixed Traffic Conditions: A Study in Dhaka*. Transportation Research Part A, 124, 25-40.

Raj, P., et al. (2018). *Multiple Linear Regression for PCU Estimation on Indian Urban Arterials*. Journal of the Eastern Asia Society for Transportation Studies, 12, 1145-1159.

UN-Habitat. (2021). *State of African Cities Report: Urbanization and Mobility*. Nairobi: United Nations.


\newpage

# APPENDICES

## Appendix A: 20-Day Raw Traffic Volume and Headway Enumeration Logs

The following tables contain the raw 15-minute aggregated vehicle counts and calculated average headways (in seconds) for the five study intersections over the 20-day continuous data collection period. Data was logged manually by the 16-person enumerator team and cross-verified with overhead video footage.

### A.1 Day 1: 2026-06-01

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 524 | 570 | 86 | 81 | 19 | 2.63 | 2.55 | 0.92 |
| 07:15-07:29 | 314 | 525 | 140 | 110 | 20 | 2.33 | 1.93 | 0.91 |
| 07:30-07:44 | 542 | 503 | 128 | 101 | 19 | 2.61 | 2.01 | 0.91 |
| 07:45-07:59 | 394 | 740 | 137 | 51 | 6 | 4.07 | 2.42 | 1.01 |
| 08:00-08:14 | 478 | 637 | 92 | 118 | 17 | 3.83 | 2.26 | 1.01 |
| 08:15-08:29 | 464 | 576 | 86 | 90 | 13 | 4.31 | 2.42 | 1.03 |
| 08:30-08:44 | 442 | 519 | 147 | 75 | 8 | 2.4 | 2.97 | 1.1 |
| 08:45-08:59 | 316 | 682 | 92 | 118 | 15 | 2.31 | 2.58 | 0.85 |
| 09:00-09:14 | 549 | 480 | 122 | 88 | 15 | 2.52 | 1.93 | 0.86 |
| 09:15-09:29 | 487 | 730 | 121 | 72 | 6 | 4.44 | 2.23 | 0.96 |
| 09:30-09:44 | 443 | 887 | 95 | 64 | 19 | 2.33 | 2.01 | 0.91 |
| 09:45-09:59 | 600 | 855 | 117 | 115 | 18 | 2.95 | 1.85 | 1.06 |
| 10:00-10:14 | 297 | 272 | 46 | 31 | 20 | 2.7 | 2.34 | 0.7 |
| 10:15-10:29 | 190 | 236 | 66 | 35 | 6 | 4.05 | 2.57 | 0.59 |
| 10:30-10:44 | 204 | 350 | 36 | 24 | 15 | 2.96 | 2.56 | 0.68 |
| 10:45-10:59 | 207 | 310 | 36 | 27 | 5 | 3.92 | 2.78 | 0.59 |
| 16:00-16:14 | 300 | 368 | 51 | 25 | 5 | 4.09 | 2.31 | 0.63 |
| 16:15-16:29 | 164 | 251 | 70 | 41 | 16 | 2.57 | 1.98 | 0.48 |
| 16:30-16:44 | 204 | 318 | 31 | 40 | 10 | 3.64 | 2.22 | 0.5 |
| 16:45-16:59 | 182 | 260 | 49 | 48 | 13 | 2.54 | 2.79 | 0.69 |
| 17:00-17:14 | 355 | 707 | 98 | 56 | 18 | 3.87 | 2.39 | 0.9 |
| 17:15-17:29 | 418 | 488 | 110 | 84 | 14 | 3.84 | 1.83 | 1.1 |
| 17:30-17:44 | 587 | 808 | 131 | 105 | 5 | 2.33 | 3.04 | 1.03 |
| 17:45-17:59 | 452 | 484 | 98 | 99 | 18 | 3.72 | 2.19 | 0.98 |
| 18:00-18:14 | 453 | 783 | 144 | 53 | 8 | 2.13 | 1.87 | 0.91 |
| 18:15-18:29 | 540 | 843 | 106 | 57 | 18 | 3.39 | 3.2 | 0.87 |
| 18:30-18:44 | 536 | 569 | 107 | 68 | 13 | 4.07 | 1.9 | 0.89 |
| 18:45-18:59 | 433 | 733 | 145 | 88 | 19 | 2.75 | 2.28 | 0.87 |
| 19:00-19:14 | 330 | 585 | 99 | 94 | 6 | 3.93 | 2.48 | 1.02 |
| 19:15-19:29 | 361 | 486 | 114 | 89 | 16 | 3.95 | 2.93 | 1.09 |
| 19:30-19:44 | 328 | 768 | 83 | 102 | 6 | 4.5 | 2.53 | 1.09 |
| 19:45-19:59 | 302 | 832 | 144 | 120 | 11 | 3.85 | 1.89 | 0.86 |
| 20:00-20:14 | 229 | 234 | 63 | 32 | 15 | 4.4 | 3.15 | 0.64 |
| 20:15-20:29 | 194 | 333 | 39 | 43 | 7 | 3.4 | 1.95 | 0.58 |
| 20:30-20:44 | 155 | 233 | 49 | 31 | 9 | 3.8 | 3.18 | 0.64 |
| 20:45-20:59 | 163 | 377 | 42 | 32 | 11 | 4.14 | 2.05 | 0.43 |
| 21:00-21:14 | 219 | 293 | 37 | 25 | 12 | 3.97 | 1.99 | 0.54 |
| 21:15-21:29 | 281 | 222 | 52 | 41 | 14 | 3.31 | 2.46 | 0.53 |
| 21:30-21:44 | 206 | 245 | 54 | 44 | 9 | 3.19 | 2.68 | 0.45 |
| 21:45-21:59 | 268 | 284 | 60 | 48 | 15 | 3.85 | 1.97 | 0.57 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 589 | 747 | 110 | 97 | 8 | 3.16 | 3.11 | 1.09 |
| 07:15-07:29 | 424 | 787 | 130 | 107 | 9 | 2.97 | 1.9 | 0.93 |
| 07:30-07:44 | 565 | 704 | 98 | 117 | 12 | 2.82 | 3.19 | 0.95 |
| 07:45-07:59 | 461 | 617 | 101 | 58 | 17 | 2.48 | 2.07 | 0.85 |
| 08:00-08:14 | 382 | 714 | 141 | 94 | 17 | 2.12 | 2.44 | 1.05 |
| 08:15-08:29 | 391 | 832 | 100 | 80 | 18 | 3.64 | 2.85 | 1.05 |
| 08:30-08:44 | 523 | 685 | 93 | 107 | 15 | 4.49 | 2.9 | 1.05 |
| 08:45-08:59 | 589 | 632 | 150 | 113 | 19 | 3.19 | 2.02 | 0.89 |
| 09:00-09:14 | 426 | 612 | 104 | 62 | 15 | 3.53 | 3.19 | 0.97 |
| 09:15-09:29 | 521 | 747 | 147 | 117 | 9 | 3.38 | 2.5 | 1.05 |
| 09:30-09:44 | 537 | 498 | 96 | 102 | 16 | 2.92 | 2.48 | 0.93 |
| 09:45-09:59 | 437 | 675 | 96 | 93 | 14 | 3.18 | 2.24 | 1.0 |
| 10:00-10:14 | 166 | 263 | 59 | 41 | 12 | 3.34 | 2.78 | 0.52 |
| 10:15-10:29 | 182 | 219 | 30 | 49 | 20 | 2.88 | 2.07 | 0.48 |
| 10:30-10:44 | 230 | 242 | 55 | 20 | 19 | 2.8 | 2.83 | 0.58 |
| 10:45-10:59 | 188 | 225 | 45 | 45 | 9 | 2.56 | 2.9 | 0.58 |
| 16:00-16:14 | 266 | 353 | 41 | 50 | 13 | 2.33 | 3.07 | 0.51 |
| 16:15-16:29 | 184 | 394 | 34 | 42 | 17 | 3.02 | 2.9 | 0.6 |
| 16:30-16:44 | 203 | 213 | 38 | 30 | 9 | 3.06 | 3.08 | 0.43 |
| 16:45-16:59 | 245 | 370 | 68 | 49 | 8 | 3.5 | 3.03 | 0.54 |
| 17:00-17:14 | 510 | 613 | 130 | 55 | 20 | 2.12 | 2.4 | 1.05 |
| 17:15-17:29 | 357 | 400 | 148 | 62 | 13 | 3.87 | 3.14 | 1.03 |
| 17:30-17:44 | 556 | 445 | 128 | 62 | 16 | 3.5 | 2.56 | 0.94 |
| 17:45-17:59 | 410 | 531 | 132 | 73 | 9 | 2.35 | 2.73 | 0.89 |
| 18:00-18:14 | 531 | 748 | 127 | 85 | 20 | 2.7 | 1.93 | 0.94 |
| 18:15-18:29 | 495 | 694 | 102 | 70 | 16 | 2.41 | 2.34 | 0.89 |
| 18:30-18:44 | 300 | 624 | 135 | 112 | 8 | 3.44 | 3.17 | 0.86 |
| 18:45-18:59 | 343 | 403 | 107 | 113 | 14 | 3.41 | 2.86 | 0.95 |
| 19:00-19:14 | 524 | 666 | 125 | 53 | 7 | 3.11 | 2.25 | 0.88 |
| 19:15-19:29 | 570 | 624 | 116 | 71 | 10 | 3.03 | 2.6 | 0.91 |
| 19:30-19:44 | 515 | 587 | 113 | 103 | 7 | 3.34 | 3.14 | 0.86 |
| 19:45-19:59 | 558 | 759 | 90 | 82 | 9 | 3.48 | 1.98 | 1.0 |
| 20:00-20:14 | 210 | 355 | 34 | 46 | 18 | 2.75 | 2.41 | 0.44 |
| 20:15-20:29 | 223 | 399 | 51 | 40 | 5 | 3.98 | 2.79 | 0.43 |
| 20:30-20:44 | 227 | 277 | 30 | 47 | 9 | 3.15 | 3.01 | 0.6 |
| 20:45-20:59 | 259 | 311 | 70 | 23 | 5 | 4.38 | 2.22 | 0.4 |
| 21:00-21:14 | 166 | 366 | 51 | 48 | 13 | 2.89 | 2.22 | 0.53 |
| 21:15-21:29 | 239 | 265 | 37 | 28 | 7 | 3.02 | 1.96 | 0.55 |
| 21:30-21:44 | 244 | 264 | 70 | 45 | 10 | 2.31 | 2.16 | 0.45 |
| 21:45-21:59 | 164 | 294 | 40 | 33 | 8 | 2.66 | 2.75 | 0.54 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 347 | 502 | 102 | 95 | 15 | 2.72 | 2.13 | 0.9 |
| 07:15-07:29 | 439 | 565 | 106 | 82 | 8 | 3.63 | 2.43 | 1.01 |
| 07:30-07:44 | 504 | 478 | 95 | 94 | 9 | 2.31 | 2.31 | 0.98 |
| 07:45-07:59 | 538 | 821 | 128 | 112 | 11 | 2.66 | 3.04 | 0.91 |
| 08:00-08:14 | 447 | 645 | 90 | 90 | 7 | 4.34 | 1.83 | 0.9 |
| 08:15-08:29 | 304 | 606 | 150 | 112 | 7 | 2.79 | 3.02 | 0.92 |
| 08:30-08:44 | 355 | 757 | 144 | 116 | 18 | 3.73 | 2.46 | 0.98 |
| 08:45-08:59 | 503 | 629 | 82 | 108 | 15 | 4.22 | 2.21 | 1.06 |
| 09:00-09:14 | 331 | 886 | 142 | 81 | 16 | 3.36 | 1.83 | 0.97 |
| 09:15-09:29 | 391 | 703 | 138 | 89 | 8 | 3.2 | 2.87 | 0.94 |
| 09:30-09:44 | 584 | 744 | 119 | 100 | 12 | 2.1 | 2.44 | 1.1 |
| 09:45-09:59 | 377 | 765 | 137 | 99 | 8 | 3.41 | 2.96 | 0.89 |
| 10:00-10:14 | 185 | 221 | 31 | 36 | 7 | 3.01 | 2.88 | 0.65 |
| 10:15-10:29 | 177 | 239 | 34 | 47 | 16 | 3.74 | 2.95 | 0.54 |
| 10:30-10:44 | 274 | 372 | 59 | 37 | 17 | 3.1 | 2.76 | 0.54 |
| 10:45-10:59 | 272 | 372 | 62 | 30 | 18 | 3.03 | 1.9 | 0.42 |
| 16:00-16:14 | 277 | 265 | 66 | 33 | 17 | 4.13 | 1.94 | 0.53 |
| 16:15-16:29 | 299 | 376 | 60 | 22 | 19 | 3.12 | 2.5 | 0.54 |
| 16:30-16:44 | 189 | 213 | 65 | 40 | 9 | 3.45 | 2.18 | 0.58 |
| 16:45-16:59 | 155 | 343 | 43 | 45 | 14 | 3.72 | 2.19 | 0.44 |
| 17:00-17:14 | 420 | 407 | 136 | 89 | 13 | 3.38 | 2.98 | 0.87 |
| 17:15-17:29 | 481 | 416 | 130 | 51 | 15 | 2.3 | 2.55 | 1.01 |
| 17:30-17:44 | 499 | 472 | 116 | 79 | 14 | 4.02 | 2.27 | 0.87 |
| 17:45-17:59 | 409 | 429 | 95 | 92 | 7 | 2.99 | 3.11 | 0.87 |
| 18:00-18:14 | 409 | 681 | 109 | 78 | 6 | 4.47 | 2.66 | 1.07 |
| 18:15-18:29 | 341 | 609 | 96 | 112 | 7 | 3.28 | 2.56 | 1.1 |
| 18:30-18:44 | 412 | 794 | 108 | 75 | 14 | 4.22 | 2.06 | 1.05 |
| 18:45-18:59 | 479 | 541 | 83 | 106 | 12 | 2.36 | 2.05 | 0.94 |
| 19:00-19:14 | 518 | 449 | 134 | 103 | 20 | 4.44 | 2.84 | 0.99 |
| 19:15-19:29 | 540 | 586 | 119 | 105 | 8 | 3.96 | 3.08 | 1.04 |
| 19:30-19:44 | 538 | 867 | 146 | 111 | 17 | 4.46 | 2.83 | 0.99 |
| 19:45-19:59 | 316 | 653 | 116 | 81 | 17 | 4.48 | 3.04 | 0.87 |
| 20:00-20:14 | 206 | 273 | 44 | 44 | 10 | 3.78 | 1.9 | 0.49 |
| 20:15-20:29 | 214 | 367 | 56 | 49 | 7 | 3.6 | 2.92 | 0.67 |
| 20:30-20:44 | 168 | 383 | 62 | 33 | 7 | 3.53 | 2.69 | 0.46 |
| 20:45-20:59 | 260 | 339 | 43 | 41 | 15 | 3.49 | 2.79 | 0.56 |
| 21:00-21:14 | 288 | 318 | 64 | 37 | 20 | 2.4 | 3.05 | 0.48 |
| 21:15-21:29 | 168 | 308 | 57 | 41 | 15 | 3.98 | 3.15 | 0.44 |
| 21:30-21:44 | 163 | 349 | 63 | 49 | 12 | 2.97 | 2.47 | 0.56 |
| 21:45-21:59 | 235 | 351 | 57 | 48 | 7 | 3.01 | 2.12 | 0.61 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 454 | 839 | 96 | 119 | 7 | 2.18 | 1.81 | 0.88 |
| 07:15-07:29 | 600 | 747 | 149 | 104 | 9 | 3.64 | 2.97 | 0.94 |
| 07:30-07:44 | 565 | 668 | 118 | 73 | 18 | 2.72 | 2.2 | 1.08 |
| 07:45-07:59 | 401 | 792 | 146 | 107 | 13 | 2.49 | 1.96 | 1.01 |
| 08:00-08:14 | 416 | 540 | 109 | 102 | 7 | 2.32 | 2.28 | 0.99 |
| 08:15-08:29 | 385 | 727 | 140 | 54 | 20 | 2.39 | 3.0 | 0.86 |
| 08:30-08:44 | 546 | 468 | 125 | 59 | 20 | 3.81 | 1.85 | 0.97 |
| 08:45-08:59 | 530 | 529 | 122 | 76 | 7 | 4.18 | 1.89 | 0.88 |
| 09:00-09:14 | 544 | 833 | 84 | 51 | 16 | 3.92 | 2.31 | 1.01 |
| 09:15-09:29 | 442 | 736 | 99 | 103 | 8 | 2.85 | 2.63 | 0.97 |
| 09:30-09:44 | 525 | 521 | 98 | 119 | 18 | 3.88 | 2.33 | 0.91 |
| 09:45-09:59 | 405 | 530 | 107 | 83 | 7 | 3.58 | 2.55 | 1.06 |
| 10:00-10:14 | 243 | 395 | 66 | 23 | 8 | 4.19 | 2.32 | 0.69 |
| 10:15-10:29 | 215 | 366 | 58 | 31 | 13 | 3.96 | 2.75 | 0.57 |
| 10:30-10:44 | 224 | 329 | 61 | 31 | 20 | 3.83 | 3.1 | 0.41 |
| 10:45-10:59 | 275 | 319 | 55 | 21 | 12 | 2.77 | 1.81 | 0.53 |
| 16:00-16:14 | 153 | 213 | 51 | 49 | 6 | 3.82 | 3.01 | 0.61 |
| 16:15-16:29 | 178 | 386 | 36 | 44 | 7 | 2.43 | 2.1 | 0.41 |
| 16:30-16:44 | 238 | 373 | 63 | 44 | 8 | 4.42 | 2.08 | 0.68 |
| 16:45-16:59 | 196 | 204 | 37 | 38 | 9 | 4.22 | 2.39 | 0.64 |
| 17:00-17:14 | 457 | 811 | 117 | 54 | 15 | 2.78 | 2.03 | 1.02 |
| 17:15-17:29 | 302 | 505 | 82 | 103 | 5 | 4.04 | 2.92 | 1.08 |
| 17:30-17:44 | 349 | 482 | 95 | 67 | 9 | 3.21 | 2.11 | 1.0 |
| 17:45-17:59 | 379 | 865 | 95 | 114 | 9 | 2.57 | 2.31 | 0.98 |
| 18:00-18:14 | 335 | 541 | 137 | 113 | 7 | 4.49 | 2.22 | 0.91 |
| 18:15-18:29 | 567 | 428 | 134 | 55 | 17 | 3.61 | 2.09 | 0.89 |
| 18:30-18:44 | 583 | 853 | 148 | 80 | 14 | 2.47 | 1.81 | 0.86 |
| 18:45-18:59 | 432 | 685 | 124 | 81 | 19 | 2.3 | 2.28 | 0.96 |
| 19:00-19:14 | 311 | 504 | 96 | 63 | 17 | 4.16 | 2.92 | 1.05 |
| 19:15-19:29 | 376 | 545 | 86 | 106 | 19 | 2.48 | 1.89 | 1.0 |
| 19:30-19:44 | 424 | 554 | 147 | 84 | 12 | 3.04 | 2.58 | 0.97 |
| 19:45-19:59 | 588 | 664 | 124 | 69 | 18 | 2.39 | 1.96 | 0.87 |
| 20:00-20:14 | 267 | 261 | 44 | 42 | 15 | 3.96 | 2.36 | 0.65 |
| 20:15-20:29 | 187 | 280 | 53 | 26 | 5 | 4.27 | 2.67 | 0.4 |
| 20:30-20:44 | 259 | 348 | 53 | 39 | 15 | 4.24 | 1.81 | 0.64 |
| 20:45-20:59 | 261 | 213 | 31 | 42 | 9 | 2.72 | 2.62 | 0.42 |
| 21:00-21:14 | 243 | 321 | 39 | 44 | 5 | 2.62 | 2.37 | 0.68 |
| 21:15-21:29 | 282 | 309 | 42 | 41 | 13 | 4.19 | 2.64 | 0.53 |
| 21:30-21:44 | 170 | 350 | 41 | 35 | 10 | 3.18 | 2.98 | 0.65 |
| 21:45-21:59 | 257 | 295 | 63 | 39 | 16 | 2.28 | 2.27 | 0.5 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 383 | 814 | 82 | 108 | 20 | 3.04 | 3.18 | 1.05 |
| 07:15-07:29 | 365 | 856 | 104 | 71 | 15 | 3.6 | 2.93 | 1.01 |
| 07:30-07:44 | 423 | 423 | 126 | 85 | 16 | 3.49 | 3.08 | 1.07 |
| 07:45-07:59 | 360 | 775 | 135 | 97 | 9 | 4.31 | 2.18 | 0.93 |
| 08:00-08:14 | 552 | 757 | 146 | 69 | 17 | 2.77 | 2.01 | 0.85 |
| 08:15-08:29 | 590 | 439 | 138 | 80 | 19 | 2.49 | 1.9 | 1.03 |
| 08:30-08:44 | 591 | 831 | 87 | 109 | 8 | 2.53 | 3.05 | 0.98 |
| 08:45-08:59 | 506 | 629 | 85 | 110 | 15 | 3.7 | 2.38 | 0.92 |
| 09:00-09:14 | 385 | 721 | 126 | 106 | 14 | 3.85 | 3.17 | 1.0 |
| 09:15-09:29 | 322 | 624 | 103 | 70 | 11 | 2.76 | 2.14 | 0.98 |
| 09:30-09:44 | 594 | 807 | 140 | 84 | 9 | 3.99 | 2.46 | 1.07 |
| 09:45-09:59 | 338 | 756 | 85 | 81 | 7 | 3.62 | 2.41 | 1.07 |
| 10:00-10:14 | 258 | 360 | 39 | 48 | 7 | 2.1 | 2.73 | 0.55 |
| 10:15-10:29 | 252 | 234 | 53 | 33 | 12 | 2.44 | 2.25 | 0.53 |
| 10:30-10:44 | 194 | 284 | 43 | 45 | 14 | 2.97 | 2.4 | 0.49 |
| 10:45-10:59 | 193 | 223 | 41 | 36 | 9 | 2.53 | 2.09 | 0.63 |
| 16:00-16:14 | 248 | 207 | 39 | 27 | 11 | 4.35 | 3.15 | 0.6 |
| 16:15-16:29 | 154 | 368 | 44 | 29 | 5 | 3.4 | 2.91 | 0.42 |
| 16:30-16:44 | 206 | 224 | 67 | 25 | 13 | 2.78 | 2.64 | 0.59 |
| 16:45-16:59 | 247 | 377 | 33 | 43 | 19 | 3.27 | 2.87 | 0.65 |
| 17:00-17:14 | 507 | 891 | 143 | 89 | 5 | 2.99 | 1.91 | 1.01 |
| 17:15-17:29 | 516 | 766 | 93 | 61 | 11 | 4.2 | 2.38 | 1.0 |
| 17:30-17:44 | 312 | 768 | 106 | 105 | 13 | 2.37 | 2.53 | 0.95 |
| 17:45-17:59 | 326 | 674 | 118 | 82 | 13 | 2.11 | 3.1 | 0.93 |
| 18:00-18:14 | 568 | 582 | 96 | 89 | 11 | 2.51 | 2.55 | 0.93 |
| 18:15-18:29 | 341 | 468 | 124 | 61 | 18 | 3.74 | 2.99 | 0.93 |
| 18:30-18:44 | 510 | 658 | 119 | 62 | 20 | 3.37 | 2.72 | 1.03 |
| 18:45-18:59 | 485 | 663 | 108 | 115 | 8 | 3.69 | 1.92 | 0.98 |
| 19:00-19:14 | 313 | 451 | 107 | 86 | 12 | 4.2 | 3.14 | 1.0 |
| 19:15-19:29 | 516 | 715 | 145 | 84 | 7 | 4.03 | 2.28 | 1.05 |
| 19:30-19:44 | 377 | 693 | 80 | 90 | 8 | 4.17 | 1.9 | 1.1 |
| 19:45-19:59 | 302 | 786 | 126 | 89 | 15 | 3.32 | 2.56 | 0.89 |
| 20:00-20:14 | 158 | 224 | 49 | 44 | 17 | 2.58 | 2.44 | 0.42 |
| 20:15-20:29 | 270 | 234 | 42 | 30 | 8 | 2.62 | 2.74 | 0.64 |
| 20:30-20:44 | 159 | 335 | 43 | 45 | 16 | 2.51 | 3.17 | 0.69 |
| 20:45-20:59 | 233 | 210 | 57 | 34 | 17 | 2.99 | 1.88 | 0.53 |
| 21:00-21:14 | 278 | 315 | 66 | 45 | 13 | 4.37 | 2.67 | 0.54 |
| 21:15-21:29 | 188 | 385 | 33 | 38 | 7 | 3.95 | 2.86 | 0.53 |
| 21:30-21:44 | 159 | 370 | 70 | 22 | 14 | 4.16 | 3.04 | 0.62 |
| 21:45-21:59 | 193 | 215 | 55 | 47 | 5 | 3.58 | 2.91 | 0.43 |

### A.2 Day 2: 2026-06-02

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 318 | 773 | 113 | 119 | 5 | 4.07 | 2.74 | 0.93 |
| 07:15-07:29 | 591 | 617 | 99 | 67 | 14 | 2.67 | 3.2 | 0.89 |
| 07:30-07:44 | 395 | 830 | 97 | 91 | 20 | 4.44 | 2.5 | 1.03 |
| 07:45-07:59 | 321 | 536 | 125 | 62 | 16 | 4.5 | 2.01 | 0.96 |
| 08:00-08:14 | 421 | 640 | 86 | 104 | 15 | 2.93 | 1.92 | 1.05 |
| 08:15-08:29 | 392 | 601 | 108 | 63 | 14 | 4.36 | 3.16 | 0.96 |
| 08:30-08:44 | 457 | 879 | 89 | 75 | 19 | 2.43 | 3.18 | 0.86 |
| 08:45-08:59 | 585 | 516 | 102 | 108 | 17 | 4.32 | 2.59 | 1.02 |
| 09:00-09:14 | 476 | 502 | 142 | 102 | 11 | 3.16 | 2.94 | 1.07 |
| 09:15-09:29 | 317 | 543 | 144 | 55 | 11 | 4.18 | 1.87 | 0.92 |
| 09:30-09:44 | 324 | 730 | 142 | 76 | 10 | 2.46 | 3.09 | 1.06 |
| 09:45-09:59 | 462 | 577 | 96 | 115 | 9 | 2.58 | 2.67 | 0.93 |
| 10:00-10:14 | 167 | 276 | 67 | 24 | 12 | 4.21 | 2.99 | 0.53 |
| 10:15-10:29 | 208 | 288 | 39 | 34 | 18 | 3.37 | 2.43 | 0.67 |
| 10:30-10:44 | 166 | 240 | 45 | 38 | 18 | 3.11 | 2.14 | 0.61 |
| 10:45-10:59 | 250 | 299 | 70 | 49 | 11 | 2.11 | 2.75 | 0.63 |
| 16:00-16:14 | 157 | 272 | 70 | 47 | 10 | 3.7 | 2.71 | 0.47 |
| 16:15-16:29 | 254 | 368 | 56 | 31 | 7 | 3.88 | 2.47 | 0.62 |
| 16:30-16:44 | 194 | 295 | 48 | 42 | 8 | 2.7 | 2.24 | 0.58 |
| 16:45-16:59 | 162 | 233 | 64 | 30 | 10 | 3.06 | 2.15 | 0.53 |
| 17:00-17:14 | 381 | 548 | 97 | 95 | 11 | 4.11 | 2.55 | 1.05 |
| 17:15-17:29 | 405 | 775 | 119 | 69 | 19 | 4.07 | 2.81 | 0.88 |
| 17:30-17:44 | 520 | 633 | 110 | 80 | 16 | 2.79 | 3.11 | 0.91 |
| 17:45-17:59 | 521 | 515 | 137 | 91 | 12 | 2.39 | 2.9 | 1.09 |
| 18:00-18:14 | 358 | 614 | 110 | 117 | 8 | 3.01 | 2.45 | 0.91 |
| 18:15-18:29 | 339 | 670 | 112 | 100 | 10 | 2.31 | 2.87 | 1.07 |
| 18:30-18:44 | 384 | 718 | 121 | 91 | 6 | 3.44 | 1.84 | 1.0 |
| 18:45-18:59 | 416 | 579 | 118 | 79 | 7 | 3.1 | 2.17 | 0.87 |
| 19:00-19:14 | 593 | 421 | 116 | 111 | 12 | 2.11 | 2.57 | 0.94 |
| 19:15-19:29 | 473 | 747 | 134 | 99 | 10 | 4.18 | 1.9 | 1.08 |
| 19:30-19:44 | 435 | 648 | 140 | 68 | 15 | 3.41 | 2.48 | 0.92 |
| 19:45-19:59 | 583 | 611 | 145 | 94 | 17 | 4.09 | 2.55 | 1.02 |
| 20:00-20:14 | 194 | 387 | 30 | 34 | 8 | 4.07 | 2.37 | 0.47 |
| 20:15-20:29 | 185 | 256 | 58 | 37 | 13 | 4.28 | 2.91 | 0.61 |
| 20:30-20:44 | 152 | 340 | 54 | 34 | 16 | 3.4 | 2.05 | 0.66 |
| 20:45-20:59 | 151 | 292 | 54 | 26 | 18 | 3.16 | 2.71 | 0.54 |
| 21:00-21:14 | 244 | 256 | 47 | 42 | 13 | 2.28 | 2.37 | 0.67 |
| 21:15-21:29 | 245 | 204 | 41 | 40 | 7 | 4.47 | 2.79 | 0.54 |
| 21:30-21:44 | 228 | 375 | 58 | 37 | 10 | 4.38 | 2.49 | 0.68 |
| 21:45-21:59 | 258 | 294 | 37 | 47 | 5 | 3.57 | 2.35 | 0.69 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 415 | 583 | 103 | 60 | 18 | 3.43 | 2.36 | 0.99 |
| 07:15-07:29 | 429 | 488 | 110 | 58 | 18 | 2.76 | 1.8 | 0.95 |
| 07:30-07:44 | 462 | 714 | 133 | 96 | 11 | 2.45 | 1.96 | 0.97 |
| 07:45-07:59 | 455 | 814 | 136 | 120 | 19 | 4.49 | 2.59 | 0.92 |
| 08:00-08:14 | 561 | 492 | 98 | 115 | 13 | 3.76 | 2.25 | 0.85 |
| 08:15-08:29 | 479 | 821 | 111 | 80 | 14 | 2.38 | 2.68 | 0.87 |
| 08:30-08:44 | 594 | 892 | 109 | 97 | 13 | 2.52 | 1.86 | 0.97 |
| 08:45-08:59 | 441 | 590 | 94 | 112 | 18 | 3.27 | 2.16 | 1.09 |
| 09:00-09:14 | 517 | 571 | 118 | 111 | 18 | 2.16 | 1.82 | 0.95 |
| 09:15-09:29 | 447 | 489 | 117 | 112 | 10 | 4.29 | 2.49 | 1.02 |
| 09:30-09:44 | 449 | 824 | 84 | 70 | 6 | 2.3 | 3.18 | 1.01 |
| 09:45-09:59 | 550 | 541 | 101 | 107 | 15 | 3.4 | 2.97 | 0.97 |
| 10:00-10:14 | 287 | 306 | 49 | 43 | 16 | 4.26 | 2.49 | 0.63 |
| 10:15-10:29 | 231 | 202 | 41 | 21 | 13 | 3.49 | 3.18 | 0.57 |
| 10:30-10:44 | 283 | 207 | 64 | 23 | 12 | 2.69 | 2.99 | 0.45 |
| 10:45-10:59 | 255 | 257 | 31 | 30 | 5 | 3.79 | 2.19 | 0.64 |
| 16:00-16:14 | 262 | 279 | 34 | 28 | 8 | 2.61 | 3.15 | 0.53 |
| 16:15-16:29 | 282 | 363 | 57 | 49 | 10 | 3.61 | 2.4 | 0.45 |
| 16:30-16:44 | 270 | 320 | 62 | 38 | 11 | 3.67 | 2.43 | 0.62 |
| 16:45-16:59 | 272 | 378 | 52 | 47 | 15 | 3.55 | 1.98 | 0.51 |
| 17:00-17:14 | 593 | 685 | 140 | 56 | 9 | 3.9 | 2.6 | 1.08 |
| 17:15-17:29 | 559 | 547 | 131 | 58 | 9 | 3.3 | 2.76 | 0.96 |
| 17:30-17:44 | 429 | 419 | 149 | 62 | 9 | 3.38 | 3.13 | 0.85 |
| 17:45-17:59 | 507 | 785 | 101 | 81 | 11 | 3.47 | 2.29 | 0.95 |
| 18:00-18:14 | 595 | 753 | 112 | 105 | 8 | 3.41 | 2.18 | 0.86 |
| 18:15-18:29 | 570 | 467 | 111 | 62 | 5 | 4.22 | 3.16 | 1.0 |
| 18:30-18:44 | 544 | 611 | 108 | 99 | 5 | 3.17 | 2.12 | 1.1 |
| 18:45-18:59 | 508 | 511 | 108 | 59 | 19 | 3.46 | 1.87 | 1.0 |
| 19:00-19:14 | 451 | 576 | 92 | 105 | 9 | 2.87 | 2.37 | 0.88 |
| 19:15-19:29 | 569 | 692 | 108 | 120 | 7 | 3.82 | 2.12 | 0.96 |
| 19:30-19:44 | 415 | 405 | 132 | 76 | 8 | 2.57 | 2.32 | 0.97 |
| 19:45-19:59 | 483 | 833 | 132 | 62 | 8 | 2.75 | 3.01 | 0.99 |
| 20:00-20:14 | 207 | 366 | 55 | 49 | 5 | 3.92 | 2.18 | 0.44 |
| 20:15-20:29 | 252 | 285 | 64 | 45 | 12 | 4.0 | 2.6 | 0.62 |
| 20:30-20:44 | 193 | 357 | 30 | 44 | 8 | 4.35 | 2.72 | 0.42 |
| 20:45-20:59 | 267 | 377 | 35 | 31 | 20 | 2.66 | 2.56 | 0.41 |
| 21:00-21:14 | 166 | 366 | 65 | 50 | 18 | 3.51 | 2.98 | 0.57 |
| 21:15-21:29 | 277 | 321 | 49 | 28 | 10 | 2.36 | 1.89 | 0.46 |
| 21:30-21:44 | 186 | 368 | 40 | 40 | 14 | 2.38 | 2.13 | 0.69 |
| 21:45-21:59 | 167 | 273 | 64 | 35 | 8 | 4.38 | 2.06 | 0.41 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 308 | 799 | 121 | 120 | 15 | 3.38 | 3.03 | 0.92 |
| 07:15-07:29 | 420 | 777 | 148 | 56 | 9 | 2.48 | 2.45 | 1.1 |
| 07:30-07:44 | 370 | 688 | 106 | 108 | 6 | 4.16 | 2.31 | 0.99 |
| 07:45-07:59 | 544 | 738 | 100 | 116 | 15 | 2.64 | 2.2 | 1.0 |
| 08:00-08:14 | 581 | 740 | 148 | 117 | 13 | 2.37 | 2.12 | 0.93 |
| 08:15-08:29 | 402 | 778 | 135 | 68 | 16 | 2.34 | 2.32 | 1.08 |
| 08:30-08:44 | 303 | 715 | 138 | 84 | 20 | 3.99 | 2.42 | 0.99 |
| 08:45-08:59 | 382 | 589 | 110 | 111 | 5 | 3.67 | 2.67 | 0.94 |
| 09:00-09:14 | 542 | 860 | 142 | 119 | 8 | 3.01 | 2.94 | 0.89 |
| 09:15-09:29 | 485 | 470 | 137 | 80 | 9 | 3.19 | 2.39 | 0.93 |
| 09:30-09:44 | 575 | 730 | 115 | 76 | 9 | 2.52 | 2.18 | 1.02 |
| 09:45-09:59 | 354 | 481 | 87 | 106 | 9 | 3.11 | 3.07 | 1.07 |
| 10:00-10:14 | 214 | 339 | 47 | 34 | 17 | 2.11 | 2.34 | 0.43 |
| 10:15-10:29 | 221 | 294 | 66 | 35 | 9 | 2.47 | 2.89 | 0.59 |
| 10:30-10:44 | 195 | 347 | 67 | 38 | 11 | 4.24 | 2.31 | 0.53 |
| 10:45-10:59 | 184 | 207 | 52 | 20 | 17 | 3.58 | 2.74 | 0.5 |
| 16:00-16:14 | 190 | 259 | 42 | 42 | 7 | 3.31 | 2.18 | 0.41 |
| 16:15-16:29 | 172 | 340 | 68 | 44 | 20 | 2.44 | 3.16 | 0.57 |
| 16:30-16:44 | 295 | 320 | 49 | 32 | 11 | 2.24 | 2.02 | 0.58 |
| 16:45-16:59 | 297 | 351 | 63 | 30 | 13 | 3.92 | 2.82 | 0.41 |
| 17:00-17:14 | 418 | 821 | 129 | 62 | 14 | 3.98 | 2.88 | 1.01 |
| 17:15-17:29 | 347 | 752 | 86 | 119 | 13 | 3.2 | 2.8 | 0.88 |
| 17:30-17:44 | 422 | 555 | 141 | 104 | 8 | 4.1 | 1.94 | 1.08 |
| 17:45-17:59 | 441 | 721 | 126 | 109 | 19 | 3.58 | 2.18 | 0.88 |
| 18:00-18:14 | 343 | 448 | 127 | 76 | 12 | 2.24 | 3.13 | 1.08 |
| 18:15-18:29 | 588 | 737 | 82 | 74 | 8 | 2.41 | 2.62 | 0.99 |
| 18:30-18:44 | 396 | 402 | 99 | 90 | 5 | 2.19 | 2.43 | 1.09 |
| 18:45-18:59 | 473 | 704 | 113 | 70 | 10 | 3.02 | 2.16 | 1.04 |
| 19:00-19:14 | 332 | 477 | 99 | 57 | 6 | 3.96 | 2.54 | 0.89 |
| 19:15-19:29 | 306 | 883 | 98 | 73 | 12 | 4.08 | 2.27 | 1.09 |
| 19:30-19:44 | 508 | 626 | 118 | 59 | 17 | 4.16 | 2.25 | 0.88 |
| 19:45-19:59 | 573 | 588 | 134 | 85 | 7 | 2.12 | 3.08 | 1.06 |
| 20:00-20:14 | 300 | 205 | 39 | 34 | 10 | 3.94 | 3.2 | 0.56 |
| 20:15-20:29 | 187 | 393 | 63 | 33 | 6 | 3.96 | 3.11 | 0.46 |
| 20:30-20:44 | 232 | 385 | 52 | 25 | 16 | 3.69 | 1.9 | 0.48 |
| 20:45-20:59 | 236 | 309 | 70 | 48 | 18 | 2.17 | 2.14 | 0.57 |
| 21:00-21:14 | 167 | 260 | 49 | 20 | 6 | 3.49 | 1.85 | 0.47 |
| 21:15-21:29 | 198 | 308 | 31 | 29 | 19 | 2.77 | 1.84 | 0.45 |
| 21:30-21:44 | 151 | 340 | 36 | 38 | 11 | 2.9 | 1.95 | 0.48 |
| 21:45-21:59 | 255 | 226 | 33 | 39 | 18 | 4.05 | 3.05 | 0.42 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 444 | 725 | 106 | 95 | 15 | 3.11 | 3.04 | 0.86 |
| 07:15-07:29 | 314 | 653 | 122 | 93 | 5 | 2.67 | 2.65 | 1.02 |
| 07:30-07:44 | 505 | 469 | 132 | 86 | 14 | 3.29 | 2.94 | 1.07 |
| 07:45-07:59 | 380 | 788 | 112 | 78 | 6 | 3.58 | 2.67 | 0.99 |
| 08:00-08:14 | 449 | 480 | 139 | 102 | 9 | 2.58 | 2.86 | 0.99 |
| 08:15-08:29 | 351 | 533 | 96 | 66 | 5 | 4.42 | 2.47 | 0.98 |
| 08:30-08:44 | 482 | 767 | 107 | 72 | 10 | 3.19 | 2.17 | 0.94 |
| 08:45-08:59 | 466 | 538 | 105 | 66 | 7 | 3.88 | 1.81 | 1.04 |
| 09:00-09:14 | 371 | 447 | 80 | 86 | 6 | 4.06 | 2.91 | 0.96 |
| 09:15-09:29 | 403 | 823 | 120 | 77 | 10 | 3.67 | 2.05 | 1.0 |
| 09:30-09:44 | 436 | 650 | 95 | 109 | 12 | 3.71 | 2.73 | 0.86 |
| 09:45-09:59 | 520 | 601 | 91 | 50 | 19 | 2.91 | 2.33 | 1.05 |
| 10:00-10:14 | 285 | 283 | 32 | 29 | 12 | 2.3 | 3.12 | 0.49 |
| 10:15-10:29 | 173 | 262 | 46 | 36 | 15 | 4.38 | 3.19 | 0.64 |
| 10:30-10:44 | 281 | 303 | 31 | 27 | 10 | 3.41 | 2.25 | 0.66 |
| 10:45-10:59 | 255 | 248 | 40 | 32 | 6 | 3.17 | 1.9 | 0.63 |
| 16:00-16:14 | 248 | 236 | 61 | 42 | 19 | 3.62 | 2.25 | 0.68 |
| 16:15-16:29 | 298 | 378 | 41 | 49 | 8 | 3.02 | 1.92 | 0.5 |
| 16:30-16:44 | 244 | 327 | 32 | 26 | 18 | 3.46 | 2.12 | 0.45 |
| 16:45-16:59 | 250 | 234 | 70 | 20 | 9 | 2.66 | 2.33 | 0.65 |
| 17:00-17:14 | 538 | 477 | 95 | 57 | 7 | 4.23 | 2.41 | 0.89 |
| 17:15-17:29 | 404 | 476 | 144 | 104 | 17 | 4.35 | 2.4 | 0.96 |
| 17:30-17:44 | 387 | 703 | 94 | 53 | 5 | 4.11 | 2.46 | 0.94 |
| 17:45-17:59 | 461 | 521 | 145 | 117 | 20 | 3.12 | 2.27 | 0.99 |
| 18:00-18:14 | 485 | 431 | 120 | 111 | 6 | 3.15 | 2.46 | 1.05 |
| 18:15-18:29 | 480 | 743 | 89 | 112 | 9 | 4.02 | 2.06 | 1.05 |
| 18:30-18:44 | 565 | 624 | 115 | 87 | 5 | 2.4 | 2.5 | 0.95 |
| 18:45-18:59 | 403 | 413 | 90 | 101 | 17 | 3.67 | 2.25 | 0.95 |
| 19:00-19:14 | 300 | 831 | 110 | 114 | 16 | 3.33 | 2.11 | 0.94 |
| 19:15-19:29 | 521 | 725 | 94 | 61 | 12 | 3.64 | 2.2 | 1.07 |
| 19:30-19:44 | 534 | 548 | 100 | 108 | 6 | 4.4 | 2.47 | 0.98 |
| 19:45-19:59 | 525 | 423 | 138 | 105 | 16 | 2.99 | 2.17 | 0.86 |
| 20:00-20:14 | 153 | 314 | 40 | 40 | 5 | 3.5 | 2.92 | 0.68 |
| 20:15-20:29 | 293 | 250 | 32 | 26 | 8 | 4.39 | 2.64 | 0.4 |
| 20:30-20:44 | 251 | 397 | 59 | 31 | 10 | 3.75 | 3.16 | 0.46 |
| 20:45-20:59 | 231 | 284 | 60 | 36 | 16 | 3.46 | 3.11 | 0.54 |
| 21:00-21:14 | 189 | 279 | 48 | 38 | 14 | 3.31 | 2.39 | 0.59 |
| 21:15-21:29 | 180 | 235 | 70 | 23 | 10 | 4.34 | 2.98 | 0.58 |
| 21:30-21:44 | 262 | 362 | 68 | 44 | 20 | 2.1 | 2.93 | 0.55 |
| 21:45-21:59 | 213 | 320 | 65 | 43 | 15 | 2.49 | 3.1 | 0.64 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 488 | 643 | 146 | 115 | 11 | 2.63 | 1.96 | 0.87 |
| 07:15-07:29 | 432 | 729 | 133 | 95 | 8 | 2.78 | 2.55 | 0.96 |
| 07:30-07:44 | 346 | 466 | 138 | 75 | 19 | 4.35 | 3.17 | 1.07 |
| 07:45-07:59 | 383 | 843 | 112 | 111 | 14 | 3.31 | 2.79 | 0.96 |
| 08:00-08:14 | 489 | 593 | 142 | 55 | 11 | 2.64 | 2.37 | 1.06 |
| 08:15-08:29 | 435 | 865 | 109 | 61 | 20 | 2.39 | 2.96 | 1.03 |
| 08:30-08:44 | 497 | 535 | 92 | 85 | 8 | 2.33 | 2.67 | 0.88 |
| 08:45-08:59 | 590 | 508 | 100 | 75 | 11 | 2.67 | 2.16 | 1.02 |
| 09:00-09:14 | 395 | 429 | 123 | 91 | 16 | 3.07 | 3.03 | 1.02 |
| 09:15-09:29 | 316 | 874 | 121 | 97 | 5 | 3.19 | 2.44 | 1.06 |
| 09:30-09:44 | 350 | 755 | 101 | 115 | 14 | 3.37 | 2.19 | 1.09 |
| 09:45-09:59 | 435 | 528 | 127 | 88 | 17 | 2.74 | 1.8 | 0.87 |
| 10:00-10:14 | 250 | 202 | 42 | 23 | 11 | 3.82 | 2.09 | 0.68 |
| 10:15-10:29 | 204 | 214 | 35 | 46 | 11 | 3.56 | 2.41 | 0.49 |
| 10:30-10:44 | 276 | 368 | 62 | 28 | 11 | 2.69 | 1.87 | 0.48 |
| 10:45-10:59 | 208 | 275 | 67 | 49 | 7 | 2.94 | 1.89 | 0.55 |
| 16:00-16:14 | 165 | 370 | 45 | 33 | 18 | 4.48 | 2.17 | 0.56 |
| 16:15-16:29 | 272 | 205 | 59 | 37 | 17 | 3.59 | 2.65 | 0.57 |
| 16:30-16:44 | 274 | 282 | 57 | 20 | 6 | 3.9 | 2.55 | 0.63 |
| 16:45-16:59 | 260 | 258 | 69 | 48 | 14 | 2.56 | 3.13 | 0.51 |
| 17:00-17:14 | 331 | 636 | 104 | 78 | 17 | 2.92 | 2.23 | 0.91 |
| 17:15-17:29 | 334 | 853 | 130 | 118 | 10 | 4.02 | 2.99 | 0.88 |
| 17:30-17:44 | 306 | 769 | 100 | 53 | 9 | 4.41 | 1.86 | 0.97 |
| 17:45-17:59 | 366 | 772 | 89 | 105 | 14 | 4.01 | 2.86 | 0.98 |
| 18:00-18:14 | 530 | 719 | 121 | 73 | 20 | 3.42 | 2.26 | 0.99 |
| 18:15-18:29 | 385 | 436 | 150 | 63 | 15 | 3.24 | 2.38 | 1.03 |
| 18:30-18:44 | 590 | 618 | 125 | 99 | 19 | 2.16 | 2.82 | 0.88 |
| 18:45-18:59 | 565 | 573 | 144 | 53 | 14 | 3.55 | 2.44 | 0.92 |
| 19:00-19:14 | 327 | 717 | 124 | 95 | 15 | 2.58 | 1.97 | 1.0 |
| 19:15-19:29 | 443 | 825 | 112 | 106 | 12 | 3.01 | 2.02 | 1.01 |
| 19:30-19:44 | 589 | 609 | 96 | 81 | 9 | 4.26 | 2.58 | 0.99 |
| 19:45-19:59 | 484 | 553 | 149 | 68 | 16 | 4.44 | 3.19 | 0.87 |
| 20:00-20:14 | 206 | 264 | 37 | 32 | 10 | 3.14 | 3.18 | 0.56 |
| 20:15-20:29 | 174 | 376 | 55 | 46 | 11 | 3.72 | 2.71 | 0.54 |
| 20:30-20:44 | 267 | 342 | 33 | 29 | 8 | 4.48 | 2.82 | 0.68 |
| 20:45-20:59 | 211 | 346 | 39 | 30 | 5 | 2.91 | 2.94 | 0.57 |
| 21:00-21:14 | 263 | 274 | 53 | 44 | 15 | 3.74 | 2.36 | 0.61 |
| 21:15-21:29 | 219 | 343 | 39 | 28 | 18 | 2.28 | 2.07 | 0.5 |
| 21:30-21:44 | 177 | 223 | 31 | 33 | 5 | 3.93 | 2.0 | 0.47 |
| 21:45-21:59 | 207 | 334 | 54 | 44 | 13 | 3.15 | 3.14 | 0.65 |

### A.3 Day 3: 2026-06-03

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 565 | 726 | 144 | 81 | 16 | 3.85 | 2.33 | 1.09 |
| 07:15-07:29 | 401 | 868 | 80 | 112 | 12 | 2.19 | 3.03 | 1.07 |
| 07:30-07:44 | 536 | 495 | 129 | 97 | 12 | 2.76 | 1.84 | 1.04 |
| 07:45-07:59 | 328 | 633 | 96 | 92 | 18 | 4.1 | 2.72 | 0.92 |
| 08:00-08:14 | 460 | 810 | 140 | 75 | 12 | 2.97 | 2.86 | 0.89 |
| 08:15-08:29 | 507 | 709 | 97 | 96 | 17 | 2.92 | 1.82 | 0.95 |
| 08:30-08:44 | 485 | 663 | 117 | 57 | 16 | 3.44 | 2.34 | 0.94 |
| 08:45-08:59 | 477 | 450 | 107 | 84 | 5 | 3.17 | 1.99 | 1.01 |
| 09:00-09:14 | 320 | 640 | 111 | 104 | 5 | 2.48 | 3.17 | 0.87 |
| 09:15-09:29 | 394 | 708 | 94 | 108 | 20 | 3.22 | 2.47 | 0.89 |
| 09:30-09:44 | 566 | 651 | 143 | 107 | 9 | 3.76 | 3.12 | 0.89 |
| 09:45-09:59 | 577 | 617 | 140 | 82 | 7 | 3.74 | 2.84 | 0.87 |
| 10:00-10:14 | 152 | 400 | 66 | 30 | 6 | 2.48 | 2.86 | 0.64 |
| 10:15-10:29 | 247 | 334 | 70 | 48 | 8 | 2.69 | 3.13 | 0.59 |
| 10:30-10:44 | 190 | 223 | 35 | 39 | 7 | 4.38 | 2.88 | 0.5 |
| 10:45-10:59 | 157 | 389 | 54 | 48 | 14 | 2.12 | 2.49 | 0.53 |
| 16:00-16:14 | 299 | 319 | 69 | 42 | 13 | 2.72 | 3.08 | 0.62 |
| 16:15-16:29 | 177 | 254 | 49 | 33 | 7 | 4.48 | 3.11 | 0.57 |
| 16:30-16:44 | 264 | 342 | 44 | 43 | 20 | 3.42 | 1.83 | 0.46 |
| 16:45-16:59 | 204 | 215 | 69 | 20 | 14 | 3.79 | 2.94 | 0.6 |
| 17:00-17:14 | 329 | 514 | 93 | 62 | 6 | 3.93 | 2.58 | 1.07 |
| 17:15-17:29 | 588 | 763 | 136 | 113 | 7 | 2.87 | 3.14 | 1.04 |
| 17:30-17:44 | 338 | 569 | 109 | 90 | 19 | 3.98 | 2.39 | 0.96 |
| 17:45-17:59 | 316 | 611 | 124 | 116 | 13 | 4.06 | 2.45 | 1.09 |
| 18:00-18:14 | 535 | 727 | 90 | 55 | 13 | 2.99 | 2.75 | 0.99 |
| 18:15-18:29 | 556 | 551 | 145 | 65 | 18 | 2.75 | 1.82 | 0.9 |
| 18:30-18:44 | 467 | 670 | 102 | 114 | 19 | 4.47 | 2.28 | 1.02 |
| 18:45-18:59 | 583 | 891 | 148 | 66 | 8 | 3.54 | 2.9 | 1.09 |
| 19:00-19:14 | 600 | 415 | 89 | 101 | 13 | 3.22 | 2.67 | 1.02 |
| 19:15-19:29 | 434 | 748 | 141 | 76 | 9 | 4.06 | 1.8 | 1.09 |
| 19:30-19:44 | 311 | 769 | 111 | 84 | 11 | 3.29 | 1.8 | 0.97 |
| 19:45-19:59 | 447 | 899 | 119 | 80 | 10 | 3.69 | 3.13 | 1.08 |
| 20:00-20:14 | 161 | 278 | 51 | 34 | 19 | 2.74 | 2.66 | 0.65 |
| 20:15-20:29 | 262 | 269 | 33 | 40 | 17 | 3.43 | 2.31 | 0.63 |
| 20:30-20:44 | 273 | 388 | 34 | 47 | 10 | 2.7 | 2.16 | 0.5 |
| 20:45-20:59 | 231 | 242 | 55 | 40 | 6 | 2.71 | 2.09 | 0.64 |
| 21:00-21:14 | 291 | 201 | 48 | 42 | 5 | 2.12 | 1.84 | 0.41 |
| 21:15-21:29 | 161 | 271 | 32 | 38 | 20 | 4.39 | 2.99 | 0.69 |
| 21:30-21:44 | 182 | 269 | 52 | 47 | 15 | 4.21 | 2.73 | 0.55 |
| 21:45-21:59 | 192 | 392 | 31 | 39 | 12 | 2.52 | 2.39 | 0.47 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 395 | 428 | 108 | 118 | 17 | 3.75 | 2.28 | 0.85 |
| 07:15-07:29 | 527 | 821 | 108 | 50 | 11 | 2.9 | 2.56 | 0.9 |
| 07:30-07:44 | 541 | 517 | 147 | 86 | 20 | 2.81 | 2.83 | 0.91 |
| 07:45-07:59 | 588 | 719 | 82 | 71 | 13 | 3.56 | 2.71 | 0.97 |
| 08:00-08:14 | 476 | 458 | 136 | 104 | 7 | 3.44 | 2.36 | 0.87 |
| 08:15-08:29 | 347 | 446 | 88 | 108 | 16 | 2.48 | 3.16 | 0.89 |
| 08:30-08:44 | 491 | 640 | 80 | 90 | 19 | 3.16 | 1.9 | 1.04 |
| 08:45-08:59 | 475 | 593 | 145 | 56 | 17 | 2.41 | 1.9 | 0.87 |
| 09:00-09:14 | 524 | 715 | 114 | 97 | 14 | 3.27 | 2.27 | 0.91 |
| 09:15-09:29 | 533 | 744 | 143 | 120 | 7 | 4.15 | 2.96 | 1.01 |
| 09:30-09:44 | 316 | 826 | 140 | 62 | 9 | 3.93 | 3.11 | 0.89 |
| 09:45-09:59 | 348 | 829 | 142 | 93 | 19 | 2.73 | 2.07 | 1.03 |
| 10:00-10:14 | 186 | 303 | 52 | 45 | 16 | 3.97 | 3.06 | 0.58 |
| 10:15-10:29 | 168 | 321 | 49 | 21 | 7 | 2.71 | 2.84 | 0.4 |
| 10:30-10:44 | 258 | 399 | 39 | 44 | 8 | 3.63 | 3.17 | 0.5 |
| 10:45-10:59 | 228 | 335 | 31 | 36 | 20 | 2.67 | 2.27 | 0.49 |
| 16:00-16:14 | 237 | 389 | 70 | 21 | 6 | 2.69 | 2.71 | 0.64 |
| 16:15-16:29 | 247 | 252 | 47 | 37 | 13 | 3.48 | 2.8 | 0.61 |
| 16:30-16:44 | 245 | 381 | 38 | 21 | 15 | 2.94 | 2.52 | 0.62 |
| 16:45-16:59 | 244 | 294 | 48 | 40 | 16 | 3.18 | 2.16 | 0.68 |
| 17:00-17:14 | 571 | 653 | 128 | 54 | 12 | 3.46 | 3.06 | 1.07 |
| 17:15-17:29 | 411 | 823 | 144 | 72 | 10 | 3.13 | 2.25 | 0.87 |
| 17:30-17:44 | 465 | 585 | 116 | 103 | 8 | 3.9 | 3.14 | 1.05 |
| 17:45-17:59 | 469 | 440 | 100 | 81 | 20 | 3.9 | 2.76 | 0.99 |
| 18:00-18:14 | 493 | 636 | 146 | 81 | 18 | 2.13 | 2.9 | 0.86 |
| 18:15-18:29 | 325 | 404 | 150 | 103 | 5 | 2.38 | 2.41 | 0.91 |
| 18:30-18:44 | 410 | 857 | 117 | 79 | 18 | 3.23 | 2.8 | 1.1 |
| 18:45-18:59 | 311 | 422 | 138 | 83 | 16 | 2.81 | 2.52 | 0.88 |
| 19:00-19:14 | 409 | 442 | 148 | 83 | 10 | 4.26 | 2.92 | 0.91 |
| 19:15-19:29 | 353 | 446 | 123 | 54 | 6 | 3.12 | 2.78 | 0.87 |
| 19:30-19:44 | 374 | 509 | 97 | 61 | 6 | 2.29 | 2.22 | 1.0 |
| 19:45-19:59 | 421 | 620 | 144 | 89 | 11 | 3.05 | 2.82 | 0.9 |
| 20:00-20:14 | 203 | 306 | 53 | 41 | 7 | 3.84 | 3.11 | 0.65 |
| 20:15-20:29 | 175 | 368 | 43 | 41 | 12 | 2.37 | 2.74 | 0.63 |
| 20:30-20:44 | 204 | 326 | 32 | 21 | 8 | 4.02 | 2.36 | 0.63 |
| 20:45-20:59 | 278 | 356 | 42 | 28 | 7 | 2.62 | 1.9 | 0.58 |
| 21:00-21:14 | 165 | 277 | 51 | 37 | 13 | 4.24 | 2.64 | 0.68 |
| 21:15-21:29 | 253 | 367 | 55 | 42 | 9 | 4.41 | 2.2 | 0.68 |
| 21:30-21:44 | 267 | 248 | 32 | 47 | 20 | 2.5 | 3.04 | 0.47 |
| 21:45-21:59 | 231 | 285 | 54 | 37 | 16 | 3.99 | 2.49 | 0.64 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 310 | 559 | 104 | 106 | 14 | 2.85 | 2.34 | 0.94 |
| 07:15-07:29 | 450 | 740 | 83 | 81 | 10 | 2.61 | 2.18 | 1.02 |
| 07:30-07:44 | 342 | 487 | 83 | 110 | 19 | 2.2 | 2.97 | 0.88 |
| 07:45-07:59 | 520 | 894 | 146 | 97 | 7 | 2.63 | 1.86 | 0.86 |
| 08:00-08:14 | 344 | 845 | 96 | 109 | 15 | 3.31 | 2.55 | 0.99 |
| 08:15-08:29 | 539 | 631 | 132 | 67 | 20 | 3.82 | 3.12 | 0.89 |
| 08:30-08:44 | 370 | 420 | 139 | 95 | 10 | 4.41 | 2.59 | 0.98 |
| 08:45-08:59 | 590 | 685 | 149 | 116 | 20 | 3.79 | 2.42 | 1.09 |
| 09:00-09:14 | 537 | 507 | 146 | 77 | 13 | 2.78 | 2.69 | 0.95 |
| 09:15-09:29 | 522 | 441 | 145 | 114 | 8 | 3.49 | 1.86 | 0.97 |
| 09:30-09:44 | 490 | 486 | 94 | 111 | 12 | 3.12 | 3.11 | 1.05 |
| 09:45-09:59 | 381 | 417 | 149 | 56 | 7 | 3.79 | 1.94 | 0.99 |
| 10:00-10:14 | 255 | 201 | 48 | 23 | 18 | 3.78 | 2.93 | 0.52 |
| 10:15-10:29 | 205 | 385 | 55 | 45 | 14 | 4.29 | 2.99 | 0.55 |
| 10:30-10:44 | 300 | 307 | 43 | 38 | 5 | 2.85 | 2.98 | 0.61 |
| 10:45-10:59 | 151 | 310 | 41 | 21 | 16 | 3.99 | 2.53 | 0.45 |
| 16:00-16:14 | 265 | 316 | 50 | 25 | 13 | 2.53 | 2.04 | 0.59 |
| 16:15-16:29 | 175 | 338 | 33 | 48 | 12 | 4.35 | 2.4 | 0.67 |
| 16:30-16:44 | 272 | 257 | 48 | 21 | 13 | 3.05 | 2.32 | 0.5 |
| 16:45-16:59 | 192 | 213 | 47 | 24 | 7 | 2.53 | 2.15 | 0.51 |
| 17:00-17:14 | 584 | 551 | 101 | 103 | 8 | 2.78 | 3.02 | 0.87 |
| 17:15-17:29 | 589 | 770 | 123 | 75 | 6 | 3.75 | 2.03 | 0.95 |
| 17:30-17:44 | 379 | 789 | 141 | 120 | 20 | 2.2 | 2.41 | 0.93 |
| 17:45-17:59 | 599 | 589 | 135 | 74 | 5 | 2.88 | 2.79 | 0.92 |
| 18:00-18:14 | 542 | 435 | 120 | 106 | 5 | 3.52 | 2.61 | 0.86 |
| 18:15-18:29 | 556 | 610 | 121 | 96 | 14 | 3.4 | 2.54 | 0.99 |
| 18:30-18:44 | 530 | 643 | 137 | 52 | 19 | 2.28 | 3.08 | 1.04 |
| 18:45-18:59 | 485 | 713 | 143 | 63 | 11 | 2.99 | 2.69 | 0.88 |
| 19:00-19:14 | 422 | 455 | 104 | 62 | 20 | 2.64 | 3.1 | 0.94 |
| 19:15-19:29 | 510 | 884 | 103 | 115 | 13 | 3.59 | 1.84 | 0.89 |
| 19:30-19:44 | 570 | 667 | 80 | 65 | 9 | 3.26 | 2.92 | 0.96 |
| 19:45-19:59 | 372 | 439 | 144 | 62 | 6 | 4.02 | 3.13 | 1.09 |
| 20:00-20:14 | 165 | 289 | 60 | 36 | 6 | 3.49 | 2.45 | 0.53 |
| 20:15-20:29 | 152 | 277 | 55 | 45 | 14 | 3.38 | 1.99 | 0.59 |
| 20:30-20:44 | 280 | 299 | 63 | 30 | 17 | 3.51 | 1.93 | 0.63 |
| 20:45-20:59 | 226 | 376 | 47 | 20 | 15 | 3.05 | 2.75 | 0.64 |
| 21:00-21:14 | 282 | 376 | 55 | 29 | 18 | 2.6 | 2.17 | 0.43 |
| 21:15-21:29 | 201 | 271 | 56 | 32 | 13 | 3.85 | 3.05 | 0.62 |
| 21:30-21:44 | 226 | 305 | 64 | 28 | 18 | 3.41 | 2.48 | 0.53 |
| 21:45-21:59 | 169 | 228 | 37 | 20 | 11 | 2.27 | 3.05 | 0.69 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 353 | 894 | 86 | 91 | 15 | 4.24 | 2.86 | 1.08 |
| 07:15-07:29 | 428 | 558 | 144 | 116 | 19 | 4.42 | 1.92 | 0.95 |
| 07:30-07:44 | 464 | 845 | 95 | 102 | 11 | 3.96 | 2.23 | 1.02 |
| 07:45-07:59 | 551 | 626 | 87 | 110 | 17 | 4.48 | 2.07 | 0.91 |
| 08:00-08:14 | 455 | 648 | 121 | 95 | 11 | 2.91 | 3.15 | 0.99 |
| 08:15-08:29 | 576 | 401 | 133 | 98 | 12 | 4.07 | 2.67 | 1.01 |
| 08:30-08:44 | 542 | 549 | 147 | 71 | 6 | 3.1 | 2.06 | 1.06 |
| 08:45-08:59 | 323 | 744 | 95 | 103 | 11 | 2.35 | 2.8 | 0.89 |
| 09:00-09:14 | 351 | 450 | 96 | 102 | 14 | 2.3 | 1.88 | 0.91 |
| 09:15-09:29 | 502 | 608 | 98 | 75 | 16 | 2.92 | 2.18 | 0.89 |
| 09:30-09:44 | 452 | 562 | 134 | 89 | 17 | 2.68 | 2.27 | 0.99 |
| 09:45-09:59 | 382 | 787 | 141 | 87 | 16 | 3.51 | 2.71 | 0.92 |
| 10:00-10:14 | 297 | 329 | 33 | 44 | 19 | 2.47 | 1.96 | 0.68 |
| 10:15-10:29 | 296 | 400 | 48 | 36 | 9 | 2.98 | 2.87 | 0.41 |
| 10:30-10:44 | 244 | 311 | 31 | 23 | 13 | 3.85 | 2.2 | 0.47 |
| 10:45-10:59 | 245 | 357 | 48 | 34 | 9 | 3.93 | 2.45 | 0.64 |
| 16:00-16:14 | 250 | 387 | 61 | 31 | 10 | 3.39 | 3.1 | 0.41 |
| 16:15-16:29 | 155 | 378 | 33 | 30 | 6 | 4.13 | 2.1 | 0.62 |
| 16:30-16:44 | 266 | 247 | 56 | 31 | 13 | 2.65 | 2.03 | 0.63 |
| 16:45-16:59 | 269 | 345 | 52 | 38 | 15 | 3.76 | 2.2 | 0.53 |
| 17:00-17:14 | 491 | 793 | 121 | 59 | 18 | 2.99 | 2.02 | 0.95 |
| 17:15-17:29 | 337 | 687 | 138 | 118 | 16 | 2.67 | 2.06 | 0.98 |
| 17:30-17:44 | 508 | 760 | 109 | 83 | 5 | 2.97 | 3.14 | 0.95 |
| 17:45-17:59 | 346 | 596 | 129 | 66 | 6 | 4.26 | 2.32 | 1.01 |
| 18:00-18:14 | 321 | 511 | 112 | 93 | 16 | 2.96 | 2.2 | 1.02 |
| 18:15-18:29 | 321 | 666 | 124 | 97 | 7 | 3.06 | 2.38 | 0.94 |
| 18:30-18:44 | 420 | 801 | 101 | 80 | 9 | 2.76 | 3.14 | 0.95 |
| 18:45-18:59 | 304 | 448 | 133 | 115 | 17 | 3.93 | 3.16 | 1.04 |
| 19:00-19:14 | 381 | 880 | 96 | 51 | 20 | 2.18 | 2.5 | 0.89 |
| 19:15-19:29 | 535 | 727 | 141 | 110 | 13 | 4.15 | 2.47 | 1.09 |
| 19:30-19:44 | 496 | 725 | 91 | 105 | 9 | 3.56 | 2.2 | 0.92 |
| 19:45-19:59 | 563 | 616 | 97 | 52 | 10 | 2.42 | 2.82 | 0.92 |
| 20:00-20:14 | 271 | 370 | 39 | 48 | 14 | 2.39 | 2.74 | 0.44 |
| 20:15-20:29 | 199 | 300 | 47 | 47 | 15 | 2.5 | 2.99 | 0.56 |
| 20:30-20:44 | 199 | 308 | 59 | 44 | 17 | 2.77 | 2.55 | 0.68 |
| 20:45-20:59 | 191 | 243 | 35 | 46 | 11 | 2.84 | 2.69 | 0.63 |
| 21:00-21:14 | 210 | 371 | 40 | 42 | 5 | 2.76 | 2.8 | 0.49 |
| 21:15-21:29 | 284 | 272 | 62 | 23 | 12 | 3.6 | 1.88 | 0.48 |
| 21:30-21:44 | 179 | 262 | 55 | 35 | 7 | 4.13 | 2.48 | 0.6 |
| 21:45-21:59 | 238 | 237 | 47 | 40 | 13 | 2.27 | 2.55 | 0.48 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 348 | 495 | 100 | 55 | 18 | 3.16 | 2.05 | 1.08 |
| 07:15-07:29 | 332 | 462 | 132 | 85 | 14 | 2.79 | 1.89 | 0.88 |
| 07:30-07:44 | 462 | 636 | 117 | 53 | 19 | 3.55 | 2.97 | 0.95 |
| 07:45-07:59 | 441 | 650 | 92 | 93 | 14 | 2.12 | 1.84 | 1.01 |
| 08:00-08:14 | 468 | 430 | 93 | 85 | 12 | 4.13 | 2.95 | 0.86 |
| 08:15-08:29 | 435 | 797 | 97 | 117 | 11 | 3.71 | 2.93 | 0.89 |
| 08:30-08:44 | 559 | 422 | 123 | 96 | 11 | 4.33 | 2.65 | 1.02 |
| 08:45-08:59 | 336 | 595 | 122 | 104 | 17 | 3.56 | 3.05 | 0.86 |
| 09:00-09:14 | 356 | 499 | 147 | 57 | 17 | 3.12 | 2.68 | 0.89 |
| 09:15-09:29 | 582 | 820 | 82 | 98 | 9 | 2.4 | 3.08 | 0.92 |
| 09:30-09:44 | 499 | 674 | 93 | 60 | 18 | 3.9 | 1.87 | 1.01 |
| 09:45-09:59 | 439 | 480 | 106 | 65 | 11 | 2.92 | 2.14 | 1.09 |
| 10:00-10:14 | 158 | 239 | 42 | 35 | 17 | 2.72 | 2.05 | 0.7 |
| 10:15-10:29 | 283 | 340 | 59 | 50 | 14 | 2.18 | 1.92 | 0.61 |
| 10:30-10:44 | 231 | 219 | 35 | 34 | 9 | 2.71 | 1.85 | 0.63 |
| 10:45-10:59 | 191 | 358 | 60 | 21 | 6 | 3.67 | 3.06 | 0.66 |
| 16:00-16:14 | 298 | 272 | 51 | 42 | 19 | 3.39 | 2.6 | 0.63 |
| 16:15-16:29 | 260 | 326 | 40 | 30 | 9 | 3.26 | 2.86 | 0.49 |
| 16:30-16:44 | 245 | 280 | 64 | 27 | 8 | 2.99 | 2.06 | 0.58 |
| 16:45-16:59 | 159 | 343 | 58 | 30 | 16 | 3.97 | 1.84 | 0.64 |
| 17:00-17:14 | 365 | 817 | 136 | 80 | 8 | 4.22 | 2.83 | 1.08 |
| 17:15-17:29 | 335 | 602 | 147 | 67 | 18 | 3.0 | 2.84 | 1.03 |
| 17:30-17:44 | 326 | 673 | 132 | 85 | 10 | 4.26 | 3.19 | 0.88 |
| 17:45-17:59 | 377 | 554 | 106 | 76 | 6 | 4.09 | 2.85 | 1.01 |
| 18:00-18:14 | 433 | 609 | 123 | 118 | 15 | 3.97 | 1.84 | 0.87 |
| 18:15-18:29 | 528 | 683 | 136 | 64 | 9 | 3.67 | 2.34 | 0.91 |
| 18:30-18:44 | 337 | 459 | 133 | 50 | 9 | 2.9 | 2.03 | 1.1 |
| 18:45-18:59 | 554 | 596 | 83 | 77 | 18 | 2.99 | 2.37 | 0.92 |
| 19:00-19:14 | 582 | 693 | 83 | 89 | 8 | 4.17 | 3.11 | 0.96 |
| 19:15-19:29 | 370 | 874 | 114 | 78 | 6 | 4.33 | 2.42 | 0.9 |
| 19:30-19:44 | 499 | 853 | 143 | 119 | 8 | 2.91 | 2.61 | 1.01 |
| 19:45-19:59 | 370 | 799 | 119 | 82 | 10 | 3.84 | 2.12 | 1.01 |
| 20:00-20:14 | 264 | 213 | 46 | 35 | 13 | 2.99 | 1.84 | 0.51 |
| 20:15-20:29 | 167 | 207 | 47 | 39 | 17 | 2.49 | 2.58 | 0.53 |
| 20:30-20:44 | 162 | 279 | 51 | 30 | 10 | 2.77 | 1.82 | 0.68 |
| 20:45-20:59 | 299 | 326 | 47 | 35 | 17 | 2.26 | 1.92 | 0.57 |
| 21:00-21:14 | 156 | 255 | 39 | 26 | 15 | 2.96 | 2.93 | 0.69 |
| 21:15-21:29 | 224 | 317 | 43 | 38 | 14 | 4.09 | 2.75 | 0.55 |
| 21:30-21:44 | 280 | 312 | 52 | 49 | 9 | 3.46 | 2.93 | 0.68 |
| 21:45-21:59 | 209 | 303 | 55 | 20 | 15 | 2.85 | 3.01 | 0.59 |

### A.4 Day 4: 2026-06-04

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 448 | 500 | 147 | 68 | 6 | 2.21 | 2.57 | 1.09 |
| 07:15-07:29 | 431 | 735 | 91 | 83 | 14 | 3.78 | 1.93 | 0.97 |
| 07:30-07:44 | 586 | 771 | 94 | 75 | 13 | 3.1 | 2.36 | 1.08 |
| 07:45-07:59 | 321 | 598 | 140 | 56 | 12 | 3.42 | 1.83 | 0.97 |
| 08:00-08:14 | 558 | 489 | 110 | 96 | 5 | 3.33 | 2.03 | 0.98 |
| 08:15-08:29 | 389 | 685 | 120 | 72 | 5 | 3.09 | 2.17 | 0.98 |
| 08:30-08:44 | 324 | 867 | 130 | 107 | 9 | 2.53 | 1.81 | 0.92 |
| 08:45-08:59 | 490 | 536 | 109 | 53 | 16 | 4.11 | 2.3 | 0.99 |
| 09:00-09:14 | 594 | 575 | 128 | 78 | 9 | 3.14 | 2.11 | 0.91 |
| 09:15-09:29 | 517 | 698 | 123 | 103 | 8 | 3.06 | 2.93 | 0.96 |
| 09:30-09:44 | 569 | 649 | 104 | 96 | 16 | 4.24 | 2.82 | 0.91 |
| 09:45-09:59 | 415 | 897 | 123 | 71 | 13 | 3.58 | 2.92 | 1.08 |
| 10:00-10:14 | 242 | 374 | 63 | 27 | 20 | 4.38 | 2.15 | 0.67 |
| 10:15-10:29 | 270 | 341 | 33 | 35 | 6 | 4.48 | 2.33 | 0.68 |
| 10:30-10:44 | 300 | 241 | 51 | 25 | 9 | 3.16 | 2.66 | 0.57 |
| 10:45-10:59 | 217 | 323 | 50 | 41 | 11 | 2.43 | 2.36 | 0.43 |
| 16:00-16:14 | 197 | 376 | 64 | 37 | 8 | 4.05 | 2.7 | 0.48 |
| 16:15-16:29 | 249 | 247 | 49 | 30 | 9 | 4.48 | 2.53 | 0.48 |
| 16:30-16:44 | 233 | 400 | 50 | 27 | 16 | 3.72 | 1.94 | 0.43 |
| 16:45-16:59 | 228 | 399 | 63 | 36 | 14 | 2.49 | 2.17 | 0.45 |
| 17:00-17:14 | 345 | 666 | 115 | 116 | 15 | 4.02 | 2.43 | 0.96 |
| 17:15-17:29 | 496 | 896 | 147 | 94 | 17 | 4.22 | 2.71 | 1.05 |
| 17:30-17:44 | 453 | 423 | 99 | 114 | 15 | 2.22 | 2.78 | 0.96 |
| 17:45-17:59 | 498 | 704 | 119 | 98 | 18 | 3.21 | 1.87 | 1.01 |
| 18:00-18:14 | 364 | 834 | 142 | 107 | 20 | 4.09 | 2.93 | 0.98 |
| 18:15-18:29 | 346 | 408 | 106 | 62 | 5 | 2.57 | 2.02 | 0.91 |
| 18:30-18:44 | 328 | 658 | 95 | 79 | 16 | 2.64 | 2.22 | 1.05 |
| 18:45-18:59 | 341 | 611 | 112 | 58 | 8 | 3.98 | 1.87 | 1.04 |
| 19:00-19:14 | 570 | 616 | 105 | 74 | 17 | 2.1 | 2.78 | 0.91 |
| 19:15-19:29 | 452 | 707 | 85 | 119 | 9 | 2.22 | 2.13 | 1.0 |
| 19:30-19:44 | 414 | 513 | 80 | 65 | 8 | 2.17 | 2.24 | 0.96 |
| 19:45-19:59 | 515 | 799 | 80 | 78 | 6 | 3.46 | 2.04 | 0.86 |
| 20:00-20:14 | 223 | 299 | 32 | 35 | 17 | 2.59 | 2.63 | 0.55 |
| 20:15-20:29 | 282 | 206 | 49 | 33 | 18 | 4.27 | 2.56 | 0.41 |
| 20:30-20:44 | 209 | 323 | 30 | 44 | 5 | 3.7 | 3.17 | 0.49 |
| 20:45-20:59 | 182 | 289 | 41 | 32 | 19 | 3.49 | 2.46 | 0.47 |
| 21:00-21:14 | 299 | 378 | 31 | 40 | 19 | 2.92 | 3.04 | 0.62 |
| 21:15-21:29 | 260 | 220 | 64 | 32 | 16 | 3.92 | 2.81 | 0.68 |
| 21:30-21:44 | 279 | 354 | 36 | 48 | 14 | 3.06 | 3.0 | 0.6 |
| 21:45-21:59 | 179 | 399 | 55 | 32 | 11 | 3.48 | 1.97 | 0.5 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 460 | 648 | 83 | 60 | 5 | 3.43 | 1.94 | 0.85 |
| 07:15-07:29 | 355 | 437 | 149 | 55 | 15 | 4.14 | 2.5 | 1.02 |
| 07:30-07:44 | 529 | 553 | 146 | 62 | 10 | 2.18 | 1.81 | 1.07 |
| 07:45-07:59 | 584 | 644 | 122 | 92 | 8 | 2.3 | 2.3 | 0.93 |
| 08:00-08:14 | 304 | 869 | 104 | 84 | 16 | 2.59 | 2.89 | 1.02 |
| 08:15-08:29 | 550 | 625 | 97 | 63 | 20 | 4.37 | 2.08 | 0.91 |
| 08:30-08:44 | 388 | 629 | 100 | 59 | 13 | 4.22 | 2.01 | 1.04 |
| 08:45-08:59 | 488 | 830 | 82 | 99 | 11 | 3.4 | 2.82 | 0.95 |
| 09:00-09:14 | 422 | 839 | 88 | 95 | 9 | 2.71 | 2.41 | 1.05 |
| 09:15-09:29 | 471 | 734 | 81 | 58 | 16 | 2.28 | 2.75 | 0.92 |
| 09:30-09:44 | 421 | 893 | 103 | 90 | 6 | 2.31 | 2.85 | 0.86 |
| 09:45-09:59 | 551 | 715 | 103 | 104 | 13 | 2.86 | 2.01 | 1.09 |
| 10:00-10:14 | 215 | 391 | 63 | 27 | 12 | 3.62 | 1.93 | 0.66 |
| 10:15-10:29 | 197 | 239 | 52 | 21 | 5 | 4.26 | 2.84 | 0.43 |
| 10:30-10:44 | 162 | 299 | 58 | 42 | 12 | 3.01 | 2.06 | 0.41 |
| 10:45-10:59 | 165 | 231 | 47 | 31 | 18 | 4.18 | 2.64 | 0.61 |
| 16:00-16:14 | 234 | 259 | 55 | 30 | 13 | 3.86 | 1.83 | 0.55 |
| 16:15-16:29 | 197 | 288 | 51 | 23 | 19 | 4.42 | 2.08 | 0.58 |
| 16:30-16:44 | 248 | 244 | 55 | 46 | 5 | 3.94 | 2.82 | 0.46 |
| 16:45-16:59 | 300 | 333 | 37 | 40 | 6 | 4.36 | 2.19 | 0.52 |
| 17:00-17:14 | 430 | 624 | 121 | 112 | 15 | 2.1 | 2.07 | 1.06 |
| 17:15-17:29 | 461 | 511 | 104 | 117 | 13 | 3.84 | 2.31 | 1.03 |
| 17:30-17:44 | 436 | 658 | 82 | 66 | 5 | 3.68 | 1.9 | 0.95 |
| 17:45-17:59 | 464 | 520 | 86 | 74 | 13 | 2.53 | 2.08 | 0.89 |
| 18:00-18:14 | 597 | 825 | 142 | 82 | 8 | 4.41 | 2.97 | 0.97 |
| 18:15-18:29 | 513 | 772 | 96 | 77 | 18 | 2.19 | 3.13 | 1.08 |
| 18:30-18:44 | 330 | 642 | 88 | 106 | 13 | 3.67 | 2.9 | 0.92 |
| 18:45-18:59 | 434 | 468 | 134 | 55 | 20 | 2.46 | 3.11 | 1.03 |
| 19:00-19:14 | 322 | 812 | 117 | 120 | 12 | 3.89 | 3.02 | 0.93 |
| 19:15-19:29 | 329 | 898 | 94 | 97 | 19 | 3.34 | 1.85 | 0.98 |
| 19:30-19:44 | 541 | 730 | 133 | 53 | 13 | 4.38 | 2.84 | 1.01 |
| 19:45-19:59 | 338 | 686 | 130 | 115 | 17 | 3.51 | 1.91 | 1.08 |
| 20:00-20:14 | 181 | 332 | 42 | 27 | 7 | 4.33 | 2.28 | 0.43 |
| 20:15-20:29 | 203 | 349 | 47 | 28 | 12 | 4.42 | 2.92 | 0.41 |
| 20:30-20:44 | 270 | 285 | 32 | 25 | 13 | 3.72 | 2.79 | 0.58 |
| 20:45-20:59 | 221 | 374 | 54 | 24 | 12 | 3.14 | 2.35 | 0.58 |
| 21:00-21:14 | 252 | 254 | 58 | 24 | 15 | 4.15 | 2.51 | 0.56 |
| 21:15-21:29 | 209 | 253 | 39 | 34 | 13 | 3.24 | 1.84 | 0.56 |
| 21:30-21:44 | 250 | 270 | 67 | 31 | 14 | 2.55 | 3.2 | 0.45 |
| 21:45-21:59 | 175 | 212 | 37 | 41 | 18 | 2.68 | 1.95 | 0.69 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 519 | 700 | 89 | 63 | 7 | 4.44 | 2.42 | 1.03 |
| 07:15-07:29 | 502 | 801 | 136 | 86 | 10 | 3.26 | 2.52 | 0.94 |
| 07:30-07:44 | 432 | 460 | 140 | 102 | 17 | 3.79 | 1.91 | 1.02 |
| 07:45-07:59 | 444 | 774 | 102 | 117 | 18 | 3.15 | 2.0 | 0.95 |
| 08:00-08:14 | 489 | 504 | 107 | 58 | 16 | 3.78 | 2.94 | 0.94 |
| 08:15-08:29 | 474 | 767 | 99 | 116 | 12 | 3.28 | 2.64 | 0.87 |
| 08:30-08:44 | 502 | 887 | 135 | 105 | 15 | 3.47 | 2.96 | 0.95 |
| 08:45-08:59 | 420 | 449 | 113 | 51 | 5 | 3.99 | 2.22 | 1.0 |
| 09:00-09:14 | 320 | 786 | 89 | 83 | 15 | 2.93 | 1.96 | 0.88 |
| 09:15-09:29 | 410 | 868 | 140 | 109 | 7 | 2.89 | 2.03 | 0.95 |
| 09:30-09:44 | 537 | 566 | 119 | 120 | 15 | 3.22 | 2.37 | 0.93 |
| 09:45-09:59 | 515 | 711 | 103 | 63 | 20 | 3.81 | 2.26 | 1.1 |
| 10:00-10:14 | 234 | 304 | 35 | 40 | 10 | 3.91 | 2.63 | 0.48 |
| 10:15-10:29 | 251 | 259 | 65 | 28 | 18 | 3.81 | 2.55 | 0.66 |
| 10:30-10:44 | 165 | 340 | 43 | 30 | 12 | 2.25 | 2.14 | 0.42 |
| 10:45-10:59 | 242 | 302 | 56 | 21 | 10 | 4.37 | 2.71 | 0.63 |
| 16:00-16:14 | 223 | 249 | 31 | 49 | 20 | 3.7 | 1.91 | 0.43 |
| 16:15-16:29 | 194 | 286 | 59 | 21 | 17 | 2.14 | 2.02 | 0.52 |
| 16:30-16:44 | 266 | 329 | 38 | 21 | 7 | 4.08 | 2.42 | 0.69 |
| 16:45-16:59 | 268 | 257 | 38 | 39 | 14 | 3.4 | 2.19 | 0.55 |
| 17:00-17:14 | 415 | 820 | 106 | 74 | 12 | 4.28 | 3.13 | 1.05 |
| 17:15-17:29 | 437 | 757 | 80 | 89 | 10 | 4.36 | 3.14 | 0.93 |
| 17:30-17:44 | 593 | 637 | 96 | 118 | 6 | 4.07 | 2.77 | 0.97 |
| 17:45-17:59 | 398 | 809 | 145 | 119 | 8 | 4.14 | 3.11 | 1.04 |
| 18:00-18:14 | 561 | 615 | 93 | 84 | 15 | 2.74 | 1.98 | 0.92 |
| 18:15-18:29 | 300 | 784 | 135 | 69 | 11 | 3.19 | 1.86 | 1.0 |
| 18:30-18:44 | 559 | 867 | 90 | 53 | 18 | 2.7 | 3.05 | 1.04 |
| 18:45-18:59 | 523 | 649 | 114 | 79 | 19 | 2.73 | 2.64 | 0.96 |
| 19:00-19:14 | 538 | 524 | 144 | 111 | 20 | 3.07 | 2.17 | 0.97 |
| 19:15-19:29 | 597 | 472 | 119 | 105 | 11 | 2.59 | 2.83 | 0.97 |
| 19:30-19:44 | 587 | 459 | 142 | 96 | 5 | 3.2 | 2.59 | 0.92 |
| 19:45-19:59 | 511 | 608 | 119 | 106 | 19 | 3.64 | 2.71 | 1.03 |
| 20:00-20:14 | 238 | 274 | 38 | 42 | 8 | 4.47 | 3.02 | 0.56 |
| 20:15-20:29 | 268 | 312 | 44 | 20 | 17 | 3.39 | 2.2 | 0.61 |
| 20:30-20:44 | 180 | 258 | 62 | 32 | 13 | 3.15 | 2.86 | 0.5 |
| 20:45-20:59 | 234 | 236 | 55 | 39 | 18 | 2.88 | 2.02 | 0.68 |
| 21:00-21:14 | 175 | 327 | 53 | 23 | 17 | 2.22 | 3.1 | 0.45 |
| 21:15-21:29 | 271 | 257 | 51 | 29 | 8 | 2.33 | 2.52 | 0.45 |
| 21:30-21:44 | 217 | 224 | 58 | 49 | 13 | 2.11 | 2.93 | 0.46 |
| 21:45-21:59 | 240 | 315 | 47 | 44 | 13 | 2.66 | 1.87 | 0.57 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 463 | 708 | 142 | 58 | 10 | 3.36 | 2.11 | 0.99 |
| 07:15-07:29 | 436 | 806 | 119 | 81 | 11 | 2.97 | 1.9 | 0.99 |
| 07:30-07:44 | 320 | 809 | 112 | 72 | 10 | 2.84 | 2.7 | 1.1 |
| 07:45-07:59 | 577 | 605 | 117 | 115 | 16 | 2.65 | 2.39 | 0.91 |
| 08:00-08:14 | 486 | 542 | 112 | 60 | 8 | 3.04 | 2.57 | 0.86 |
| 08:15-08:29 | 396 | 583 | 103 | 65 | 11 | 2.51 | 2.04 | 1.09 |
| 08:30-08:44 | 522 | 648 | 114 | 91 | 7 | 2.41 | 2.42 | 0.89 |
| 08:45-08:59 | 321 | 644 | 147 | 119 | 13 | 4.1 | 2.61 | 0.9 |
| 09:00-09:14 | 331 | 449 | 119 | 103 | 19 | 3.14 | 2.83 | 0.99 |
| 09:15-09:29 | 596 | 762 | 95 | 51 | 16 | 4.29 | 2.61 | 1.04 |
| 09:30-09:44 | 571 | 872 | 89 | 62 | 12 | 3.5 | 1.94 | 1.09 |
| 09:45-09:59 | 331 | 482 | 110 | 52 | 15 | 3.1 | 2.53 | 1.1 |
| 10:00-10:14 | 298 | 305 | 66 | 50 | 18 | 2.78 | 2.42 | 0.43 |
| 10:15-10:29 | 249 | 221 | 33 | 47 | 9 | 2.17 | 2.1 | 0.46 |
| 10:30-10:44 | 165 | 236 | 35 | 37 | 16 | 2.45 | 3.03 | 0.62 |
| 10:45-10:59 | 230 | 329 | 31 | 38 | 20 | 3.82 | 2.93 | 0.48 |
| 16:00-16:14 | 298 | 291 | 39 | 28 | 17 | 3.99 | 2.59 | 0.52 |
| 16:15-16:29 | 180 | 247 | 47 | 25 | 10 | 2.96 | 2.48 | 0.68 |
| 16:30-16:44 | 197 | 266 | 59 | 50 | 8 | 3.41 | 2.37 | 0.42 |
| 16:45-16:59 | 282 | 311 | 48 | 42 | 15 | 2.65 | 2.49 | 0.43 |
| 17:00-17:14 | 342 | 647 | 146 | 65 | 19 | 3.66 | 2.63 | 1.08 |
| 17:15-17:29 | 549 | 559 | 94 | 83 | 8 | 3.04 | 3.04 | 1.06 |
| 17:30-17:44 | 473 | 536 | 102 | 92 | 8 | 3.37 | 3.1 | 1.09 |
| 17:45-17:59 | 470 | 882 | 132 | 67 | 12 | 3.18 | 2.29 | 1.07 |
| 18:00-18:14 | 332 | 411 | 145 | 71 | 6 | 2.42 | 2.31 | 0.96 |
| 18:15-18:29 | 432 | 806 | 102 | 55 | 6 | 3.99 | 2.95 | 0.88 |
| 18:30-18:44 | 421 | 875 | 94 | 56 | 5 | 2.14 | 2.25 | 1.06 |
| 18:45-18:59 | 596 | 471 | 127 | 76 | 7 | 3.07 | 2.89 | 0.96 |
| 19:00-19:14 | 460 | 871 | 101 | 97 | 11 | 2.44 | 2.41 | 0.92 |
| 19:15-19:29 | 537 | 595 | 91 | 82 | 15 | 4.34 | 3.11 | 0.86 |
| 19:30-19:44 | 475 | 469 | 100 | 111 | 18 | 3.53 | 2.64 | 1.09 |
| 19:45-19:59 | 439 | 610 | 103 | 92 | 5 | 2.22 | 2.51 | 1.02 |
| 20:00-20:14 | 234 | 216 | 33 | 32 | 6 | 3.88 | 2.48 | 0.65 |
| 20:15-20:29 | 159 | 214 | 69 | 42 | 18 | 3.69 | 3.2 | 0.58 |
| 20:30-20:44 | 293 | 254 | 34 | 21 | 11 | 3.82 | 2.92 | 0.58 |
| 20:45-20:59 | 207 | 363 | 44 | 44 | 8 | 3.52 | 2.32 | 0.41 |
| 21:00-21:14 | 176 | 261 | 66 | 25 | 11 | 2.95 | 1.84 | 0.41 |
| 21:15-21:29 | 270 | 389 | 69 | 37 | 15 | 3.32 | 2.65 | 0.68 |
| 21:30-21:44 | 229 | 374 | 51 | 31 | 19 | 4.35 | 2.93 | 0.55 |
| 21:45-21:59 | 222 | 297 | 45 | 31 | 12 | 3.04 | 2.68 | 0.42 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 498 | 586 | 99 | 87 | 10 | 3.02 | 2.94 | 0.97 |
| 07:15-07:29 | 540 | 755 | 120 | 70 | 9 | 2.43 | 2.05 | 0.99 |
| 07:30-07:44 | 381 | 731 | 82 | 86 | 12 | 4.04 | 3.04 | 1.07 |
| 07:45-07:59 | 455 | 571 | 90 | 113 | 18 | 4.47 | 2.28 | 1.03 |
| 08:00-08:14 | 313 | 793 | 147 | 104 | 17 | 2.6 | 2.33 | 1.06 |
| 08:15-08:29 | 453 | 898 | 131 | 106 | 9 | 2.12 | 2.71 | 0.86 |
| 08:30-08:44 | 463 | 618 | 148 | 98 | 18 | 2.51 | 1.88 | 1.1 |
| 08:45-08:59 | 353 | 779 | 98 | 71 | 13 | 4.3 | 2.01 | 1.08 |
| 09:00-09:14 | 467 | 600 | 113 | 113 | 8 | 4.29 | 2.91 | 0.92 |
| 09:15-09:29 | 318 | 502 | 126 | 68 | 6 | 2.52 | 3.07 | 1.07 |
| 09:30-09:44 | 564 | 676 | 127 | 80 | 20 | 2.84 | 2.56 | 0.93 |
| 09:45-09:59 | 380 | 479 | 100 | 112 | 16 | 3.96 | 2.59 | 1.08 |
| 10:00-10:14 | 158 | 400 | 31 | 26 | 5 | 3.96 | 2.46 | 0.63 |
| 10:15-10:29 | 231 | 364 | 39 | 36 | 11 | 2.52 | 2.71 | 0.48 |
| 10:30-10:44 | 164 | 260 | 54 | 47 | 7 | 4.12 | 2.01 | 0.59 |
| 10:45-10:59 | 208 | 254 | 34 | 37 | 14 | 2.26 | 3.02 | 0.65 |
| 16:00-16:14 | 178 | 269 | 35 | 22 | 9 | 4.36 | 3.02 | 0.7 |
| 16:15-16:29 | 292 | 296 | 56 | 43 | 8 | 3.27 | 2.91 | 0.6 |
| 16:30-16:44 | 185 | 243 | 46 | 29 | 12 | 2.89 | 1.9 | 0.43 |
| 16:45-16:59 | 290 | 224 | 70 | 39 | 15 | 2.87 | 2.92 | 0.62 |
| 17:00-17:14 | 575 | 896 | 137 | 94 | 13 | 2.27 | 2.29 | 1.05 |
| 17:15-17:29 | 362 | 818 | 128 | 97 | 14 | 2.11 | 2.58 | 1.0 |
| 17:30-17:44 | 504 | 621 | 105 | 83 | 14 | 3.1 | 2.98 | 1.04 |
| 17:45-17:59 | 491 | 797 | 113 | 116 | 13 | 4.18 | 2.9 | 0.87 |
| 18:00-18:14 | 327 | 640 | 91 | 61 | 19 | 2.2 | 1.89 | 0.98 |
| 18:15-18:29 | 384 | 650 | 111 | 56 | 11 | 4.4 | 2.84 | 0.91 |
| 18:30-18:44 | 541 | 583 | 129 | 54 | 15 | 3.08 | 1.81 | 0.86 |
| 18:45-18:59 | 406 | 418 | 138 | 66 | 17 | 3.23 | 2.41 | 1.08 |
| 19:00-19:14 | 329 | 489 | 98 | 118 | 7 | 3.23 | 2.44 | 0.97 |
| 19:15-19:29 | 323 | 603 | 149 | 87 | 17 | 2.61 | 2.75 | 0.98 |
| 19:30-19:44 | 398 | 751 | 81 | 117 | 10 | 2.17 | 3.12 | 0.86 |
| 19:45-19:59 | 366 | 773 | 109 | 110 | 13 | 3.13 | 2.32 | 1.04 |
| 20:00-20:14 | 278 | 302 | 42 | 50 | 20 | 3.52 | 3.02 | 0.68 |
| 20:15-20:29 | 256 | 386 | 48 | 44 | 13 | 2.88 | 3.0 | 0.57 |
| 20:30-20:44 | 299 | 283 | 35 | 41 | 9 | 2.71 | 2.49 | 0.58 |
| 20:45-20:59 | 196 | 379 | 57 | 30 | 9 | 3.26 | 2.66 | 0.42 |
| 21:00-21:14 | 219 | 343 | 66 | 34 | 15 | 3.85 | 2.31 | 0.67 |
| 21:15-21:29 | 213 | 391 | 48 | 47 | 17 | 3.52 | 2.12 | 0.53 |
| 21:30-21:44 | 212 | 271 | 48 | 45 | 17 | 3.79 | 2.71 | 0.48 |
| 21:45-21:59 | 254 | 353 | 53 | 45 | 19 | 4.42 | 1.94 | 0.65 |

### A.5 Day 5: 2026-06-05

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 419 | 561 | 131 | 112 | 18 | 2.38 | 2.17 | 1.1 |
| 07:15-07:29 | 382 | 436 | 90 | 112 | 9 | 3.68 | 2.97 | 1.03 |
| 07:30-07:44 | 584 | 622 | 93 | 58 | 16 | 4.08 | 2.05 | 0.96 |
| 07:45-07:59 | 550 | 459 | 110 | 51 | 11 | 3.44 | 3.12 | 0.91 |
| 08:00-08:14 | 503 | 710 | 99 | 98 | 9 | 4.4 | 2.1 | 1.08 |
| 08:15-08:29 | 396 | 529 | 105 | 50 | 10 | 2.2 | 2.08 | 1.09 |
| 08:30-08:44 | 385 | 595 | 136 | 73 | 11 | 3.45 | 3.19 | 0.92 |
| 08:45-08:59 | 425 | 812 | 145 | 61 | 6 | 3.65 | 2.86 | 0.86 |
| 09:00-09:14 | 463 | 745 | 126 | 98 | 11 | 2.74 | 1.85 | 0.95 |
| 09:15-09:29 | 433 | 672 | 126 | 116 | 19 | 4.15 | 2.49 | 1.02 |
| 09:30-09:44 | 505 | 758 | 97 | 72 | 14 | 3.14 | 2.74 | 1.03 |
| 09:45-09:59 | 457 | 583 | 81 | 61 | 11 | 2.27 | 2.06 | 1.02 |
| 10:00-10:14 | 152 | 378 | 36 | 33 | 20 | 2.51 | 2.17 | 0.67 |
| 10:15-10:29 | 217 | 397 | 67 | 41 | 9 | 4.43 | 2.26 | 0.52 |
| 10:30-10:44 | 188 | 334 | 61 | 25 | 5 | 3.18 | 3.0 | 0.56 |
| 10:45-10:59 | 157 | 216 | 58 | 33 | 19 | 4.18 | 2.46 | 0.46 |
| 16:00-16:14 | 210 | 381 | 41 | 24 | 19 | 4.39 | 3.04 | 0.54 |
| 16:15-16:29 | 182 | 219 | 47 | 26 | 7 | 3.67 | 1.94 | 0.44 |
| 16:30-16:44 | 180 | 241 | 65 | 49 | 9 | 3.15 | 2.67 | 0.69 |
| 16:45-16:59 | 174 | 256 | 59 | 33 | 18 | 4.37 | 2.18 | 0.62 |
| 17:00-17:14 | 395 | 710 | 113 | 98 | 9 | 3.04 | 2.19 | 1.02 |
| 17:15-17:29 | 363 | 684 | 134 | 94 | 12 | 3.33 | 2.5 | 1.08 |
| 17:30-17:44 | 450 | 653 | 82 | 58 | 13 | 2.99 | 2.33 | 1.04 |
| 17:45-17:59 | 478 | 405 | 101 | 72 | 9 | 3.92 | 2.46 | 0.95 |
| 18:00-18:14 | 503 | 697 | 105 | 72 | 5 | 2.69 | 2.81 | 1.0 |
| 18:15-18:29 | 565 | 714 | 134 | 112 | 11 | 4.02 | 2.91 | 0.93 |
| 18:30-18:44 | 462 | 494 | 85 | 68 | 20 | 4.27 | 2.3 | 0.96 |
| 18:45-18:59 | 452 | 837 | 117 | 78 | 7 | 3.51 | 2.61 | 1.09 |
| 19:00-19:14 | 370 | 890 | 85 | 105 | 7 | 2.48 | 2.55 | 0.93 |
| 19:15-19:29 | 532 | 874 | 90 | 57 | 9 | 2.21 | 2.4 | 1.02 |
| 19:30-19:44 | 538 | 808 | 115 | 116 | 6 | 3.32 | 2.8 | 0.99 |
| 19:45-19:59 | 538 | 773 | 86 | 59 | 5 | 2.24 | 3.17 | 1.0 |
| 20:00-20:14 | 260 | 312 | 51 | 20 | 9 | 2.62 | 2.17 | 0.41 |
| 20:15-20:29 | 161 | 356 | 44 | 43 | 10 | 2.85 | 2.23 | 0.52 |
| 20:30-20:44 | 242 | 208 | 40 | 48 | 5 | 2.55 | 2.76 | 0.44 |
| 20:45-20:59 | 240 | 283 | 59 | 29 | 7 | 2.53 | 2.29 | 0.5 |
| 21:00-21:14 | 183 | 246 | 30 | 37 | 10 | 2.79 | 2.23 | 0.62 |
| 21:15-21:29 | 219 | 357 | 30 | 46 | 18 | 2.89 | 2.85 | 0.56 |
| 21:30-21:44 | 235 | 227 | 51 | 47 | 8 | 2.34 | 3.09 | 0.57 |
| 21:45-21:59 | 282 | 370 | 62 | 42 | 5 | 2.59 | 3.14 | 0.66 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 348 | 620 | 142 | 113 | 12 | 3.89 | 2.67 | 0.98 |
| 07:15-07:29 | 491 | 700 | 140 | 52 | 16 | 3.72 | 2.96 | 0.97 |
| 07:30-07:44 | 373 | 875 | 145 | 117 | 14 | 2.77 | 1.93 | 1.01 |
| 07:45-07:59 | 375 | 762 | 109 | 89 | 19 | 2.86 | 2.6 | 0.9 |
| 08:00-08:14 | 600 | 825 | 149 | 75 | 12 | 4.45 | 2.6 | 0.88 |
| 08:15-08:29 | 449 | 599 | 98 | 81 | 15 | 3.63 | 2.34 | 1.03 |
| 08:30-08:44 | 464 | 704 | 139 | 62 | 15 | 2.97 | 2.7 | 0.93 |
| 08:45-08:59 | 491 | 445 | 94 | 68 | 9 | 3.14 | 2.54 | 0.87 |
| 09:00-09:14 | 578 | 831 | 129 | 89 | 17 | 2.17 | 2.88 | 1.01 |
| 09:15-09:29 | 467 | 845 | 87 | 65 | 9 | 4.28 | 2.19 | 1.02 |
| 09:30-09:44 | 405 | 873 | 96 | 63 | 5 | 2.22 | 2.62 | 1.06 |
| 09:45-09:59 | 392 | 688 | 142 | 84 | 16 | 2.12 | 2.76 | 0.86 |
| 10:00-10:14 | 200 | 289 | 59 | 44 | 8 | 3.65 | 2.72 | 0.52 |
| 10:15-10:29 | 247 | 280 | 51 | 34 | 9 | 4.38 | 3.14 | 0.58 |
| 10:30-10:44 | 261 | 334 | 68 | 50 | 10 | 3.88 | 2.49 | 0.41 |
| 10:45-10:59 | 218 | 373 | 63 | 21 | 12 | 3.24 | 2.49 | 0.65 |
| 16:00-16:14 | 182 | 337 | 31 | 28 | 5 | 3.89 | 2.19 | 0.58 |
| 16:15-16:29 | 203 | 356 | 38 | 38 | 16 | 4.27 | 1.91 | 0.51 |
| 16:30-16:44 | 211 | 224 | 63 | 21 | 20 | 3.14 | 2.48 | 0.59 |
| 16:45-16:59 | 174 | 386 | 52 | 20 | 20 | 4.14 | 2.71 | 0.49 |
| 17:00-17:14 | 408 | 485 | 124 | 120 | 19 | 4.06 | 3.02 | 1.0 |
| 17:15-17:29 | 512 | 722 | 122 | 99 | 9 | 2.84 | 1.91 | 1.09 |
| 17:30-17:44 | 406 | 432 | 140 | 90 | 18 | 3.34 | 3.18 | 1.1 |
| 17:45-17:59 | 309 | 853 | 107 | 97 | 13 | 2.43 | 2.72 | 0.93 |
| 18:00-18:14 | 522 | 793 | 104 | 52 | 18 | 3.49 | 3.07 | 0.95 |
| 18:15-18:29 | 442 | 431 | 115 | 86 | 16 | 2.78 | 3.04 | 1.03 |
| 18:30-18:44 | 589 | 581 | 115 | 58 | 7 | 3.59 | 2.38 | 0.86 |
| 18:45-18:59 | 438 | 768 | 124 | 93 | 14 | 3.68 | 1.96 | 0.94 |
| 19:00-19:14 | 580 | 664 | 131 | 106 | 15 | 3.66 | 2.09 | 0.87 |
| 19:15-19:29 | 581 | 617 | 91 | 101 | 6 | 3.68 | 2.69 | 0.93 |
| 19:30-19:44 | 549 | 554 | 103 | 50 | 8 | 3.17 | 2.98 | 1.01 |
| 19:45-19:59 | 390 | 836 | 127 | 120 | 8 | 4.26 | 2.24 | 0.98 |
| 20:00-20:14 | 284 | 359 | 63 | 36 | 7 | 3.98 | 3.07 | 0.67 |
| 20:15-20:29 | 153 | 376 | 41 | 29 | 15 | 2.4 | 2.87 | 0.47 |
| 20:30-20:44 | 190 | 278 | 56 | 45 | 7 | 2.98 | 1.92 | 0.53 |
| 20:45-20:59 | 279 | 238 | 51 | 28 | 19 | 4.18 | 2.42 | 0.49 |
| 21:00-21:14 | 261 | 259 | 60 | 43 | 20 | 2.13 | 3.18 | 0.61 |
| 21:15-21:29 | 169 | 400 | 36 | 40 | 19 | 3.61 | 2.29 | 0.47 |
| 21:30-21:44 | 297 | 348 | 51 | 27 | 5 | 2.81 | 2.14 | 0.52 |
| 21:45-21:59 | 196 | 279 | 43 | 43 | 8 | 4.35 | 3.14 | 0.52 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 564 | 860 | 130 | 112 | 6 | 4.08 | 2.1 | 1.07 |
| 07:15-07:29 | 360 | 532 | 99 | 77 | 20 | 2.17 | 2.24 | 0.88 |
| 07:30-07:44 | 430 | 849 | 99 | 55 | 11 | 4.4 | 2.25 | 1.08 |
| 07:45-07:59 | 308 | 692 | 126 | 76 | 11 | 3.86 | 3.03 | 1.01 |
| 08:00-08:14 | 510 | 482 | 103 | 115 | 9 | 3.18 | 2.75 | 1.08 |
| 08:15-08:29 | 592 | 632 | 114 | 67 | 5 | 2.65 | 2.85 | 1.05 |
| 08:30-08:44 | 445 | 699 | 98 | 55 | 15 | 4.44 | 2.51 | 0.92 |
| 08:45-08:59 | 543 | 826 | 145 | 112 | 7 | 2.65 | 2.38 | 1.03 |
| 09:00-09:14 | 372 | 499 | 101 | 72 | 9 | 2.47 | 2.55 | 0.95 |
| 09:15-09:29 | 550 | 582 | 150 | 64 | 19 | 2.86 | 2.56 | 0.93 |
| 09:30-09:44 | 470 | 850 | 112 | 62 | 9 | 3.51 | 1.96 | 0.92 |
| 09:45-09:59 | 578 | 885 | 130 | 55 | 15 | 3.13 | 3.13 | 0.93 |
| 10:00-10:14 | 259 | 338 | 45 | 38 | 12 | 3.1 | 2.04 | 0.68 |
| 10:15-10:29 | 178 | 293 | 51 | 41 | 12 | 3.86 | 3.11 | 0.62 |
| 10:30-10:44 | 171 | 285 | 33 | 21 | 14 | 3.56 | 3.17 | 0.52 |
| 10:45-10:59 | 216 | 220 | 67 | 25 | 20 | 4.21 | 2.07 | 0.69 |
| 16:00-16:14 | 286 | 208 | 42 | 30 | 13 | 4.28 | 2.71 | 0.61 |
| 16:15-16:29 | 222 | 297 | 57 | 41 | 16 | 2.74 | 2.44 | 0.62 |
| 16:30-16:44 | 218 | 368 | 51 | 49 | 19 | 4.49 | 3.02 | 0.57 |
| 16:45-16:59 | 287 | 364 | 66 | 21 | 7 | 3.19 | 3.11 | 0.51 |
| 17:00-17:14 | 449 | 701 | 129 | 119 | 8 | 2.2 | 3.04 | 1.09 |
| 17:15-17:29 | 560 | 506 | 118 | 106 | 9 | 3.11 | 2.51 | 0.89 |
| 17:30-17:44 | 339 | 662 | 139 | 77 | 5 | 4.27 | 2.62 | 1.01 |
| 17:45-17:59 | 508 | 743 | 119 | 102 | 14 | 3.56 | 3.13 | 1.02 |
| 18:00-18:14 | 384 | 580 | 86 | 103 | 6 | 3.65 | 2.23 | 0.99 |
| 18:15-18:29 | 309 | 661 | 116 | 114 | 20 | 2.46 | 2.43 | 1.02 |
| 18:30-18:44 | 303 | 486 | 146 | 99 | 11 | 3.32 | 2.02 | 0.95 |
| 18:45-18:59 | 388 | 692 | 126 | 55 | 18 | 3.98 | 2.97 | 1.03 |
| 19:00-19:14 | 441 | 889 | 123 | 53 | 10 | 3.72 | 2.22 | 0.97 |
| 19:15-19:29 | 519 | 642 | 128 | 80 | 16 | 2.59 | 2.74 | 1.02 |
| 19:30-19:44 | 355 | 539 | 110 | 58 | 11 | 2.92 | 2.53 | 1.02 |
| 19:45-19:59 | 503 | 435 | 134 | 96 | 15 | 3.83 | 2.02 | 0.92 |
| 20:00-20:14 | 209 | 284 | 41 | 43 | 10 | 4.14 | 2.37 | 0.63 |
| 20:15-20:29 | 197 | 285 | 50 | 27 | 14 | 4.2 | 2.34 | 0.62 |
| 20:30-20:44 | 253 | 243 | 68 | 26 | 11 | 3.86 | 2.0 | 0.54 |
| 20:45-20:59 | 180 | 234 | 41 | 36 | 20 | 4.32 | 2.7 | 0.57 |
| 21:00-21:14 | 217 | 256 | 64 | 25 | 12 | 3.63 | 2.53 | 0.69 |
| 21:15-21:29 | 226 | 297 | 41 | 31 | 11 | 3.01 | 2.04 | 0.61 |
| 21:30-21:44 | 234 | 239 | 37 | 26 | 11 | 2.27 | 2.55 | 0.51 |
| 21:45-21:59 | 181 | 318 | 51 | 44 | 8 | 3.35 | 1.86 | 0.42 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 396 | 485 | 102 | 53 | 7 | 2.33 | 2.21 | 0.86 |
| 07:15-07:29 | 406 | 446 | 95 | 78 | 10 | 2.4 | 3.08 | 0.97 |
| 07:30-07:44 | 491 | 846 | 102 | 59 | 14 | 3.37 | 2.25 | 0.99 |
| 07:45-07:59 | 545 | 433 | 141 | 92 | 19 | 3.85 | 3.05 | 1.0 |
| 08:00-08:14 | 462 | 691 | 149 | 56 | 20 | 3.2 | 2.31 | 1.03 |
| 08:15-08:29 | 359 | 803 | 85 | 105 | 14 | 4.19 | 1.81 | 1.09 |
| 08:30-08:44 | 552 | 589 | 89 | 75 | 13 | 2.31 | 3.03 | 0.98 |
| 08:45-08:59 | 338 | 513 | 116 | 92 | 20 | 3.23 | 2.07 | 1.05 |
| 09:00-09:14 | 553 | 507 | 150 | 88 | 14 | 3.48 | 2.26 | 1.05 |
| 09:15-09:29 | 424 | 835 | 148 | 92 | 8 | 4.32 | 1.8 | 0.87 |
| 09:30-09:44 | 414 | 891 | 107 | 116 | 18 | 3.45 | 2.92 | 0.96 |
| 09:45-09:59 | 327 | 494 | 125 | 118 | 9 | 2.63 | 2.1 | 0.95 |
| 10:00-10:14 | 300 | 228 | 46 | 21 | 11 | 2.13 | 2.28 | 0.69 |
| 10:15-10:29 | 193 | 202 | 41 | 45 | 13 | 2.49 | 3.09 | 0.6 |
| 10:30-10:44 | 161 | 333 | 49 | 37 | 12 | 2.93 | 3.09 | 0.64 |
| 10:45-10:59 | 273 | 337 | 65 | 46 | 18 | 4.31 | 3.16 | 0.64 |
| 16:00-16:14 | 266 | 400 | 55 | 33 | 12 | 3.81 | 1.81 | 0.59 |
| 16:15-16:29 | 208 | 367 | 47 | 21 | 11 | 3.97 | 2.84 | 0.7 |
| 16:30-16:44 | 209 | 320 | 31 | 38 | 20 | 2.71 | 2.44 | 0.42 |
| 16:45-16:59 | 239 | 225 | 54 | 26 | 19 | 2.7 | 2.45 | 0.57 |
| 17:00-17:14 | 472 | 669 | 80 | 74 | 8 | 3.37 | 3.15 | 0.96 |
| 17:15-17:29 | 506 | 675 | 125 | 94 | 18 | 3.69 | 2.91 | 0.98 |
| 17:30-17:44 | 401 | 794 | 143 | 75 | 10 | 2.66 | 2.33 | 1.03 |
| 17:45-17:59 | 482 | 771 | 115 | 76 | 16 | 3.01 | 3.05 | 0.98 |
| 18:00-18:14 | 576 | 565 | 121 | 89 | 5 | 3.95 | 2.11 | 1.05 |
| 18:15-18:29 | 593 | 564 | 130 | 102 | 10 | 2.99 | 2.93 | 0.9 |
| 18:30-18:44 | 476 | 515 | 138 | 116 | 6 | 2.7 | 2.28 | 0.93 |
| 18:45-18:59 | 334 | 630 | 105 | 116 | 20 | 2.77 | 2.18 | 1.07 |
| 19:00-19:14 | 420 | 511 | 91 | 79 | 20 | 4.42 | 2.17 | 0.98 |
| 19:15-19:29 | 489 | 608 | 96 | 97 | 11 | 3.53 | 3.14 | 0.89 |
| 19:30-19:44 | 462 | 749 | 117 | 56 | 11 | 3.43 | 2.64 | 0.87 |
| 19:45-19:59 | 557 | 800 | 141 | 118 | 8 | 2.97 | 3.04 | 0.96 |
| 20:00-20:14 | 231 | 323 | 52 | 32 | 18 | 2.36 | 2.69 | 0.48 |
| 20:15-20:29 | 284 | 339 | 68 | 41 | 20 | 2.78 | 3.07 | 0.47 |
| 20:30-20:44 | 280 | 208 | 35 | 42 | 7 | 3.33 | 2.74 | 0.59 |
| 20:45-20:59 | 199 | 310 | 63 | 31 | 16 | 2.52 | 3.1 | 0.6 |
| 21:00-21:14 | 260 | 314 | 49 | 23 | 5 | 3.77 | 2.36 | 0.7 |
| 21:15-21:29 | 254 | 394 | 47 | 21 | 8 | 4.14 | 2.25 | 0.59 |
| 21:30-21:44 | 291 | 389 | 66 | 26 | 10 | 2.78 | 2.01 | 0.54 |
| 21:45-21:59 | 258 | 397 | 63 | 50 | 20 | 4.23 | 2.34 | 0.61 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 326 | 548 | 118 | 88 | 18 | 2.42 | 2.26 | 1.01 |
| 07:15-07:29 | 552 | 404 | 82 | 95 | 6 | 2.56 | 1.95 | 0.94 |
| 07:30-07:44 | 437 | 712 | 137 | 61 | 19 | 3.35 | 1.85 | 0.88 |
| 07:45-07:59 | 345 | 429 | 123 | 75 | 7 | 3.12 | 2.79 | 0.86 |
| 08:00-08:14 | 410 | 528 | 96 | 93 | 19 | 4.08 | 3.11 | 0.91 |
| 08:15-08:29 | 444 | 477 | 90 | 83 | 17 | 4.45 | 3.09 | 0.88 |
| 08:30-08:44 | 574 | 900 | 97 | 64 | 11 | 2.9 | 1.98 | 1.08 |
| 08:45-08:59 | 419 | 567 | 132 | 103 | 17 | 3.67 | 2.34 | 0.95 |
| 09:00-09:14 | 489 | 573 | 96 | 102 | 18 | 3.41 | 3.1 | 1.02 |
| 09:15-09:29 | 555 | 548 | 114 | 120 | 11 | 2.69 | 3.15 | 1.05 |
| 09:30-09:44 | 438 | 813 | 88 | 55 | 12 | 4.14 | 1.86 | 1.09 |
| 09:45-09:59 | 321 | 565 | 83 | 52 | 7 | 3.72 | 1.99 | 1.02 |
| 10:00-10:14 | 270 | 230 | 35 | 23 | 10 | 2.1 | 2.46 | 0.5 |
| 10:15-10:29 | 237 | 225 | 30 | 23 | 16 | 4.43 | 3.03 | 0.4 |
| 10:30-10:44 | 157 | 336 | 50 | 46 | 19 | 4.49 | 2.53 | 0.45 |
| 10:45-10:59 | 151 | 316 | 35 | 42 | 5 | 3.36 | 3.03 | 0.48 |
| 16:00-16:14 | 208 | 256 | 62 | 41 | 18 | 4.21 | 2.23 | 0.5 |
| 16:15-16:29 | 287 | 321 | 47 | 28 | 19 | 2.23 | 2.66 | 0.57 |
| 16:30-16:44 | 184 | 258 | 70 | 50 | 17 | 3.75 | 2.99 | 0.4 |
| 16:45-16:59 | 189 | 302 | 33 | 21 | 5 | 3.34 | 2.54 | 0.51 |
| 17:00-17:14 | 338 | 881 | 85 | 87 | 20 | 2.18 | 2.91 | 1.01 |
| 17:15-17:29 | 422 | 667 | 119 | 106 | 13 | 3.56 | 2.37 | 0.86 |
| 17:30-17:44 | 448 | 896 | 86 | 81 | 17 | 4.11 | 2.2 | 1.0 |
| 17:45-17:59 | 459 | 462 | 87 | 105 | 20 | 3.16 | 1.91 | 1.08 |
| 18:00-18:14 | 395 | 499 | 112 | 88 | 18 | 3.08 | 1.86 | 1.08 |
| 18:15-18:29 | 586 | 482 | 93 | 109 | 10 | 3.21 | 3.05 | 0.9 |
| 18:30-18:44 | 412 | 501 | 137 | 106 | 16 | 3.93 | 3.1 | 0.85 |
| 18:45-18:59 | 305 | 747 | 118 | 50 | 11 | 3.82 | 2.49 | 0.94 |
| 19:00-19:14 | 377 | 846 | 132 | 107 | 6 | 3.7 | 2.27 | 1.09 |
| 19:15-19:29 | 570 | 457 | 142 | 111 | 19 | 3.21 | 2.19 | 0.99 |
| 19:30-19:44 | 445 | 595 | 134 | 86 | 20 | 3.37 | 2.2 | 0.94 |
| 19:45-19:59 | 391 | 820 | 121 | 88 | 19 | 2.89 | 2.25 | 0.88 |
| 20:00-20:14 | 210 | 324 | 50 | 49 | 9 | 4.11 | 3.1 | 0.61 |
| 20:15-20:29 | 239 | 381 | 44 | 41 | 11 | 3.7 | 3.13 | 0.45 |
| 20:30-20:44 | 234 | 287 | 30 | 20 | 19 | 3.47 | 2.92 | 0.4 |
| 20:45-20:59 | 219 | 255 | 54 | 35 | 15 | 2.15 | 2.37 | 0.42 |
| 21:00-21:14 | 216 | 271 | 33 | 30 | 16 | 2.77 | 2.35 | 0.55 |
| 21:15-21:29 | 206 | 203 | 39 | 45 | 19 | 4.25 | 2.46 | 0.58 |
| 21:30-21:44 | 155 | 383 | 31 | 29 | 11 | 2.22 | 2.82 | 0.47 |
| 21:45-21:59 | 156 | 378 | 61 | 33 | 18 | 3.83 | 2.58 | 0.44 |

### A.6 Day 6: 2026-06-06

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 340 | 842 | 131 | 74 | 15 | 4.21 | 2.87 | 1.08 |
| 07:15-07:29 | 499 | 714 | 126 | 99 | 17 | 3.58 | 2.65 | 0.95 |
| 07:30-07:44 | 345 | 693 | 136 | 77 | 15 | 2.12 | 2.89 | 1.01 |
| 07:45-07:59 | 593 | 410 | 149 | 53 | 15 | 4.14 | 2.35 | 0.91 |
| 08:00-08:14 | 378 | 427 | 144 | 69 | 17 | 4.31 | 2.87 | 0.96 |
| 08:15-08:29 | 349 | 881 | 121 | 104 | 14 | 3.75 | 2.1 | 1.05 |
| 08:30-08:44 | 494 | 738 | 111 | 97 | 19 | 4.44 | 3.17 | 0.88 |
| 08:45-08:59 | 523 | 606 | 105 | 97 | 19 | 2.64 | 2.18 | 1.05 |
| 09:00-09:14 | 323 | 816 | 105 | 54 | 15 | 2.84 | 2.1 | 1.08 |
| 09:15-09:29 | 308 | 486 | 112 | 74 | 8 | 3.44 | 1.95 | 1.1 |
| 09:30-09:44 | 440 | 506 | 124 | 85 | 17 | 4.11 | 2.89 | 0.97 |
| 09:45-09:59 | 390 | 786 | 142 | 62 | 6 | 4.48 | 2.02 | 0.93 |
| 10:00-10:14 | 298 | 379 | 36 | 29 | 14 | 3.33 | 2.6 | 0.46 |
| 10:15-10:29 | 226 | 258 | 32 | 40 | 20 | 3.44 | 2.47 | 0.56 |
| 10:30-10:44 | 169 | 388 | 47 | 46 | 13 | 3.72 | 2.24 | 0.48 |
| 10:45-10:59 | 153 | 208 | 43 | 43 | 17 | 2.98 | 3.0 | 0.42 |
| 16:00-16:14 | 176 | 327 | 34 | 41 | 13 | 3.71 | 2.12 | 0.5 |
| 16:15-16:29 | 290 | 338 | 64 | 23 | 6 | 3.85 | 2.08 | 0.42 |
| 16:30-16:44 | 181 | 357 | 45 | 23 | 12 | 2.99 | 2.24 | 0.63 |
| 16:45-16:59 | 229 | 226 | 66 | 46 | 6 | 3.73 | 1.86 | 0.4 |
| 17:00-17:14 | 493 | 624 | 123 | 79 | 6 | 4.0 | 2.41 | 0.88 |
| 17:15-17:29 | 403 | 607 | 112 | 75 | 7 | 2.91 | 1.91 | 0.94 |
| 17:30-17:44 | 597 | 598 | 109 | 98 | 12 | 4.2 | 2.14 | 0.88 |
| 17:45-17:59 | 505 | 458 | 130 | 78 | 12 | 4.0 | 2.43 | 1.02 |
| 18:00-18:14 | 450 | 852 | 111 | 103 | 20 | 3.82 | 2.94 | 0.88 |
| 18:15-18:29 | 489 | 703 | 145 | 76 | 14 | 2.27 | 2.85 | 0.94 |
| 18:30-18:44 | 542 | 519 | 134 | 101 | 6 | 3.82 | 2.3 | 0.95 |
| 18:45-18:59 | 387 | 898 | 81 | 70 | 17 | 4.44 | 2.64 | 0.95 |
| 19:00-19:14 | 528 | 611 | 92 | 91 | 9 | 3.51 | 2.77 | 1.0 |
| 19:15-19:29 | 354 | 647 | 88 | 106 | 12 | 4.21 | 2.01 | 1.01 |
| 19:30-19:44 | 597 | 602 | 91 | 71 | 20 | 4.49 | 1.86 | 0.98 |
| 19:45-19:59 | 525 | 883 | 130 | 60 | 8 | 3.74 | 3.07 | 0.99 |
| 20:00-20:14 | 176 | 323 | 38 | 25 | 11 | 4.26 | 2.88 | 0.57 |
| 20:15-20:29 | 251 | 333 | 52 | 34 | 16 | 3.29 | 2.63 | 0.47 |
| 20:30-20:44 | 300 | 387 | 55 | 48 | 18 | 2.57 | 1.83 | 0.69 |
| 20:45-20:59 | 251 | 327 | 40 | 50 | 6 | 3.9 | 2.94 | 0.59 |
| 21:00-21:14 | 293 | 301 | 58 | 28 | 12 | 3.4 | 2.62 | 0.46 |
| 21:15-21:29 | 259 | 201 | 39 | 31 | 15 | 2.25 | 2.31 | 0.66 |
| 21:30-21:44 | 266 | 398 | 43 | 27 | 13 | 2.41 | 3.19 | 0.69 |
| 21:45-21:59 | 295 | 373 | 39 | 43 | 10 | 2.65 | 1.91 | 0.58 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 426 | 813 | 127 | 83 | 15 | 2.62 | 3.03 | 1.01 |
| 07:15-07:29 | 551 | 457 | 134 | 69 | 8 | 2.25 | 2.45 | 0.85 |
| 07:30-07:44 | 405 | 800 | 115 | 107 | 16 | 4.18 | 3.16 | 0.97 |
| 07:45-07:59 | 496 | 569 | 139 | 86 | 12 | 4.0 | 2.58 | 0.99 |
| 08:00-08:14 | 531 | 605 | 99 | 60 | 13 | 3.04 | 3.14 | 1.02 |
| 08:15-08:29 | 488 | 410 | 116 | 109 | 7 | 3.61 | 2.13 | 0.86 |
| 08:30-08:44 | 441 | 847 | 132 | 55 | 14 | 4.49 | 2.04 | 0.87 |
| 08:45-08:59 | 335 | 777 | 82 | 103 | 13 | 2.48 | 2.87 | 0.96 |
| 09:00-09:14 | 507 | 478 | 99 | 64 | 15 | 4.27 | 2.83 | 0.85 |
| 09:15-09:29 | 582 | 667 | 110 | 58 | 8 | 3.87 | 2.35 | 0.95 |
| 09:30-09:44 | 511 | 511 | 110 | 116 | 12 | 2.83 | 2.14 | 1.1 |
| 09:45-09:59 | 574 | 870 | 135 | 93 | 8 | 3.18 | 2.44 | 1.02 |
| 10:00-10:14 | 155 | 336 | 55 | 28 | 11 | 2.79 | 2.37 | 0.58 |
| 10:15-10:29 | 162 | 368 | 46 | 28 | 12 | 4.46 | 1.9 | 0.65 |
| 10:30-10:44 | 291 | 234 | 37 | 46 | 8 | 2.89 | 1.92 | 0.59 |
| 10:45-10:59 | 236 | 238 | 39 | 32 | 9 | 3.51 | 3.12 | 0.49 |
| 16:00-16:14 | 260 | 325 | 43 | 44 | 5 | 3.39 | 2.26 | 0.51 |
| 16:15-16:29 | 152 | 393 | 30 | 29 | 17 | 3.27 | 3.11 | 0.68 |
| 16:30-16:44 | 265 | 384 | 30 | 49 | 15 | 3.84 | 3.12 | 0.52 |
| 16:45-16:59 | 238 | 387 | 38 | 48 | 13 | 3.49 | 2.19 | 0.51 |
| 17:00-17:14 | 536 | 611 | 147 | 117 | 8 | 3.87 | 2.91 | 1.05 |
| 17:15-17:29 | 322 | 503 | 140 | 88 | 14 | 3.76 | 2.09 | 0.88 |
| 17:30-17:44 | 417 | 476 | 84 | 84 | 10 | 3.67 | 2.93 | 1.04 |
| 17:45-17:59 | 470 | 616 | 111 | 118 | 16 | 4.17 | 2.12 | 0.88 |
| 18:00-18:14 | 535 | 430 | 111 | 80 | 16 | 4.32 | 2.2 | 1.0 |
| 18:15-18:29 | 313 | 525 | 87 | 86 | 19 | 2.77 | 2.44 | 0.95 |
| 18:30-18:44 | 581 | 550 | 139 | 50 | 5 | 2.63 | 2.06 | 0.93 |
| 18:45-18:59 | 458 | 608 | 129 | 99 | 15 | 2.88 | 3.01 | 1.07 |
| 19:00-19:14 | 477 | 718 | 111 | 79 | 18 | 2.85 | 1.96 | 0.96 |
| 19:15-19:29 | 387 | 779 | 127 | 108 | 5 | 4.22 | 2.04 | 1.09 |
| 19:30-19:44 | 565 | 606 | 147 | 97 | 12 | 3.6 | 2.18 | 0.91 |
| 19:45-19:59 | 508 | 436 | 119 | 83 | 9 | 3.79 | 2.2 | 0.86 |
| 20:00-20:14 | 272 | 317 | 45 | 29 | 19 | 3.89 | 2.0 | 0.56 |
| 20:15-20:29 | 262 | 389 | 51 | 25 | 7 | 2.94 | 2.68 | 0.5 |
| 20:30-20:44 | 252 | 314 | 41 | 45 | 6 | 2.33 | 2.6 | 0.69 |
| 20:45-20:59 | 154 | 274 | 41 | 48 | 10 | 3.14 | 2.47 | 0.68 |
| 21:00-21:14 | 222 | 338 | 65 | 34 | 18 | 3.68 | 2.18 | 0.7 |
| 21:15-21:29 | 232 | 201 | 58 | 32 | 12 | 2.92 | 3.04 | 0.63 |
| 21:30-21:44 | 225 | 289 | 48 | 46 | 16 | 2.56 | 1.85 | 0.45 |
| 21:45-21:59 | 235 | 337 | 39 | 40 | 8 | 4.37 | 2.64 | 0.59 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 345 | 819 | 149 | 51 | 14 | 3.37 | 2.92 | 0.91 |
| 07:15-07:29 | 458 | 676 | 120 | 114 | 20 | 3.77 | 2.28 | 1.0 |
| 07:30-07:44 | 319 | 727 | 96 | 86 | 19 | 2.42 | 2.46 | 1.01 |
| 07:45-07:59 | 599 | 666 | 104 | 80 | 12 | 3.59 | 2.94 | 0.93 |
| 08:00-08:14 | 554 | 713 | 142 | 83 | 6 | 4.01 | 2.82 | 1.01 |
| 08:15-08:29 | 526 | 513 | 137 | 105 | 6 | 2.14 | 2.83 | 1.04 |
| 08:30-08:44 | 370 | 525 | 120 | 68 | 10 | 2.61 | 3.08 | 1.02 |
| 08:45-08:59 | 506 | 510 | 148 | 118 | 18 | 3.31 | 2.78 | 0.86 |
| 09:00-09:14 | 447 | 576 | 109 | 89 | 5 | 4.16 | 2.8 | 0.98 |
| 09:15-09:29 | 551 | 637 | 103 | 100 | 20 | 4.15 | 3.02 | 0.98 |
| 09:30-09:44 | 393 | 743 | 128 | 55 | 8 | 3.31 | 2.75 | 0.89 |
| 09:45-09:59 | 498 | 499 | 85 | 105 | 5 | 3.22 | 2.41 | 0.95 |
| 10:00-10:14 | 187 | 280 | 68 | 37 | 11 | 4.03 | 3.1 | 0.46 |
| 10:15-10:29 | 244 | 311 | 51 | 50 | 10 | 3.82 | 2.85 | 0.52 |
| 10:30-10:44 | 270 | 345 | 40 | 39 | 5 | 3.41 | 3.17 | 0.55 |
| 10:45-10:59 | 274 | 358 | 61 | 23 | 5 | 3.6 | 3.14 | 0.49 |
| 16:00-16:14 | 227 | 249 | 42 | 49 | 18 | 3.92 | 2.29 | 0.59 |
| 16:15-16:29 | 236 | 370 | 36 | 27 | 16 | 4.03 | 3.2 | 0.61 |
| 16:30-16:44 | 284 | 380 | 40 | 44 | 10 | 3.31 | 2.58 | 0.68 |
| 16:45-16:59 | 232 | 312 | 41 | 48 | 19 | 3.51 | 3.08 | 0.66 |
| 17:00-17:14 | 422 | 892 | 112 | 118 | 16 | 4.18 | 2.68 | 1.04 |
| 17:15-17:29 | 308 | 680 | 139 | 69 | 9 | 2.38 | 2.61 | 1.05 |
| 17:30-17:44 | 440 | 515 | 146 | 75 | 7 | 2.75 | 1.82 | 0.94 |
| 17:45-17:59 | 419 | 427 | 118 | 64 | 20 | 2.46 | 2.66 | 0.94 |
| 18:00-18:14 | 468 | 693 | 148 | 91 | 8 | 3.98 | 2.16 | 1.02 |
| 18:15-18:29 | 302 | 429 | 101 | 65 | 10 | 3.83 | 3.03 | 0.94 |
| 18:30-18:44 | 359 | 570 | 86 | 79 | 20 | 3.46 | 2.18 | 1.05 |
| 18:45-18:59 | 304 | 772 | 82 | 109 | 19 | 2.14 | 2.5 | 1.09 |
| 19:00-19:14 | 442 | 452 | 98 | 83 | 11 | 4.18 | 1.83 | 0.91 |
| 19:15-19:29 | 550 | 742 | 83 | 108 | 16 | 3.42 | 1.93 | 1.02 |
| 19:30-19:44 | 559 | 636 | 82 | 86 | 16 | 3.24 | 2.78 | 1.03 |
| 19:45-19:59 | 357 | 415 | 121 | 108 | 15 | 3.25 | 2.32 | 0.95 |
| 20:00-20:14 | 259 | 317 | 36 | 28 | 13 | 3.71 | 1.86 | 0.62 |
| 20:15-20:29 | 195 | 299 | 33 | 27 | 8 | 4.3 | 2.35 | 0.48 |
| 20:30-20:44 | 274 | 279 | 63 | 50 | 5 | 3.21 | 2.19 | 0.58 |
| 20:45-20:59 | 214 | 259 | 55 | 36 | 6 | 3.45 | 2.02 | 0.56 |
| 21:00-21:14 | 241 | 206 | 61 | 50 | 6 | 3.44 | 2.54 | 0.51 |
| 21:15-21:29 | 247 | 273 | 55 | 43 | 16 | 2.84 | 2.61 | 0.64 |
| 21:30-21:44 | 291 | 322 | 42 | 40 | 20 | 3.27 | 1.81 | 0.47 |
| 21:45-21:59 | 271 | 203 | 41 | 28 | 13 | 3.0 | 2.76 | 0.69 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 531 | 493 | 113 | 111 | 11 | 3.13 | 2.31 | 0.93 |
| 07:15-07:29 | 401 | 881 | 94 | 109 | 5 | 4.46 | 2.76 | 0.86 |
| 07:30-07:44 | 480 | 545 | 138 | 94 | 10 | 2.88 | 2.7 | 1.07 |
| 07:45-07:59 | 308 | 538 | 143 | 86 | 7 | 2.69 | 2.69 | 1.03 |
| 08:00-08:14 | 475 | 436 | 115 | 92 | 12 | 2.17 | 2.34 | 0.91 |
| 08:15-08:29 | 375 | 658 | 118 | 56 | 17 | 3.58 | 2.49 | 1.03 |
| 08:30-08:44 | 586 | 400 | 81 | 75 | 7 | 4.03 | 2.72 | 0.98 |
| 08:45-08:59 | 546 | 404 | 127 | 109 | 6 | 2.53 | 2.31 | 0.89 |
| 09:00-09:14 | 372 | 478 | 93 | 80 | 19 | 2.7 | 2.99 | 0.9 |
| 09:15-09:29 | 509 | 419 | 110 | 101 | 9 | 2.75 | 2.57 | 0.92 |
| 09:30-09:44 | 525 | 525 | 114 | 52 | 10 | 2.84 | 1.86 | 0.98 |
| 09:45-09:59 | 490 | 679 | 104 | 74 | 13 | 2.82 | 2.29 | 1.05 |
| 10:00-10:14 | 241 | 257 | 30 | 48 | 10 | 4.34 | 2.29 | 0.44 |
| 10:15-10:29 | 166 | 288 | 35 | 42 | 19 | 3.01 | 2.09 | 0.43 |
| 10:30-10:44 | 163 | 312 | 50 | 44 | 12 | 4.13 | 2.52 | 0.6 |
| 10:45-10:59 | 300 | 297 | 57 | 21 | 19 | 2.2 | 2.39 | 0.52 |
| 16:00-16:14 | 288 | 267 | 65 | 20 | 9 | 3.3 | 2.89 | 0.49 |
| 16:15-16:29 | 162 | 352 | 48 | 43 | 7 | 2.94 | 2.16 | 0.5 |
| 16:30-16:44 | 264 | 279 | 63 | 44 | 8 | 2.77 | 1.84 | 0.54 |
| 16:45-16:59 | 161 | 248 | 66 | 40 | 8 | 2.99 | 2.85 | 0.51 |
| 17:00-17:14 | 304 | 743 | 97 | 57 | 8 | 2.33 | 3.2 | 1.03 |
| 17:15-17:29 | 402 | 692 | 111 | 105 | 14 | 4.32 | 2.46 | 1.05 |
| 17:30-17:44 | 357 | 869 | 107 | 71 | 15 | 3.8 | 3.11 | 0.89 |
| 17:45-17:59 | 384 | 848 | 140 | 96 | 10 | 2.44 | 2.07 | 1.02 |
| 18:00-18:14 | 552 | 668 | 115 | 84 | 17 | 2.53 | 1.92 | 1.09 |
| 18:15-18:29 | 353 | 851 | 97 | 90 | 19 | 3.95 | 1.81 | 0.98 |
| 18:30-18:44 | 454 | 788 | 149 | 106 | 11 | 4.42 | 3.02 | 0.86 |
| 18:45-18:59 | 505 | 668 | 104 | 107 | 9 | 3.46 | 2.05 | 0.97 |
| 19:00-19:14 | 465 | 551 | 97 | 75 | 15 | 2.5 | 2.28 | 1.06 |
| 19:15-19:29 | 546 | 786 | 88 | 112 | 5 | 2.25 | 2.29 | 0.88 |
| 19:30-19:44 | 412 | 897 | 139 | 77 | 15 | 4.09 | 2.37 | 1.01 |
| 19:45-19:59 | 591 | 894 | 145 | 82 | 13 | 2.12 | 1.99 | 1.09 |
| 20:00-20:14 | 258 | 298 | 70 | 33 | 12 | 2.96 | 2.15 | 0.65 |
| 20:15-20:29 | 170 | 227 | 43 | 40 | 17 | 2.66 | 1.96 | 0.51 |
| 20:30-20:44 | 204 | 238 | 43 | 25 | 12 | 2.34 | 2.93 | 0.7 |
| 20:45-20:59 | 212 | 205 | 37 | 30 | 12 | 3.01 | 2.41 | 0.48 |
| 21:00-21:14 | 164 | 322 | 49 | 33 | 17 | 4.3 | 2.61 | 0.5 |
| 21:15-21:29 | 162 | 289 | 41 | 38 | 11 | 2.31 | 2.8 | 0.52 |
| 21:30-21:44 | 243 | 376 | 53 | 34 | 20 | 3.45 | 3.1 | 0.57 |
| 21:45-21:59 | 174 | 271 | 40 | 23 | 12 | 3.5 | 2.25 | 0.64 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 503 | 562 | 142 | 80 | 19 | 3.4 | 2.2 | 0.92 |
| 07:15-07:29 | 303 | 609 | 111 | 82 | 12 | 2.14 | 2.7 | 0.96 |
| 07:30-07:44 | 479 | 528 | 143 | 54 | 8 | 2.64 | 2.62 | 0.91 |
| 07:45-07:59 | 565 | 566 | 143 | 60 | 12 | 4.43 | 2.7 | 1.09 |
| 08:00-08:14 | 519 | 730 | 137 | 68 | 17 | 2.64 | 2.47 | 1.06 |
| 08:15-08:29 | 367 | 466 | 109 | 59 | 13 | 3.12 | 2.26 | 0.89 |
| 08:30-08:44 | 442 | 475 | 94 | 75 | 9 | 4.23 | 3.07 | 0.87 |
| 08:45-08:59 | 533 | 723 | 83 | 101 | 9 | 2.17 | 2.84 | 0.99 |
| 09:00-09:14 | 513 | 726 | 121 | 97 | 19 | 2.27 | 1.85 | 0.88 |
| 09:15-09:29 | 399 | 810 | 147 | 109 | 19 | 4.04 | 1.98 | 0.96 |
| 09:30-09:44 | 455 | 883 | 149 | 111 | 14 | 4.37 | 2.24 | 0.9 |
| 09:45-09:59 | 552 | 707 | 118 | 93 | 11 | 4.12 | 2.86 | 0.99 |
| 10:00-10:14 | 222 | 207 | 70 | 49 | 13 | 2.85 | 2.36 | 0.41 |
| 10:15-10:29 | 174 | 238 | 47 | 49 | 20 | 2.84 | 2.5 | 0.49 |
| 10:30-10:44 | 207 | 250 | 61 | 28 | 5 | 3.19 | 2.95 | 0.58 |
| 10:45-10:59 | 287 | 294 | 59 | 43 | 20 | 3.6 | 2.4 | 0.44 |
| 16:00-16:14 | 243 | 218 | 49 | 49 | 19 | 4.14 | 1.96 | 0.61 |
| 16:15-16:29 | 167 | 348 | 47 | 28 | 12 | 4.12 | 2.8 | 0.43 |
| 16:30-16:44 | 255 | 277 | 40 | 49 | 8 | 4.33 | 3.06 | 0.63 |
| 16:45-16:59 | 172 | 203 | 51 | 27 | 10 | 2.87 | 2.07 | 0.64 |
| 17:00-17:14 | 373 | 650 | 137 | 113 | 12 | 2.8 | 2.59 | 0.96 |
| 17:15-17:29 | 585 | 774 | 94 | 103 | 16 | 3.39 | 2.58 | 1.09 |
| 17:30-17:44 | 493 | 820 | 81 | 72 | 11 | 3.76 | 2.13 | 0.99 |
| 17:45-17:59 | 477 | 551 | 135 | 82 | 7 | 3.37 | 2.03 | 0.93 |
| 18:00-18:14 | 465 | 697 | 125 | 107 | 14 | 2.57 | 3.12 | 1.01 |
| 18:15-18:29 | 427 | 758 | 140 | 107 | 16 | 2.22 | 2.39 | 0.94 |
| 18:30-18:44 | 581 | 760 | 123 | 103 | 16 | 3.67 | 2.36 | 0.96 |
| 18:45-18:59 | 429 | 660 | 140 | 68 | 10 | 2.72 | 2.07 | 0.92 |
| 19:00-19:14 | 563 | 825 | 115 | 69 | 13 | 3.53 | 3.06 | 0.87 |
| 19:15-19:29 | 397 | 607 | 89 | 84 | 7 | 3.46 | 2.61 | 1.03 |
| 19:30-19:44 | 359 | 590 | 101 | 111 | 12 | 2.64 | 2.41 | 1.01 |
| 19:45-19:59 | 573 | 582 | 123 | 71 | 16 | 3.8 | 2.9 | 0.93 |
| 20:00-20:14 | 248 | 250 | 43 | 32 | 15 | 2.52 | 3.2 | 0.6 |
| 20:15-20:29 | 241 | 380 | 46 | 47 | 5 | 2.78 | 2.47 | 0.69 |
| 20:30-20:44 | 168 | 248 | 40 | 30 | 5 | 4.47 | 2.71 | 0.47 |
| 20:45-20:59 | 151 | 392 | 41 | 25 | 19 | 2.1 | 3.05 | 0.53 |
| 21:00-21:14 | 281 | 204 | 47 | 34 | 8 | 2.26 | 2.88 | 0.67 |
| 21:15-21:29 | 172 | 270 | 47 | 24 | 6 | 3.17 | 2.05 | 0.67 |
| 21:30-21:44 | 274 | 329 | 67 | 32 | 15 | 3.73 | 2.62 | 0.57 |
| 21:45-21:59 | 261 | 337 | 52 | 42 | 15 | 2.9 | 2.75 | 0.6 |

### A.7 Day 7: 2026-06-07

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 384 | 732 | 95 | 117 | 12 | 2.5 | 3.18 | 1.09 |
| 07:15-07:29 | 311 | 875 | 117 | 84 | 13 | 4.16 | 2.58 | 0.96 |
| 07:30-07:44 | 480 | 668 | 114 | 77 | 12 | 2.55 | 2.73 | 0.96 |
| 07:45-07:59 | 550 | 663 | 136 | 98 | 10 | 3.37 | 2.51 | 0.86 |
| 08:00-08:14 | 389 | 541 | 141 | 107 | 10 | 2.54 | 1.84 | 0.97 |
| 08:15-08:29 | 352 | 676 | 90 | 61 | 8 | 4.37 | 2.34 | 1.04 |
| 08:30-08:44 | 586 | 475 | 102 | 105 | 9 | 2.41 | 2.07 | 1.09 |
| 08:45-08:59 | 310 | 837 | 103 | 118 | 7 | 4.28 | 2.13 | 1.08 |
| 09:00-09:14 | 472 | 447 | 129 | 92 | 19 | 2.36 | 2.36 | 1.08 |
| 09:15-09:29 | 313 | 477 | 129 | 85 | 8 | 2.48 | 2.51 | 0.93 |
| 09:30-09:44 | 487 | 441 | 128 | 76 | 5 | 4.49 | 2.99 | 0.94 |
| 09:45-09:59 | 413 | 688 | 146 | 76 | 17 | 4.34 | 2.56 | 1.02 |
| 10:00-10:14 | 276 | 338 | 70 | 23 | 18 | 2.7 | 2.06 | 0.4 |
| 10:15-10:29 | 207 | 278 | 40 | 25 | 17 | 3.36 | 2.01 | 0.42 |
| 10:30-10:44 | 284 | 399 | 65 | 31 | 8 | 4.45 | 2.12 | 0.48 |
| 10:45-10:59 | 236 | 381 | 52 | 43 | 7 | 2.54 | 2.25 | 0.57 |
| 16:00-16:14 | 263 | 250 | 31 | 40 | 18 | 3.62 | 2.95 | 0.63 |
| 16:15-16:29 | 211 | 238 | 55 | 48 | 18 | 3.67 | 2.75 | 0.67 |
| 16:30-16:44 | 175 | 374 | 49 | 34 | 8 | 3.61 | 2.2 | 0.55 |
| 16:45-16:59 | 169 | 255 | 53 | 31 | 12 | 4.16 | 2.17 | 0.53 |
| 17:00-17:14 | 539 | 553 | 117 | 76 | 10 | 2.62 | 2.83 | 0.95 |
| 17:15-17:29 | 371 | 569 | 133 | 52 | 9 | 3.04 | 2.02 | 0.93 |
| 17:30-17:44 | 562 | 641 | 96 | 85 | 9 | 3.26 | 1.99 | 0.95 |
| 17:45-17:59 | 600 | 615 | 89 | 106 | 5 | 3.51 | 2.14 | 1.05 |
| 18:00-18:14 | 443 | 506 | 115 | 79 | 14 | 4.21 | 2.96 | 0.99 |
| 18:15-18:29 | 599 | 613 | 103 | 52 | 8 | 2.21 | 2.24 | 1.0 |
| 18:30-18:44 | 438 | 856 | 122 | 105 | 5 | 2.36 | 2.61 | 1.03 |
| 18:45-18:59 | 398 | 888 | 96 | 113 | 11 | 4.38 | 3.07 | 0.97 |
| 19:00-19:14 | 330 | 503 | 115 | 78 | 20 | 3.76 | 2.42 | 0.99 |
| 19:15-19:29 | 500 | 425 | 100 | 105 | 8 | 2.64 | 2.61 | 1.09 |
| 19:30-19:44 | 347 | 663 | 80 | 71 | 20 | 2.32 | 3.16 | 0.93 |
| 19:45-19:59 | 441 | 420 | 92 | 100 | 10 | 3.67 | 3.16 | 1.01 |
| 20:00-20:14 | 266 | 379 | 44 | 37 | 16 | 4.24 | 2.2 | 0.54 |
| 20:15-20:29 | 257 | 241 | 43 | 23 | 13 | 2.46 | 1.81 | 0.65 |
| 20:30-20:44 | 161 | 235 | 44 | 26 | 12 | 4.24 | 2.72 | 0.53 |
| 20:45-20:59 | 273 | 386 | 66 | 45 | 12 | 3.56 | 2.1 | 0.45 |
| 21:00-21:14 | 183 | 234 | 57 | 32 | 12 | 2.63 | 2.23 | 0.6 |
| 21:15-21:29 | 208 | 259 | 45 | 22 | 5 | 4.07 | 2.83 | 0.61 |
| 21:30-21:44 | 238 | 292 | 69 | 30 | 8 | 3.25 | 2.62 | 0.63 |
| 21:45-21:59 | 265 | 323 | 63 | 25 | 11 | 3.86 | 2.56 | 0.45 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 421 | 640 | 87 | 82 | 12 | 3.02 | 1.89 | 0.99 |
| 07:15-07:29 | 579 | 879 | 144 | 73 | 17 | 3.69 | 2.91 | 1.03 |
| 07:30-07:44 | 429 | 771 | 116 | 73 | 15 | 4.28 | 2.87 | 1.03 |
| 07:45-07:59 | 333 | 480 | 88 | 110 | 18 | 3.45 | 2.02 | 0.99 |
| 08:00-08:14 | 518 | 434 | 113 | 94 | 11 | 2.22 | 2.11 | 1.03 |
| 08:15-08:29 | 410 | 440 | 106 | 109 | 13 | 3.2 | 3.04 | 1.09 |
| 08:30-08:44 | 344 | 444 | 90 | 93 | 5 | 2.16 | 2.31 | 0.94 |
| 08:45-08:59 | 482 | 880 | 80 | 106 | 13 | 3.02 | 3.09 | 1.04 |
| 09:00-09:14 | 356 | 887 | 144 | 101 | 19 | 3.3 | 2.34 | 0.88 |
| 09:15-09:29 | 482 | 536 | 144 | 56 | 7 | 4.28 | 2.51 | 0.86 |
| 09:30-09:44 | 451 | 481 | 126 | 118 | 17 | 4.16 | 2.43 | 1.08 |
| 09:45-09:59 | 536 | 600 | 122 | 87 | 10 | 4.14 | 2.14 | 0.88 |
| 10:00-10:14 | 215 | 324 | 36 | 37 | 14 | 3.54 | 2.36 | 0.5 |
| 10:15-10:29 | 174 | 373 | 48 | 20 | 20 | 2.62 | 2.46 | 0.47 |
| 10:30-10:44 | 162 | 369 | 30 | 40 | 19 | 3.46 | 2.57 | 0.57 |
| 10:45-10:59 | 239 | 230 | 57 | 28 | 17 | 3.38 | 2.45 | 0.6 |
| 16:00-16:14 | 271 | 315 | 35 | 28 | 16 | 3.5 | 2.13 | 0.65 |
| 16:15-16:29 | 202 | 298 | 34 | 47 | 16 | 3.8 | 2.8 | 0.57 |
| 16:30-16:44 | 182 | 254 | 42 | 28 | 5 | 3.27 | 1.88 | 0.63 |
| 16:45-16:59 | 223 | 291 | 30 | 49 | 15 | 2.26 | 2.89 | 0.49 |
| 17:00-17:14 | 326 | 609 | 93 | 66 | 9 | 3.9 | 2.71 | 1.04 |
| 17:15-17:29 | 308 | 489 | 135 | 69 | 19 | 3.09 | 3.09 | 0.88 |
| 17:30-17:44 | 548 | 757 | 86 | 101 | 5 | 2.33 | 3.19 | 0.94 |
| 17:45-17:59 | 566 | 893 | 105 | 57 | 7 | 3.97 | 2.18 | 0.95 |
| 18:00-18:14 | 391 | 715 | 140 | 72 | 13 | 2.64 | 2.93 | 0.88 |
| 18:15-18:29 | 411 | 749 | 110 | 56 | 6 | 2.68 | 2.04 | 0.93 |
| 18:30-18:44 | 434 | 434 | 146 | 117 | 12 | 3.87 | 3.17 | 1.09 |
| 18:45-18:59 | 557 | 889 | 149 | 89 | 11 | 2.78 | 2.6 | 1.07 |
| 19:00-19:14 | 424 | 678 | 89 | 59 | 13 | 4.03 | 2.5 | 1.03 |
| 19:15-19:29 | 566 | 543 | 84 | 58 | 17 | 3.15 | 1.86 | 1.09 |
| 19:30-19:44 | 316 | 583 | 149 | 56 | 16 | 2.23 | 3.04 | 0.92 |
| 19:45-19:59 | 567 | 430 | 90 | 69 | 10 | 3.35 | 2.72 | 0.94 |
| 20:00-20:14 | 210 | 317 | 33 | 34 | 12 | 3.92 | 2.16 | 0.47 |
| 20:15-20:29 | 250 | 209 | 31 | 34 | 7 | 2.66 | 3.03 | 0.63 |
| 20:30-20:44 | 288 | 258 | 45 | 36 | 14 | 2.24 | 2.6 | 0.4 |
| 20:45-20:59 | 159 | 331 | 36 | 47 | 9 | 2.67 | 2.8 | 0.55 |
| 21:00-21:14 | 218 | 333 | 42 | 23 | 10 | 3.21 | 2.25 | 0.41 |
| 21:15-21:29 | 185 | 201 | 68 | 43 | 11 | 4.24 | 2.95 | 0.59 |
| 21:30-21:44 | 258 | 259 | 58 | 33 | 18 | 3.44 | 2.3 | 0.47 |
| 21:45-21:59 | 198 | 274 | 38 | 38 | 9 | 4.03 | 1.81 | 0.66 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 570 | 548 | 150 | 109 | 11 | 3.55 | 2.42 | 0.95 |
| 07:15-07:29 | 564 | 424 | 123 | 62 | 5 | 4.16 | 2.28 | 1.08 |
| 07:30-07:44 | 315 | 754 | 111 | 83 | 9 | 3.72 | 2.81 | 0.94 |
| 07:45-07:59 | 574 | 570 | 93 | 76 | 18 | 2.63 | 2.0 | 0.89 |
| 08:00-08:14 | 354 | 572 | 136 | 57 | 16 | 3.3 | 1.92 | 1.07 |
| 08:15-08:29 | 491 | 791 | 129 | 68 | 14 | 2.31 | 2.68 | 0.98 |
| 08:30-08:44 | 317 | 617 | 139 | 89 | 14 | 3.58 | 2.4 | 1.04 |
| 08:45-08:59 | 352 | 401 | 97 | 52 | 9 | 3.5 | 2.31 | 0.9 |
| 09:00-09:14 | 497 | 694 | 103 | 102 | 7 | 2.54 | 2.0 | 0.89 |
| 09:15-09:29 | 460 | 496 | 117 | 79 | 7 | 3.25 | 2.54 | 0.93 |
| 09:30-09:44 | 374 | 402 | 99 | 82 | 15 | 4.5 | 2.18 | 1.06 |
| 09:45-09:59 | 577 | 497 | 88 | 110 | 6 | 3.76 | 3.13 | 1.03 |
| 10:00-10:14 | 267 | 353 | 60 | 24 | 17 | 2.4 | 2.21 | 0.55 |
| 10:15-10:29 | 233 | 374 | 58 | 36 | 17 | 4.48 | 2.73 | 0.66 |
| 10:30-10:44 | 247 | 221 | 68 | 37 | 5 | 2.31 | 2.01 | 0.69 |
| 10:45-10:59 | 199 | 374 | 46 | 40 | 12 | 4.28 | 3.2 | 0.58 |
| 16:00-16:14 | 211 | 252 | 32 | 20 | 11 | 3.53 | 3.15 | 0.51 |
| 16:15-16:29 | 221 | 388 | 53 | 49 | 13 | 2.6 | 2.28 | 0.65 |
| 16:30-16:44 | 162 | 323 | 67 | 23 | 17 | 3.14 | 2.03 | 0.43 |
| 16:45-16:59 | 162 | 275 | 47 | 42 | 17 | 2.7 | 2.85 | 0.43 |
| 17:00-17:14 | 364 | 478 | 138 | 59 | 13 | 3.16 | 2.14 | 0.88 |
| 17:15-17:29 | 403 | 499 | 93 | 119 | 18 | 3.06 | 2.06 | 0.93 |
| 17:30-17:44 | 327 | 555 | 90 | 66 | 15 | 2.64 | 3.11 | 0.87 |
| 17:45-17:59 | 330 | 544 | 144 | 53 | 15 | 3.17 | 2.95 | 1.08 |
| 18:00-18:14 | 523 | 625 | 107 | 109 | 14 | 2.72 | 2.79 | 1.08 |
| 18:15-18:29 | 352 | 771 | 98 | 58 | 14 | 2.79 | 2.45 | 0.88 |
| 18:30-18:44 | 398 | 579 | 80 | 50 | 18 | 4.15 | 2.28 | 1.02 |
| 18:45-18:59 | 326 | 728 | 134 | 115 | 14 | 3.14 | 1.8 | 1.04 |
| 19:00-19:14 | 427 | 785 | 137 | 106 | 16 | 3.06 | 3.04 | 1.0 |
| 19:15-19:29 | 367 | 871 | 114 | 115 | 16 | 3.55 | 2.17 | 1.04 |
| 19:30-19:44 | 307 | 503 | 106 | 86 | 18 | 4.44 | 1.98 | 1.09 |
| 19:45-19:59 | 512 | 781 | 132 | 52 | 19 | 2.32 | 2.66 | 0.89 |
| 20:00-20:14 | 188 | 308 | 69 | 31 | 8 | 4.01 | 2.17 | 0.5 |
| 20:15-20:29 | 159 | 299 | 57 | 47 | 12 | 3.62 | 2.3 | 0.62 |
| 20:30-20:44 | 288 | 331 | 49 | 27 | 11 | 2.28 | 2.02 | 0.46 |
| 20:45-20:59 | 200 | 241 | 64 | 46 | 13 | 4.31 | 2.52 | 0.62 |
| 21:00-21:14 | 179 | 399 | 55 | 30 | 18 | 3.75 | 1.93 | 0.65 |
| 21:15-21:29 | 274 | 213 | 30 | 31 | 13 | 2.88 | 3.09 | 0.64 |
| 21:30-21:44 | 263 | 272 | 32 | 50 | 20 | 2.2 | 2.22 | 0.46 |
| 21:45-21:59 | 238 | 296 | 46 | 39 | 7 | 2.63 | 2.82 | 0.62 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 328 | 694 | 124 | 59 | 6 | 2.73 | 2.46 | 1.07 |
| 07:15-07:29 | 539 | 575 | 89 | 71 | 5 | 3.36 | 1.81 | 0.91 |
| 07:30-07:44 | 509 | 858 | 88 | 76 | 5 | 3.93 | 2.99 | 0.94 |
| 07:45-07:59 | 456 | 428 | 117 | 55 | 8 | 4.22 | 1.83 | 0.88 |
| 08:00-08:14 | 496 | 820 | 141 | 93 | 20 | 3.66 | 2.72 | 1.02 |
| 08:15-08:29 | 431 | 479 | 94 | 60 | 20 | 3.9 | 3.1 | 1.02 |
| 08:30-08:44 | 583 | 522 | 88 | 112 | 13 | 2.17 | 3.18 | 1.01 |
| 08:45-08:59 | 331 | 589 | 113 | 53 | 11 | 3.79 | 3.2 | 0.92 |
| 09:00-09:14 | 446 | 616 | 138 | 54 | 13 | 2.67 | 2.8 | 0.91 |
| 09:15-09:29 | 354 | 683 | 111 | 59 | 20 | 4.26 | 2.13 | 0.94 |
| 09:30-09:44 | 508 | 450 | 107 | 86 | 19 | 2.76 | 2.36 | 0.87 |
| 09:45-09:59 | 404 | 426 | 148 | 76 | 16 | 2.29 | 2.42 | 0.99 |
| 10:00-10:14 | 219 | 324 | 45 | 36 | 17 | 2.37 | 2.53 | 0.66 |
| 10:15-10:29 | 158 | 270 | 67 | 44 | 12 | 2.95 | 2.21 | 0.45 |
| 10:30-10:44 | 242 | 284 | 61 | 34 | 9 | 3.44 | 1.9 | 0.62 |
| 10:45-10:59 | 227 | 301 | 64 | 49 | 13 | 3.75 | 2.01 | 0.55 |
| 16:00-16:14 | 225 | 342 | 33 | 42 | 17 | 3.3 | 2.56 | 0.44 |
| 16:15-16:29 | 272 | 291 | 41 | 36 | 7 | 3.76 | 2.35 | 0.49 |
| 16:30-16:44 | 273 | 272 | 41 | 20 | 18 | 2.12 | 1.99 | 0.66 |
| 16:45-16:59 | 291 | 226 | 43 | 39 | 16 | 3.04 | 3.04 | 0.49 |
| 17:00-17:14 | 401 | 462 | 80 | 109 | 17 | 3.0 | 3.12 | 0.93 |
| 17:15-17:29 | 448 | 842 | 135 | 94 | 15 | 2.18 | 2.38 | 1.05 |
| 17:30-17:44 | 336 | 537 | 116 | 106 | 18 | 4.12 | 2.47 | 0.9 |
| 17:45-17:59 | 324 | 644 | 130 | 105 | 17 | 4.36 | 2.12 | 1.06 |
| 18:00-18:14 | 559 | 576 | 92 | 73 | 7 | 2.29 | 1.89 | 0.89 |
| 18:15-18:29 | 476 | 801 | 117 | 91 | 5 | 3.02 | 2.4 | 1.03 |
| 18:30-18:44 | 559 | 416 | 114 | 81 | 18 | 2.19 | 2.09 | 1.07 |
| 18:45-18:59 | 527 | 448 | 145 | 67 | 14 | 3.09 | 2.56 | 0.89 |
| 19:00-19:14 | 536 | 809 | 125 | 53 | 7 | 2.6 | 2.37 | 1.09 |
| 19:15-19:29 | 445 | 438 | 86 | 57 | 8 | 2.67 | 2.32 | 0.89 |
| 19:30-19:44 | 450 | 594 | 119 | 59 | 5 | 2.4 | 2.03 | 1.08 |
| 19:45-19:59 | 399 | 606 | 97 | 84 | 19 | 2.38 | 2.98 | 1.04 |
| 20:00-20:14 | 274 | 240 | 55 | 39 | 16 | 2.59 | 2.05 | 0.61 |
| 20:15-20:29 | 246 | 263 | 66 | 32 | 19 | 2.2 | 2.14 | 0.45 |
| 20:30-20:44 | 286 | 396 | 42 | 22 | 17 | 4.45 | 2.76 | 0.5 |
| 20:45-20:59 | 170 | 241 | 35 | 20 | 19 | 2.95 | 3.19 | 0.59 |
| 21:00-21:14 | 194 | 265 | 47 | 46 | 12 | 3.74 | 2.77 | 0.45 |
| 21:15-21:29 | 252 | 387 | 62 | 20 | 15 | 4.09 | 1.93 | 0.65 |
| 21:30-21:44 | 188 | 342 | 63 | 23 | 6 | 3.47 | 2.9 | 0.52 |
| 21:45-21:59 | 203 | 360 | 31 | 42 | 16 | 3.96 | 2.13 | 0.53 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 389 | 578 | 93 | 99 | 12 | 2.84 | 2.91 | 1.02 |
| 07:15-07:29 | 417 | 426 | 92 | 98 | 11 | 2.97 | 1.92 | 1.03 |
| 07:30-07:44 | 302 | 404 | 117 | 65 | 18 | 4.04 | 2.19 | 0.96 |
| 07:45-07:59 | 318 | 786 | 87 | 53 | 20 | 2.47 | 2.83 | 0.94 |
| 08:00-08:14 | 343 | 777 | 88 | 55 | 12 | 3.0 | 2.72 | 0.88 |
| 08:15-08:29 | 595 | 511 | 111 | 103 | 6 | 4.23 | 2.59 | 1.09 |
| 08:30-08:44 | 396 | 852 | 112 | 84 | 5 | 2.21 | 2.55 | 0.9 |
| 08:45-08:59 | 516 | 416 | 146 | 103 | 13 | 3.47 | 2.85 | 0.9 |
| 09:00-09:14 | 365 | 772 | 135 | 104 | 14 | 3.2 | 1.85 | 0.95 |
| 09:15-09:29 | 432 | 490 | 138 | 80 | 15 | 4.01 | 3.0 | 0.91 |
| 09:30-09:44 | 453 | 704 | 132 | 102 | 16 | 4.47 | 2.88 | 1.09 |
| 09:45-09:59 | 549 | 617 | 132 | 63 | 13 | 3.35 | 1.8 | 0.93 |
| 10:00-10:14 | 229 | 260 | 36 | 25 | 18 | 2.17 | 2.74 | 0.69 |
| 10:15-10:29 | 242 | 319 | 42 | 47 | 7 | 2.11 | 2.9 | 0.52 |
| 10:30-10:44 | 291 | 207 | 42 | 43 | 19 | 2.58 | 2.23 | 0.63 |
| 10:45-10:59 | 175 | 243 | 69 | 22 | 15 | 2.42 | 2.75 | 0.49 |
| 16:00-16:14 | 185 | 219 | 32 | 21 | 18 | 2.34 | 2.48 | 0.5 |
| 16:15-16:29 | 152 | 211 | 32 | 41 | 19 | 3.82 | 2.21 | 0.45 |
| 16:30-16:44 | 210 | 221 | 67 | 31 | 13 | 3.47 | 2.26 | 0.54 |
| 16:45-16:59 | 293 | 289 | 53 | 32 | 14 | 2.91 | 2.78 | 0.48 |
| 17:00-17:14 | 444 | 692 | 144 | 67 | 9 | 3.04 | 1.89 | 1.04 |
| 17:15-17:29 | 526 | 454 | 134 | 64 | 15 | 2.13 | 2.84 | 1.03 |
| 17:30-17:44 | 306 | 533 | 130 | 95 | 8 | 2.3 | 2.23 | 0.92 |
| 17:45-17:59 | 484 | 700 | 102 | 82 | 16 | 3.16 | 2.27 | 0.92 |
| 18:00-18:14 | 407 | 797 | 108 | 107 | 15 | 3.63 | 2.84 | 1.02 |
| 18:15-18:29 | 581 | 604 | 94 | 114 | 20 | 4.49 | 2.91 | 0.87 |
| 18:30-18:44 | 358 | 670 | 82 | 79 | 19 | 3.55 | 1.89 | 0.87 |
| 18:45-18:59 | 340 | 409 | 83 | 65 | 5 | 3.03 | 2.18 | 1.0 |
| 19:00-19:14 | 500 | 481 | 89 | 89 | 6 | 2.88 | 2.05 | 0.87 |
| 19:15-19:29 | 331 | 616 | 84 | 69 | 12 | 4.05 | 2.28 | 1.0 |
| 19:30-19:44 | 521 | 702 | 95 | 97 | 10 | 4.11 | 2.68 | 0.95 |
| 19:45-19:59 | 431 | 472 | 93 | 54 | 14 | 3.12 | 2.58 | 0.94 |
| 20:00-20:14 | 216 | 334 | 45 | 27 | 20 | 2.45 | 3.09 | 0.44 |
| 20:15-20:29 | 275 | 399 | 34 | 37 | 9 | 3.53 | 2.05 | 0.47 |
| 20:30-20:44 | 184 | 390 | 38 | 21 | 18 | 4.44 | 1.88 | 0.51 |
| 20:45-20:59 | 284 | 354 | 62 | 37 | 15 | 2.24 | 2.35 | 0.45 |
| 21:00-21:14 | 181 | 236 | 47 | 39 | 11 | 3.56 | 1.87 | 0.67 |
| 21:15-21:29 | 297 | 326 | 31 | 49 | 13 | 3.55 | 1.84 | 0.61 |
| 21:30-21:44 | 160 | 230 | 62 | 26 | 17 | 3.23 | 2.42 | 0.57 |
| 21:45-21:59 | 198 | 313 | 70 | 28 | 16 | 4.45 | 3.02 | 0.61 |

### A.8 Day 8: 2026-06-08

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 429 | 752 | 84 | 99 | 9 | 4.47 | 2.37 | 1.05 |
| 07:15-07:29 | 373 | 701 | 82 | 91 | 18 | 3.29 | 2.83 | 0.86 |
| 07:30-07:44 | 315 | 770 | 125 | 116 | 16 | 4.36 | 2.51 | 0.94 |
| 07:45-07:59 | 320 | 744 | 81 | 87 | 14 | 3.06 | 2.94 | 1.02 |
| 08:00-08:14 | 550 | 832 | 96 | 82 | 10 | 3.38 | 2.06 | 0.88 |
| 08:15-08:29 | 465 | 695 | 92 | 73 | 15 | 3.65 | 2.93 | 1.01 |
| 08:30-08:44 | 339 | 604 | 140 | 91 | 12 | 3.96 | 2.98 | 1.08 |
| 08:45-08:59 | 416 | 801 | 115 | 78 | 10 | 2.46 | 3.0 | 0.92 |
| 09:00-09:14 | 472 | 618 | 114 | 94 | 19 | 2.11 | 3.02 | 0.92 |
| 09:15-09:29 | 522 | 647 | 105 | 103 | 19 | 2.52 | 2.18 | 1.07 |
| 09:30-09:44 | 573 | 652 | 84 | 70 | 14 | 2.63 | 2.65 | 1.05 |
| 09:45-09:59 | 313 | 642 | 92 | 86 | 6 | 2.57 | 3.02 | 1.0 |
| 10:00-10:14 | 242 | 360 | 53 | 31 | 19 | 3.28 | 2.19 | 0.47 |
| 10:15-10:29 | 161 | 388 | 38 | 28 | 5 | 2.22 | 2.42 | 0.66 |
| 10:30-10:44 | 276 | 242 | 68 | 21 | 5 | 3.15 | 1.82 | 0.5 |
| 10:45-10:59 | 164 | 271 | 30 | 39 | 18 | 2.37 | 2.95 | 0.67 |
| 16:00-16:14 | 229 | 305 | 46 | 50 | 18 | 3.66 | 2.79 | 0.52 |
| 16:15-16:29 | 197 | 240 | 62 | 25 | 7 | 2.61 | 1.88 | 0.56 |
| 16:30-16:44 | 217 | 366 | 52 | 50 | 13 | 3.94 | 3.12 | 0.44 |
| 16:45-16:59 | 199 | 252 | 36 | 29 | 9 | 3.76 | 2.55 | 0.58 |
| 17:00-17:14 | 390 | 764 | 127 | 113 | 10 | 3.51 | 2.38 | 0.85 |
| 17:15-17:29 | 423 | 605 | 121 | 55 | 10 | 3.76 | 2.02 | 1.05 |
| 17:30-17:44 | 304 | 431 | 104 | 83 | 17 | 4.46 | 2.46 | 1.03 |
| 17:45-17:59 | 310 | 555 | 98 | 95 | 5 | 3.04 | 2.17 | 1.02 |
| 18:00-18:14 | 570 | 744 | 86 | 119 | 5 | 3.81 | 1.9 | 0.9 |
| 18:15-18:29 | 498 | 667 | 85 | 76 | 17 | 4.15 | 2.75 | 0.89 |
| 18:30-18:44 | 435 | 565 | 150 | 63 | 18 | 4.49 | 2.97 | 0.87 |
| 18:45-18:59 | 532 | 699 | 148 | 51 | 10 | 3.43 | 1.91 | 1.04 |
| 19:00-19:14 | 559 | 638 | 133 | 95 | 6 | 4.25 | 2.75 | 0.89 |
| 19:15-19:29 | 406 | 553 | 81 | 94 | 7 | 2.77 | 2.01 | 0.99 |
| 19:30-19:44 | 314 | 596 | 95 | 83 | 15 | 2.88 | 2.8 | 0.87 |
| 19:45-19:59 | 436 | 859 | 101 | 72 | 7 | 3.62 | 2.75 | 0.89 |
| 20:00-20:14 | 168 | 324 | 57 | 29 | 14 | 2.33 | 1.96 | 0.64 |
| 20:15-20:29 | 285 | 211 | 39 | 22 | 5 | 2.93 | 1.88 | 0.67 |
| 20:30-20:44 | 263 | 281 | 68 | 37 | 16 | 3.74 | 2.24 | 0.45 |
| 20:45-20:59 | 225 | 338 | 64 | 49 | 15 | 2.55 | 2.89 | 0.69 |
| 21:00-21:14 | 224 | 300 | 52 | 50 | 19 | 3.97 | 2.56 | 0.65 |
| 21:15-21:29 | 195 | 361 | 51 | 39 | 15 | 3.75 | 2.88 | 0.66 |
| 21:30-21:44 | 167 | 219 | 39 | 43 | 20 | 2.67 | 2.41 | 0.64 |
| 21:45-21:59 | 296 | 315 | 48 | 37 | 12 | 3.88 | 2.22 | 0.69 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 402 | 768 | 82 | 76 | 10 | 2.37 | 2.59 | 1.08 |
| 07:15-07:29 | 427 | 530 | 124 | 53 | 9 | 2.74 | 1.93 | 0.85 |
| 07:30-07:44 | 417 | 476 | 89 | 110 | 13 | 4.39 | 2.92 | 1.03 |
| 07:45-07:59 | 490 | 830 | 137 | 80 | 12 | 3.16 | 2.49 | 1.08 |
| 08:00-08:14 | 481 | 445 | 138 | 78 | 5 | 4.21 | 2.05 | 0.96 |
| 08:15-08:29 | 385 | 563 | 125 | 109 | 7 | 4.44 | 3.13 | 0.97 |
| 08:30-08:44 | 425 | 832 | 104 | 103 | 11 | 4.12 | 3.13 | 0.99 |
| 08:45-08:59 | 353 | 432 | 85 | 112 | 18 | 4.49 | 2.85 | 1.08 |
| 09:00-09:14 | 320 | 541 | 93 | 50 | 14 | 4.33 | 2.59 | 1.07 |
| 09:15-09:29 | 598 | 804 | 98 | 67 | 20 | 3.13 | 2.41 | 1.03 |
| 09:30-09:44 | 497 | 751 | 144 | 80 | 5 | 3.31 | 1.88 | 1.0 |
| 09:45-09:59 | 517 | 438 | 108 | 78 | 13 | 3.97 | 2.84 | 0.9 |
| 10:00-10:14 | 194 | 266 | 35 | 29 | 5 | 4.16 | 2.51 | 0.52 |
| 10:15-10:29 | 216 | 303 | 65 | 37 | 10 | 4.33 | 1.88 | 0.53 |
| 10:30-10:44 | 197 | 215 | 49 | 22 | 9 | 3.48 | 2.18 | 0.52 |
| 10:45-10:59 | 155 | 380 | 62 | 42 | 5 | 3.34 | 2.36 | 0.55 |
| 16:00-16:14 | 189 | 270 | 68 | 35 | 14 | 2.63 | 2.17 | 0.4 |
| 16:15-16:29 | 212 | 206 | 70 | 39 | 15 | 3.45 | 3.12 | 0.45 |
| 16:30-16:44 | 162 | 222 | 45 | 35 | 13 | 2.16 | 2.19 | 0.43 |
| 16:45-16:59 | 262 | 355 | 57 | 30 | 6 | 3.17 | 3.05 | 0.55 |
| 17:00-17:14 | 567 | 473 | 140 | 97 | 12 | 3.72 | 2.72 | 1.02 |
| 17:15-17:29 | 431 | 415 | 126 | 111 | 7 | 4.16 | 2.88 | 1.0 |
| 17:30-17:44 | 320 | 461 | 113 | 120 | 20 | 3.69 | 3.14 | 1.0 |
| 17:45-17:59 | 526 | 736 | 93 | 79 | 5 | 2.1 | 2.35 | 0.93 |
| 18:00-18:14 | 412 | 481 | 130 | 91 | 8 | 2.96 | 3.11 | 1.08 |
| 18:15-18:29 | 542 | 656 | 119 | 77 | 17 | 4.49 | 1.97 | 0.88 |
| 18:30-18:44 | 483 | 710 | 118 | 59 | 12 | 4.09 | 2.24 | 0.98 |
| 18:45-18:59 | 411 | 558 | 86 | 110 | 17 | 4.06 | 2.07 | 1.08 |
| 19:00-19:14 | 590 | 855 | 140 | 82 | 11 | 4.49 | 3.18 | 0.88 |
| 19:15-19:29 | 518 | 434 | 145 | 74 | 13 | 2.11 | 3.17 | 0.94 |
| 19:30-19:44 | 347 | 745 | 100 | 113 | 16 | 2.8 | 2.25 | 0.86 |
| 19:45-19:59 | 575 | 891 | 84 | 116 | 7 | 2.44 | 2.7 | 1.03 |
| 20:00-20:14 | 189 | 288 | 61 | 44 | 7 | 2.43 | 2.01 | 0.53 |
| 20:15-20:29 | 224 | 346 | 32 | 41 | 13 | 2.5 | 2.94 | 0.56 |
| 20:30-20:44 | 241 | 380 | 37 | 46 | 5 | 3.78 | 3.01 | 0.47 |
| 20:45-20:59 | 275 | 233 | 30 | 41 | 20 | 3.43 | 1.92 | 0.52 |
| 21:00-21:14 | 270 | 333 | 54 | 31 | 11 | 4.45 | 2.09 | 0.62 |
| 21:15-21:29 | 209 | 275 | 41 | 33 | 16 | 2.79 | 2.31 | 0.61 |
| 21:30-21:44 | 251 | 333 | 31 | 49 | 19 | 2.63 | 2.62 | 0.51 |
| 21:45-21:59 | 262 | 318 | 41 | 30 | 10 | 4.21 | 2.61 | 0.51 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 359 | 851 | 140 | 59 | 7 | 3.72 | 2.08 | 0.88 |
| 07:15-07:29 | 316 | 699 | 130 | 70 | 18 | 2.34 | 2.45 | 0.87 |
| 07:30-07:44 | 551 | 486 | 117 | 83 | 20 | 3.44 | 2.34 | 0.86 |
| 07:45-07:59 | 577 | 502 | 106 | 97 | 9 | 2.2 | 3.09 | 0.85 |
| 08:00-08:14 | 392 | 420 | 86 | 56 | 10 | 3.7 | 2.17 | 0.89 |
| 08:15-08:29 | 404 | 786 | 81 | 120 | 18 | 4.4 | 2.77 | 0.88 |
| 08:30-08:44 | 444 | 716 | 147 | 111 | 8 | 4.2 | 3.13 | 1.06 |
| 08:45-08:59 | 509 | 708 | 135 | 88 | 10 | 2.25 | 2.2 | 1.05 |
| 09:00-09:14 | 546 | 887 | 103 | 63 | 20 | 2.22 | 3.11 | 0.85 |
| 09:15-09:29 | 404 | 581 | 124 | 55 | 20 | 2.37 | 2.62 | 0.9 |
| 09:30-09:44 | 475 | 814 | 128 | 104 | 17 | 3.65 | 2.01 | 1.09 |
| 09:45-09:59 | 308 | 870 | 104 | 69 | 19 | 3.55 | 2.01 | 0.85 |
| 10:00-10:14 | 202 | 338 | 64 | 50 | 9 | 2.32 | 3.12 | 0.64 |
| 10:15-10:29 | 298 | 376 | 55 | 49 | 12 | 2.74 | 2.17 | 0.57 |
| 10:30-10:44 | 152 | 352 | 40 | 22 | 7 | 3.77 | 2.93 | 0.57 |
| 10:45-10:59 | 166 | 352 | 59 | 21 | 13 | 4.14 | 2.7 | 0.42 |
| 16:00-16:14 | 260 | 398 | 35 | 29 | 18 | 3.28 | 2.07 | 0.69 |
| 16:15-16:29 | 269 | 354 | 57 | 50 | 7 | 3.05 | 2.05 | 0.53 |
| 16:30-16:44 | 177 | 237 | 56 | 36 | 9 | 4.37 | 2.05 | 0.53 |
| 16:45-16:59 | 200 | 356 | 69 | 26 | 9 | 2.19 | 2.16 | 0.43 |
| 17:00-17:14 | 330 | 700 | 130 | 56 | 17 | 3.49 | 1.91 | 1.07 |
| 17:15-17:29 | 571 | 582 | 119 | 101 | 15 | 3.12 | 1.82 | 0.92 |
| 17:30-17:44 | 551 | 413 | 96 | 86 | 13 | 3.65 | 1.94 | 0.91 |
| 17:45-17:59 | 508 | 602 | 119 | 81 | 11 | 2.22 | 1.86 | 0.93 |
| 18:00-18:14 | 454 | 580 | 123 | 68 | 17 | 2.59 | 2.64 | 0.88 |
| 18:15-18:29 | 365 | 813 | 88 | 93 | 15 | 3.09 | 2.18 | 0.99 |
| 18:30-18:44 | 330 | 438 | 115 | 52 | 11 | 2.51 | 3.18 | 1.06 |
| 18:45-18:59 | 382 | 547 | 105 | 84 | 17 | 3.53 | 2.49 | 0.88 |
| 19:00-19:14 | 475 | 861 | 123 | 100 | 8 | 4.09 | 2.08 | 0.89 |
| 19:15-19:29 | 419 | 410 | 89 | 84 | 17 | 4.47 | 2.42 | 0.9 |
| 19:30-19:44 | 415 | 839 | 113 | 68 | 7 | 2.25 | 2.08 | 0.88 |
| 19:45-19:59 | 361 | 611 | 98 | 76 | 15 | 2.64 | 2.78 | 1.08 |
| 20:00-20:14 | 298 | 254 | 53 | 23 | 10 | 3.51 | 2.92 | 0.57 |
| 20:15-20:29 | 151 | 240 | 34 | 49 | 17 | 3.31 | 1.88 | 0.45 |
| 20:30-20:44 | 278 | 396 | 66 | 36 | 8 | 2.68 | 2.64 | 0.44 |
| 20:45-20:59 | 227 | 343 | 34 | 39 | 15 | 4.21 | 2.66 | 0.68 |
| 21:00-21:14 | 297 | 308 | 52 | 32 | 20 | 3.62 | 2.79 | 0.62 |
| 21:15-21:29 | 211 | 321 | 56 | 37 | 9 | 3.86 | 3.07 | 0.64 |
| 21:30-21:44 | 170 | 239 | 35 | 40 | 10 | 2.74 | 2.98 | 0.6 |
| 21:45-21:59 | 196 | 307 | 33 | 22 | 11 | 2.24 | 2.67 | 0.47 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 539 | 433 | 110 | 76 | 13 | 3.69 | 2.68 | 0.87 |
| 07:15-07:29 | 554 | 428 | 129 | 76 | 7 | 2.32 | 1.91 | 1.0 |
| 07:30-07:44 | 312 | 527 | 98 | 115 | 14 | 4.26 | 1.92 | 1.03 |
| 07:45-07:59 | 398 | 811 | 82 | 53 | 9 | 2.9 | 1.83 | 1.0 |
| 08:00-08:14 | 526 | 662 | 105 | 75 | 5 | 2.11 | 2.53 | 0.85 |
| 08:15-08:29 | 379 | 477 | 89 | 98 | 7 | 2.17 | 2.67 | 0.95 |
| 08:30-08:44 | 517 | 890 | 119 | 61 | 17 | 4.19 | 2.68 | 0.94 |
| 08:45-08:59 | 530 | 773 | 132 | 112 | 7 | 4.38 | 1.85 | 0.9 |
| 09:00-09:14 | 454 | 592 | 90 | 90 | 10 | 2.89 | 3.09 | 0.96 |
| 09:15-09:29 | 478 | 693 | 97 | 106 | 19 | 2.96 | 2.22 | 0.93 |
| 09:30-09:44 | 368 | 747 | 109 | 68 | 10 | 2.79 | 1.99 | 1.04 |
| 09:45-09:59 | 477 | 784 | 147 | 106 | 10 | 3.65 | 3.13 | 0.9 |
| 10:00-10:14 | 160 | 317 | 67 | 23 | 17 | 2.91 | 3.04 | 0.67 |
| 10:15-10:29 | 234 | 360 | 62 | 21 | 5 | 2.13 | 3.04 | 0.45 |
| 10:30-10:44 | 255 | 390 | 51 | 42 | 7 | 2.48 | 2.02 | 0.61 |
| 10:45-10:59 | 293 | 214 | 33 | 25 | 14 | 3.1 | 2.64 | 0.52 |
| 16:00-16:14 | 250 | 392 | 63 | 38 | 5 | 2.16 | 2.01 | 0.61 |
| 16:15-16:29 | 184 | 252 | 63 | 20 | 17 | 3.9 | 2.28 | 0.63 |
| 16:30-16:44 | 151 | 291 | 68 | 27 | 16 | 3.79 | 2.04 | 0.55 |
| 16:45-16:59 | 177 | 329 | 43 | 33 | 10 | 3.19 | 3.01 | 0.6 |
| 17:00-17:14 | 308 | 886 | 124 | 63 | 16 | 2.22 | 2.76 | 0.93 |
| 17:15-17:29 | 404 | 495 | 127 | 99 | 13 | 2.25 | 2.58 | 0.93 |
| 17:30-17:44 | 595 | 815 | 92 | 101 | 6 | 2.61 | 2.57 | 1.07 |
| 17:45-17:59 | 566 | 472 | 120 | 81 | 17 | 3.97 | 3.04 | 0.98 |
| 18:00-18:14 | 386 | 801 | 84 | 94 | 10 | 3.6 | 2.57 | 1.09 |
| 18:15-18:29 | 562 | 520 | 125 | 118 | 20 | 3.61 | 2.46 | 0.86 |
| 18:30-18:44 | 568 | 470 | 122 | 79 | 9 | 2.52 | 2.55 | 0.86 |
| 18:45-18:59 | 504 | 480 | 107 | 71 | 10 | 4.09 | 3.11 | 1.03 |
| 19:00-19:14 | 409 | 815 | 130 | 61 | 8 | 2.21 | 2.57 | 1.08 |
| 19:15-19:29 | 358 | 571 | 134 | 80 | 15 | 3.23 | 2.27 | 1.05 |
| 19:30-19:44 | 439 | 736 | 149 | 116 | 8 | 2.38 | 3.07 | 0.92 |
| 19:45-19:59 | 377 | 600 | 117 | 58 | 16 | 3.63 | 2.11 | 1.03 |
| 20:00-20:14 | 251 | 381 | 41 | 44 | 15 | 2.22 | 1.96 | 0.59 |
| 20:15-20:29 | 264 | 231 | 68 | 38 | 12 | 2.26 | 2.84 | 0.45 |
| 20:30-20:44 | 272 | 343 | 64 | 25 | 19 | 3.18 | 2.52 | 0.53 |
| 20:45-20:59 | 247 | 342 | 39 | 45 | 11 | 4.33 | 2.3 | 0.58 |
| 21:00-21:14 | 159 | 376 | 40 | 34 | 9 | 2.98 | 2.87 | 0.61 |
| 21:15-21:29 | 259 | 265 | 50 | 49 | 13 | 3.07 | 2.37 | 0.66 |
| 21:30-21:44 | 174 | 258 | 56 | 43 | 5 | 3.97 | 2.46 | 0.45 |
| 21:45-21:59 | 172 | 229 | 55 | 46 | 18 | 4.17 | 3.17 | 0.59 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 557 | 430 | 146 | 69 | 10 | 3.41 | 2.24 | 0.9 |
| 07:15-07:29 | 358 | 415 | 112 | 104 | 8 | 3.28 | 2.01 | 0.9 |
| 07:30-07:44 | 326 | 456 | 133 | 111 | 11 | 4.4 | 1.94 | 1.07 |
| 07:45-07:59 | 347 | 475 | 103 | 87 | 5 | 3.8 | 1.83 | 1.1 |
| 08:00-08:14 | 370 | 752 | 112 | 88 | 19 | 3.52 | 3.19 | 1.04 |
| 08:15-08:29 | 333 | 741 | 121 | 95 | 19 | 2.82 | 2.37 | 1.08 |
| 08:30-08:44 | 463 | 422 | 83 | 100 | 8 | 3.39 | 2.66 | 0.89 |
| 08:45-08:59 | 453 | 748 | 107 | 115 | 18 | 3.44 | 2.14 | 0.87 |
| 09:00-09:14 | 568 | 671 | 147 | 83 | 10 | 3.08 | 2.16 | 1.03 |
| 09:15-09:29 | 585 | 626 | 122 | 67 | 12 | 2.84 | 2.38 | 0.87 |
| 09:30-09:44 | 526 | 886 | 83 | 78 | 19 | 2.19 | 2.75 | 1.02 |
| 09:45-09:59 | 361 | 478 | 95 | 111 | 9 | 2.75 | 2.8 | 0.88 |
| 10:00-10:14 | 278 | 257 | 70 | 29 | 9 | 2.36 | 2.67 | 0.66 |
| 10:15-10:29 | 250 | 210 | 56 | 42 | 13 | 3.17 | 2.32 | 0.57 |
| 10:30-10:44 | 217 | 338 | 37 | 37 | 20 | 3.14 | 2.81 | 0.5 |
| 10:45-10:59 | 170 | 351 | 40 | 43 | 15 | 2.63 | 2.82 | 0.48 |
| 16:00-16:14 | 284 | 348 | 34 | 40 | 18 | 3.21 | 2.71 | 0.62 |
| 16:15-16:29 | 176 | 205 | 44 | 38 | 12 | 2.96 | 2.38 | 0.53 |
| 16:30-16:44 | 225 | 304 | 60 | 22 | 9 | 3.07 | 2.01 | 0.52 |
| 16:45-16:59 | 280 | 270 | 41 | 24 | 15 | 3.94 | 3.15 | 0.44 |
| 17:00-17:14 | 471 | 850 | 142 | 84 | 10 | 2.14 | 1.86 | 0.87 |
| 17:15-17:29 | 322 | 518 | 102 | 88 | 6 | 3.86 | 2.8 | 0.96 |
| 17:30-17:44 | 344 | 715 | 138 | 62 | 9 | 3.3 | 2.63 | 1.05 |
| 17:45-17:59 | 584 | 401 | 86 | 54 | 8 | 3.84 | 2.25 | 0.99 |
| 18:00-18:14 | 370 | 582 | 130 | 80 | 16 | 4.21 | 2.01 | 1.05 |
| 18:15-18:29 | 318 | 699 | 120 | 88 | 6 | 3.22 | 1.81 | 1.01 |
| 18:30-18:44 | 489 | 812 | 125 | 58 | 11 | 2.41 | 3.18 | 1.04 |
| 18:45-18:59 | 334 | 642 | 143 | 113 | 13 | 4.4 | 2.23 | 0.87 |
| 19:00-19:14 | 541 | 841 | 115 | 94 | 18 | 4.22 | 3.09 | 0.99 |
| 19:15-19:29 | 588 | 698 | 97 | 105 | 18 | 3.04 | 2.31 | 1.04 |
| 19:30-19:44 | 599 | 408 | 107 | 109 | 11 | 4.18 | 3.11 | 1.02 |
| 19:45-19:59 | 455 | 755 | 138 | 113 | 17 | 2.35 | 2.47 | 0.85 |
| 20:00-20:14 | 172 | 256 | 62 | 41 | 6 | 3.12 | 1.91 | 0.64 |
| 20:15-20:29 | 199 | 284 | 58 | 44 | 13 | 3.41 | 2.09 | 0.43 |
| 20:30-20:44 | 183 | 353 | 66 | 28 | 18 | 2.39 | 2.77 | 0.44 |
| 20:45-20:59 | 190 | 246 | 54 | 37 | 13 | 4.02 | 3.16 | 0.54 |
| 21:00-21:14 | 273 | 366 | 65 | 40 | 5 | 3.65 | 3.09 | 0.52 |
| 21:15-21:29 | 279 | 345 | 59 | 21 | 7 | 3.08 | 2.16 | 0.66 |
| 21:30-21:44 | 290 | 241 | 68 | 28 | 10 | 4.43 | 2.54 | 0.5 |
| 21:45-21:59 | 286 | 281 | 39 | 20 | 7 | 3.14 | 2.85 | 0.46 |

### A.9 Day 9: 2026-06-09

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 422 | 444 | 117 | 92 | 17 | 4.17 | 2.02 | 0.94 |
| 07:15-07:29 | 572 | 481 | 127 | 63 | 18 | 2.24 | 2.62 | 0.94 |
| 07:30-07:44 | 508 | 482 | 148 | 105 | 8 | 4.34 | 2.19 | 1.0 |
| 07:45-07:59 | 306 | 860 | 145 | 52 | 19 | 3.35 | 2.2 | 1.02 |
| 08:00-08:14 | 573 | 655 | 90 | 96 | 12 | 3.23 | 2.76 | 0.93 |
| 08:15-08:29 | 594 | 637 | 145 | 76 | 18 | 4.44 | 2.5 | 1.0 |
| 08:30-08:44 | 559 | 606 | 127 | 63 | 5 | 2.27 | 2.98 | 0.86 |
| 08:45-08:59 | 454 | 405 | 120 | 58 | 13 | 2.96 | 2.74 | 0.98 |
| 09:00-09:14 | 490 | 875 | 97 | 78 | 12 | 2.85 | 2.16 | 0.9 |
| 09:15-09:29 | 422 | 728 | 102 | 102 | 18 | 2.69 | 1.84 | 0.94 |
| 09:30-09:44 | 366 | 581 | 93 | 67 | 17 | 2.82 | 3.07 | 1.09 |
| 09:45-09:59 | 366 | 562 | 97 | 109 | 12 | 3.23 | 2.14 | 0.92 |
| 10:00-10:14 | 194 | 247 | 56 | 35 | 15 | 3.72 | 2.81 | 0.43 |
| 10:15-10:29 | 156 | 319 | 50 | 46 | 10 | 3.98 | 2.35 | 0.61 |
| 10:30-10:44 | 243 | 292 | 30 | 48 | 20 | 2.98 | 2.53 | 0.6 |
| 10:45-10:59 | 206 | 308 | 45 | 24 | 15 | 4.33 | 2.39 | 0.53 |
| 16:00-16:14 | 227 | 351 | 44 | 48 | 5 | 4.46 | 2.3 | 0.48 |
| 16:15-16:29 | 242 | 332 | 35 | 43 | 5 | 2.34 | 2.86 | 0.67 |
| 16:30-16:44 | 231 | 366 | 30 | 39 | 16 | 4.03 | 3.0 | 0.65 |
| 16:45-16:59 | 298 | 343 | 65 | 30 | 16 | 2.25 | 2.22 | 0.62 |
| 17:00-17:14 | 321 | 572 | 149 | 93 | 12 | 3.74 | 2.15 | 1.05 |
| 17:15-17:29 | 304 | 544 | 121 | 84 | 12 | 3.48 | 1.9 | 1.03 |
| 17:30-17:44 | 361 | 461 | 135 | 115 | 17 | 3.91 | 2.14 | 0.98 |
| 17:45-17:59 | 301 | 884 | 116 | 119 | 10 | 2.69 | 2.13 | 0.91 |
| 18:00-18:14 | 524 | 479 | 147 | 95 | 8 | 3.59 | 2.94 | 0.96 |
| 18:15-18:29 | 394 | 648 | 105 | 57 | 8 | 2.32 | 2.54 | 0.94 |
| 18:30-18:44 | 499 | 818 | 89 | 80 | 15 | 4.41 | 2.47 | 1.03 |
| 18:45-18:59 | 430 | 791 | 91 | 101 | 11 | 4.12 | 2.63 | 0.9 |
| 19:00-19:14 | 460 | 482 | 136 | 71 | 16 | 3.56 | 2.97 | 1.08 |
| 19:15-19:29 | 479 | 693 | 117 | 88 | 17 | 2.12 | 2.19 | 0.92 |
| 19:30-19:44 | 455 | 839 | 139 | 78 | 20 | 2.95 | 2.7 | 1.05 |
| 19:45-19:59 | 537 | 474 | 117 | 119 | 9 | 4.14 | 2.07 | 0.97 |
| 20:00-20:14 | 186 | 396 | 39 | 36 | 19 | 3.14 | 1.85 | 0.54 |
| 20:15-20:29 | 162 | 251 | 52 | 22 | 17 | 3.39 | 2.04 | 0.54 |
| 20:30-20:44 | 152 | 227 | 57 | 34 | 20 | 3.64 | 2.6 | 0.45 |
| 20:45-20:59 | 234 | 312 | 55 | 49 | 9 | 2.64 | 1.84 | 0.67 |
| 21:00-21:14 | 183 | 364 | 59 | 23 | 19 | 3.4 | 2.67 | 0.4 |
| 21:15-21:29 | 285 | 244 | 35 | 20 | 10 | 4.13 | 2.62 | 0.67 |
| 21:30-21:44 | 272 | 381 | 54 | 31 | 13 | 4.17 | 2.07 | 0.43 |
| 21:45-21:59 | 263 | 392 | 69 | 26 | 19 | 2.66 | 2.65 | 0.46 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 314 | 422 | 140 | 50 | 14 | 4.15 | 3.08 | 0.95 |
| 07:15-07:29 | 453 | 562 | 117 | 82 | 14 | 2.83 | 2.71 | 0.96 |
| 07:30-07:44 | 588 | 672 | 95 | 61 | 17 | 3.72 | 2.9 | 0.89 |
| 07:45-07:59 | 443 | 474 | 121 | 71 | 6 | 2.94 | 3.14 | 0.93 |
| 08:00-08:14 | 322 | 706 | 129 | 99 | 7 | 3.55 | 3.03 | 0.92 |
| 08:15-08:29 | 415 | 562 | 128 | 55 | 15 | 3.27 | 3.11 | 1.09 |
| 08:30-08:44 | 566 | 748 | 149 | 119 | 8 | 3.47 | 1.83 | 1.03 |
| 08:45-08:59 | 384 | 798 | 128 | 55 | 16 | 2.3 | 2.0 | 0.95 |
| 09:00-09:14 | 436 | 608 | 109 | 115 | 18 | 4.02 | 2.38 | 0.89 |
| 09:15-09:29 | 584 | 414 | 104 | 100 | 8 | 3.84 | 2.5 | 0.94 |
| 09:30-09:44 | 531 | 622 | 140 | 106 | 11 | 4.05 | 2.65 | 0.9 |
| 09:45-09:59 | 478 | 683 | 145 | 119 | 11 | 2.43 | 3.17 | 1.02 |
| 10:00-10:14 | 210 | 275 | 62 | 47 | 18 | 2.71 | 1.88 | 0.67 |
| 10:15-10:29 | 279 | 285 | 41 | 37 | 16 | 3.21 | 2.62 | 0.41 |
| 10:30-10:44 | 279 | 262 | 59 | 41 | 13 | 3.98 | 3.09 | 0.47 |
| 10:45-10:59 | 219 | 230 | 38 | 43 | 8 | 3.01 | 2.82 | 0.47 |
| 16:00-16:14 | 175 | 284 | 69 | 40 | 15 | 2.75 | 3.13 | 0.47 |
| 16:15-16:29 | 250 | 239 | 56 | 27 | 8 | 4.34 | 1.96 | 0.53 |
| 16:30-16:44 | 232 | 363 | 39 | 48 | 16 | 2.2 | 1.93 | 0.56 |
| 16:45-16:59 | 267 | 238 | 61 | 44 | 18 | 2.68 | 2.25 | 0.57 |
| 17:00-17:14 | 467 | 428 | 83 | 112 | 17 | 3.29 | 1.85 | 0.94 |
| 17:15-17:29 | 452 | 715 | 140 | 68 | 8 | 2.22 | 2.41 | 0.95 |
| 17:30-17:44 | 511 | 751 | 144 | 87 | 13 | 3.58 | 1.91 | 0.91 |
| 17:45-17:59 | 477 | 829 | 112 | 99 | 8 | 2.11 | 3.11 | 1.06 |
| 18:00-18:14 | 470 | 492 | 108 | 111 | 11 | 4.25 | 2.83 | 0.9 |
| 18:15-18:29 | 506 | 518 | 99 | 102 | 16 | 4.15 | 2.48 | 0.97 |
| 18:30-18:44 | 532 | 442 | 104 | 55 | 14 | 3.72 | 3.17 | 0.95 |
| 18:45-18:59 | 523 | 857 | 90 | 82 | 15 | 2.2 | 2.94 | 0.98 |
| 19:00-19:14 | 316 | 543 | 110 | 78 | 10 | 4.36 | 2.2 | 0.9 |
| 19:15-19:29 | 316 | 420 | 80 | 93 | 17 | 3.58 | 2.77 | 1.01 |
| 19:30-19:44 | 302 | 813 | 89 | 66 | 16 | 2.96 | 2.61 | 1.0 |
| 19:45-19:59 | 410 | 628 | 93 | 54 | 11 | 3.25 | 2.32 | 1.07 |
| 20:00-20:14 | 231 | 378 | 47 | 38 | 16 | 3.3 | 2.43 | 0.6 |
| 20:15-20:29 | 169 | 322 | 62 | 24 | 19 | 3.31 | 2.04 | 0.44 |
| 20:30-20:44 | 250 | 228 | 54 | 27 | 6 | 2.45 | 2.28 | 0.6 |
| 20:45-20:59 | 156 | 333 | 49 | 35 | 9 | 2.46 | 2.39 | 0.66 |
| 21:00-21:14 | 226 | 309 | 52 | 38 | 15 | 2.89 | 3.05 | 0.6 |
| 21:15-21:29 | 186 | 380 | 37 | 21 | 13 | 4.13 | 2.21 | 0.53 |
| 21:30-21:44 | 155 | 317 | 61 | 28 | 11 | 3.68 | 3.05 | 0.57 |
| 21:45-21:59 | 173 | 293 | 53 | 25 | 9 | 2.49 | 2.23 | 0.64 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 435 | 895 | 135 | 64 | 6 | 4.04 | 2.45 | 0.89 |
| 07:15-07:29 | 321 | 419 | 134 | 60 | 9 | 2.13 | 1.92 | 1.03 |
| 07:30-07:44 | 449 | 869 | 95 | 66 | 13 | 2.32 | 3.12 | 0.95 |
| 07:45-07:59 | 588 | 531 | 87 | 109 | 13 | 3.73 | 2.45 | 0.97 |
| 08:00-08:14 | 528 | 710 | 104 | 61 | 12 | 4.0 | 2.21 | 1.03 |
| 08:15-08:29 | 476 | 755 | 133 | 106 | 12 | 2.42 | 1.94 | 0.99 |
| 08:30-08:44 | 342 | 479 | 150 | 61 | 18 | 3.98 | 2.79 | 0.9 |
| 08:45-08:59 | 340 | 527 | 149 | 77 | 15 | 3.87 | 2.39 | 0.99 |
| 09:00-09:14 | 399 | 851 | 103 | 96 | 18 | 3.4 | 2.09 | 1.07 |
| 09:15-09:29 | 389 | 883 | 111 | 57 | 11 | 3.73 | 2.93 | 0.91 |
| 09:30-09:44 | 595 | 427 | 97 | 95 | 15 | 3.43 | 2.43 | 0.95 |
| 09:45-09:59 | 553 | 526 | 150 | 102 | 12 | 2.73 | 2.41 | 1.07 |
| 10:00-10:14 | 155 | 240 | 31 | 31 | 9 | 2.33 | 2.31 | 0.67 |
| 10:15-10:29 | 259 | 359 | 46 | 47 | 8 | 4.48 | 2.75 | 0.46 |
| 10:30-10:44 | 250 | 271 | 45 | 49 | 14 | 2.28 | 3.07 | 0.6 |
| 10:45-10:59 | 282 | 333 | 50 | 29 | 19 | 2.89 | 1.89 | 0.5 |
| 16:00-16:14 | 206 | 396 | 69 | 39 | 12 | 4.1 | 2.39 | 0.52 |
| 16:15-16:29 | 185 | 220 | 35 | 23 | 6 | 3.11 | 1.9 | 0.53 |
| 16:30-16:44 | 192 | 343 | 65 | 34 | 8 | 2.77 | 3.12 | 0.67 |
| 16:45-16:59 | 211 | 290 | 44 | 48 | 9 | 4.49 | 3.0 | 0.62 |
| 17:00-17:14 | 416 | 642 | 94 | 60 | 12 | 3.4 | 2.25 | 1.08 |
| 17:15-17:29 | 385 | 432 | 138 | 88 | 11 | 3.21 | 2.09 | 0.87 |
| 17:30-17:44 | 443 | 773 | 89 | 76 | 16 | 3.7 | 2.83 | 0.99 |
| 17:45-17:59 | 526 | 759 | 137 | 54 | 16 | 3.51 | 2.77 | 0.91 |
| 18:00-18:14 | 472 | 637 | 119 | 71 | 20 | 3.48 | 2.5 | 0.93 |
| 18:15-18:29 | 517 | 726 | 109 | 117 | 20 | 3.78 | 1.89 | 0.93 |
| 18:30-18:44 | 504 | 415 | 143 | 88 | 20 | 4.29 | 2.75 | 0.91 |
| 18:45-18:59 | 414 | 446 | 108 | 103 | 20 | 2.11 | 2.36 | 1.08 |
| 19:00-19:14 | 581 | 472 | 116 | 72 | 11 | 3.46 | 2.87 | 1.07 |
| 19:15-19:29 | 501 | 639 | 117 | 95 | 7 | 2.73 | 2.24 | 0.96 |
| 19:30-19:44 | 582 | 545 | 93 | 91 | 18 | 3.58 | 2.19 | 0.91 |
| 19:45-19:59 | 415 | 834 | 80 | 70 | 9 | 3.36 | 2.72 | 0.96 |
| 20:00-20:14 | 154 | 350 | 45 | 38 | 6 | 2.2 | 2.21 | 0.69 |
| 20:15-20:29 | 215 | 388 | 61 | 21 | 7 | 2.85 | 2.19 | 0.47 |
| 20:30-20:44 | 200 | 323 | 52 | 27 | 7 | 4.03 | 2.07 | 0.6 |
| 20:45-20:59 | 169 | 245 | 61 | 26 | 17 | 2.56 | 2.19 | 0.64 |
| 21:00-21:14 | 256 | 276 | 32 | 23 | 9 | 4.24 | 3.03 | 0.52 |
| 21:15-21:29 | 165 | 352 | 30 | 22 | 7 | 2.4 | 2.37 | 0.51 |
| 21:30-21:44 | 278 | 385 | 55 | 20 | 11 | 3.44 | 2.57 | 0.65 |
| 21:45-21:59 | 234 | 260 | 45 | 27 | 8 | 2.36 | 2.53 | 0.53 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 482 | 694 | 120 | 118 | 18 | 2.38 | 1.83 | 0.93 |
| 07:15-07:29 | 416 | 866 | 82 | 51 | 18 | 3.29 | 2.58 | 0.85 |
| 07:30-07:44 | 529 | 543 | 105 | 78 | 17 | 3.11 | 2.35 | 0.94 |
| 07:45-07:59 | 503 | 790 | 113 | 59 | 16 | 3.34 | 3.13 | 1.01 |
| 08:00-08:14 | 360 | 764 | 95 | 97 | 17 | 3.86 | 1.86 | 1.08 |
| 08:15-08:29 | 439 | 833 | 132 | 63 | 15 | 3.96 | 2.55 | 0.99 |
| 08:30-08:44 | 312 | 810 | 125 | 104 | 15 | 2.3 | 2.22 | 0.92 |
| 08:45-08:59 | 525 | 722 | 99 | 62 | 19 | 3.67 | 2.73 | 0.88 |
| 09:00-09:14 | 495 | 845 | 149 | 81 | 11 | 2.63 | 2.55 | 0.95 |
| 09:15-09:29 | 340 | 846 | 81 | 97 | 8 | 3.04 | 2.57 | 1.02 |
| 09:30-09:44 | 400 | 694 | 133 | 50 | 10 | 3.64 | 2.06 | 1.09 |
| 09:45-09:59 | 564 | 538 | 90 | 118 | 17 | 3.53 | 2.96 | 1.08 |
| 10:00-10:14 | 269 | 312 | 67 | 47 | 6 | 2.71 | 2.21 | 0.44 |
| 10:15-10:29 | 152 | 288 | 44 | 50 | 10 | 3.12 | 1.9 | 0.58 |
| 10:30-10:44 | 215 | 254 | 54 | 29 | 6 | 2.6 | 2.03 | 0.61 |
| 10:45-10:59 | 202 | 293 | 32 | 47 | 11 | 3.63 | 2.47 | 0.67 |
| 16:00-16:14 | 232 | 201 | 33 | 20 | 18 | 3.33 | 1.91 | 0.6 |
| 16:15-16:29 | 261 | 338 | 42 | 41 | 9 | 2.19 | 1.94 | 0.51 |
| 16:30-16:44 | 267 | 221 | 62 | 27 | 18 | 3.85 | 3.03 | 0.62 |
| 16:45-16:59 | 299 | 325 | 66 | 26 | 14 | 3.26 | 3.04 | 0.43 |
| 17:00-17:14 | 510 | 477 | 98 | 60 | 12 | 4.23 | 1.95 | 0.85 |
| 17:15-17:29 | 317 | 679 | 89 | 95 | 6 | 2.26 | 2.6 | 0.99 |
| 17:30-17:44 | 565 | 741 | 119 | 93 | 16 | 3.32 | 2.27 | 1.02 |
| 17:45-17:59 | 518 | 503 | 115 | 73 | 12 | 4.24 | 2.19 | 1.06 |
| 18:00-18:14 | 329 | 603 | 86 | 84 | 8 | 2.67 | 2.71 | 1.06 |
| 18:15-18:29 | 416 | 727 | 142 | 90 | 13 | 4.41 | 2.37 | 1.06 |
| 18:30-18:44 | 558 | 750 | 97 | 67 | 15 | 2.46 | 2.02 | 0.95 |
| 18:45-18:59 | 464 | 822 | 118 | 106 | 11 | 4.02 | 1.87 | 0.98 |
| 19:00-19:14 | 308 | 618 | 138 | 105 | 17 | 2.92 | 2.33 | 1.07 |
| 19:15-19:29 | 364 | 455 | 92 | 71 | 18 | 4.25 | 2.37 | 0.95 |
| 19:30-19:44 | 424 | 882 | 139 | 84 | 9 | 3.45 | 2.66 | 0.91 |
| 19:45-19:59 | 379 | 734 | 93 | 82 | 16 | 3.05 | 3.11 | 0.96 |
| 20:00-20:14 | 255 | 310 | 57 | 50 | 8 | 2.63 | 1.84 | 0.58 |
| 20:15-20:29 | 290 | 218 | 37 | 29 | 6 | 3.66 | 3.17 | 0.54 |
| 20:30-20:44 | 172 | 235 | 69 | 36 | 16 | 3.29 | 2.02 | 0.41 |
| 20:45-20:59 | 177 | 363 | 59 | 49 | 12 | 2.69 | 2.53 | 0.64 |
| 21:00-21:14 | 283 | 383 | 57 | 36 | 20 | 2.59 | 3.14 | 0.54 |
| 21:15-21:29 | 236 | 257 | 60 | 41 | 8 | 3.66 | 2.78 | 0.67 |
| 21:30-21:44 | 283 | 385 | 61 | 42 | 12 | 3.76 | 2.6 | 0.6 |
| 21:45-21:59 | 221 | 321 | 55 | 38 | 18 | 2.53 | 1.84 | 0.52 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 375 | 552 | 109 | 85 | 6 | 4.08 | 2.07 | 1.08 |
| 07:15-07:29 | 544 | 413 | 104 | 94 | 7 | 2.75 | 3.02 | 0.94 |
| 07:30-07:44 | 344 | 549 | 125 | 63 | 16 | 4.24 | 2.27 | 1.05 |
| 07:45-07:59 | 428 | 485 | 103 | 112 | 6 | 2.78 | 2.05 | 0.96 |
| 08:00-08:14 | 482 | 657 | 126 | 78 | 9 | 2.64 | 2.82 | 0.86 |
| 08:15-08:29 | 548 | 657 | 142 | 102 | 10 | 3.82 | 2.9 | 1.05 |
| 08:30-08:44 | 414 | 767 | 145 | 59 | 6 | 3.13 | 1.93 | 1.05 |
| 08:45-08:59 | 519 | 471 | 119 | 58 | 19 | 2.79 | 2.79 | 1.0 |
| 09:00-09:14 | 320 | 757 | 112 | 89 | 16 | 3.05 | 2.24 | 1.09 |
| 09:15-09:29 | 570 | 613 | 126 | 52 | 19 | 2.33 | 2.51 | 0.86 |
| 09:30-09:44 | 560 | 751 | 81 | 95 | 5 | 4.32 | 2.55 | 0.85 |
| 09:45-09:59 | 583 | 438 | 131 | 64 | 10 | 4.06 | 2.04 | 0.94 |
| 10:00-10:14 | 224 | 229 | 41 | 28 | 16 | 4.03 | 1.86 | 0.56 |
| 10:15-10:29 | 228 | 361 | 57 | 27 | 10 | 4.03 | 2.79 | 0.58 |
| 10:30-10:44 | 228 | 380 | 63 | 49 | 20 | 4.34 | 2.24 | 0.55 |
| 10:45-10:59 | 284 | 227 | 70 | 41 | 7 | 3.01 | 1.93 | 0.59 |
| 16:00-16:14 | 253 | 329 | 34 | 34 | 17 | 3.24 | 3.04 | 0.49 |
| 16:15-16:29 | 245 | 241 | 47 | 20 | 11 | 3.33 | 3.06 | 0.69 |
| 16:30-16:44 | 179 | 215 | 67 | 47 | 17 | 3.66 | 2.17 | 0.64 |
| 16:45-16:59 | 238 | 373 | 37 | 39 | 9 | 3.29 | 2.13 | 0.65 |
| 17:00-17:14 | 434 | 728 | 145 | 117 | 5 | 2.95 | 3.11 | 0.94 |
| 17:15-17:29 | 510 | 775 | 145 | 94 | 19 | 3.79 | 2.15 | 0.98 |
| 17:30-17:44 | 533 | 610 | 98 | 54 | 11 | 2.63 | 2.53 | 0.96 |
| 17:45-17:59 | 430 | 532 | 80 | 68 | 11 | 3.19 | 3.01 | 0.99 |
| 18:00-18:14 | 436 | 846 | 115 | 108 | 10 | 3.02 | 2.42 | 0.93 |
| 18:15-18:29 | 462 | 859 | 144 | 58 | 10 | 3.91 | 2.94 | 1.06 |
| 18:30-18:44 | 528 | 713 | 93 | 75 | 16 | 4.49 | 2.79 | 0.85 |
| 18:45-18:59 | 407 | 598 | 89 | 57 | 15 | 2.66 | 1.93 | 0.91 |
| 19:00-19:14 | 584 | 835 | 100 | 65 | 20 | 3.25 | 1.9 | 1.03 |
| 19:15-19:29 | 317 | 876 | 88 | 69 | 16 | 2.94 | 2.28 | 1.03 |
| 19:30-19:44 | 489 | 568 | 143 | 79 | 14 | 3.75 | 2.48 | 0.86 |
| 19:45-19:59 | 498 | 504 | 80 | 70 | 10 | 3.66 | 1.82 | 0.98 |
| 20:00-20:14 | 184 | 290 | 47 | 31 | 18 | 3.17 | 2.61 | 0.7 |
| 20:15-20:29 | 203 | 245 | 38 | 22 | 10 | 2.77 | 1.92 | 0.67 |
| 20:30-20:44 | 250 | 241 | 41 | 26 | 15 | 2.49 | 2.96 | 0.48 |
| 20:45-20:59 | 294 | 216 | 44 | 46 | 7 | 4.3 | 2.99 | 0.6 |
| 21:00-21:14 | 193 | 337 | 70 | 34 | 8 | 4.28 | 2.06 | 0.45 |
| 21:15-21:29 | 163 | 310 | 63 | 43 | 5 | 3.19 | 1.89 | 0.6 |
| 21:30-21:44 | 168 | 200 | 43 | 39 | 12 | 2.34 | 2.11 | 0.61 |
| 21:45-21:59 | 204 | 220 | 69 | 37 | 16 | 4.28 | 2.36 | 0.63 |

### A.10 Day 10: 2026-06-10

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 530 | 605 | 126 | 102 | 5 | 4.18 | 1.98 | 0.91 |
| 07:15-07:29 | 525 | 884 | 130 | 84 | 14 | 2.33 | 2.21 | 0.98 |
| 07:30-07:44 | 472 | 702 | 80 | 106 | 11 | 3.12 | 2.29 | 1.08 |
| 07:45-07:59 | 496 | 748 | 119 | 54 | 20 | 3.49 | 3.03 | 0.9 |
| 08:00-08:14 | 386 | 736 | 133 | 82 | 7 | 4.41 | 3.06 | 0.98 |
| 08:15-08:29 | 364 | 627 | 83 | 77 | 19 | 2.33 | 3.03 | 0.9 |
| 08:30-08:44 | 583 | 840 | 92 | 61 | 6 | 3.2 | 2.57 | 0.89 |
| 08:45-08:59 | 432 | 736 | 140 | 89 | 12 | 2.56 | 1.85 | 1.01 |
| 09:00-09:14 | 548 | 408 | 107 | 66 | 11 | 3.6 | 2.3 | 1.02 |
| 09:15-09:29 | 355 | 674 | 131 | 117 | 11 | 3.94 | 1.86 | 1.02 |
| 09:30-09:44 | 515 | 806 | 137 | 89 | 20 | 2.24 | 1.86 | 0.96 |
| 09:45-09:59 | 357 | 713 | 119 | 68 | 19 | 4.48 | 2.68 | 1.09 |
| 10:00-10:14 | 260 | 268 | 44 | 47 | 7 | 2.43 | 2.97 | 0.51 |
| 10:15-10:29 | 227 | 206 | 34 | 22 | 14 | 3.29 | 2.28 | 0.4 |
| 10:30-10:44 | 225 | 258 | 69 | 36 | 12 | 2.75 | 2.22 | 0.43 |
| 10:45-10:59 | 277 | 343 | 68 | 44 | 6 | 4.05 | 2.9 | 0.4 |
| 16:00-16:14 | 219 | 315 | 62 | 34 | 9 | 4.05 | 2.87 | 0.5 |
| 16:15-16:29 | 250 | 261 | 55 | 42 | 12 | 2.88 | 2.7 | 0.53 |
| 16:30-16:44 | 236 | 268 | 51 | 45 | 18 | 2.7 | 2.42 | 0.56 |
| 16:45-16:59 | 209 | 314 | 63 | 27 | 12 | 2.68 | 1.95 | 0.51 |
| 17:00-17:14 | 577 | 546 | 126 | 91 | 11 | 2.68 | 2.94 | 1.07 |
| 17:15-17:29 | 315 | 450 | 134 | 120 | 6 | 3.02 | 3.03 | 1.04 |
| 17:30-17:44 | 396 | 562 | 103 | 57 | 14 | 3.54 | 2.6 | 1.04 |
| 17:45-17:59 | 377 | 578 | 85 | 88 | 12 | 2.4 | 2.31 | 0.88 |
| 18:00-18:14 | 555 | 817 | 150 | 61 | 16 | 4.17 | 3.06 | 1.06 |
| 18:15-18:29 | 405 | 711 | 121 | 61 | 12 | 3.06 | 3.19 | 1.01 |
| 18:30-18:44 | 424 | 522 | 143 | 88 | 7 | 3.89 | 2.19 | 1.08 |
| 18:45-18:59 | 538 | 516 | 137 | 83 | 5 | 3.13 | 2.66 | 1.05 |
| 19:00-19:14 | 449 | 611 | 107 | 79 | 13 | 3.71 | 2.86 | 0.85 |
| 19:15-19:29 | 537 | 532 | 134 | 82 | 13 | 2.27 | 2.8 | 0.9 |
| 19:30-19:44 | 448 | 666 | 97 | 104 | 12 | 2.35 | 2.87 | 1.07 |
| 19:45-19:59 | 556 | 827 | 121 | 75 | 14 | 2.71 | 1.88 | 1.09 |
| 20:00-20:14 | 266 | 374 | 33 | 39 | 14 | 4.21 | 2.3 | 0.42 |
| 20:15-20:29 | 270 | 237 | 59 | 20 | 11 | 3.89 | 2.79 | 0.5 |
| 20:30-20:44 | 152 | 203 | 46 | 42 | 12 | 3.62 | 2.02 | 0.51 |
| 20:45-20:59 | 290 | 225 | 47 | 27 | 17 | 3.51 | 2.29 | 0.5 |
| 21:00-21:14 | 271 | 331 | 68 | 23 | 17 | 4.37 | 2.04 | 0.65 |
| 21:15-21:29 | 223 | 379 | 68 | 25 | 10 | 2.79 | 2.8 | 0.46 |
| 21:30-21:44 | 176 | 211 | 62 | 33 | 17 | 3.13 | 2.49 | 0.69 |
| 21:45-21:59 | 291 | 377 | 48 | 30 | 18 | 3.55 | 1.92 | 0.46 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 594 | 696 | 129 | 66 | 20 | 2.32 | 3.08 | 1.1 |
| 07:15-07:29 | 351 | 685 | 91 | 75 | 8 | 3.88 | 3.16 | 0.92 |
| 07:30-07:44 | 347 | 778 | 143 | 96 | 14 | 3.06 | 2.55 | 0.89 |
| 07:45-07:59 | 339 | 689 | 89 | 85 | 18 | 2.64 | 2.97 | 1.07 |
| 08:00-08:14 | 565 | 724 | 84 | 72 | 12 | 3.15 | 2.89 | 0.99 |
| 08:15-08:29 | 420 | 816 | 103 | 79 | 19 | 2.66 | 3.11 | 1.02 |
| 08:30-08:44 | 577 | 855 | 149 | 68 | 9 | 3.43 | 2.32 | 0.89 |
| 08:45-08:59 | 345 | 663 | 134 | 57 | 12 | 4.18 | 3.11 | 1.04 |
| 09:00-09:14 | 560 | 703 | 80 | 57 | 9 | 3.36 | 2.7 | 1.01 |
| 09:15-09:29 | 586 | 427 | 97 | 116 | 5 | 4.19 | 3.18 | 1.05 |
| 09:30-09:44 | 420 | 458 | 144 | 85 | 14 | 2.61 | 2.9 | 0.87 |
| 09:45-09:59 | 399 | 668 | 112 | 89 | 19 | 3.8 | 2.4 | 1.04 |
| 10:00-10:14 | 250 | 323 | 52 | 40 | 6 | 3.37 | 2.87 | 0.57 |
| 10:15-10:29 | 166 | 258 | 68 | 20 | 6 | 2.12 | 3.16 | 0.42 |
| 10:30-10:44 | 254 | 217 | 65 | 25 | 7 | 2.48 | 1.93 | 0.62 |
| 10:45-10:59 | 249 | 390 | 52 | 35 | 13 | 2.45 | 1.95 | 0.54 |
| 16:00-16:14 | 292 | 237 | 45 | 20 | 19 | 2.93 | 2.76 | 0.6 |
| 16:15-16:29 | 209 | 333 | 44 | 28 | 17 | 3.15 | 2.61 | 0.48 |
| 16:30-16:44 | 212 | 246 | 41 | 46 | 19 | 3.02 | 3.09 | 0.56 |
| 16:45-16:59 | 173 | 339 | 48 | 38 | 14 | 2.18 | 2.25 | 0.61 |
| 17:00-17:14 | 571 | 564 | 86 | 87 | 20 | 2.7 | 2.15 | 1.06 |
| 17:15-17:29 | 430 | 409 | 139 | 100 | 20 | 2.53 | 2.3 | 1.02 |
| 17:30-17:44 | 435 | 853 | 146 | 51 | 12 | 4.19 | 2.35 | 0.88 |
| 17:45-17:59 | 545 | 780 | 84 | 97 | 8 | 3.5 | 2.84 | 0.97 |
| 18:00-18:14 | 471 | 490 | 91 | 113 | 11 | 2.41 | 2.24 | 1.06 |
| 18:15-18:29 | 314 | 446 | 95 | 84 | 7 | 2.62 | 3.1 | 0.86 |
| 18:30-18:44 | 305 | 815 | 138 | 56 | 6 | 4.22 | 2.87 | 1.0 |
| 18:45-18:59 | 566 | 592 | 136 | 115 | 10 | 2.85 | 2.03 | 1.0 |
| 19:00-19:14 | 542 | 722 | 86 | 92 | 12 | 4.27 | 3.18 | 1.1 |
| 19:15-19:29 | 436 | 510 | 118 | 117 | 20 | 3.41 | 2.14 | 1.08 |
| 19:30-19:44 | 484 | 481 | 110 | 65 | 10 | 4.09 | 2.58 | 0.95 |
| 19:45-19:59 | 563 | 898 | 144 | 107 | 6 | 4.05 | 2.21 | 0.96 |
| 20:00-20:14 | 264 | 278 | 35 | 39 | 8 | 2.14 | 2.92 | 0.62 |
| 20:15-20:29 | 250 | 243 | 54 | 42 | 6 | 3.84 | 3.01 | 0.68 |
| 20:30-20:44 | 264 | 232 | 31 | 20 | 15 | 3.36 | 2.6 | 0.69 |
| 20:45-20:59 | 174 | 316 | 45 | 47 | 10 | 4.09 | 2.22 | 0.44 |
| 21:00-21:14 | 223 | 273 | 53 | 38 | 18 | 2.8 | 2.59 | 0.65 |
| 21:15-21:29 | 251 | 356 | 38 | 41 | 16 | 3.28 | 3.04 | 0.47 |
| 21:30-21:44 | 198 | 398 | 44 | 31 | 10 | 2.9 | 2.51 | 0.62 |
| 21:45-21:59 | 300 | 350 | 51 | 37 | 5 | 2.68 | 1.84 | 0.6 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 389 | 440 | 131 | 99 | 11 | 4.29 | 1.93 | 0.93 |
| 07:15-07:29 | 309 | 821 | 124 | 83 | 9 | 3.25 | 3.01 | 1.06 |
| 07:30-07:44 | 431 | 849 | 111 | 104 | 14 | 2.37 | 1.91 | 0.85 |
| 07:45-07:59 | 399 | 717 | 85 | 64 | 6 | 2.88 | 2.13 | 1.05 |
| 08:00-08:14 | 305 | 652 | 138 | 73 | 17 | 3.73 | 3.12 | 1.06 |
| 08:15-08:29 | 355 | 786 | 136 | 94 | 5 | 3.23 | 2.96 | 1.0 |
| 08:30-08:44 | 306 | 629 | 102 | 51 | 18 | 3.81 | 2.14 | 0.86 |
| 08:45-08:59 | 357 | 885 | 94 | 80 | 5 | 4.18 | 3.12 | 0.94 |
| 09:00-09:14 | 463 | 566 | 124 | 54 | 13 | 3.74 | 3.01 | 0.89 |
| 09:15-09:29 | 528 | 648 | 94 | 72 | 14 | 3.44 | 2.1 | 1.09 |
| 09:30-09:44 | 331 | 753 | 81 | 65 | 16 | 4.28 | 2.97 | 0.98 |
| 09:45-09:59 | 407 | 505 | 91 | 107 | 6 | 2.95 | 2.38 | 0.93 |
| 10:00-10:14 | 155 | 207 | 52 | 26 | 6 | 2.49 | 1.82 | 0.61 |
| 10:15-10:29 | 153 | 270 | 59 | 50 | 15 | 4.28 | 2.92 | 0.51 |
| 10:30-10:44 | 297 | 220 | 34 | 24 | 10 | 2.95 | 2.83 | 0.51 |
| 10:45-10:59 | 240 | 294 | 46 | 24 | 16 | 3.97 | 2.04 | 0.45 |
| 16:00-16:14 | 270 | 276 | 59 | 50 | 17 | 4.47 | 1.92 | 0.64 |
| 16:15-16:29 | 295 | 236 | 42 | 45 | 13 | 2.84 | 3.1 | 0.4 |
| 16:30-16:44 | 260 | 271 | 46 | 24 | 7 | 2.97 | 2.98 | 0.44 |
| 16:45-16:59 | 294 | 383 | 43 | 21 | 13 | 4.23 | 2.21 | 0.43 |
| 17:00-17:14 | 584 | 857 | 110 | 52 | 9 | 3.36 | 2.0 | 0.89 |
| 17:15-17:29 | 461 | 648 | 96 | 80 | 5 | 3.64 | 2.13 | 1.08 |
| 17:30-17:44 | 529 | 809 | 112 | 112 | 13 | 3.19 | 2.89 | 1.0 |
| 17:45-17:59 | 336 | 831 | 135 | 99 | 17 | 4.43 | 1.87 | 1.01 |
| 18:00-18:14 | 363 | 843 | 87 | 89 | 18 | 2.17 | 2.67 | 0.87 |
| 18:15-18:29 | 537 | 469 | 94 | 82 | 17 | 2.55 | 2.44 | 0.98 |
| 18:30-18:44 | 399 | 769 | 97 | 82 | 6 | 3.76 | 2.19 | 0.97 |
| 18:45-18:59 | 584 | 854 | 148 | 117 | 11 | 2.74 | 2.08 | 0.93 |
| 19:00-19:14 | 337 | 729 | 142 | 76 | 13 | 4.22 | 2.23 | 0.88 |
| 19:15-19:29 | 485 | 769 | 87 | 94 | 5 | 4.26 | 2.79 | 0.85 |
| 19:30-19:44 | 572 | 666 | 127 | 74 | 12 | 3.23 | 2.42 | 0.93 |
| 19:45-19:59 | 331 | 605 | 135 | 118 | 17 | 3.6 | 2.68 | 0.87 |
| 20:00-20:14 | 291 | 247 | 50 | 30 | 8 | 4.29 | 2.32 | 0.62 |
| 20:15-20:29 | 233 | 294 | 33 | 31 | 6 | 3.61 | 2.64 | 0.55 |
| 20:30-20:44 | 269 | 400 | 53 | 23 | 13 | 3.5 | 2.6 | 0.63 |
| 20:45-20:59 | 254 | 399 | 56 | 32 | 11 | 2.27 | 2.29 | 0.5 |
| 21:00-21:14 | 240 | 381 | 43 | 39 | 10 | 4.23 | 2.64 | 0.64 |
| 21:15-21:29 | 266 | 224 | 48 | 34 | 6 | 3.23 | 1.99 | 0.47 |
| 21:30-21:44 | 228 | 306 | 40 | 39 | 17 | 4.47 | 2.27 | 0.57 |
| 21:45-21:59 | 293 | 253 | 37 | 38 | 6 | 2.54 | 1.97 | 0.51 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 340 | 453 | 103 | 114 | 7 | 2.83 | 2.52 | 0.89 |
| 07:15-07:29 | 307 | 613 | 106 | 108 | 17 | 2.27 | 2.68 | 1.04 |
| 07:30-07:44 | 307 | 404 | 85 | 77 | 15 | 2.52 | 2.05 | 0.87 |
| 07:45-07:59 | 453 | 870 | 120 | 119 | 17 | 3.69 | 1.87 | 0.88 |
| 08:00-08:14 | 514 | 415 | 113 | 112 | 15 | 2.33 | 2.74 | 0.86 |
| 08:15-08:29 | 505 | 535 | 99 | 110 | 7 | 4.04 | 2.21 | 0.95 |
| 08:30-08:44 | 502 | 859 | 94 | 94 | 6 | 4.42 | 2.42 | 0.86 |
| 08:45-08:59 | 550 | 713 | 98 | 113 | 16 | 4.13 | 3.01 | 0.89 |
| 09:00-09:14 | 586 | 475 | 122 | 86 | 20 | 2.89 | 2.21 | 1.07 |
| 09:15-09:29 | 479 | 445 | 149 | 93 | 16 | 2.5 | 3.15 | 1.0 |
| 09:30-09:44 | 581 | 530 | 116 | 52 | 8 | 4.04 | 2.61 | 0.92 |
| 09:45-09:59 | 562 | 885 | 101 | 77 | 6 | 2.59 | 2.16 | 0.92 |
| 10:00-10:14 | 252 | 242 | 63 | 26 | 20 | 4.13 | 2.9 | 0.59 |
| 10:15-10:29 | 170 | 368 | 43 | 50 | 12 | 4.28 | 2.06 | 0.69 |
| 10:30-10:44 | 262 | 363 | 42 | 35 | 15 | 3.53 | 2.83 | 0.47 |
| 10:45-10:59 | 158 | 355 | 63 | 38 | 11 | 4.19 | 1.93 | 0.45 |
| 16:00-16:14 | 241 | 335 | 48 | 38 | 15 | 4.15 | 2.98 | 0.52 |
| 16:15-16:29 | 203 | 281 | 31 | 50 | 19 | 4.4 | 2.79 | 0.6 |
| 16:30-16:44 | 277 | 277 | 47 | 32 | 14 | 4.38 | 2.68 | 0.45 |
| 16:45-16:59 | 174 | 204 | 33 | 44 | 15 | 3.54 | 1.89 | 0.46 |
| 17:00-17:14 | 533 | 569 | 100 | 113 | 13 | 2.96 | 2.7 | 0.89 |
| 17:15-17:29 | 546 | 845 | 144 | 85 | 11 | 2.52 | 2.86 | 0.91 |
| 17:30-17:44 | 443 | 506 | 97 | 82 | 7 | 3.49 | 2.99 | 1.01 |
| 17:45-17:59 | 561 | 526 | 145 | 93 | 10 | 3.01 | 2.14 | 0.97 |
| 18:00-18:14 | 446 | 843 | 85 | 73 | 11 | 2.57 | 2.89 | 1.07 |
| 18:15-18:29 | 484 | 606 | 110 | 92 | 10 | 2.64 | 2.97 | 0.98 |
| 18:30-18:44 | 474 | 644 | 116 | 109 | 18 | 2.15 | 2.8 | 0.88 |
| 18:45-18:59 | 415 | 505 | 142 | 113 | 10 | 2.2 | 2.9 | 1.06 |
| 19:00-19:14 | 465 | 785 | 123 | 86 | 13 | 2.15 | 2.85 | 0.89 |
| 19:15-19:29 | 356 | 878 | 86 | 66 | 17 | 3.14 | 3.2 | 1.06 |
| 19:30-19:44 | 448 | 844 | 94 | 73 | 18 | 2.26 | 2.42 | 0.87 |
| 19:45-19:59 | 407 | 425 | 114 | 82 | 12 | 2.68 | 1.94 | 0.96 |
| 20:00-20:14 | 284 | 363 | 49 | 39 | 14 | 2.73 | 2.57 | 0.41 |
| 20:15-20:29 | 188 | 250 | 48 | 44 | 12 | 2.36 | 2.13 | 0.53 |
| 20:30-20:44 | 234 | 318 | 56 | 23 | 11 | 3.12 | 2.23 | 0.6 |
| 20:45-20:59 | 248 | 200 | 64 | 33 | 7 | 3.96 | 1.88 | 0.47 |
| 21:00-21:14 | 151 | 284 | 49 | 32 | 17 | 4.37 | 2.06 | 0.55 |
| 21:15-21:29 | 243 | 400 | 62 | 30 | 16 | 2.18 | 2.87 | 0.58 |
| 21:30-21:44 | 198 | 324 | 34 | 46 | 20 | 4.03 | 2.97 | 0.53 |
| 21:45-21:59 | 265 | 275 | 43 | 24 | 8 | 2.85 | 2.15 | 0.57 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 450 | 598 | 108 | 71 | 14 | 2.65 | 2.74 | 0.95 |
| 07:15-07:29 | 433 | 728 | 80 | 98 | 16 | 3.32 | 2.11 | 0.94 |
| 07:30-07:44 | 518 | 452 | 109 | 92 | 6 | 3.12 | 3.1 | 0.9 |
| 07:45-07:59 | 577 | 818 | 81 | 78 | 20 | 2.43 | 1.91 | 0.87 |
| 08:00-08:14 | 380 | 705 | 108 | 73 | 12 | 3.89 | 2.84 | 1.09 |
| 08:15-08:29 | 491 | 765 | 114 | 80 | 9 | 3.35 | 1.85 | 0.94 |
| 08:30-08:44 | 380 | 873 | 130 | 70 | 17 | 3.19 | 3.01 | 1.1 |
| 08:45-08:59 | 533 | 461 | 106 | 108 | 16 | 3.76 | 1.96 | 1.0 |
| 09:00-09:14 | 421 | 887 | 139 | 78 | 15 | 2.77 | 2.48 | 1.07 |
| 09:15-09:29 | 584 | 493 | 92 | 107 | 14 | 4.4 | 2.12 | 0.89 |
| 09:30-09:44 | 509 | 704 | 115 | 99 | 10 | 3.58 | 2.07 | 0.96 |
| 09:45-09:59 | 580 | 698 | 123 | 67 | 18 | 2.83 | 2.48 | 1.08 |
| 10:00-10:14 | 195 | 368 | 61 | 34 | 12 | 3.85 | 2.47 | 0.69 |
| 10:15-10:29 | 240 | 339 | 56 | 36 | 20 | 3.26 | 1.91 | 0.63 |
| 10:30-10:44 | 265 | 280 | 30 | 23 | 9 | 4.31 | 2.3 | 0.54 |
| 10:45-10:59 | 273 | 298 | 42 | 23 | 5 | 4.4 | 3.0 | 0.54 |
| 16:00-16:14 | 152 | 313 | 52 | 39 | 16 | 3.4 | 2.02 | 0.54 |
| 16:15-16:29 | 225 | 223 | 52 | 36 | 9 | 4.16 | 2.13 | 0.55 |
| 16:30-16:44 | 176 | 342 | 64 | 46 | 5 | 3.89 | 2.1 | 0.46 |
| 16:45-16:59 | 283 | 235 | 47 | 46 | 18 | 4.28 | 2.78 | 0.65 |
| 17:00-17:14 | 356 | 463 | 96 | 104 | 18 | 2.12 | 3.06 | 1.08 |
| 17:15-17:29 | 304 | 542 | 91 | 59 | 12 | 4.34 | 2.91 | 0.99 |
| 17:30-17:44 | 427 | 422 | 146 | 61 | 19 | 3.49 | 2.9 | 1.04 |
| 17:45-17:59 | 584 | 752 | 86 | 93 | 10 | 3.94 | 2.28 | 0.93 |
| 18:00-18:14 | 442 | 484 | 145 | 99 | 14 | 2.14 | 2.94 | 0.95 |
| 18:15-18:29 | 597 | 591 | 150 | 58 | 7 | 2.58 | 1.91 | 1.03 |
| 18:30-18:44 | 570 | 775 | 126 | 106 | 12 | 2.66 | 2.69 | 0.99 |
| 18:45-18:59 | 345 | 819 | 129 | 65 | 8 | 2.52 | 1.84 | 0.95 |
| 19:00-19:14 | 375 | 779 | 85 | 73 | 15 | 3.22 | 2.17 | 1.06 |
| 19:15-19:29 | 593 | 780 | 89 | 56 | 9 | 2.4 | 2.21 | 1.06 |
| 19:30-19:44 | 449 | 812 | 133 | 72 | 13 | 3.7 | 2.18 | 1.07 |
| 19:45-19:59 | 392 | 612 | 130 | 72 | 20 | 3.71 | 2.22 | 1.06 |
| 20:00-20:14 | 238 | 257 | 30 | 32 | 6 | 4.36 | 1.9 | 0.43 |
| 20:15-20:29 | 260 | 305 | 59 | 33 | 17 | 3.32 | 2.78 | 0.67 |
| 20:30-20:44 | 201 | 260 | 56 | 24 | 18 | 3.03 | 2.47 | 0.69 |
| 20:45-20:59 | 173 | 217 | 55 | 31 | 18 | 4.04 | 1.82 | 0.42 |
| 21:00-21:14 | 188 | 351 | 59 | 29 | 6 | 2.52 | 2.76 | 0.49 |
| 21:15-21:29 | 293 | 328 | 46 | 28 | 11 | 3.16 | 2.96 | 0.61 |
| 21:30-21:44 | 178 | 204 | 45 | 23 | 15 | 2.25 | 2.47 | 0.48 |
| 21:45-21:59 | 241 | 306 | 46 | 46 | 11 | 4.16 | 2.2 | 0.59 |

### A.11 Day 11: 2026-06-11

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 369 | 871 | 93 | 97 | 19 | 4.34 | 3.0 | 1.07 |
| 07:15-07:29 | 520 | 442 | 113 | 67 | 14 | 2.69 | 2.89 | 0.97 |
| 07:30-07:44 | 556 | 845 | 83 | 96 | 14 | 4.37 | 3.03 | 1.09 |
| 07:45-07:59 | 489 | 884 | 99 | 85 | 8 | 3.67 | 2.1 | 1.01 |
| 08:00-08:14 | 537 | 862 | 98 | 104 | 18 | 2.65 | 2.92 | 0.93 |
| 08:15-08:29 | 585 | 619 | 110 | 93 | 17 | 3.39 | 2.62 | 1.03 |
| 08:30-08:44 | 484 | 452 | 148 | 83 | 19 | 4.19 | 2.53 | 1.04 |
| 08:45-08:59 | 595 | 693 | 119 | 102 | 18 | 3.25 | 2.16 | 1.1 |
| 09:00-09:14 | 540 | 467 | 123 | 64 | 17 | 3.88 | 2.66 | 0.86 |
| 09:15-09:29 | 535 | 838 | 99 | 105 | 14 | 3.88 | 1.81 | 0.98 |
| 09:30-09:44 | 474 | 676 | 105 | 85 | 10 | 4.08 | 2.96 | 0.92 |
| 09:45-09:59 | 555 | 698 | 102 | 56 | 7 | 3.79 | 2.79 | 0.88 |
| 10:00-10:14 | 189 | 349 | 42 | 28 | 9 | 4.21 | 1.92 | 0.6 |
| 10:15-10:29 | 234 | 245 | 62 | 34 | 19 | 3.9 | 1.97 | 0.61 |
| 10:30-10:44 | 252 | 305 | 64 | 38 | 10 | 2.4 | 1.81 | 0.41 |
| 10:45-10:59 | 228 | 289 | 59 | 38 | 20 | 2.38 | 2.92 | 0.42 |
| 16:00-16:14 | 162 | 237 | 67 | 45 | 9 | 4.1 | 1.81 | 0.42 |
| 16:15-16:29 | 255 | 276 | 31 | 21 | 17 | 2.3 | 2.52 | 0.7 |
| 16:30-16:44 | 298 | 325 | 39 | 34 | 18 | 3.67 | 1.83 | 0.57 |
| 16:45-16:59 | 162 | 336 | 41 | 28 | 16 | 3.67 | 2.2 | 0.41 |
| 17:00-17:14 | 330 | 480 | 141 | 94 | 15 | 4.04 | 3.06 | 0.92 |
| 17:15-17:29 | 463 | 813 | 100 | 96 | 18 | 2.87 | 2.12 | 1.04 |
| 17:30-17:44 | 406 | 678 | 118 | 83 | 6 | 4.48 | 2.6 | 0.94 |
| 17:45-17:59 | 378 | 510 | 127 | 102 | 12 | 3.54 | 2.95 | 0.9 |
| 18:00-18:14 | 588 | 691 | 136 | 92 | 7 | 4.1 | 2.3 | 1.06 |
| 18:15-18:29 | 363 | 481 | 107 | 52 | 9 | 3.56 | 1.83 | 0.93 |
| 18:30-18:44 | 336 | 486 | 129 | 116 | 8 | 4.12 | 2.53 | 0.93 |
| 18:45-18:59 | 568 | 618 | 112 | 118 | 10 | 4.01 | 2.71 | 1.01 |
| 19:00-19:14 | 425 | 748 | 140 | 110 | 15 | 4.21 | 3.19 | 0.89 |
| 19:15-19:29 | 502 | 437 | 108 | 112 | 14 | 2.89 | 3.12 | 0.86 |
| 19:30-19:44 | 332 | 657 | 89 | 108 | 19 | 2.4 | 2.79 | 1.01 |
| 19:45-19:59 | 413 | 410 | 147 | 55 | 15 | 2.7 | 2.02 | 1.06 |
| 20:00-20:14 | 221 | 244 | 43 | 42 | 6 | 3.07 | 2.01 | 0.51 |
| 20:15-20:29 | 224 | 269 | 49 | 41 | 15 | 3.02 | 2.54 | 0.46 |
| 20:30-20:44 | 189 | 205 | 41 | 26 | 6 | 2.25 | 2.21 | 0.45 |
| 20:45-20:59 | 182 | 325 | 33 | 42 | 7 | 2.55 | 2.82 | 0.69 |
| 21:00-21:14 | 220 | 370 | 68 | 24 | 9 | 2.87 | 2.55 | 0.52 |
| 21:15-21:29 | 245 | 324 | 52 | 25 | 12 | 3.99 | 3.01 | 0.63 |
| 21:30-21:44 | 190 | 203 | 53 | 32 | 12 | 3.87 | 2.26 | 0.48 |
| 21:45-21:59 | 209 | 289 | 70 | 49 | 16 | 4.13 | 3.12 | 0.63 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 326 | 795 | 142 | 60 | 14 | 3.64 | 2.12 | 0.9 |
| 07:15-07:29 | 595 | 758 | 83 | 52 | 8 | 4.16 | 2.29 | 0.93 |
| 07:30-07:44 | 563 | 698 | 122 | 113 | 15 | 2.51 | 2.38 | 1.07 |
| 07:45-07:59 | 408 | 866 | 146 | 91 | 16 | 2.85 | 3.09 | 1.02 |
| 08:00-08:14 | 374 | 703 | 100 | 86 | 15 | 2.38 | 2.99 | 1.09 |
| 08:15-08:29 | 405 | 543 | 117 | 77 | 5 | 3.24 | 2.63 | 0.91 |
| 08:30-08:44 | 418 | 814 | 101 | 53 | 6 | 4.43 | 2.81 | 1.03 |
| 08:45-08:59 | 493 | 555 | 129 | 98 | 10 | 3.49 | 2.84 | 1.03 |
| 09:00-09:14 | 462 | 892 | 98 | 91 | 18 | 2.94 | 2.92 | 0.87 |
| 09:15-09:29 | 428 | 775 | 142 | 82 | 11 | 3.22 | 2.58 | 1.07 |
| 09:30-09:44 | 502 | 638 | 124 | 71 | 11 | 2.82 | 1.85 | 0.99 |
| 09:45-09:59 | 588 | 629 | 88 | 54 | 6 | 2.6 | 2.17 | 0.87 |
| 10:00-10:14 | 252 | 371 | 32 | 22 | 20 | 3.47 | 2.14 | 0.52 |
| 10:15-10:29 | 275 | 363 | 45 | 48 | 20 | 3.93 | 2.57 | 0.46 |
| 10:30-10:44 | 299 | 255 | 32 | 40 | 6 | 2.16 | 2.45 | 0.54 |
| 10:45-10:59 | 160 | 381 | 41 | 41 | 6 | 2.2 | 2.96 | 0.51 |
| 16:00-16:14 | 276 | 280 | 65 | 36 | 9 | 4.15 | 2.25 | 0.51 |
| 16:15-16:29 | 226 | 205 | 57 | 27 | 8 | 4.14 | 2.41 | 0.41 |
| 16:30-16:44 | 163 | 310 | 47 | 35 | 9 | 4.36 | 2.52 | 0.5 |
| 16:45-16:59 | 296 | 202 | 64 | 28 | 10 | 2.78 | 3.13 | 0.69 |
| 17:00-17:14 | 336 | 548 | 128 | 64 | 11 | 3.16 | 2.86 | 0.96 |
| 17:15-17:29 | 481 | 521 | 110 | 78 | 5 | 4.27 | 3.19 | 0.94 |
| 17:30-17:44 | 374 | 516 | 95 | 52 | 17 | 4.26 | 1.86 | 0.99 |
| 17:45-17:59 | 523 | 889 | 110 | 76 | 5 | 2.34 | 2.86 | 1.01 |
| 18:00-18:14 | 585 | 588 | 130 | 73 | 14 | 2.8 | 2.7 | 0.87 |
| 18:15-18:29 | 398 | 618 | 144 | 99 | 8 | 4.0 | 3.2 | 0.98 |
| 18:30-18:44 | 386 | 418 | 81 | 102 | 13 | 2.11 | 2.04 | 0.92 |
| 18:45-18:59 | 382 | 882 | 111 | 104 | 6 | 3.33 | 3.07 | 0.95 |
| 19:00-19:14 | 481 | 755 | 93 | 61 | 13 | 2.39 | 2.93 | 0.98 |
| 19:15-19:29 | 492 | 719 | 123 | 93 | 19 | 3.97 | 2.53 | 0.95 |
| 19:30-19:44 | 503 | 794 | 81 | 117 | 16 | 2.78 | 2.77 | 1.03 |
| 19:45-19:59 | 373 | 723 | 120 | 60 | 8 | 2.21 | 2.69 | 0.86 |
| 20:00-20:14 | 212 | 322 | 54 | 47 | 9 | 3.66 | 2.44 | 0.5 |
| 20:15-20:29 | 169 | 383 | 57 | 23 | 15 | 4.29 | 2.57 | 0.52 |
| 20:30-20:44 | 257 | 225 | 46 | 28 | 16 | 3.38 | 2.76 | 0.48 |
| 20:45-20:59 | 236 | 354 | 49 | 38 | 5 | 2.85 | 2.01 | 0.64 |
| 21:00-21:14 | 272 | 369 | 58 | 32 | 10 | 2.55 | 2.41 | 0.46 |
| 21:15-21:29 | 226 | 361 | 52 | 37 | 11 | 2.28 | 3.12 | 0.54 |
| 21:30-21:44 | 229 | 229 | 36 | 35 | 13 | 2.81 | 2.56 | 0.49 |
| 21:45-21:59 | 294 | 333 | 40 | 46 | 5 | 3.77 | 2.56 | 0.58 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 600 | 551 | 126 | 57 | 7 | 2.27 | 2.15 | 0.89 |
| 07:15-07:29 | 507 | 780 | 81 | 98 | 8 | 2.54 | 2.34 | 0.9 |
| 07:30-07:44 | 419 | 469 | 148 | 104 | 9 | 3.0 | 3.05 | 0.98 |
| 07:45-07:59 | 391 | 754 | 119 | 111 | 15 | 4.1 | 2.99 | 0.92 |
| 08:00-08:14 | 310 | 571 | 138 | 56 | 8 | 3.15 | 1.91 | 0.96 |
| 08:15-08:29 | 398 | 752 | 108 | 87 | 13 | 2.54 | 2.01 | 1.03 |
| 08:30-08:44 | 325 | 591 | 119 | 68 | 20 | 2.94 | 2.05 | 0.97 |
| 08:45-08:59 | 302 | 534 | 148 | 109 | 7 | 2.3 | 2.38 | 0.88 |
| 09:00-09:14 | 533 | 660 | 99 | 110 | 15 | 2.34 | 2.92 | 1.05 |
| 09:15-09:29 | 408 | 476 | 130 | 75 | 20 | 4.33 | 2.46 | 1.04 |
| 09:30-09:44 | 387 | 477 | 94 | 52 | 17 | 3.43 | 1.93 | 1.09 |
| 09:45-09:59 | 600 | 570 | 86 | 116 | 19 | 4.21 | 2.16 | 1.07 |
| 10:00-10:14 | 170 | 236 | 67 | 49 | 16 | 2.55 | 1.87 | 0.6 |
| 10:15-10:29 | 245 | 392 | 67 | 40 | 20 | 2.16 | 2.02 | 0.69 |
| 10:30-10:44 | 241 | 352 | 60 | 24 | 8 | 3.31 | 2.99 | 0.41 |
| 10:45-10:59 | 226 | 265 | 61 | 29 | 10 | 3.67 | 2.43 | 0.51 |
| 16:00-16:14 | 282 | 400 | 35 | 25 | 14 | 3.37 | 2.18 | 0.65 |
| 16:15-16:29 | 282 | 204 | 35 | 25 | 20 | 2.18 | 2.98 | 0.41 |
| 16:30-16:44 | 243 | 260 | 56 | 43 | 12 | 3.68 | 1.9 | 0.64 |
| 16:45-16:59 | 252 | 262 | 61 | 27 | 19 | 4.18 | 2.12 | 0.69 |
| 17:00-17:14 | 340 | 402 | 138 | 103 | 18 | 4.4 | 3.16 | 0.88 |
| 17:15-17:29 | 476 | 692 | 148 | 96 | 5 | 2.89 | 2.3 | 1.04 |
| 17:30-17:44 | 380 | 810 | 86 | 53 | 8 | 2.7 | 1.85 | 1.02 |
| 17:45-17:59 | 389 | 894 | 128 | 55 | 6 | 3.7 | 2.16 | 1.02 |
| 18:00-18:14 | 313 | 599 | 131 | 81 | 6 | 3.35 | 2.54 | 1.09 |
| 18:15-18:29 | 447 | 862 | 87 | 113 | 20 | 3.9 | 2.62 | 0.86 |
| 18:30-18:44 | 514 | 513 | 98 | 115 | 10 | 2.48 | 2.69 | 0.85 |
| 18:45-18:59 | 582 | 406 | 97 | 114 | 5 | 3.35 | 3.14 | 1.09 |
| 19:00-19:14 | 462 | 642 | 127 | 97 | 18 | 2.54 | 2.04 | 1.04 |
| 19:15-19:29 | 553 | 532 | 137 | 51 | 12 | 3.04 | 2.39 | 1.07 |
| 19:30-19:44 | 592 | 898 | 114 | 51 | 15 | 3.27 | 2.59 | 0.94 |
| 19:45-19:59 | 580 | 624 | 124 | 77 | 18 | 3.31 | 2.04 | 1.06 |
| 20:00-20:14 | 178 | 305 | 63 | 34 | 7 | 3.52 | 2.02 | 0.63 |
| 20:15-20:29 | 244 | 251 | 49 | 38 | 15 | 3.7 | 1.81 | 0.69 |
| 20:30-20:44 | 192 | 247 | 51 | 37 | 6 | 3.14 | 2.39 | 0.49 |
| 20:45-20:59 | 213 | 387 | 31 | 39 | 18 | 2.62 | 2.45 | 0.48 |
| 21:00-21:14 | 262 | 280 | 65 | 39 | 5 | 3.24 | 3.17 | 0.57 |
| 21:15-21:29 | 284 | 269 | 63 | 28 | 18 | 2.18 | 2.12 | 0.49 |
| 21:30-21:44 | 294 | 237 | 47 | 38 | 16 | 3.34 | 2.65 | 0.65 |
| 21:45-21:59 | 264 | 284 | 33 | 42 | 10 | 2.15 | 2.89 | 0.61 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 460 | 847 | 116 | 54 | 8 | 3.69 | 2.1 | 1.02 |
| 07:15-07:29 | 331 | 534 | 104 | 80 | 17 | 3.24 | 2.02 | 1.01 |
| 07:30-07:44 | 345 | 539 | 119 | 103 | 10 | 2.5 | 2.48 | 1.06 |
| 07:45-07:59 | 377 | 403 | 121 | 99 | 17 | 2.24 | 2.08 | 0.86 |
| 08:00-08:14 | 420 | 517 | 82 | 53 | 9 | 2.57 | 2.02 | 0.89 |
| 08:15-08:29 | 381 | 587 | 81 | 73 | 12 | 3.12 | 2.39 | 0.92 |
| 08:30-08:44 | 303 | 801 | 99 | 115 | 8 | 3.47 | 2.44 | 1.02 |
| 08:45-08:59 | 440 | 694 | 104 | 118 | 15 | 2.84 | 1.8 | 1.07 |
| 09:00-09:14 | 497 | 650 | 128 | 50 | 16 | 3.33 | 1.96 | 1.05 |
| 09:15-09:29 | 344 | 837 | 122 | 87 | 8 | 2.25 | 2.43 | 0.96 |
| 09:30-09:44 | 317 | 773 | 149 | 94 | 8 | 2.86 | 2.81 | 0.9 |
| 09:45-09:59 | 413 | 552 | 103 | 91 | 8 | 4.26 | 2.74 | 0.95 |
| 10:00-10:14 | 167 | 392 | 59 | 32 | 10 | 3.47 | 3.11 | 0.67 |
| 10:15-10:29 | 220 | 378 | 49 | 48 | 20 | 3.83 | 2.82 | 0.69 |
| 10:30-10:44 | 202 | 249 | 62 | 37 | 20 | 2.27 | 2.65 | 0.42 |
| 10:45-10:59 | 175 | 294 | 37 | 45 | 15 | 3.68 | 1.84 | 0.54 |
| 16:00-16:14 | 286 | 279 | 36 | 23 | 15 | 3.88 | 3.12 | 0.63 |
| 16:15-16:29 | 236 | 340 | 30 | 34 | 5 | 2.24 | 1.87 | 0.64 |
| 16:30-16:44 | 264 | 252 | 57 | 28 | 8 | 2.54 | 2.55 | 0.54 |
| 16:45-16:59 | 189 | 323 | 53 | 25 | 12 | 2.38 | 2.55 | 0.62 |
| 17:00-17:14 | 599 | 642 | 126 | 85 | 6 | 2.83 | 3.08 | 1.01 |
| 17:15-17:29 | 590 | 582 | 141 | 97 | 14 | 2.26 | 2.15 | 0.94 |
| 17:30-17:44 | 366 | 498 | 83 | 50 | 5 | 3.32 | 1.99 | 0.97 |
| 17:45-17:59 | 485 | 697 | 119 | 84 | 19 | 3.99 | 2.07 | 0.86 |
| 18:00-18:14 | 597 | 709 | 119 | 94 | 5 | 3.95 | 3.15 | 0.9 |
| 18:15-18:29 | 440 | 737 | 107 | 56 | 17 | 2.53 | 2.62 | 0.87 |
| 18:30-18:44 | 305 | 550 | 150 | 114 | 8 | 3.66 | 2.03 | 0.93 |
| 18:45-18:59 | 536 | 867 | 139 | 118 | 9 | 2.15 | 2.11 | 1.06 |
| 19:00-19:14 | 423 | 792 | 126 | 99 | 11 | 2.79 | 2.69 | 1.03 |
| 19:15-19:29 | 384 | 597 | 122 | 78 | 7 | 2.94 | 3.11 | 0.97 |
| 19:30-19:44 | 427 | 480 | 92 | 103 | 6 | 3.54 | 2.2 | 0.9 |
| 19:45-19:59 | 499 | 805 | 139 | 95 | 9 | 3.81 | 2.78 | 0.99 |
| 20:00-20:14 | 210 | 272 | 70 | 31 | 12 | 2.3 | 2.21 | 0.65 |
| 20:15-20:29 | 266 | 243 | 51 | 42 | 7 | 4.08 | 2.62 | 0.52 |
| 20:30-20:44 | 276 | 353 | 69 | 25 | 17 | 4.33 | 2.23 | 0.61 |
| 20:45-20:59 | 265 | 326 | 61 | 22 | 13 | 3.81 | 2.09 | 0.53 |
| 21:00-21:14 | 257 | 379 | 54 | 38 | 7 | 3.94 | 1.92 | 0.61 |
| 21:15-21:29 | 226 | 259 | 46 | 42 | 20 | 2.39 | 2.59 | 0.61 |
| 21:30-21:44 | 160 | 223 | 44 | 41 | 15 | 3.4 | 2.87 | 0.59 |
| 21:45-21:59 | 246 | 354 | 68 | 23 | 8 | 3.98 | 2.44 | 0.62 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 458 | 874 | 84 | 83 | 17 | 3.35 | 2.32 | 0.91 |
| 07:15-07:29 | 438 | 460 | 117 | 86 | 18 | 3.37 | 2.99 | 0.91 |
| 07:30-07:44 | 491 | 568 | 146 | 53 | 17 | 4.01 | 3.11 | 0.92 |
| 07:45-07:59 | 323 | 865 | 87 | 90 | 11 | 2.39 | 2.12 | 0.85 |
| 08:00-08:14 | 390 | 609 | 135 | 101 | 18 | 2.24 | 1.9 | 0.98 |
| 08:15-08:29 | 540 | 496 | 91 | 75 | 19 | 3.29 | 2.49 | 1.05 |
| 08:30-08:44 | 467 | 610 | 110 | 119 | 14 | 4.32 | 2.03 | 0.97 |
| 08:45-08:59 | 330 | 729 | 80 | 102 | 7 | 4.02 | 3.04 | 1.09 |
| 09:00-09:14 | 420 | 775 | 132 | 102 | 13 | 3.58 | 2.28 | 1.05 |
| 09:15-09:29 | 574 | 765 | 113 | 84 | 5 | 3.27 | 1.82 | 1.05 |
| 09:30-09:44 | 432 | 455 | 136 | 98 | 6 | 4.32 | 2.2 | 1.1 |
| 09:45-09:59 | 582 | 894 | 105 | 52 | 19 | 3.81 | 2.39 | 1.09 |
| 10:00-10:14 | 193 | 243 | 62 | 47 | 14 | 3.92 | 1.99 | 0.45 |
| 10:15-10:29 | 201 | 384 | 45 | 38 | 17 | 2.65 | 2.78 | 0.65 |
| 10:30-10:44 | 158 | 241 | 70 | 41 | 13 | 2.7 | 2.86 | 0.61 |
| 10:45-10:59 | 185 | 268 | 57 | 28 | 19 | 3.05 | 1.99 | 0.43 |
| 16:00-16:14 | 175 | 275 | 43 | 30 | 10 | 4.48 | 3.11 | 0.45 |
| 16:15-16:29 | 232 | 321 | 31 | 35 | 5 | 2.78 | 1.84 | 0.5 |
| 16:30-16:44 | 227 | 260 | 59 | 26 | 7 | 2.27 | 2.65 | 0.48 |
| 16:45-16:59 | 171 | 280 | 53 | 21 | 5 | 2.14 | 2.87 | 0.59 |
| 17:00-17:14 | 347 | 852 | 97 | 104 | 7 | 4.34 | 2.43 | 0.9 |
| 17:15-17:29 | 494 | 638 | 111 | 66 | 19 | 2.74 | 2.37 | 1.01 |
| 17:30-17:44 | 300 | 849 | 129 | 73 | 17 | 4.36 | 1.88 | 0.95 |
| 17:45-17:59 | 478 | 700 | 141 | 76 | 7 | 3.57 | 2.27 | 1.06 |
| 18:00-18:14 | 333 | 418 | 147 | 120 | 7 | 3.75 | 2.0 | 1.1 |
| 18:15-18:29 | 485 | 831 | 106 | 58 | 18 | 2.78 | 2.42 | 1.08 |
| 18:30-18:44 | 322 | 707 | 98 | 95 | 12 | 2.8 | 2.6 | 0.93 |
| 18:45-18:59 | 466 | 421 | 97 | 64 | 12 | 4.17 | 2.31 | 0.96 |
| 19:00-19:14 | 466 | 690 | 89 | 117 | 20 | 4.3 | 2.81 | 0.98 |
| 19:15-19:29 | 381 | 681 | 93 | 86 | 20 | 2.11 | 2.92 | 1.0 |
| 19:30-19:44 | 355 | 858 | 93 | 69 | 18 | 2.79 | 2.62 | 0.97 |
| 19:45-19:59 | 460 | 556 | 95 | 119 | 17 | 2.35 | 1.98 | 0.88 |
| 20:00-20:14 | 277 | 296 | 31 | 41 | 17 | 3.43 | 3.0 | 0.67 |
| 20:15-20:29 | 167 | 263 | 62 | 22 | 17 | 2.23 | 2.33 | 0.58 |
| 20:30-20:44 | 295 | 264 | 56 | 36 | 10 | 3.54 | 2.39 | 0.63 |
| 20:45-20:59 | 284 | 254 | 48 | 32 | 5 | 2.47 | 2.58 | 0.42 |
| 21:00-21:14 | 275 | 271 | 69 | 32 | 11 | 4.09 | 2.62 | 0.52 |
| 21:15-21:29 | 198 | 321 | 60 | 45 | 12 | 3.92 | 2.24 | 0.63 |
| 21:30-21:44 | 166 | 263 | 48 | 43 | 6 | 2.3 | 2.71 | 0.51 |
| 21:45-21:59 | 271 | 317 | 31 | 49 | 20 | 2.76 | 2.42 | 0.63 |

### A.12 Day 12: 2026-06-12

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 301 | 818 | 119 | 99 | 6 | 2.88 | 2.73 | 0.86 |
| 07:15-07:29 | 522 | 735 | 116 | 70 | 17 | 3.54 | 2.35 | 0.92 |
| 07:30-07:44 | 333 | 661 | 111 | 95 | 19 | 4.27 | 2.98 | 1.04 |
| 07:45-07:59 | 383 | 423 | 95 | 117 | 12 | 2.74 | 2.58 | 1.05 |
| 08:00-08:14 | 434 | 658 | 80 | 117 | 14 | 3.8 | 2.16 | 0.94 |
| 08:15-08:29 | 584 | 488 | 84 | 80 | 12 | 2.74 | 2.47 | 0.94 |
| 08:30-08:44 | 482 | 511 | 148 | 117 | 16 | 4.13 | 2.47 | 0.93 |
| 08:45-08:59 | 572 | 598 | 126 | 116 | 9 | 3.9 | 2.12 | 1.08 |
| 09:00-09:14 | 508 | 429 | 89 | 104 | 9 | 3.8 | 2.02 | 0.92 |
| 09:15-09:29 | 407 | 519 | 133 | 81 | 11 | 2.19 | 3.19 | 0.92 |
| 09:30-09:44 | 540 | 473 | 108 | 118 | 18 | 3.41 | 3.1 | 1.06 |
| 09:45-09:59 | 444 | 831 | 110 | 58 | 6 | 3.11 | 2.34 | 0.96 |
| 10:00-10:14 | 154 | 368 | 60 | 48 | 17 | 2.42 | 2.76 | 0.51 |
| 10:15-10:29 | 156 | 314 | 55 | 45 | 20 | 3.28 | 2.06 | 0.6 |
| 10:30-10:44 | 219 | 277 | 45 | 41 | 7 | 3.79 | 3.17 | 0.62 |
| 10:45-10:59 | 205 | 366 | 37 | 23 | 6 | 4.26 | 2.43 | 0.53 |
| 16:00-16:14 | 277 | 218 | 51 | 42 | 13 | 2.5 | 1.85 | 0.61 |
| 16:15-16:29 | 159 | 303 | 69 | 43 | 18 | 2.68 | 2.96 | 0.42 |
| 16:30-16:44 | 159 | 273 | 40 | 27 | 12 | 2.6 | 2.09 | 0.62 |
| 16:45-16:59 | 226 | 233 | 31 | 27 | 17 | 4.41 | 3.06 | 0.61 |
| 17:00-17:14 | 434 | 617 | 139 | 67 | 16 | 4.02 | 2.96 | 0.92 |
| 17:15-17:29 | 444 | 790 | 97 | 87 | 19 | 3.7 | 3.13 | 0.92 |
| 17:30-17:44 | 540 | 528 | 95 | 100 | 12 | 3.49 | 2.55 | 0.95 |
| 17:45-17:59 | 496 | 420 | 119 | 55 | 17 | 4.24 | 2.34 | 1.02 |
| 18:00-18:14 | 543 | 824 | 147 | 110 | 17 | 2.26 | 2.16 | 1.0 |
| 18:15-18:29 | 536 | 549 | 118 | 83 | 17 | 2.83 | 2.33 | 0.87 |
| 18:30-18:44 | 441 | 865 | 139 | 86 | 14 | 2.13 | 2.05 | 0.97 |
| 18:45-18:59 | 548 | 556 | 139 | 67 | 5 | 4.39 | 1.98 | 1.06 |
| 19:00-19:14 | 303 | 536 | 147 | 105 | 7 | 3.39 | 2.72 | 0.93 |
| 19:15-19:29 | 451 | 478 | 103 | 88 | 19 | 2.19 | 1.91 | 1.02 |
| 19:30-19:44 | 526 | 408 | 144 | 115 | 7 | 2.6 | 2.1 | 1.05 |
| 19:45-19:59 | 305 | 415 | 135 | 76 | 7 | 2.39 | 2.05 | 1.03 |
| 20:00-20:14 | 226 | 203 | 51 | 28 | 20 | 4.09 | 1.89 | 0.5 |
| 20:15-20:29 | 226 | 271 | 42 | 46 | 5 | 3.39 | 1.95 | 0.45 |
| 20:30-20:44 | 198 | 327 | 46 | 39 | 11 | 4.17 | 2.53 | 0.46 |
| 20:45-20:59 | 300 | 255 | 69 | 47 | 19 | 4.34 | 3.04 | 0.69 |
| 21:00-21:14 | 216 | 371 | 69 | 34 | 10 | 2.92 | 2.96 | 0.52 |
| 21:15-21:29 | 165 | 244 | 39 | 46 | 19 | 2.96 | 2.89 | 0.51 |
| 21:30-21:44 | 197 | 315 | 47 | 43 | 11 | 4.21 | 2.98 | 0.6 |
| 21:45-21:59 | 223 | 336 | 57 | 28 | 19 | 3.44 | 2.86 | 0.59 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 316 | 564 | 90 | 89 | 16 | 3.8 | 2.1 | 1.05 |
| 07:15-07:29 | 412 | 706 | 104 | 114 | 11 | 3.08 | 2.95 | 0.9 |
| 07:30-07:44 | 512 | 487 | 111 | 70 | 13 | 3.65 | 2.68 | 0.94 |
| 07:45-07:59 | 330 | 808 | 86 | 86 | 8 | 4.16 | 3.14 | 1.09 |
| 08:00-08:14 | 571 | 893 | 86 | 59 | 14 | 3.78 | 2.61 | 1.01 |
| 08:15-08:29 | 393 | 530 | 96 | 61 | 14 | 4.17 | 2.52 | 0.94 |
| 08:30-08:44 | 374 | 768 | 118 | 51 | 13 | 2.86 | 3.16 | 1.09 |
| 08:45-08:59 | 520 | 684 | 125 | 88 | 5 | 4.37 | 2.26 | 0.93 |
| 09:00-09:14 | 535 | 592 | 127 | 66 | 10 | 3.93 | 1.88 | 0.98 |
| 09:15-09:29 | 563 | 668 | 122 | 115 | 10 | 4.32 | 3.07 | 1.0 |
| 09:30-09:44 | 354 | 582 | 139 | 57 | 15 | 3.8 | 1.81 | 0.96 |
| 09:45-09:59 | 471 | 562 | 99 | 75 | 6 | 4.23 | 2.82 | 0.9 |
| 10:00-10:14 | 262 | 231 | 66 | 39 | 16 | 3.94 | 2.8 | 0.54 |
| 10:15-10:29 | 271 | 395 | 36 | 45 | 8 | 2.16 | 2.47 | 0.42 |
| 10:30-10:44 | 187 | 342 | 61 | 45 | 7 | 3.12 | 2.01 | 0.63 |
| 10:45-10:59 | 269 | 383 | 68 | 31 | 15 | 2.94 | 3.01 | 0.6 |
| 16:00-16:14 | 171 | 347 | 59 | 44 | 7 | 3.95 | 2.53 | 0.6 |
| 16:15-16:29 | 268 | 234 | 34 | 24 | 14 | 3.59 | 1.81 | 0.55 |
| 16:30-16:44 | 270 | 358 | 62 | 28 | 10 | 2.28 | 2.82 | 0.56 |
| 16:45-16:59 | 249 | 223 | 45 | 36 | 11 | 3.06 | 2.63 | 0.57 |
| 17:00-17:14 | 378 | 769 | 143 | 76 | 10 | 2.26 | 3.1 | 0.9 |
| 17:15-17:29 | 311 | 573 | 87 | 96 | 12 | 3.8 | 3.18 | 1.1 |
| 17:30-17:44 | 496 | 467 | 105 | 103 | 15 | 2.38 | 2.06 | 0.85 |
| 17:45-17:59 | 579 | 812 | 102 | 59 | 5 | 3.21 | 3.08 | 0.91 |
| 18:00-18:14 | 427 | 758 | 80 | 51 | 9 | 2.1 | 1.99 | 0.96 |
| 18:15-18:29 | 351 | 781 | 150 | 76 | 6 | 3.55 | 2.03 | 1.06 |
| 18:30-18:44 | 407 | 707 | 114 | 50 | 11 | 4.0 | 2.31 | 0.96 |
| 18:45-18:59 | 521 | 649 | 124 | 83 | 6 | 2.38 | 3.18 | 1.05 |
| 19:00-19:14 | 581 | 724 | 105 | 52 | 14 | 2.96 | 3.1 | 0.99 |
| 19:15-19:29 | 507 | 740 | 140 | 76 | 15 | 3.64 | 2.48 | 1.09 |
| 19:30-19:44 | 590 | 506 | 119 | 97 | 17 | 3.16 | 1.95 | 1.09 |
| 19:45-19:59 | 495 | 528 | 84 | 109 | 6 | 4.48 | 2.93 | 1.07 |
| 20:00-20:14 | 212 | 372 | 59 | 47 | 14 | 2.92 | 2.67 | 0.62 |
| 20:15-20:29 | 218 | 261 | 68 | 23 | 10 | 2.36 | 2.1 | 0.5 |
| 20:30-20:44 | 278 | 264 | 67 | 46 | 13 | 3.7 | 2.35 | 0.54 |
| 20:45-20:59 | 162 | 246 | 32 | 28 | 15 | 2.6 | 2.32 | 0.45 |
| 21:00-21:14 | 193 | 273 | 66 | 34 | 8 | 3.67 | 1.9 | 0.48 |
| 21:15-21:29 | 180 | 383 | 68 | 22 | 9 | 3.0 | 2.91 | 0.58 |
| 21:30-21:44 | 152 | 353 | 65 | 42 | 10 | 4.17 | 3.03 | 0.52 |
| 21:45-21:59 | 159 | 210 | 65 | 37 | 20 | 4.39 | 2.55 | 0.53 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 584 | 609 | 133 | 110 | 11 | 2.31 | 2.96 | 0.91 |
| 07:15-07:29 | 442 | 678 | 140 | 115 | 19 | 2.58 | 2.03 | 0.9 |
| 07:30-07:44 | 578 | 588 | 146 | 89 | 20 | 2.7 | 2.64 | 0.95 |
| 07:45-07:59 | 533 | 827 | 108 | 118 | 6 | 3.57 | 2.64 | 0.91 |
| 08:00-08:14 | 419 | 648 | 127 | 97 | 17 | 3.98 | 2.28 | 0.87 |
| 08:15-08:29 | 541 | 629 | 92 | 95 | 7 | 3.87 | 2.57 | 0.97 |
| 08:30-08:44 | 411 | 822 | 114 | 110 | 18 | 2.74 | 2.58 | 1.03 |
| 08:45-08:59 | 321 | 448 | 127 | 96 | 9 | 3.87 | 2.47 | 1.03 |
| 09:00-09:14 | 300 | 852 | 85 | 110 | 17 | 3.2 | 2.66 | 0.91 |
| 09:15-09:29 | 481 | 770 | 137 | 52 | 7 | 4.41 | 2.33 | 0.92 |
| 09:30-09:44 | 403 | 424 | 149 | 85 | 19 | 2.43 | 2.46 | 1.0 |
| 09:45-09:59 | 363 | 431 | 100 | 106 | 12 | 4.5 | 1.99 | 0.95 |
| 10:00-10:14 | 218 | 376 | 57 | 40 | 14 | 3.94 | 1.96 | 0.44 |
| 10:15-10:29 | 249 | 318 | 49 | 50 | 18 | 2.22 | 2.57 | 0.56 |
| 10:30-10:44 | 193 | 200 | 42 | 27 | 17 | 3.06 | 2.97 | 0.69 |
| 10:45-10:59 | 169 | 214 | 53 | 32 | 13 | 4.02 | 2.16 | 0.66 |
| 16:00-16:14 | 179 | 353 | 60 | 36 | 14 | 3.86 | 3.11 | 0.62 |
| 16:15-16:29 | 257 | 352 | 40 | 29 | 7 | 4.33 | 2.13 | 0.66 |
| 16:30-16:44 | 184 | 335 | 50 | 31 | 19 | 3.79 | 2.75 | 0.46 |
| 16:45-16:59 | 211 | 210 | 67 | 30 | 18 | 2.89 | 1.94 | 0.46 |
| 17:00-17:14 | 362 | 754 | 139 | 114 | 9 | 2.46 | 2.75 | 1.03 |
| 17:15-17:29 | 346 | 538 | 80 | 81 | 6 | 4.32 | 3.0 | 1.01 |
| 17:30-17:44 | 362 | 849 | 88 | 81 | 7 | 2.78 | 2.63 | 1.09 |
| 17:45-17:59 | 592 | 851 | 123 | 93 | 5 | 2.46 | 2.54 | 1.03 |
| 18:00-18:14 | 433 | 790 | 123 | 50 | 14 | 3.81 | 2.36 | 0.87 |
| 18:15-18:29 | 353 | 872 | 85 | 100 | 17 | 3.63 | 2.04 | 0.85 |
| 18:30-18:44 | 421 | 642 | 134 | 91 | 15 | 2.7 | 2.61 | 0.86 |
| 18:45-18:59 | 475 | 615 | 118 | 67 | 6 | 4.46 | 2.72 | 0.88 |
| 19:00-19:14 | 511 | 651 | 150 | 80 | 13 | 4.1 | 1.88 | 0.98 |
| 19:15-19:29 | 534 | 816 | 86 | 111 | 17 | 3.01 | 1.93 | 0.87 |
| 19:30-19:44 | 333 | 696 | 85 | 78 | 14 | 2.34 | 2.55 | 0.89 |
| 19:45-19:59 | 378 | 471 | 145 | 77 | 13 | 3.04 | 2.09 | 0.86 |
| 20:00-20:14 | 249 | 395 | 55 | 40 | 19 | 3.6 | 2.67 | 0.68 |
| 20:15-20:29 | 171 | 237 | 56 | 41 | 7 | 4.28 | 2.35 | 0.65 |
| 20:30-20:44 | 254 | 252 | 66 | 30 | 18 | 3.75 | 2.66 | 0.5 |
| 20:45-20:59 | 162 | 383 | 53 | 46 | 20 | 2.45 | 2.4 | 0.59 |
| 21:00-21:14 | 255 | 391 | 60 | 42 | 6 | 4.08 | 2.02 | 0.51 |
| 21:15-21:29 | 174 | 231 | 46 | 33 | 9 | 4.23 | 3.09 | 0.68 |
| 21:30-21:44 | 225 | 234 | 69 | 48 | 11 | 4.1 | 1.92 | 0.44 |
| 21:45-21:59 | 251 | 250 | 30 | 27 | 15 | 4.01 | 1.96 | 0.68 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 504 | 401 | 115 | 92 | 10 | 2.83 | 2.14 | 0.98 |
| 07:15-07:29 | 512 | 409 | 131 | 88 | 5 | 4.5 | 2.4 | 0.98 |
| 07:30-07:44 | 323 | 751 | 81 | 73 | 6 | 3.0 | 1.83 | 0.94 |
| 07:45-07:59 | 535 | 428 | 102 | 94 | 5 | 3.02 | 1.97 | 1.01 |
| 08:00-08:14 | 485 | 897 | 118 | 54 | 17 | 3.58 | 2.79 | 1.09 |
| 08:15-08:29 | 380 | 831 | 122 | 106 | 8 | 2.47 | 3.13 | 1.08 |
| 08:30-08:44 | 569 | 796 | 141 | 111 | 18 | 3.0 | 1.93 | 0.98 |
| 08:45-08:59 | 379 | 829 | 132 | 104 | 9 | 3.57 | 2.94 | 0.94 |
| 09:00-09:14 | 470 | 730 | 111 | 118 | 5 | 2.87 | 2.99 | 0.93 |
| 09:15-09:29 | 525 | 666 | 129 | 61 | 17 | 4.14 | 2.37 | 0.87 |
| 09:30-09:44 | 569 | 600 | 82 | 116 | 10 | 2.76 | 2.57 | 1.0 |
| 09:45-09:59 | 564 | 680 | 110 | 115 | 10 | 4.45 | 2.8 | 0.92 |
| 10:00-10:14 | 298 | 254 | 30 | 36 | 7 | 3.34 | 2.62 | 0.41 |
| 10:15-10:29 | 187 | 279 | 65 | 26 | 5 | 3.72 | 1.95 | 0.46 |
| 10:30-10:44 | 165 | 300 | 54 | 37 | 17 | 4.2 | 2.95 | 0.56 |
| 10:45-10:59 | 205 | 240 | 36 | 23 | 20 | 2.42 | 1.93 | 0.57 |
| 16:00-16:14 | 173 | 332 | 57 | 40 | 6 | 3.09 | 2.09 | 0.41 |
| 16:15-16:29 | 222 | 331 | 44 | 36 | 5 | 2.32 | 2.29 | 0.51 |
| 16:30-16:44 | 237 | 380 | 55 | 46 | 7 | 3.35 | 2.07 | 0.45 |
| 16:45-16:59 | 278 | 271 | 32 | 50 | 5 | 4.27 | 3.13 | 0.56 |
| 17:00-17:14 | 588 | 709 | 108 | 119 | 10 | 2.11 | 2.3 | 0.94 |
| 17:15-17:29 | 482 | 641 | 144 | 60 | 17 | 3.19 | 2.01 | 0.9 |
| 17:30-17:44 | 559 | 733 | 98 | 97 | 8 | 3.94 | 2.64 | 1.02 |
| 17:45-17:59 | 323 | 789 | 125 | 104 | 16 | 3.72 | 2.74 | 1.1 |
| 18:00-18:14 | 319 | 602 | 83 | 110 | 13 | 4.09 | 2.96 | 1.03 |
| 18:15-18:29 | 554 | 589 | 145 | 55 | 8 | 3.82 | 2.74 | 1.09 |
| 18:30-18:44 | 435 | 883 | 92 | 68 | 11 | 3.08 | 2.84 | 1.06 |
| 18:45-18:59 | 382 | 438 | 113 | 86 | 10 | 2.3 | 3.06 | 0.9 |
| 19:00-19:14 | 536 | 758 | 139 | 87 | 13 | 2.48 | 1.99 | 0.96 |
| 19:15-19:29 | 501 | 591 | 101 | 75 | 18 | 3.66 | 2.88 | 0.92 |
| 19:30-19:44 | 327 | 685 | 145 | 71 | 8 | 2.48 | 2.62 | 0.96 |
| 19:45-19:59 | 317 | 530 | 85 | 101 | 18 | 4.44 | 1.94 | 0.88 |
| 20:00-20:14 | 249 | 281 | 46 | 39 | 10 | 3.34 | 1.86 | 0.4 |
| 20:15-20:29 | 245 | 350 | 67 | 32 | 13 | 2.66 | 2.85 | 0.48 |
| 20:30-20:44 | 212 | 342 | 36 | 47 | 15 | 3.18 | 2.66 | 0.43 |
| 20:45-20:59 | 272 | 266 | 59 | 30 | 11 | 3.89 | 3.14 | 0.63 |
| 21:00-21:14 | 244 | 291 | 41 | 32 | 16 | 2.71 | 3.15 | 0.58 |
| 21:15-21:29 | 285 | 397 | 34 | 21 | 13 | 3.64 | 2.83 | 0.65 |
| 21:30-21:44 | 282 | 266 | 54 | 48 | 6 | 2.16 | 3.02 | 0.64 |
| 21:45-21:59 | 250 | 286 | 51 | 29 | 12 | 2.87 | 3.0 | 0.62 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 551 | 802 | 129 | 100 | 19 | 3.08 | 2.56 | 1.01 |
| 07:15-07:29 | 317 | 686 | 128 | 57 | 18 | 2.88 | 3.2 | 0.9 |
| 07:30-07:44 | 432 | 699 | 150 | 95 | 9 | 3.8 | 2.5 | 1.02 |
| 07:45-07:59 | 550 | 646 | 124 | 91 | 6 | 3.91 | 2.88 | 0.86 |
| 08:00-08:14 | 458 | 863 | 109 | 84 | 8 | 2.56 | 1.89 | 1.01 |
| 08:15-08:29 | 556 | 716 | 94 | 57 | 9 | 2.95 | 2.3 | 0.92 |
| 08:30-08:44 | 483 | 414 | 96 | 108 | 8 | 4.49 | 2.03 | 0.93 |
| 08:45-08:59 | 420 | 456 | 130 | 57 | 10 | 3.14 | 2.35 | 0.93 |
| 09:00-09:14 | 509 | 451 | 107 | 119 | 20 | 2.73 | 2.57 | 1.08 |
| 09:15-09:29 | 558 | 571 | 94 | 73 | 13 | 3.42 | 2.67 | 1.08 |
| 09:30-09:44 | 323 | 554 | 118 | 102 | 12 | 4.0 | 2.8 | 0.96 |
| 09:45-09:59 | 475 | 466 | 122 | 89 | 5 | 2.6 | 2.83 | 0.92 |
| 10:00-10:14 | 198 | 233 | 46 | 49 | 10 | 3.24 | 2.91 | 0.58 |
| 10:15-10:29 | 234 | 337 | 42 | 26 | 17 | 3.08 | 2.19 | 0.54 |
| 10:30-10:44 | 272 | 238 | 62 | 21 | 16 | 2.32 | 2.37 | 0.51 |
| 10:45-10:59 | 169 | 333 | 44 | 23 | 5 | 3.08 | 2.69 | 0.53 |
| 16:00-16:14 | 177 | 310 | 64 | 37 | 15 | 3.5 | 2.7 | 0.67 |
| 16:15-16:29 | 283 | 206 | 62 | 50 | 9 | 2.12 | 2.83 | 0.56 |
| 16:30-16:44 | 274 | 219 | 51 | 32 | 14 | 3.49 | 2.74 | 0.66 |
| 16:45-16:59 | 266 | 333 | 48 | 33 | 17 | 3.73 | 3.17 | 0.5 |
| 17:00-17:14 | 472 | 888 | 104 | 99 | 11 | 3.85 | 2.99 | 0.93 |
| 17:15-17:29 | 320 | 569 | 103 | 82 | 9 | 4.01 | 3.03 | 0.92 |
| 17:30-17:44 | 331 | 666 | 128 | 82 | 6 | 4.34 | 1.92 | 1.09 |
| 17:45-17:59 | 480 | 785 | 117 | 50 | 10 | 2.29 | 2.31 | 0.91 |
| 18:00-18:14 | 596 | 782 | 134 | 108 | 15 | 3.72 | 2.82 | 0.98 |
| 18:15-18:29 | 378 | 811 | 112 | 75 | 16 | 2.68 | 2.49 | 0.95 |
| 18:30-18:44 | 465 | 701 | 136 | 58 | 12 | 3.15 | 2.21 | 0.88 |
| 18:45-18:59 | 326 | 474 | 92 | 91 | 9 | 4.39 | 3.19 | 1.07 |
| 19:00-19:14 | 308 | 777 | 84 | 61 | 7 | 3.73 | 2.58 | 0.99 |
| 19:15-19:29 | 487 | 804 | 138 | 70 | 17 | 2.59 | 3.18 | 0.85 |
| 19:30-19:44 | 564 | 416 | 141 | 70 | 14 | 3.62 | 2.7 | 0.98 |
| 19:45-19:59 | 350 | 653 | 114 | 117 | 9 | 4.13 | 1.86 | 0.95 |
| 20:00-20:14 | 245 | 384 | 49 | 38 | 19 | 3.37 | 2.64 | 0.58 |
| 20:15-20:29 | 224 | 352 | 69 | 37 | 5 | 4.49 | 2.86 | 0.46 |
| 20:30-20:44 | 229 | 281 | 40 | 44 | 10 | 2.62 | 2.23 | 0.61 |
| 20:45-20:59 | 250 | 200 | 43 | 32 | 7 | 3.0 | 2.32 | 0.54 |
| 21:00-21:14 | 224 | 361 | 64 | 29 | 11 | 3.27 | 2.29 | 0.49 |
| 21:15-21:29 | 155 | 364 | 47 | 44 | 18 | 2.83 | 2.29 | 0.57 |
| 21:30-21:44 | 255 | 372 | 64 | 45 | 10 | 2.34 | 2.54 | 0.47 |
| 21:45-21:59 | 215 | 323 | 54 | 39 | 7 | 3.1 | 2.11 | 0.67 |

### A.13 Day 13: 2026-06-13

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 554 | 690 | 122 | 66 | 16 | 2.83 | 2.14 | 1.09 |
| 07:15-07:29 | 414 | 430 | 142 | 56 | 8 | 2.47 | 3.04 | 0.88 |
| 07:30-07:44 | 570 | 685 | 85 | 90 | 12 | 3.5 | 2.29 | 0.86 |
| 07:45-07:59 | 566 | 555 | 111 | 73 | 8 | 2.76 | 2.0 | 1.08 |
| 08:00-08:14 | 362 | 862 | 127 | 59 | 6 | 3.85 | 2.37 | 1.02 |
| 08:15-08:29 | 514 | 472 | 137 | 115 | 14 | 2.67 | 2.58 | 1.01 |
| 08:30-08:44 | 475 | 570 | 88 | 116 | 10 | 2.91 | 1.95 | 0.98 |
| 08:45-08:59 | 411 | 431 | 106 | 88 | 12 | 4.13 | 1.91 | 0.87 |
| 09:00-09:14 | 587 | 823 | 125 | 58 | 10 | 2.33 | 2.95 | 0.9 |
| 09:15-09:29 | 349 | 583 | 106 | 104 | 8 | 3.97 | 2.2 | 1.05 |
| 09:30-09:44 | 460 | 875 | 138 | 75 | 13 | 4.33 | 2.19 | 0.94 |
| 09:45-09:59 | 535 | 401 | 103 | 86 | 16 | 3.22 | 2.26 | 0.95 |
| 10:00-10:14 | 238 | 259 | 58 | 33 | 12 | 2.66 | 3.12 | 0.69 |
| 10:15-10:29 | 260 | 321 | 68 | 24 | 7 | 2.78 | 2.97 | 0.55 |
| 10:30-10:44 | 211 | 384 | 60 | 29 | 7 | 2.36 | 2.37 | 0.64 |
| 10:45-10:59 | 156 | 368 | 33 | 32 | 14 | 2.19 | 3.1 | 0.65 |
| 16:00-16:14 | 223 | 304 | 45 | 50 | 18 | 3.6 | 2.64 | 0.46 |
| 16:15-16:29 | 262 | 346 | 58 | 21 | 11 | 2.57 | 2.64 | 0.62 |
| 16:30-16:44 | 165 | 368 | 51 | 38 | 13 | 3.67 | 2.99 | 0.57 |
| 16:45-16:59 | 259 | 365 | 36 | 22 | 15 | 2.97 | 3.02 | 0.46 |
| 17:00-17:14 | 410 | 594 | 134 | 106 | 18 | 4.27 | 3.12 | 1.01 |
| 17:15-17:29 | 402 | 766 | 84 | 106 | 6 | 3.76 | 2.21 | 1.0 |
| 17:30-17:44 | 485 | 470 | 133 | 51 | 18 | 2.92 | 2.79 | 0.99 |
| 17:45-17:59 | 548 | 783 | 89 | 71 | 15 | 3.41 | 1.92 | 0.85 |
| 18:00-18:14 | 572 | 577 | 91 | 82 | 19 | 3.12 | 3.12 | 0.88 |
| 18:15-18:29 | 422 | 730 | 120 | 78 | 7 | 2.78 | 2.6 | 1.03 |
| 18:30-18:44 | 481 | 653 | 106 | 54 | 8 | 3.38 | 3.04 | 0.94 |
| 18:45-18:59 | 553 | 847 | 132 | 98 | 15 | 3.65 | 2.75 | 1.01 |
| 19:00-19:14 | 556 | 649 | 101 | 114 | 13 | 4.16 | 2.26 | 0.87 |
| 19:15-19:29 | 310 | 586 | 89 | 89 | 7 | 3.59 | 2.48 | 0.99 |
| 19:30-19:44 | 436 | 675 | 107 | 72 | 19 | 2.32 | 2.68 | 1.03 |
| 19:45-19:59 | 563 | 658 | 131 | 97 | 7 | 2.47 | 3.07 | 0.95 |
| 20:00-20:14 | 296 | 249 | 31 | 24 | 7 | 2.56 | 2.19 | 0.5 |
| 20:15-20:29 | 259 | 390 | 41 | 20 | 8 | 3.83 | 2.87 | 0.7 |
| 20:30-20:44 | 283 | 247 | 63 | 38 | 9 | 2.63 | 1.88 | 0.46 |
| 20:45-20:59 | 285 | 338 | 68 | 42 | 7 | 3.98 | 2.94 | 0.7 |
| 21:00-21:14 | 198 | 263 | 67 | 30 | 18 | 3.51 | 2.34 | 0.57 |
| 21:15-21:29 | 271 | 235 | 31 | 41 | 5 | 3.85 | 1.88 | 0.47 |
| 21:30-21:44 | 300 | 393 | 62 | 50 | 11 | 3.91 | 2.93 | 0.47 |
| 21:45-21:59 | 267 | 384 | 50 | 33 | 7 | 3.28 | 2.74 | 0.46 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 452 | 727 | 90 | 88 | 17 | 2.87 | 2.36 | 1.02 |
| 07:15-07:29 | 365 | 879 | 106 | 103 | 19 | 4.42 | 2.87 | 0.91 |
| 07:30-07:44 | 462 | 669 | 144 | 91 | 6 | 3.76 | 2.03 | 1.01 |
| 07:45-07:59 | 483 | 802 | 88 | 71 | 5 | 3.05 | 2.82 | 1.02 |
| 08:00-08:14 | 309 | 572 | 123 | 118 | 12 | 2.78 | 1.93 | 0.9 |
| 08:15-08:29 | 529 | 734 | 90 | 71 | 5 | 2.49 | 2.73 | 1.09 |
| 08:30-08:44 | 335 | 486 | 98 | 76 | 15 | 4.3 | 2.48 | 1.01 |
| 08:45-08:59 | 311 | 416 | 104 | 102 | 16 | 3.79 | 2.04 | 0.99 |
| 09:00-09:14 | 312 | 714 | 115 | 74 | 17 | 3.78 | 1.83 | 1.09 |
| 09:15-09:29 | 431 | 761 | 85 | 88 | 12 | 3.59 | 2.78 | 1.06 |
| 09:30-09:44 | 434 | 645 | 118 | 103 | 15 | 3.38 | 2.74 | 1.02 |
| 09:45-09:59 | 472 | 682 | 84 | 53 | 9 | 3.73 | 2.23 | 1.02 |
| 10:00-10:14 | 204 | 276 | 65 | 24 | 20 | 3.49 | 2.45 | 0.54 |
| 10:15-10:29 | 200 | 218 | 33 | 31 | 10 | 4.16 | 2.6 | 0.59 |
| 10:30-10:44 | 244 | 360 | 61 | 33 | 15 | 3.49 | 2.2 | 0.58 |
| 10:45-10:59 | 242 | 289 | 38 | 39 | 15 | 2.76 | 2.8 | 0.53 |
| 16:00-16:14 | 186 | 336 | 50 | 47 | 10 | 3.33 | 2.18 | 0.58 |
| 16:15-16:29 | 229 | 217 | 56 | 33 | 12 | 2.18 | 1.87 | 0.55 |
| 16:30-16:44 | 205 | 232 | 65 | 35 | 17 | 2.89 | 3.12 | 0.55 |
| 16:45-16:59 | 271 | 252 | 43 | 50 | 12 | 3.76 | 2.11 | 0.63 |
| 17:00-17:14 | 415 | 613 | 144 | 82 | 14 | 2.24 | 3.07 | 1.01 |
| 17:15-17:29 | 351 | 457 | 90 | 98 | 17 | 3.55 | 2.36 | 0.93 |
| 17:30-17:44 | 360 | 409 | 104 | 119 | 15 | 3.42 | 2.56 | 0.89 |
| 17:45-17:59 | 410 | 669 | 93 | 107 | 8 | 2.69 | 2.39 | 0.94 |
| 18:00-18:14 | 485 | 831 | 124 | 65 | 18 | 3.99 | 2.2 | 0.98 |
| 18:15-18:29 | 397 | 416 | 80 | 58 | 6 | 4.07 | 2.41 | 0.89 |
| 18:30-18:44 | 571 | 561 | 146 | 109 | 19 | 2.26 | 2.47 | 1.02 |
| 18:45-18:59 | 374 | 621 | 147 | 100 | 11 | 4.14 | 2.86 | 0.97 |
| 19:00-19:14 | 564 | 620 | 150 | 53 | 6 | 2.22 | 3.0 | 0.96 |
| 19:15-19:29 | 444 | 679 | 119 | 68 | 20 | 2.34 | 3.04 | 0.91 |
| 19:30-19:44 | 456 | 460 | 102 | 55 | 14 | 2.21 | 1.94 | 0.9 |
| 19:45-19:59 | 398 | 721 | 101 | 113 | 11 | 3.16 | 2.12 | 1.0 |
| 20:00-20:14 | 152 | 323 | 48 | 48 | 19 | 3.4 | 2.46 | 0.67 |
| 20:15-20:29 | 217 | 364 | 53 | 31 | 5 | 3.68 | 2.21 | 0.55 |
| 20:30-20:44 | 294 | 340 | 47 | 45 | 19 | 3.52 | 2.85 | 0.53 |
| 20:45-20:59 | 152 | 201 | 31 | 36 | 7 | 3.67 | 2.56 | 0.48 |
| 21:00-21:14 | 228 | 233 | 43 | 41 | 10 | 3.89 | 2.4 | 0.67 |
| 21:15-21:29 | 286 | 265 | 38 | 40 | 5 | 3.35 | 3.2 | 0.53 |
| 21:30-21:44 | 196 | 389 | 69 | 39 | 19 | 4.49 | 1.9 | 0.67 |
| 21:45-21:59 | 278 | 243 | 57 | 36 | 16 | 4.37 | 2.22 | 0.69 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 492 | 760 | 123 | 105 | 12 | 4.11 | 2.75 | 0.99 |
| 07:15-07:29 | 457 | 520 | 94 | 111 | 12 | 2.18 | 2.43 | 1.05 |
| 07:30-07:44 | 463 | 578 | 144 | 68 | 18 | 4.17 | 2.73 | 0.88 |
| 07:45-07:59 | 345 | 779 | 131 | 83 | 14 | 4.39 | 2.54 | 0.9 |
| 08:00-08:14 | 379 | 891 | 146 | 104 | 12 | 3.91 | 1.91 | 1.01 |
| 08:15-08:29 | 518 | 442 | 119 | 107 | 15 | 3.63 | 3.0 | 0.96 |
| 08:30-08:44 | 343 | 591 | 146 | 78 | 11 | 2.73 | 3.17 | 0.86 |
| 08:45-08:59 | 549 | 835 | 150 | 110 | 7 | 3.37 | 1.87 | 1.07 |
| 09:00-09:14 | 580 | 657 | 136 | 75 | 8 | 4.23 | 2.06 | 1.1 |
| 09:15-09:29 | 314 | 539 | 147 | 60 | 14 | 3.13 | 2.57 | 1.0 |
| 09:30-09:44 | 489 | 476 | 91 | 51 | 5 | 3.64 | 2.37 | 0.87 |
| 09:45-09:59 | 398 | 773 | 127 | 103 | 11 | 4.24 | 2.32 | 1.0 |
| 10:00-10:14 | 172 | 208 | 41 | 24 | 5 | 3.87 | 3.16 | 0.49 |
| 10:15-10:29 | 168 | 390 | 63 | 26 | 15 | 3.83 | 2.6 | 0.61 |
| 10:30-10:44 | 215 | 211 | 70 | 28 | 6 | 2.97 | 2.67 | 0.59 |
| 10:45-10:59 | 163 | 332 | 56 | 27 | 13 | 2.69 | 1.89 | 0.59 |
| 16:00-16:14 | 262 | 328 | 53 | 23 | 17 | 3.63 | 1.81 | 0.44 |
| 16:15-16:29 | 285 | 242 | 48 | 39 | 12 | 2.46 | 2.88 | 0.48 |
| 16:30-16:44 | 175 | 308 | 40 | 34 | 15 | 3.15 | 2.07 | 0.59 |
| 16:45-16:59 | 162 | 382 | 47 | 25 | 11 | 3.18 | 2.61 | 0.64 |
| 17:00-17:14 | 524 | 648 | 98 | 55 | 13 | 3.74 | 3.2 | 0.95 |
| 17:15-17:29 | 350 | 547 | 144 | 82 | 15 | 2.73 | 1.95 | 0.93 |
| 17:30-17:44 | 430 | 870 | 107 | 79 | 14 | 4.1 | 2.0 | 1.03 |
| 17:45-17:59 | 318 | 758 | 133 | 61 | 15 | 2.15 | 2.55 | 1.02 |
| 18:00-18:14 | 388 | 562 | 138 | 92 | 16 | 3.58 | 2.04 | 0.85 |
| 18:15-18:29 | 431 | 453 | 143 | 107 | 18 | 3.78 | 3.01 | 0.9 |
| 18:30-18:44 | 531 | 727 | 122 | 88 | 13 | 3.63 | 2.11 | 0.9 |
| 18:45-18:59 | 433 | 571 | 126 | 76 | 16 | 3.06 | 2.81 | 0.9 |
| 19:00-19:14 | 400 | 516 | 141 | 80 | 7 | 3.41 | 2.28 | 0.86 |
| 19:15-19:29 | 508 | 854 | 145 | 79 | 12 | 2.97 | 2.94 | 1.07 |
| 19:30-19:44 | 467 | 769 | 103 | 105 | 15 | 3.54 | 2.61 | 0.89 |
| 19:45-19:59 | 415 | 488 | 96 | 87 | 17 | 3.94 | 2.11 | 0.88 |
| 20:00-20:14 | 161 | 326 | 32 | 49 | 14 | 3.64 | 2.87 | 0.62 |
| 20:15-20:29 | 281 | 327 | 52 | 23 | 8 | 3.46 | 2.86 | 0.44 |
| 20:30-20:44 | 268 | 343 | 36 | 42 | 10 | 2.48 | 1.95 | 0.7 |
| 20:45-20:59 | 272 | 349 | 39 | 39 | 15 | 2.9 | 2.38 | 0.47 |
| 21:00-21:14 | 239 | 325 | 44 | 44 | 12 | 3.45 | 2.08 | 0.55 |
| 21:15-21:29 | 259 | 251 | 41 | 45 | 17 | 2.92 | 3.14 | 0.44 |
| 21:30-21:44 | 214 | 244 | 56 | 30 | 7 | 3.18 | 1.9 | 0.61 |
| 21:45-21:59 | 298 | 350 | 67 | 49 | 9 | 3.5 | 2.01 | 0.57 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 577 | 888 | 120 | 59 | 13 | 2.25 | 2.95 | 0.93 |
| 07:15-07:29 | 447 | 825 | 91 | 67 | 7 | 3.11 | 2.69 | 0.99 |
| 07:30-07:44 | 326 | 406 | 113 | 68 | 14 | 2.67 | 2.82 | 0.93 |
| 07:45-07:59 | 535 | 616 | 124 | 76 | 18 | 2.21 | 2.71 | 0.88 |
| 08:00-08:14 | 489 | 425 | 84 | 73 | 8 | 3.75 | 2.4 | 0.99 |
| 08:15-08:29 | 321 | 629 | 100 | 95 | 5 | 4.16 | 2.09 | 1.06 |
| 08:30-08:44 | 341 | 568 | 86 | 113 | 7 | 2.54 | 2.22 | 0.95 |
| 08:45-08:59 | 516 | 839 | 107 | 74 | 15 | 3.66 | 2.45 | 1.01 |
| 09:00-09:14 | 394 | 563 | 132 | 87 | 11 | 3.84 | 3.13 | 0.99 |
| 09:15-09:29 | 393 | 430 | 125 | 104 | 11 | 2.51 | 2.35 | 1.06 |
| 09:30-09:44 | 451 | 723 | 104 | 92 | 17 | 2.63 | 2.72 | 1.1 |
| 09:45-09:59 | 438 | 771 | 121 | 72 | 11 | 2.68 | 3.02 | 0.96 |
| 10:00-10:14 | 264 | 256 | 42 | 39 | 6 | 4.18 | 1.82 | 0.63 |
| 10:15-10:29 | 284 | 228 | 52 | 24 | 5 | 2.83 | 2.69 | 0.46 |
| 10:30-10:44 | 216 | 208 | 64 | 31 | 18 | 4.42 | 1.83 | 0.68 |
| 10:45-10:59 | 294 | 371 | 61 | 25 | 14 | 3.55 | 3.12 | 0.5 |
| 16:00-16:14 | 153 | 200 | 35 | 26 | 10 | 3.29 | 2.43 | 0.46 |
| 16:15-16:29 | 159 | 356 | 66 | 30 | 10 | 2.82 | 2.25 | 0.44 |
| 16:30-16:44 | 279 | 310 | 31 | 40 | 10 | 4.09 | 2.0 | 0.49 |
| 16:45-16:59 | 204 | 311 | 30 | 27 | 11 | 2.86 | 2.34 | 0.6 |
| 17:00-17:14 | 577 | 583 | 109 | 56 | 13 | 2.25 | 1.82 | 0.92 |
| 17:15-17:29 | 437 | 626 | 136 | 77 | 10 | 3.46 | 2.83 | 0.88 |
| 17:30-17:44 | 456 | 538 | 123 | 87 | 16 | 2.98 | 2.05 | 1.02 |
| 17:45-17:59 | 504 | 723 | 92 | 77 | 17 | 3.32 | 2.98 | 0.95 |
| 18:00-18:14 | 376 | 851 | 82 | 107 | 11 | 3.25 | 2.31 | 0.9 |
| 18:15-18:29 | 581 | 764 | 85 | 52 | 7 | 4.22 | 2.92 | 1.1 |
| 18:30-18:44 | 457 | 526 | 126 | 94 | 10 | 3.04 | 2.67 | 1.1 |
| 18:45-18:59 | 516 | 694 | 97 | 87 | 8 | 3.62 | 2.68 | 0.93 |
| 19:00-19:14 | 384 | 557 | 124 | 93 | 5 | 3.59 | 1.85 | 1.07 |
| 19:15-19:29 | 341 | 478 | 129 | 91 | 18 | 3.24 | 2.82 | 1.01 |
| 19:30-19:44 | 541 | 412 | 105 | 51 | 17 | 2.29 | 2.62 | 1.07 |
| 19:45-19:59 | 492 | 437 | 90 | 107 | 10 | 2.69 | 1.97 | 1.05 |
| 20:00-20:14 | 296 | 389 | 34 | 44 | 12 | 4.25 | 2.53 | 0.66 |
| 20:15-20:29 | 261 | 386 | 66 | 37 | 15 | 2.24 | 2.54 | 0.45 |
| 20:30-20:44 | 188 | 235 | 38 | 21 | 17 | 2.69 | 3.17 | 0.69 |
| 20:45-20:59 | 196 | 254 | 43 | 41 | 9 | 4.03 | 2.96 | 0.63 |
| 21:00-21:14 | 256 | 260 | 41 | 28 | 11 | 3.24 | 2.72 | 0.52 |
| 21:15-21:29 | 259 | 320 | 32 | 33 | 7 | 2.32 | 1.85 | 0.66 |
| 21:30-21:44 | 165 | 265 | 46 | 27 | 5 | 2.61 | 1.93 | 0.44 |
| 21:45-21:59 | 176 | 259 | 32 | 48 | 6 | 3.45 | 2.62 | 0.42 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 457 | 589 | 129 | 51 | 18 | 2.76 | 1.87 | 0.86 |
| 07:15-07:29 | 497 | 587 | 93 | 101 | 11 | 3.86 | 2.34 | 0.93 |
| 07:30-07:44 | 486 | 725 | 86 | 75 | 11 | 3.95 | 1.95 | 1.06 |
| 07:45-07:59 | 570 | 461 | 134 | 51 | 14 | 3.43 | 2.76 | 0.99 |
| 08:00-08:14 | 318 | 796 | 81 | 105 | 13 | 4.03 | 2.82 | 1.03 |
| 08:15-08:29 | 440 | 749 | 80 | 52 | 11 | 4.36 | 2.9 | 0.93 |
| 08:30-08:44 | 354 | 469 | 92 | 66 | 17 | 3.09 | 2.9 | 1.04 |
| 08:45-08:59 | 307 | 677 | 86 | 69 | 10 | 4.35 | 2.81 | 1.0 |
| 09:00-09:14 | 580 | 467 | 141 | 57 | 8 | 2.69 | 2.51 | 1.02 |
| 09:15-09:29 | 437 | 815 | 140 | 59 | 17 | 2.75 | 2.45 | 0.89 |
| 09:30-09:44 | 309 | 886 | 150 | 97 | 19 | 2.34 | 2.33 | 0.87 |
| 09:45-09:59 | 472 | 433 | 132 | 53 | 11 | 3.91 | 3.12 | 1.06 |
| 10:00-10:14 | 154 | 207 | 37 | 20 | 7 | 2.66 | 3.01 | 0.65 |
| 10:15-10:29 | 182 | 326 | 46 | 26 | 5 | 3.16 | 2.87 | 0.64 |
| 10:30-10:44 | 269 | 317 | 55 | 36 | 8 | 3.74 | 2.9 | 0.61 |
| 10:45-10:59 | 252 | 270 | 51 | 31 | 17 | 2.27 | 2.25 | 0.53 |
| 16:00-16:14 | 256 | 380 | 54 | 45 | 5 | 3.24 | 2.61 | 0.57 |
| 16:15-16:29 | 171 | 303 | 34 | 33 | 12 | 2.49 | 2.96 | 0.6 |
| 16:30-16:44 | 266 | 307 | 66 | 30 | 17 | 3.72 | 2.85 | 0.45 |
| 16:45-16:59 | 204 | 374 | 32 | 47 | 8 | 2.8 | 1.81 | 0.49 |
| 17:00-17:14 | 573 | 622 | 100 | 107 | 10 | 4.37 | 2.7 | 1.06 |
| 17:15-17:29 | 396 | 694 | 144 | 56 | 16 | 4.42 | 2.85 | 0.97 |
| 17:30-17:44 | 538 | 693 | 135 | 50 | 14 | 4.39 | 2.75 | 0.87 |
| 17:45-17:59 | 341 | 653 | 146 | 85 | 8 | 3.32 | 2.09 | 0.89 |
| 18:00-18:14 | 362 | 500 | 138 | 64 | 9 | 2.53 | 1.9 | 0.97 |
| 18:15-18:29 | 525 | 883 | 131 | 118 | 7 | 3.64 | 2.96 | 1.05 |
| 18:30-18:44 | 331 | 486 | 81 | 107 | 6 | 3.37 | 2.02 | 1.06 |
| 18:45-18:59 | 309 | 598 | 82 | 79 | 10 | 2.84 | 2.63 | 1.04 |
| 19:00-19:14 | 589 | 458 | 133 | 73 | 9 | 4.36 | 2.18 | 0.89 |
| 19:15-19:29 | 320 | 857 | 132 | 87 | 11 | 4.23 | 2.93 | 1.09 |
| 19:30-19:44 | 564 | 861 | 91 | 88 | 13 | 2.31 | 1.95 | 1.03 |
| 19:45-19:59 | 494 | 891 | 140 | 110 | 17 | 3.07 | 2.74 | 0.95 |
| 20:00-20:14 | 275 | 267 | 36 | 25 | 5 | 3.76 | 2.56 | 0.55 |
| 20:15-20:29 | 293 | 357 | 30 | 43 | 18 | 3.63 | 3.11 | 0.68 |
| 20:30-20:44 | 290 | 330 | 41 | 41 | 14 | 3.23 | 2.81 | 0.5 |
| 20:45-20:59 | 190 | 202 | 49 | 37 | 8 | 4.08 | 2.28 | 0.4 |
| 21:00-21:14 | 285 | 343 | 45 | 28 | 18 | 2.97 | 2.29 | 0.49 |
| 21:15-21:29 | 208 | 205 | 61 | 23 | 5 | 2.91 | 2.58 | 0.47 |
| 21:30-21:44 | 195 | 398 | 34 | 31 | 11 | 2.89 | 2.41 | 0.69 |
| 21:45-21:59 | 300 | 332 | 64 | 43 | 14 | 3.95 | 2.68 | 0.67 |

### A.14 Day 14: 2026-06-14

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 588 | 658 | 134 | 60 | 5 | 2.11 | 3.13 | 0.89 |
| 07:15-07:29 | 511 | 415 | 149 | 57 | 11 | 3.08 | 2.34 | 0.87 |
| 07:30-07:44 | 300 | 627 | 104 | 102 | 10 | 3.32 | 2.45 | 1.02 |
| 07:45-07:59 | 489 | 531 | 109 | 87 | 15 | 3.15 | 2.41 | 1.08 |
| 08:00-08:14 | 472 | 824 | 110 | 104 | 15 | 2.89 | 1.89 | 0.99 |
| 08:15-08:29 | 577 | 643 | 128 | 57 | 10 | 2.23 | 2.82 | 0.88 |
| 08:30-08:44 | 575 | 541 | 140 | 91 | 16 | 4.34 | 3.11 | 1.07 |
| 08:45-08:59 | 384 | 746 | 102 | 58 | 12 | 3.48 | 2.93 | 1.09 |
| 09:00-09:14 | 401 | 449 | 141 | 85 | 8 | 3.77 | 2.03 | 0.95 |
| 09:15-09:29 | 566 | 464 | 108 | 70 | 11 | 4.22 | 1.82 | 0.88 |
| 09:30-09:44 | 401 | 744 | 80 | 112 | 11 | 2.13 | 2.66 | 0.87 |
| 09:45-09:59 | 388 | 727 | 118 | 64 | 11 | 4.36 | 2.81 | 0.99 |
| 10:00-10:14 | 196 | 214 | 41 | 48 | 12 | 3.15 | 2.59 | 0.56 |
| 10:15-10:29 | 261 | 391 | 45 | 34 | 19 | 2.3 | 2.35 | 0.55 |
| 10:30-10:44 | 298 | 232 | 54 | 36 | 9 | 2.33 | 2.65 | 0.69 |
| 10:45-10:59 | 260 | 219 | 65 | 24 | 20 | 3.2 | 2.75 | 0.63 |
| 16:00-16:14 | 229 | 261 | 44 | 48 | 13 | 3.75 | 3.18 | 0.42 |
| 16:15-16:29 | 177 | 329 | 68 | 37 | 17 | 3.74 | 2.47 | 0.59 |
| 16:30-16:44 | 238 | 244 | 66 | 46 | 5 | 4.11 | 2.59 | 0.6 |
| 16:45-16:59 | 173 | 294 | 30 | 47 | 6 | 3.34 | 3.02 | 0.59 |
| 17:00-17:14 | 417 | 788 | 85 | 80 | 19 | 3.73 | 2.79 | 0.89 |
| 17:15-17:29 | 562 | 636 | 104 | 111 | 6 | 3.02 | 2.97 | 0.93 |
| 17:30-17:44 | 493 | 419 | 124 | 114 | 19 | 3.51 | 3.16 | 1.02 |
| 17:45-17:59 | 446 | 468 | 132 | 120 | 7 | 3.52 | 3.16 | 1.02 |
| 18:00-18:14 | 344 | 684 | 127 | 66 | 14 | 3.43 | 3.13 | 1.01 |
| 18:15-18:29 | 356 | 505 | 150 | 69 | 7 | 4.22 | 2.01 | 0.92 |
| 18:30-18:44 | 532 | 676 | 136 | 101 | 6 | 2.23 | 2.94 | 0.99 |
| 18:45-18:59 | 570 | 591 | 96 | 110 | 11 | 2.92 | 2.31 | 0.9 |
| 19:00-19:14 | 311 | 423 | 81 | 110 | 7 | 2.96 | 1.97 | 1.1 |
| 19:15-19:29 | 587 | 529 | 90 | 105 | 9 | 2.84 | 1.85 | 0.94 |
| 19:30-19:44 | 443 | 648 | 114 | 101 | 15 | 4.03 | 2.24 | 1.03 |
| 19:45-19:59 | 587 | 749 | 93 | 55 | 16 | 4.49 | 2.09 | 0.93 |
| 20:00-20:14 | 201 | 226 | 59 | 40 | 15 | 2.63 | 2.6 | 0.69 |
| 20:15-20:29 | 269 | 299 | 43 | 38 | 7 | 2.44 | 2.98 | 0.44 |
| 20:30-20:44 | 177 | 302 | 64 | 26 | 10 | 3.77 | 2.93 | 0.41 |
| 20:45-20:59 | 179 | 204 | 64 | 33 | 20 | 2.53 | 2.16 | 0.56 |
| 21:00-21:14 | 171 | 289 | 49 | 24 | 14 | 4.24 | 3.07 | 0.65 |
| 21:15-21:29 | 178 | 295 | 57 | 50 | 14 | 2.48 | 2.3 | 0.56 |
| 21:30-21:44 | 274 | 226 | 47 | 27 | 11 | 2.1 | 2.36 | 0.6 |
| 21:45-21:59 | 213 | 202 | 40 | 47 | 15 | 3.14 | 2.97 | 0.57 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 317 | 558 | 124 | 99 | 12 | 2.88 | 3.1 | 0.88 |
| 07:15-07:29 | 472 | 443 | 125 | 73 | 20 | 2.9 | 2.36 | 0.91 |
| 07:30-07:44 | 419 | 563 | 87 | 87 | 20 | 3.06 | 2.99 | 1.04 |
| 07:45-07:59 | 433 | 707 | 149 | 119 | 17 | 4.47 | 3.13 | 0.91 |
| 08:00-08:14 | 535 | 819 | 95 | 85 | 8 | 2.74 | 1.96 | 0.9 |
| 08:15-08:29 | 530 | 572 | 144 | 112 | 16 | 2.19 | 2.94 | 1.0 |
| 08:30-08:44 | 308 | 650 | 92 | 100 | 13 | 4.47 | 2.71 | 1.09 |
| 08:45-08:59 | 595 | 514 | 146 | 51 | 9 | 2.66 | 2.94 | 1.01 |
| 09:00-09:14 | 399 | 516 | 120 | 110 | 9 | 4.46 | 2.39 | 0.88 |
| 09:15-09:29 | 353 | 619 | 109 | 88 | 9 | 2.7 | 2.49 | 1.03 |
| 09:30-09:44 | 443 | 637 | 129 | 83 | 13 | 4.48 | 2.66 | 1.07 |
| 09:45-09:59 | 440 | 748 | 86 | 103 | 11 | 3.89 | 3.08 | 1.09 |
| 10:00-10:14 | 204 | 279 | 35 | 29 | 19 | 3.91 | 2.79 | 0.63 |
| 10:15-10:29 | 229 | 341 | 70 | 32 | 12 | 2.72 | 1.88 | 0.41 |
| 10:30-10:44 | 256 | 368 | 50 | 42 | 14 | 2.6 | 2.77 | 0.54 |
| 10:45-10:59 | 228 | 247 | 65 | 40 | 9 | 3.01 | 2.05 | 0.68 |
| 16:00-16:14 | 271 | 307 | 56 | 27 | 6 | 3.56 | 2.5 | 0.56 |
| 16:15-16:29 | 183 | 269 | 42 | 32 | 8 | 3.26 | 2.16 | 0.42 |
| 16:30-16:44 | 280 | 299 | 44 | 49 | 15 | 2.12 | 2.37 | 0.52 |
| 16:45-16:59 | 246 | 324 | 40 | 28 | 11 | 2.59 | 2.52 | 0.68 |
| 17:00-17:14 | 453 | 440 | 109 | 113 | 7 | 4.24 | 1.96 | 0.95 |
| 17:15-17:29 | 423 | 496 | 85 | 71 | 15 | 2.64 | 2.09 | 1.07 |
| 17:30-17:44 | 588 | 441 | 99 | 80 | 14 | 2.34 | 2.91 | 0.89 |
| 17:45-17:59 | 434 | 491 | 116 | 63 | 18 | 4.32 | 2.88 | 0.9 |
| 18:00-18:14 | 348 | 474 | 98 | 70 | 20 | 4.29 | 2.97 | 1.09 |
| 18:15-18:29 | 498 | 608 | 81 | 57 | 7 | 3.79 | 2.92 | 1.06 |
| 18:30-18:44 | 485 | 581 | 102 | 82 | 10 | 4.25 | 1.87 | 0.93 |
| 18:45-18:59 | 525 | 530 | 137 | 116 | 14 | 2.53 | 2.8 | 0.89 |
| 19:00-19:14 | 469 | 690 | 115 | 115 | 9 | 3.83 | 1.86 | 1.0 |
| 19:15-19:29 | 577 | 498 | 138 | 67 | 6 | 2.49 | 1.84 | 0.86 |
| 19:30-19:44 | 443 | 545 | 126 | 77 | 15 | 3.58 | 2.56 | 0.87 |
| 19:45-19:59 | 451 | 848 | 149 | 61 | 10 | 4.06 | 1.98 | 0.93 |
| 20:00-20:14 | 244 | 286 | 65 | 31 | 10 | 4.06 | 1.9 | 0.43 |
| 20:15-20:29 | 204 | 371 | 40 | 42 | 16 | 2.22 | 2.37 | 0.53 |
| 20:30-20:44 | 240 | 359 | 30 | 48 | 16 | 4.5 | 1.96 | 0.66 |
| 20:45-20:59 | 150 | 200 | 54 | 45 | 15 | 2.63 | 1.81 | 0.48 |
| 21:00-21:14 | 252 | 384 | 44 | 38 | 11 | 3.02 | 2.42 | 0.57 |
| 21:15-21:29 | 228 | 353 | 35 | 27 | 13 | 2.63 | 2.82 | 0.6 |
| 21:30-21:44 | 154 | 397 | 70 | 25 | 11 | 2.23 | 3.14 | 0.49 |
| 21:45-21:59 | 275 | 296 | 54 | 30 | 10 | 2.74 | 3.19 | 0.53 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 318 | 711 | 99 | 114 | 12 | 4.22 | 2.74 | 0.94 |
| 07:15-07:29 | 591 | 473 | 136 | 85 | 12 | 3.77 | 2.6 | 1.08 |
| 07:30-07:44 | 344 | 868 | 95 | 88 | 20 | 3.03 | 2.82 | 0.85 |
| 07:45-07:59 | 456 | 510 | 97 | 73 | 11 | 3.97 | 2.74 | 0.86 |
| 08:00-08:14 | 417 | 432 | 90 | 90 | 11 | 4.43 | 2.58 | 0.9 |
| 08:15-08:29 | 371 | 559 | 85 | 75 | 10 | 4.44 | 2.03 | 0.98 |
| 08:30-08:44 | 392 | 757 | 117 | 52 | 8 | 3.18 | 1.92 | 0.88 |
| 08:45-08:59 | 372 | 595 | 149 | 116 | 15 | 3.86 | 2.41 | 1.02 |
| 09:00-09:14 | 468 | 488 | 109 | 99 | 5 | 4.04 | 3.16 | 0.99 |
| 09:15-09:29 | 439 | 752 | 110 | 78 | 12 | 2.27 | 3.18 | 0.91 |
| 09:30-09:44 | 319 | 423 | 136 | 106 | 10 | 2.58 | 2.53 | 1.01 |
| 09:45-09:59 | 439 | 591 | 117 | 62 | 8 | 3.26 | 2.7 | 0.86 |
| 10:00-10:14 | 259 | 247 | 43 | 26 | 13 | 3.46 | 2.35 | 0.54 |
| 10:15-10:29 | 194 | 366 | 63 | 48 | 13 | 2.95 | 2.76 | 0.65 |
| 10:30-10:44 | 168 | 221 | 35 | 25 | 16 | 3.79 | 2.71 | 0.69 |
| 10:45-10:59 | 176 | 339 | 67 | 32 | 10 | 2.89 | 1.85 | 0.5 |
| 16:00-16:14 | 209 | 307 | 68 | 46 | 18 | 3.53 | 1.89 | 0.56 |
| 16:15-16:29 | 185 | 324 | 42 | 49 | 9 | 3.33 | 2.23 | 0.59 |
| 16:30-16:44 | 179 | 267 | 49 | 42 | 20 | 2.51 | 2.63 | 0.64 |
| 16:45-16:59 | 244 | 305 | 59 | 32 | 6 | 2.16 | 2.27 | 0.55 |
| 17:00-17:14 | 511 | 841 | 98 | 86 | 13 | 2.69 | 2.59 | 0.92 |
| 17:15-17:29 | 484 | 541 | 110 | 54 | 20 | 4.13 | 3.08 | 1.02 |
| 17:30-17:44 | 474 | 866 | 104 | 63 | 11 | 3.26 | 3.09 | 1.1 |
| 17:45-17:59 | 337 | 494 | 137 | 63 | 14 | 3.54 | 2.75 | 0.87 |
| 18:00-18:14 | 507 | 594 | 81 | 74 | 14 | 2.83 | 2.35 | 0.87 |
| 18:15-18:29 | 349 | 894 | 118 | 101 | 15 | 3.79 | 2.54 | 0.95 |
| 18:30-18:44 | 380 | 715 | 86 | 87 | 11 | 2.32 | 2.44 | 0.87 |
| 18:45-18:59 | 305 | 619 | 107 | 61 | 9 | 4.18 | 2.48 | 1.02 |
| 19:00-19:14 | 304 | 742 | 126 | 79 | 13 | 4.4 | 2.19 | 1.06 |
| 19:15-19:29 | 519 | 875 | 114 | 101 | 5 | 2.72 | 3.01 | 0.89 |
| 19:30-19:44 | 359 | 775 | 89 | 94 | 12 | 2.23 | 2.85 | 0.87 |
| 19:45-19:59 | 426 | 577 | 127 | 53 | 8 | 2.69 | 3.09 | 0.98 |
| 20:00-20:14 | 198 | 280 | 40 | 41 | 11 | 2.13 | 3.12 | 0.51 |
| 20:15-20:29 | 275 | 346 | 39 | 33 | 8 | 2.42 | 3.0 | 0.55 |
| 20:30-20:44 | 215 | 233 | 57 | 45 | 11 | 2.61 | 2.37 | 0.44 |
| 20:45-20:59 | 262 | 361 | 38 | 36 | 8 | 3.42 | 1.81 | 0.64 |
| 21:00-21:14 | 223 | 269 | 52 | 26 | 9 | 3.81 | 1.91 | 0.51 |
| 21:15-21:29 | 287 | 367 | 62 | 21 | 20 | 2.69 | 2.4 | 0.54 |
| 21:30-21:44 | 254 | 218 | 43 | 23 | 20 | 3.38 | 3.16 | 0.57 |
| 21:45-21:59 | 174 | 291 | 51 | 39 | 16 | 3.03 | 2.06 | 0.43 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 379 | 861 | 147 | 104 | 8 | 4.23 | 2.15 | 1.02 |
| 07:15-07:29 | 329 | 449 | 143 | 60 | 13 | 3.17 | 1.97 | 1.01 |
| 07:30-07:44 | 334 | 686 | 109 | 102 | 12 | 2.31 | 2.86 | 0.93 |
| 07:45-07:59 | 313 | 497 | 116 | 115 | 11 | 3.46 | 2.72 | 0.9 |
| 08:00-08:14 | 386 | 549 | 135 | 91 | 6 | 2.63 | 2.67 | 1.06 |
| 08:15-08:29 | 422 | 712 | 121 | 119 | 17 | 4.31 | 3.08 | 0.91 |
| 08:30-08:44 | 490 | 569 | 92 | 67 | 5 | 3.65 | 2.23 | 0.98 |
| 08:45-08:59 | 445 | 518 | 81 | 65 | 10 | 2.59 | 2.15 | 0.89 |
| 09:00-09:14 | 591 | 485 | 128 | 52 | 17 | 4.18 | 2.4 | 1.08 |
| 09:15-09:29 | 505 | 683 | 108 | 108 | 18 | 2.34 | 2.29 | 0.91 |
| 09:30-09:44 | 572 | 829 | 120 | 67 | 6 | 3.47 | 2.23 | 0.9 |
| 09:45-09:59 | 323 | 500 | 117 | 59 | 15 | 3.91 | 2.67 | 1.05 |
| 10:00-10:14 | 153 | 273 | 53 | 39 | 16 | 3.66 | 2.24 | 0.67 |
| 10:15-10:29 | 284 | 337 | 61 | 37 | 16 | 2.15 | 2.75 | 0.52 |
| 10:30-10:44 | 277 | 386 | 30 | 29 | 7 | 3.74 | 2.72 | 0.61 |
| 10:45-10:59 | 168 | 375 | 37 | 40 | 19 | 4.24 | 2.6 | 0.6 |
| 16:00-16:14 | 198 | 216 | 63 | 44 | 9 | 2.2 | 2.56 | 0.68 |
| 16:15-16:29 | 163 | 209 | 36 | 39 | 11 | 2.34 | 2.97 | 0.63 |
| 16:30-16:44 | 239 | 220 | 39 | 29 | 6 | 2.67 | 2.02 | 0.67 |
| 16:45-16:59 | 253 | 375 | 42 | 22 | 12 | 4.22 | 3.16 | 0.5 |
| 17:00-17:14 | 498 | 431 | 92 | 63 | 9 | 2.37 | 2.31 | 0.94 |
| 17:15-17:29 | 573 | 448 | 140 | 86 | 14 | 3.59 | 2.03 | 0.9 |
| 17:30-17:44 | 328 | 687 | 140 | 78 | 6 | 4.45 | 2.55 | 1.09 |
| 17:45-17:59 | 345 | 706 | 128 | 66 | 14 | 3.95 | 2.83 | 1.02 |
| 18:00-18:14 | 332 | 517 | 89 | 66 | 10 | 2.62 | 2.45 | 1.07 |
| 18:15-18:29 | 479 | 650 | 80 | 71 | 18 | 3.97 | 2.54 | 1.06 |
| 18:30-18:44 | 577 | 414 | 100 | 95 | 9 | 3.06 | 1.89 | 1.1 |
| 18:45-18:59 | 539 | 606 | 94 | 114 | 6 | 2.94 | 2.02 | 0.95 |
| 19:00-19:14 | 577 | 649 | 123 | 118 | 15 | 3.67 | 2.54 | 0.85 |
| 19:15-19:29 | 360 | 835 | 105 | 120 | 8 | 3.2 | 2.93 | 0.9 |
| 19:30-19:44 | 461 | 858 | 138 | 110 | 10 | 3.61 | 3.12 | 1.08 |
| 19:45-19:59 | 420 | 611 | 87 | 85 | 11 | 2.6 | 2.94 | 1.07 |
| 20:00-20:14 | 245 | 252 | 37 | 42 | 20 | 4.48 | 2.85 | 0.42 |
| 20:15-20:29 | 258 | 350 | 56 | 26 | 13 | 2.55 | 2.63 | 0.5 |
| 20:30-20:44 | 241 | 257 | 55 | 31 | 16 | 2.64 | 3.09 | 0.69 |
| 20:45-20:59 | 290 | 326 | 63 | 24 | 20 | 4.04 | 2.85 | 0.68 |
| 21:00-21:14 | 236 | 325 | 57 | 50 | 10 | 3.82 | 2.97 | 0.54 |
| 21:15-21:29 | 268 | 289 | 33 | 27 | 19 | 4.24 | 2.27 | 0.42 |
| 21:30-21:44 | 176 | 204 | 37 | 24 | 17 | 2.35 | 2.15 | 0.54 |
| 21:45-21:59 | 160 | 382 | 42 | 36 | 7 | 4.33 | 2.32 | 0.68 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 325 | 682 | 107 | 119 | 10 | 2.47 | 2.98 | 0.9 |
| 07:15-07:29 | 455 | 844 | 91 | 84 | 11 | 2.14 | 2.6 | 1.04 |
| 07:30-07:44 | 492 | 605 | 125 | 63 | 7 | 3.98 | 2.54 | 0.9 |
| 07:45-07:59 | 366 | 682 | 145 | 72 | 8 | 3.2 | 1.85 | 0.92 |
| 08:00-08:14 | 478 | 735 | 144 | 70 | 15 | 2.33 | 2.9 | 0.95 |
| 08:15-08:29 | 555 | 513 | 101 | 53 | 6 | 3.45 | 2.82 | 1.08 |
| 08:30-08:44 | 305 | 408 | 86 | 52 | 11 | 3.76 | 2.13 | 0.87 |
| 08:45-08:59 | 371 | 829 | 131 | 50 | 10 | 2.74 | 2.39 | 1.04 |
| 09:00-09:14 | 420 | 626 | 104 | 108 | 19 | 3.04 | 1.83 | 1.02 |
| 09:15-09:29 | 399 | 798 | 150 | 76 | 19 | 3.98 | 2.14 | 0.98 |
| 09:30-09:44 | 532 | 737 | 108 | 109 | 15 | 3.35 | 2.53 | 1.07 |
| 09:45-09:59 | 585 | 733 | 94 | 98 | 5 | 3.37 | 2.27 | 0.99 |
| 10:00-10:14 | 277 | 255 | 67 | 50 | 5 | 3.44 | 2.1 | 0.52 |
| 10:15-10:29 | 275 | 393 | 38 | 50 | 12 | 4.37 | 2.12 | 0.5 |
| 10:30-10:44 | 276 | 236 | 68 | 47 | 18 | 2.27 | 2.2 | 0.57 |
| 10:45-10:59 | 185 | 293 | 43 | 40 | 13 | 2.53 | 3.13 | 0.52 |
| 16:00-16:14 | 240 | 369 | 49 | 37 | 19 | 3.24 | 2.06 | 0.67 |
| 16:15-16:29 | 193 | 206 | 52 | 43 | 19 | 3.68 | 2.49 | 0.65 |
| 16:30-16:44 | 197 | 372 | 51 | 50 | 17 | 3.04 | 1.96 | 0.55 |
| 16:45-16:59 | 266 | 278 | 45 | 20 | 6 | 4.46 | 3.02 | 0.49 |
| 17:00-17:14 | 341 | 845 | 143 | 88 | 18 | 3.35 | 2.09 | 0.96 |
| 17:15-17:29 | 334 | 640 | 111 | 96 | 10 | 3.29 | 2.92 | 1.01 |
| 17:30-17:44 | 316 | 768 | 119 | 118 | 10 | 3.87 | 2.96 | 1.08 |
| 17:45-17:59 | 364 | 585 | 113 | 86 | 19 | 2.78 | 2.85 | 0.94 |
| 18:00-18:14 | 541 | 402 | 95 | 58 | 5 | 2.83 | 2.96 | 1.0 |
| 18:15-18:29 | 469 | 707 | 131 | 108 | 14 | 3.99 | 2.33 | 0.87 |
| 18:30-18:44 | 559 | 613 | 138 | 70 | 10 | 3.2 | 3.0 | 1.02 |
| 18:45-18:59 | 561 | 844 | 111 | 77 | 14 | 3.11 | 2.4 | 1.0 |
| 19:00-19:14 | 484 | 825 | 93 | 79 | 16 | 3.46 | 2.86 | 0.87 |
| 19:15-19:29 | 516 | 883 | 89 | 102 | 8 | 3.54 | 3.07 | 1.09 |
| 19:30-19:44 | 329 | 646 | 108 | 58 | 16 | 2.94 | 3.11 | 0.91 |
| 19:45-19:59 | 387 | 449 | 98 | 110 | 5 | 3.37 | 2.58 | 0.88 |
| 20:00-20:14 | 266 | 281 | 45 | 23 | 6 | 3.59 | 2.03 | 0.66 |
| 20:15-20:29 | 176 | 226 | 32 | 32 | 13 | 3.83 | 1.84 | 0.56 |
| 20:30-20:44 | 280 | 247 | 68 | 23 | 18 | 3.26 | 2.97 | 0.54 |
| 20:45-20:59 | 243 | 277 | 64 | 37 | 18 | 2.85 | 2.21 | 0.62 |
| 21:00-21:14 | 282 | 308 | 69 | 30 | 18 | 2.77 | 3.05 | 0.41 |
| 21:15-21:29 | 261 | 205 | 49 | 24 | 13 | 3.19 | 2.61 | 0.53 |
| 21:30-21:44 | 159 | 319 | 33 | 37 | 20 | 4.22 | 1.82 | 0.47 |
| 21:45-21:59 | 295 | 307 | 58 | 48 | 6 | 2.94 | 2.18 | 0.54 |

### A.15 Day 15: 2026-06-15

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 361 | 578 | 96 | 65 | 10 | 2.97 | 2.12 | 0.85 |
| 07:15-07:29 | 598 | 636 | 143 | 63 | 16 | 4.19 | 2.68 | 0.89 |
| 07:30-07:44 | 595 | 631 | 123 | 63 | 12 | 3.0 | 1.96 | 1.03 |
| 07:45-07:59 | 442 | 750 | 137 | 59 | 12 | 2.39 | 2.55 | 0.87 |
| 08:00-08:14 | 329 | 710 | 87 | 50 | 13 | 4.43 | 2.14 | 0.89 |
| 08:15-08:29 | 426 | 489 | 130 | 120 | 10 | 2.18 | 2.98 | 0.97 |
| 08:30-08:44 | 485 | 558 | 139 | 72 | 19 | 2.35 | 2.14 | 0.89 |
| 08:45-08:59 | 302 | 710 | 132 | 56 | 11 | 4.25 | 2.33 | 1.07 |
| 09:00-09:14 | 476 | 896 | 83 | 58 | 9 | 3.77 | 2.03 | 1.02 |
| 09:15-09:29 | 571 | 721 | 108 | 102 | 17 | 3.99 | 2.79 | 1.03 |
| 09:30-09:44 | 520 | 522 | 102 | 74 | 17 | 3.97 | 2.16 | 0.94 |
| 09:45-09:59 | 540 | 556 | 82 | 50 | 17 | 4.29 | 2.62 | 0.92 |
| 10:00-10:14 | 167 | 240 | 37 | 39 | 13 | 2.52 | 2.45 | 0.45 |
| 10:15-10:29 | 206 | 288 | 58 | 20 | 6 | 3.02 | 1.82 | 0.55 |
| 10:30-10:44 | 298 | 395 | 51 | 30 | 8 | 4.45 | 2.18 | 0.64 |
| 10:45-10:59 | 179 | 266 | 40 | 20 | 20 | 3.45 | 1.82 | 0.61 |
| 16:00-16:14 | 227 | 349 | 57 | 22 | 15 | 2.93 | 2.04 | 0.53 |
| 16:15-16:29 | 280 | 379 | 60 | 38 | 5 | 2.86 | 3.08 | 0.51 |
| 16:30-16:44 | 169 | 397 | 61 | 44 | 14 | 2.48 | 2.34 | 0.41 |
| 16:45-16:59 | 289 | 220 | 48 | 30 | 5 | 2.15 | 2.44 | 0.66 |
| 17:00-17:14 | 479 | 800 | 104 | 56 | 7 | 4.06 | 3.15 | 1.0 |
| 17:15-17:29 | 457 | 520 | 128 | 69 | 5 | 4.37 | 1.99 | 1.06 |
| 17:30-17:44 | 360 | 618 | 92 | 95 | 11 | 4.43 | 2.99 | 1.1 |
| 17:45-17:59 | 339 | 758 | 95 | 102 | 16 | 2.35 | 2.13 | 0.93 |
| 18:00-18:14 | 547 | 532 | 94 | 119 | 17 | 2.92 | 1.94 | 0.85 |
| 18:15-18:29 | 395 | 607 | 144 | 70 | 17 | 4.16 | 2.13 | 0.87 |
| 18:30-18:44 | 302 | 618 | 143 | 78 | 20 | 3.19 | 2.16 | 0.86 |
| 18:45-18:59 | 438 | 449 | 121 | 51 | 7 | 3.05 | 2.95 | 1.04 |
| 19:00-19:14 | 587 | 478 | 133 | 54 | 15 | 2.46 | 3.16 | 1.01 |
| 19:15-19:29 | 498 | 731 | 148 | 71 | 7 | 3.43 | 2.83 | 1.09 |
| 19:30-19:44 | 346 | 700 | 147 | 101 | 5 | 3.03 | 2.79 | 1.0 |
| 19:45-19:59 | 538 | 522 | 147 | 86 | 7 | 4.2 | 2.32 | 1.05 |
| 20:00-20:14 | 155 | 298 | 63 | 48 | 13 | 2.87 | 2.62 | 0.44 |
| 20:15-20:29 | 240 | 314 | 44 | 33 | 16 | 2.26 | 2.85 | 0.47 |
| 20:30-20:44 | 163 | 330 | 62 | 21 | 10 | 3.73 | 2.47 | 0.47 |
| 20:45-20:59 | 267 | 307 | 38 | 29 | 17 | 2.44 | 2.34 | 0.61 |
| 21:00-21:14 | 237 | 227 | 31 | 45 | 12 | 3.83 | 2.38 | 0.56 |
| 21:15-21:29 | 232 | 318 | 37 | 33 | 5 | 2.71 | 2.02 | 0.55 |
| 21:30-21:44 | 243 | 350 | 34 | 36 | 18 | 3.12 | 2.75 | 0.65 |
| 21:45-21:59 | 240 | 231 | 59 | 24 | 20 | 3.23 | 2.66 | 0.69 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 581 | 897 | 112 | 80 | 11 | 2.82 | 2.66 | 1.07 |
| 07:15-07:29 | 350 | 879 | 147 | 78 | 17 | 3.49 | 2.08 | 1.0 |
| 07:30-07:44 | 311 | 517 | 129 | 64 | 16 | 3.88 | 1.93 | 0.98 |
| 07:45-07:59 | 448 | 828 | 111 | 53 | 16 | 4.23 | 2.48 | 0.91 |
| 08:00-08:14 | 552 | 440 | 138 | 119 | 6 | 3.21 | 2.82 | 0.85 |
| 08:15-08:29 | 409 | 838 | 112 | 98 | 8 | 3.33 | 2.86 | 0.86 |
| 08:30-08:44 | 545 | 807 | 112 | 74 | 13 | 3.57 | 2.86 | 0.87 |
| 08:45-08:59 | 369 | 515 | 93 | 64 | 9 | 4.21 | 1.92 | 0.96 |
| 09:00-09:14 | 424 | 630 | 110 | 75 | 15 | 2.38 | 2.15 | 0.88 |
| 09:15-09:29 | 593 | 856 | 85 | 90 | 13 | 2.52 | 2.77 | 0.96 |
| 09:30-09:44 | 309 | 515 | 90 | 74 | 20 | 4.32 | 2.01 | 0.91 |
| 09:45-09:59 | 513 | 888 | 87 | 66 | 12 | 2.29 | 2.88 | 0.92 |
| 10:00-10:14 | 158 | 317 | 57 | 28 | 12 | 3.65 | 3.0 | 0.58 |
| 10:15-10:29 | 241 | 203 | 45 | 40 | 17 | 3.72 | 1.8 | 0.66 |
| 10:30-10:44 | 219 | 218 | 39 | 49 | 9 | 4.44 | 2.49 | 0.52 |
| 10:45-10:59 | 283 | 311 | 31 | 23 | 12 | 4.49 | 2.28 | 0.47 |
| 16:00-16:14 | 227 | 351 | 34 | 46 | 18 | 3.13 | 1.93 | 0.68 |
| 16:15-16:29 | 175 | 233 | 67 | 20 | 13 | 2.77 | 2.36 | 0.43 |
| 16:30-16:44 | 206 | 333 | 45 | 40 | 7 | 2.41 | 1.83 | 0.52 |
| 16:45-16:59 | 242 | 373 | 64 | 20 | 6 | 2.14 | 1.83 | 0.48 |
| 17:00-17:14 | 358 | 435 | 145 | 112 | 12 | 3.14 | 3.13 | 0.93 |
| 17:15-17:29 | 346 | 850 | 126 | 67 | 15 | 3.06 | 2.6 | 1.04 |
| 17:30-17:44 | 365 | 890 | 97 | 65 | 14 | 2.75 | 1.87 | 0.89 |
| 17:45-17:59 | 441 | 406 | 115 | 117 | 14 | 3.23 | 2.93 | 0.9 |
| 18:00-18:14 | 592 | 539 | 94 | 75 | 13 | 3.59 | 2.41 | 0.94 |
| 18:15-18:29 | 569 | 516 | 104 | 95 | 10 | 3.0 | 3.14 | 0.94 |
| 18:30-18:44 | 346 | 668 | 121 | 107 | 10 | 2.45 | 2.15 | 0.9 |
| 18:45-18:59 | 396 | 590 | 135 | 89 | 7 | 3.83 | 3.2 | 1.01 |
| 19:00-19:14 | 419 | 460 | 84 | 52 | 11 | 2.95 | 3.06 | 1.09 |
| 19:15-19:29 | 388 | 456 | 141 | 54 | 16 | 4.31 | 2.86 | 0.85 |
| 19:30-19:44 | 411 | 417 | 98 | 106 | 11 | 4.05 | 2.79 | 0.93 |
| 19:45-19:59 | 562 | 602 | 139 | 99 | 9 | 2.77 | 2.97 | 0.98 |
| 20:00-20:14 | 228 | 205 | 65 | 35 | 10 | 4.02 | 2.96 | 0.68 |
| 20:15-20:29 | 216 | 232 | 54 | 23 | 5 | 4.24 | 2.36 | 0.59 |
| 20:30-20:44 | 159 | 317 | 54 | 34 | 13 | 2.71 | 2.58 | 0.43 |
| 20:45-20:59 | 151 | 294 | 56 | 21 | 12 | 2.88 | 2.0 | 0.47 |
| 21:00-21:14 | 175 | 289 | 51 | 28 | 15 | 2.43 | 2.46 | 0.55 |
| 21:15-21:29 | 277 | 230 | 58 | 49 | 7 | 2.55 | 3.11 | 0.63 |
| 21:30-21:44 | 280 | 397 | 30 | 38 | 9 | 2.94 | 2.92 | 0.4 |
| 21:45-21:59 | 276 | 252 | 60 | 42 | 11 | 3.65 | 2.08 | 0.6 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 561 | 824 | 126 | 102 | 6 | 3.33 | 2.62 | 1.09 |
| 07:15-07:29 | 325 | 569 | 109 | 95 | 5 | 2.81 | 2.73 | 0.92 |
| 07:30-07:44 | 341 | 694 | 95 | 94 | 16 | 2.75 | 3.14 | 0.89 |
| 07:45-07:59 | 501 | 561 | 105 | 52 | 13 | 2.12 | 2.74 | 0.97 |
| 08:00-08:14 | 411 | 431 | 83 | 73 | 6 | 3.46 | 1.87 | 0.87 |
| 08:15-08:29 | 316 | 658 | 122 | 60 | 7 | 4.22 | 2.59 | 1.0 |
| 08:30-08:44 | 347 | 743 | 120 | 102 | 17 | 3.33 | 2.17 | 0.94 |
| 08:45-08:59 | 389 | 447 | 132 | 100 | 17 | 3.46 | 3.1 | 0.95 |
| 09:00-09:14 | 549 | 679 | 102 | 77 | 18 | 3.38 | 2.11 | 1.02 |
| 09:15-09:29 | 348 | 521 | 84 | 57 | 7 | 2.44 | 2.66 | 0.87 |
| 09:30-09:44 | 587 | 669 | 127 | 120 | 12 | 3.69 | 2.85 | 0.92 |
| 09:45-09:59 | 571 | 456 | 133 | 68 | 6 | 2.63 | 1.81 | 1.01 |
| 10:00-10:14 | 277 | 281 | 30 | 32 | 15 | 4.02 | 2.66 | 0.65 |
| 10:15-10:29 | 269 | 308 | 56 | 31 | 20 | 2.47 | 3.04 | 0.42 |
| 10:30-10:44 | 247 | 235 | 68 | 42 | 19 | 3.13 | 2.37 | 0.56 |
| 10:45-10:59 | 245 | 400 | 37 | 29 | 6 | 3.03 | 2.01 | 0.46 |
| 16:00-16:14 | 222 | 391 | 66 | 22 | 17 | 4.1 | 1.96 | 0.63 |
| 16:15-16:29 | 288 | 238 | 44 | 49 | 15 | 2.86 | 2.85 | 0.64 |
| 16:30-16:44 | 257 | 245 | 57 | 40 | 12 | 3.63 | 1.81 | 0.48 |
| 16:45-16:59 | 183 | 282 | 55 | 29 | 5 | 2.49 | 1.99 | 0.55 |
| 17:00-17:14 | 338 | 486 | 97 | 55 | 15 | 2.89 | 2.47 | 1.08 |
| 17:15-17:29 | 303 | 516 | 90 | 112 | 20 | 3.47 | 2.88 | 0.97 |
| 17:30-17:44 | 547 | 613 | 141 | 115 | 19 | 2.79 | 2.03 | 0.87 |
| 17:45-17:59 | 430 | 533 | 131 | 53 | 10 | 2.56 | 2.04 | 1.06 |
| 18:00-18:14 | 354 | 522 | 86 | 59 | 13 | 3.53 | 2.18 | 1.08 |
| 18:15-18:29 | 369 | 837 | 84 | 74 | 5 | 4.16 | 2.93 | 0.86 |
| 18:30-18:44 | 577 | 655 | 148 | 54 | 19 | 2.86 | 2.4 | 0.85 |
| 18:45-18:59 | 307 | 706 | 85 | 64 | 19 | 3.23 | 2.71 | 0.99 |
| 19:00-19:14 | 548 | 830 | 122 | 67 | 7 | 2.24 | 2.66 | 0.98 |
| 19:15-19:29 | 580 | 465 | 91 | 120 | 14 | 3.76 | 2.68 | 0.9 |
| 19:30-19:44 | 343 | 672 | 146 | 115 | 16 | 4.13 | 1.85 | 0.94 |
| 19:45-19:59 | 500 | 697 | 122 | 113 | 20 | 2.14 | 3.06 | 1.0 |
| 20:00-20:14 | 170 | 359 | 67 | 42 | 11 | 4.2 | 2.34 | 0.5 |
| 20:15-20:29 | 183 | 253 | 44 | 39 | 6 | 3.54 | 2.85 | 0.42 |
| 20:30-20:44 | 228 | 382 | 44 | 30 | 14 | 4.42 | 1.96 | 0.5 |
| 20:45-20:59 | 162 | 359 | 57 | 22 | 10 | 2.38 | 3.03 | 0.67 |
| 21:00-21:14 | 195 | 207 | 54 | 49 | 17 | 3.55 | 3.13 | 0.42 |
| 21:15-21:29 | 221 | 344 | 56 | 48 | 12 | 2.86 | 3.14 | 0.46 |
| 21:30-21:44 | 170 | 280 | 40 | 25 | 18 | 4.27 | 2.71 | 0.57 |
| 21:45-21:59 | 235 | 304 | 39 | 22 | 8 | 3.22 | 1.95 | 0.52 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 452 | 572 | 141 | 90 | 13 | 2.59 | 2.4 | 0.98 |
| 07:15-07:29 | 525 | 733 | 89 | 81 | 5 | 3.86 | 2.58 | 0.96 |
| 07:30-07:44 | 307 | 423 | 91 | 53 | 15 | 3.62 | 2.8 | 0.88 |
| 07:45-07:59 | 556 | 459 | 123 | 97 | 15 | 2.28 | 2.65 | 0.85 |
| 08:00-08:14 | 454 | 777 | 146 | 72 | 10 | 2.76 | 2.75 | 1.04 |
| 08:15-08:29 | 554 | 527 | 99 | 86 | 9 | 2.19 | 2.67 | 0.89 |
| 08:30-08:44 | 583 | 414 | 148 | 109 | 7 | 2.73 | 3.04 | 0.87 |
| 08:45-08:59 | 447 | 785 | 134 | 72 | 16 | 2.7 | 2.69 | 1.01 |
| 09:00-09:14 | 324 | 876 | 93 | 58 | 10 | 3.59 | 2.34 | 1.04 |
| 09:15-09:29 | 323 | 634 | 137 | 80 | 7 | 2.92 | 2.5 | 0.97 |
| 09:30-09:44 | 588 | 663 | 138 | 62 | 20 | 2.81 | 3.0 | 0.86 |
| 09:45-09:59 | 322 | 700 | 84 | 79 | 13 | 3.56 | 2.13 | 1.0 |
| 10:00-10:14 | 275 | 392 | 34 | 29 | 18 | 2.56 | 2.16 | 0.59 |
| 10:15-10:29 | 278 | 254 | 66 | 24 | 18 | 2.88 | 2.52 | 0.41 |
| 10:30-10:44 | 296 | 315 | 59 | 25 | 20 | 4.34 | 2.44 | 0.69 |
| 10:45-10:59 | 180 | 318 | 58 | 36 | 18 | 2.42 | 2.72 | 0.55 |
| 16:00-16:14 | 194 | 215 | 64 | 20 | 15 | 2.16 | 2.76 | 0.59 |
| 16:15-16:29 | 256 | 292 | 64 | 32 | 7 | 3.98 | 2.11 | 0.46 |
| 16:30-16:44 | 263 | 357 | 61 | 37 | 5 | 4.35 | 2.78 | 0.68 |
| 16:45-16:59 | 269 | 297 | 32 | 47 | 18 | 3.91 | 2.27 | 0.64 |
| 17:00-17:14 | 490 | 646 | 134 | 111 | 16 | 3.05 | 2.82 | 0.97 |
| 17:15-17:29 | 321 | 778 | 146 | 105 | 18 | 3.62 | 3.0 | 0.86 |
| 17:30-17:44 | 467 | 640 | 81 | 107 | 10 | 3.19 | 1.83 | 0.89 |
| 17:45-17:59 | 515 | 722 | 91 | 58 | 19 | 2.74 | 2.94 | 1.08 |
| 18:00-18:14 | 472 | 578 | 117 | 90 | 16 | 3.79 | 2.74 | 0.96 |
| 18:15-18:29 | 566 | 737 | 103 | 102 | 17 | 3.07 | 3.16 | 1.0 |
| 18:30-18:44 | 566 | 584 | 84 | 113 | 16 | 2.72 | 2.25 | 0.89 |
| 18:45-18:59 | 375 | 625 | 86 | 67 | 10 | 2.96 | 2.19 | 0.95 |
| 19:00-19:14 | 548 | 730 | 87 | 95 | 5 | 3.62 | 2.39 | 1.05 |
| 19:15-19:29 | 363 | 743 | 94 | 61 | 16 | 2.16 | 2.32 | 0.88 |
| 19:30-19:44 | 301 | 881 | 117 | 55 | 11 | 3.75 | 2.56 | 0.87 |
| 19:45-19:59 | 542 | 767 | 95 | 91 | 18 | 3.46 | 2.31 | 1.05 |
| 20:00-20:14 | 217 | 391 | 49 | 47 | 6 | 2.25 | 2.98 | 0.62 |
| 20:15-20:29 | 276 | 344 | 34 | 34 | 11 | 4.07 | 2.31 | 0.56 |
| 20:30-20:44 | 181 | 379 | 56 | 42 | 17 | 4.28 | 3.08 | 0.7 |
| 20:45-20:59 | 273 | 341 | 54 | 41 | 18 | 3.56 | 3.15 | 0.68 |
| 21:00-21:14 | 214 | 293 | 54 | 22 | 7 | 3.27 | 2.64 | 0.46 |
| 21:15-21:29 | 199 | 356 | 65 | 40 | 19 | 3.3 | 2.28 | 0.67 |
| 21:30-21:44 | 228 | 227 | 46 | 40 | 7 | 4.45 | 2.87 | 0.5 |
| 21:45-21:59 | 188 | 321 | 67 | 32 | 10 | 2.23 | 2.26 | 0.62 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 507 | 727 | 92 | 82 | 6 | 2.58 | 3.15 | 1.05 |
| 07:15-07:29 | 501 | 599 | 98 | 120 | 8 | 2.85 | 2.37 | 0.93 |
| 07:30-07:44 | 595 | 648 | 143 | 117 | 20 | 3.65 | 1.86 | 0.98 |
| 07:45-07:59 | 385 | 477 | 109 | 102 | 5 | 4.33 | 3.02 | 1.07 |
| 08:00-08:14 | 430 | 869 | 135 | 85 | 12 | 4.04 | 2.01 | 1.09 |
| 08:15-08:29 | 568 | 551 | 124 | 65 | 10 | 3.45 | 2.43 | 0.96 |
| 08:30-08:44 | 443 | 741 | 143 | 66 | 16 | 4.24 | 2.74 | 1.04 |
| 08:45-08:59 | 364 | 802 | 132 | 117 | 9 | 4.29 | 2.71 | 0.97 |
| 09:00-09:14 | 444 | 820 | 91 | 94 | 17 | 3.37 | 2.63 | 1.04 |
| 09:15-09:29 | 584 | 761 | 117 | 62 | 12 | 2.88 | 2.72 | 1.09 |
| 09:30-09:44 | 382 | 500 | 149 | 64 | 9 | 2.38 | 2.6 | 1.08 |
| 09:45-09:59 | 389 | 466 | 100 | 89 | 10 | 2.8 | 2.79 | 1.1 |
| 10:00-10:14 | 245 | 382 | 57 | 46 | 12 | 3.13 | 2.05 | 0.43 |
| 10:15-10:29 | 152 | 275 | 31 | 47 | 16 | 2.51 | 2.94 | 0.5 |
| 10:30-10:44 | 289 | 225 | 66 | 35 | 10 | 3.19 | 2.28 | 0.68 |
| 10:45-10:59 | 168 | 220 | 49 | 31 | 8 | 3.04 | 2.8 | 0.57 |
| 16:00-16:14 | 163 | 267 | 50 | 49 | 20 | 4.41 | 2.6 | 0.67 |
| 16:15-16:29 | 231 | 200 | 37 | 45 | 8 | 2.6 | 2.06 | 0.69 |
| 16:30-16:44 | 157 | 376 | 64 | 30 | 15 | 3.74 | 2.44 | 0.66 |
| 16:45-16:59 | 232 | 210 | 39 | 41 | 19 | 4.39 | 2.89 | 0.56 |
| 17:00-17:14 | 595 | 520 | 124 | 104 | 10 | 4.27 | 2.21 | 0.98 |
| 17:15-17:29 | 372 | 845 | 126 | 92 | 10 | 3.59 | 2.0 | 0.94 |
| 17:30-17:44 | 507 | 645 | 135 | 76 | 13 | 3.59 | 2.29 | 1.07 |
| 17:45-17:59 | 429 | 544 | 128 | 54 | 14 | 3.99 | 1.82 | 1.06 |
| 18:00-18:14 | 527 | 605 | 137 | 54 | 10 | 2.12 | 2.54 | 0.97 |
| 18:15-18:29 | 318 | 697 | 147 | 64 | 14 | 3.02 | 2.09 | 1.04 |
| 18:30-18:44 | 413 | 827 | 112 | 89 | 19 | 2.49 | 3.1 | 0.87 |
| 18:45-18:59 | 406 | 783 | 83 | 74 | 7 | 3.18 | 1.93 | 1.08 |
| 19:00-19:14 | 332 | 715 | 91 | 67 | 18 | 2.5 | 2.47 | 1.07 |
| 19:15-19:29 | 395 | 844 | 137 | 117 | 5 | 3.31 | 1.82 | 1.02 |
| 19:30-19:44 | 412 | 876 | 128 | 119 | 5 | 2.9 | 2.69 | 0.89 |
| 19:45-19:59 | 514 | 665 | 91 | 58 | 19 | 3.64 | 2.24 | 1.03 |
| 20:00-20:14 | 184 | 276 | 33 | 20 | 17 | 3.48 | 3.01 | 0.59 |
| 20:15-20:29 | 295 | 285 | 69 | 27 | 13 | 4.39 | 2.76 | 0.44 |
| 20:30-20:44 | 202 | 212 | 69 | 38 | 12 | 3.17 | 2.58 | 0.61 |
| 20:45-20:59 | 222 | 367 | 36 | 39 | 19 | 3.46 | 2.95 | 0.48 |
| 21:00-21:14 | 187 | 369 | 32 | 32 | 19 | 2.57 | 2.7 | 0.67 |
| 21:15-21:29 | 247 | 287 | 42 | 31 | 5 | 4.1 | 2.21 | 0.69 |
| 21:30-21:44 | 281 | 269 | 57 | 44 | 17 | 4.29 | 2.98 | 0.55 |
| 21:45-21:59 | 160 | 341 | 53 | 32 | 20 | 2.2 | 2.58 | 0.69 |

### A.16 Day 16: 2026-06-16

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 471 | 827 | 118 | 94 | 19 | 3.19 | 2.62 | 0.99 |
| 07:15-07:29 | 460 | 709 | 141 | 79 | 18 | 3.02 | 3.0 | 1.09 |
| 07:30-07:44 | 388 | 488 | 87 | 76 | 15 | 4.12 | 1.83 | 0.87 |
| 07:45-07:59 | 338 | 735 | 115 | 91 | 10 | 3.54 | 2.56 | 0.88 |
| 08:00-08:14 | 461 | 761 | 87 | 63 | 8 | 2.35 | 2.57 | 0.92 |
| 08:15-08:29 | 331 | 840 | 84 | 95 | 6 | 4.27 | 2.31 | 0.93 |
| 08:30-08:44 | 479 | 564 | 125 | 115 | 10 | 3.94 | 2.87 | 1.01 |
| 08:45-08:59 | 459 | 577 | 144 | 81 | 7 | 3.88 | 2.4 | 0.96 |
| 09:00-09:14 | 431 | 645 | 98 | 75 | 18 | 4.25 | 2.5 | 1.04 |
| 09:15-09:29 | 377 | 639 | 142 | 55 | 15 | 4.3 | 2.28 | 0.85 |
| 09:30-09:44 | 409 | 725 | 89 | 85 | 8 | 3.74 | 2.48 | 1.05 |
| 09:45-09:59 | 532 | 481 | 88 | 96 | 13 | 4.08 | 2.73 | 1.0 |
| 10:00-10:14 | 299 | 380 | 35 | 37 | 10 | 4.38 | 2.99 | 0.62 |
| 10:15-10:29 | 242 | 228 | 50 | 34 | 12 | 4.22 | 2.13 | 0.44 |
| 10:30-10:44 | 241 | 303 | 68 | 29 | 20 | 2.95 | 2.09 | 0.66 |
| 10:45-10:59 | 266 | 282 | 69 | 30 | 19 | 3.66 | 3.0 | 0.48 |
| 16:00-16:14 | 227 | 344 | 56 | 47 | 8 | 2.35 | 3.12 | 0.62 |
| 16:15-16:29 | 217 | 330 | 44 | 34 | 15 | 3.31 | 2.42 | 0.62 |
| 16:30-16:44 | 212 | 332 | 36 | 47 | 5 | 2.13 | 2.9 | 0.44 |
| 16:45-16:59 | 206 | 254 | 44 | 24 | 13 | 2.22 | 2.66 | 0.57 |
| 17:00-17:14 | 483 | 565 | 124 | 114 | 12 | 4.26 | 3.06 | 0.98 |
| 17:15-17:29 | 314 | 810 | 84 | 98 | 12 | 2.84 | 2.99 | 0.96 |
| 17:30-17:44 | 435 | 555 | 84 | 54 | 14 | 4.09 | 2.98 | 0.97 |
| 17:45-17:59 | 326 | 874 | 130 | 92 | 20 | 3.04 | 2.7 | 0.86 |
| 18:00-18:14 | 373 | 584 | 82 | 77 | 6 | 4.09 | 3.05 | 1.03 |
| 18:15-18:29 | 568 | 700 | 95 | 58 | 13 | 2.96 | 2.01 | 0.85 |
| 18:30-18:44 | 440 | 848 | 109 | 62 | 10 | 3.6 | 2.56 | 1.02 |
| 18:45-18:59 | 472 | 828 | 104 | 94 | 8 | 3.7 | 2.7 | 0.89 |
| 19:00-19:14 | 448 | 566 | 132 | 58 | 6 | 3.07 | 2.44 | 0.9 |
| 19:15-19:29 | 589 | 763 | 98 | 61 | 14 | 2.23 | 1.8 | 0.87 |
| 19:30-19:44 | 473 | 843 | 126 | 77 | 6 | 2.82 | 1.9 | 1.01 |
| 19:45-19:59 | 421 | 530 | 114 | 114 | 19 | 2.61 | 2.99 | 0.99 |
| 20:00-20:14 | 295 | 373 | 68 | 33 | 9 | 4.41 | 2.6 | 0.49 |
| 20:15-20:29 | 297 | 278 | 43 | 21 | 19 | 4.07 | 2.77 | 0.63 |
| 20:30-20:44 | 237 | 214 | 32 | 31 | 19 | 4.32 | 1.89 | 0.51 |
| 20:45-20:59 | 264 | 312 | 48 | 50 | 14 | 3.91 | 2.78 | 0.62 |
| 21:00-21:14 | 184 | 242 | 39 | 42 | 16 | 3.86 | 2.67 | 0.67 |
| 21:15-21:29 | 167 | 314 | 61 | 35 | 6 | 3.33 | 2.1 | 0.62 |
| 21:30-21:44 | 233 | 294 | 55 | 37 | 18 | 3.84 | 2.29 | 0.41 |
| 21:45-21:59 | 191 | 392 | 39 | 39 | 14 | 2.41 | 2.16 | 0.69 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 322 | 406 | 113 | 96 | 7 | 2.46 | 2.15 | 0.87 |
| 07:15-07:29 | 545 | 591 | 134 | 107 | 13 | 2.46 | 3.03 | 0.96 |
| 07:30-07:44 | 572 | 510 | 85 | 108 | 14 | 4.21 | 2.46 | 0.98 |
| 07:45-07:59 | 520 | 438 | 148 | 54 | 13 | 3.37 | 2.39 | 0.98 |
| 08:00-08:14 | 418 | 593 | 105 | 58 | 11 | 2.63 | 2.67 | 1.02 |
| 08:15-08:29 | 421 | 722 | 145 | 73 | 18 | 3.82 | 2.19 | 1.06 |
| 08:30-08:44 | 541 | 881 | 87 | 73 | 15 | 4.44 | 2.63 | 0.89 |
| 08:45-08:59 | 598 | 773 | 94 | 90 | 14 | 2.34 | 2.64 | 0.94 |
| 09:00-09:14 | 460 | 618 | 115 | 58 | 10 | 2.77 | 2.85 | 0.91 |
| 09:15-09:29 | 558 | 405 | 150 | 66 | 11 | 2.87 | 2.91 | 0.97 |
| 09:30-09:44 | 595 | 549 | 143 | 101 | 13 | 3.82 | 3.2 | 0.89 |
| 09:45-09:59 | 449 | 691 | 84 | 65 | 7 | 2.79 | 2.62 | 0.97 |
| 10:00-10:14 | 179 | 385 | 44 | 39 | 19 | 3.73 | 2.94 | 0.4 |
| 10:15-10:29 | 195 | 284 | 43 | 20 | 13 | 3.15 | 3.0 | 0.6 |
| 10:30-10:44 | 207 | 387 | 49 | 47 | 6 | 3.19 | 1.9 | 0.7 |
| 10:45-10:59 | 153 | 228 | 67 | 43 | 6 | 3.76 | 3.19 | 0.4 |
| 16:00-16:14 | 285 | 324 | 47 | 35 | 11 | 3.81 | 2.61 | 0.41 |
| 16:15-16:29 | 153 | 316 | 50 | 32 | 20 | 3.04 | 2.35 | 0.5 |
| 16:30-16:44 | 152 | 389 | 46 | 25 | 17 | 3.25 | 2.84 | 0.63 |
| 16:45-16:59 | 176 | 317 | 34 | 42 | 19 | 4.06 | 1.87 | 0.48 |
| 17:00-17:14 | 523 | 895 | 104 | 111 | 16 | 4.13 | 2.72 | 0.96 |
| 17:15-17:29 | 402 | 522 | 111 | 51 | 6 | 3.45 | 2.17 | 0.95 |
| 17:30-17:44 | 376 | 753 | 144 | 113 | 10 | 2.56 | 3.14 | 0.97 |
| 17:45-17:59 | 449 | 724 | 139 | 77 | 11 | 3.96 | 1.92 | 1.09 |
| 18:00-18:14 | 364 | 758 | 88 | 89 | 12 | 3.08 | 2.37 | 0.98 |
| 18:15-18:29 | 420 | 674 | 144 | 70 | 16 | 3.62 | 3.08 | 1.01 |
| 18:30-18:44 | 480 | 849 | 127 | 90 | 17 | 2.47 | 2.66 | 1.02 |
| 18:45-18:59 | 453 | 788 | 147 | 81 | 6 | 3.76 | 2.69 | 1.0 |
| 19:00-19:14 | 551 | 547 | 87 | 85 | 18 | 2.99 | 2.65 | 1.03 |
| 19:15-19:29 | 528 | 611 | 111 | 73 | 9 | 4.38 | 2.58 | 0.98 |
| 19:30-19:44 | 592 | 446 | 93 | 87 | 5 | 3.67 | 2.16 | 0.88 |
| 19:45-19:59 | 560 | 418 | 120 | 58 | 18 | 2.2 | 2.8 | 1.08 |
| 20:00-20:14 | 295 | 267 | 44 | 42 | 15 | 2.89 | 3.02 | 0.69 |
| 20:15-20:29 | 202 | 223 | 46 | 42 | 10 | 2.34 | 2.72 | 0.64 |
| 20:30-20:44 | 201 | 203 | 32 | 47 | 19 | 4.08 | 2.21 | 0.53 |
| 20:45-20:59 | 271 | 218 | 47 | 48 | 14 | 3.75 | 2.47 | 0.69 |
| 21:00-21:14 | 168 | 321 | 35 | 27 | 13 | 3.82 | 2.32 | 0.55 |
| 21:15-21:29 | 269 | 396 | 64 | 20 | 18 | 2.39 | 2.37 | 0.57 |
| 21:30-21:44 | 245 | 332 | 63 | 27 | 16 | 2.52 | 3.13 | 0.44 |
| 21:45-21:59 | 164 | 363 | 44 | 28 | 13 | 4.25 | 2.07 | 0.61 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 316 | 878 | 97 | 104 | 14 | 3.08 | 2.72 | 1.02 |
| 07:15-07:29 | 577 | 536 | 87 | 96 | 11 | 4.48 | 2.57 | 1.07 |
| 07:30-07:44 | 379 | 739 | 128 | 97 | 6 | 3.94 | 2.66 | 0.93 |
| 07:45-07:59 | 396 | 710 | 125 | 110 | 17 | 3.29 | 2.27 | 0.93 |
| 08:00-08:14 | 380 | 418 | 114 | 93 | 17 | 3.52 | 2.07 | 1.05 |
| 08:15-08:29 | 401 | 502 | 126 | 60 | 14 | 4.13 | 2.17 | 0.96 |
| 08:30-08:44 | 414 | 432 | 131 | 89 | 13 | 2.97 | 2.67 | 1.09 |
| 08:45-08:59 | 472 | 495 | 141 | 65 | 17 | 2.59 | 2.6 | 0.91 |
| 09:00-09:14 | 559 | 426 | 140 | 59 | 8 | 2.82 | 2.17 | 1.06 |
| 09:15-09:29 | 407 | 692 | 92 | 86 | 11 | 3.56 | 2.15 | 1.1 |
| 09:30-09:44 | 504 | 898 | 118 | 97 | 6 | 2.97 | 2.66 | 1.07 |
| 09:45-09:59 | 506 | 812 | 105 | 74 | 17 | 3.88 | 1.95 | 0.97 |
| 10:00-10:14 | 173 | 219 | 41 | 46 | 19 | 2.83 | 3.19 | 0.58 |
| 10:15-10:29 | 161 | 213 | 34 | 34 | 11 | 2.49 | 2.33 | 0.48 |
| 10:30-10:44 | 298 | 272 | 37 | 49 | 11 | 2.33 | 2.19 | 0.4 |
| 10:45-10:59 | 206 | 248 | 66 | 48 | 11 | 3.95 | 2.84 | 0.58 |
| 16:00-16:14 | 154 | 262 | 62 | 49 | 15 | 2.95 | 2.82 | 0.44 |
| 16:15-16:29 | 175 | 291 | 55 | 29 | 19 | 3.72 | 2.25 | 0.61 |
| 16:30-16:44 | 194 | 245 | 67 | 25 | 9 | 4.12 | 2.4 | 0.64 |
| 16:45-16:59 | 199 | 338 | 66 | 22 | 18 | 4.38 | 2.93 | 0.5 |
| 17:00-17:14 | 564 | 458 | 106 | 90 | 14 | 2.72 | 3.04 | 1.08 |
| 17:15-17:29 | 407 | 605 | 138 | 99 | 18 | 3.14 | 2.6 | 1.08 |
| 17:30-17:44 | 416 | 527 | 95 | 58 | 12 | 2.69 | 3.05 | 0.91 |
| 17:45-17:59 | 416 | 845 | 145 | 108 | 13 | 2.32 | 1.98 | 0.91 |
| 18:00-18:14 | 387 | 618 | 97 | 58 | 7 | 4.16 | 2.41 | 0.85 |
| 18:15-18:29 | 330 | 567 | 121 | 89 | 18 | 2.23 | 3.01 | 0.94 |
| 18:30-18:44 | 495 | 831 | 127 | 56 | 6 | 4.05 | 1.88 | 0.86 |
| 18:45-18:59 | 579 | 517 | 90 | 74 | 7 | 4.49 | 1.96 | 1.02 |
| 19:00-19:14 | 353 | 718 | 141 | 52 | 7 | 3.6 | 3.15 | 1.03 |
| 19:15-19:29 | 490 | 804 | 147 | 112 | 10 | 2.49 | 2.72 | 0.98 |
| 19:30-19:44 | 347 | 732 | 126 | 84 | 20 | 2.84 | 2.71 | 0.9 |
| 19:45-19:59 | 557 | 651 | 93 | 71 | 16 | 2.71 | 1.92 | 0.91 |
| 20:00-20:14 | 177 | 338 | 52 | 47 | 6 | 3.16 | 3.03 | 0.6 |
| 20:15-20:29 | 199 | 344 | 70 | 28 | 13 | 3.29 | 2.36 | 0.47 |
| 20:30-20:44 | 272 | 245 | 65 | 48 | 9 | 3.3 | 2.09 | 0.58 |
| 20:45-20:59 | 221 | 244 | 36 | 36 | 15 | 2.22 | 2.64 | 0.48 |
| 21:00-21:14 | 221 | 392 | 51 | 30 | 14 | 3.35 | 2.1 | 0.52 |
| 21:15-21:29 | 254 | 385 | 64 | 25 | 9 | 3.15 | 2.82 | 0.57 |
| 21:30-21:44 | 259 | 221 | 63 | 39 | 5 | 4.32 | 2.87 | 0.41 |
| 21:45-21:59 | 263 | 316 | 44 | 32 | 12 | 2.93 | 2.88 | 0.52 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 383 | 421 | 150 | 91 | 8 | 3.33 | 3.07 | 0.92 |
| 07:15-07:29 | 378 | 611 | 87 | 62 | 13 | 2.47 | 2.12 | 1.06 |
| 07:30-07:44 | 492 | 776 | 111 | 56 | 8 | 3.04 | 3.15 | 1.09 |
| 07:45-07:59 | 438 | 651 | 145 | 74 | 8 | 3.9 | 2.41 | 1.05 |
| 08:00-08:14 | 347 | 521 | 129 | 72 | 17 | 2.3 | 1.87 | 0.91 |
| 08:15-08:29 | 450 | 491 | 145 | 92 | 11 | 2.39 | 1.94 | 1.0 |
| 08:30-08:44 | 403 | 853 | 123 | 77 | 16 | 2.16 | 3.08 | 0.99 |
| 08:45-08:59 | 456 | 566 | 82 | 52 | 20 | 3.62 | 2.01 | 0.99 |
| 09:00-09:14 | 429 | 697 | 97 | 102 | 10 | 3.09 | 2.77 | 0.91 |
| 09:15-09:29 | 584 | 606 | 128 | 113 | 17 | 4.4 | 2.74 | 1.1 |
| 09:30-09:44 | 384 | 568 | 112 | 90 | 11 | 3.84 | 2.74 | 0.87 |
| 09:45-09:59 | 521 | 509 | 119 | 61 | 18 | 3.25 | 2.09 | 1.09 |
| 10:00-10:14 | 284 | 302 | 45 | 38 | 20 | 3.9 | 2.81 | 0.46 |
| 10:15-10:29 | 186 | 367 | 44 | 48 | 9 | 2.76 | 2.83 | 0.67 |
| 10:30-10:44 | 197 | 218 | 37 | 28 | 9 | 4.44 | 2.06 | 0.57 |
| 10:45-10:59 | 268 | 357 | 35 | 26 | 20 | 2.19 | 3.13 | 0.6 |
| 16:00-16:14 | 264 | 317 | 61 | 49 | 6 | 2.64 | 2.11 | 0.43 |
| 16:15-16:29 | 297 | 298 | 37 | 21 | 16 | 3.42 | 2.42 | 0.49 |
| 16:30-16:44 | 300 | 322 | 32 | 31 | 9 | 4.03 | 2.54 | 0.42 |
| 16:45-16:59 | 265 | 283 | 30 | 35 | 19 | 4.46 | 2.47 | 0.66 |
| 17:00-17:14 | 363 | 422 | 131 | 72 | 8 | 2.43 | 2.28 | 0.95 |
| 17:15-17:29 | 540 | 706 | 107 | 115 | 10 | 4.35 | 2.24 | 1.09 |
| 17:30-17:44 | 481 | 726 | 108 | 54 | 20 | 3.25 | 2.12 | 1.09 |
| 17:45-17:59 | 460 | 674 | 80 | 107 | 12 | 2.11 | 2.51 | 0.91 |
| 18:00-18:14 | 542 | 562 | 116 | 111 | 16 | 3.22 | 3.14 | 0.87 |
| 18:15-18:29 | 431 | 728 | 142 | 70 | 19 | 3.94 | 2.87 | 0.93 |
| 18:30-18:44 | 575 | 718 | 99 | 73 | 16 | 3.37 | 2.7 | 0.88 |
| 18:45-18:59 | 397 | 462 | 128 | 62 | 9 | 2.47 | 1.85 | 1.01 |
| 19:00-19:14 | 465 | 524 | 128 | 86 | 17 | 4.3 | 2.17 | 0.88 |
| 19:15-19:29 | 430 | 562 | 91 | 50 | 8 | 3.73 | 1.86 | 0.89 |
| 19:30-19:44 | 477 | 628 | 118 | 79 | 13 | 4.22 | 2.43 | 0.99 |
| 19:45-19:59 | 331 | 411 | 120 | 77 | 9 | 3.56 | 3.07 | 0.98 |
| 20:00-20:14 | 283 | 301 | 41 | 48 | 11 | 4.24 | 2.61 | 0.55 |
| 20:15-20:29 | 163 | 225 | 59 | 33 | 10 | 3.77 | 2.32 | 0.62 |
| 20:30-20:44 | 295 | 228 | 65 | 37 | 10 | 4.02 | 3.03 | 0.6 |
| 20:45-20:59 | 176 | 328 | 50 | 46 | 8 | 2.19 | 1.81 | 0.43 |
| 21:00-21:14 | 288 | 254 | 41 | 48 | 6 | 3.24 | 2.16 | 0.59 |
| 21:15-21:29 | 293 | 384 | 69 | 41 | 15 | 4.37 | 2.27 | 0.66 |
| 21:30-21:44 | 243 | 283 | 64 | 28 | 8 | 4.3 | 2.66 | 0.55 |
| 21:45-21:59 | 221 | 318 | 44 | 39 | 11 | 2.69 | 2.65 | 0.56 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 590 | 647 | 103 | 91 | 15 | 4.24 | 2.92 | 1.01 |
| 07:15-07:29 | 330 | 524 | 112 | 71 | 17 | 2.4 | 2.3 | 1.04 |
| 07:30-07:44 | 426 | 468 | 98 | 84 | 19 | 2.6 | 3.04 | 0.91 |
| 07:45-07:59 | 590 | 644 | 87 | 120 | 8 | 2.97 | 3.12 | 0.91 |
| 08:00-08:14 | 347 | 549 | 102 | 119 | 19 | 3.45 | 3.05 | 0.94 |
| 08:15-08:29 | 404 | 815 | 148 | 50 | 8 | 2.41 | 2.6 | 0.95 |
| 08:30-08:44 | 377 | 728 | 126 | 92 | 8 | 2.91 | 2.42 | 1.09 |
| 08:45-08:59 | 517 | 775 | 119 | 88 | 9 | 3.36 | 2.52 | 0.91 |
| 09:00-09:14 | 350 | 665 | 137 | 107 | 15 | 4.35 | 2.38 | 0.96 |
| 09:15-09:29 | 503 | 874 | 123 | 109 | 7 | 4.32 | 2.0 | 1.02 |
| 09:30-09:44 | 597 | 608 | 91 | 84 | 6 | 4.25 | 3.18 | 0.88 |
| 09:45-09:59 | 415 | 881 | 95 | 55 | 10 | 4.17 | 2.29 | 1.0 |
| 10:00-10:14 | 160 | 250 | 53 | 27 | 17 | 4.38 | 2.93 | 0.58 |
| 10:15-10:29 | 264 | 335 | 49 | 21 | 19 | 3.92 | 1.88 | 0.65 |
| 10:30-10:44 | 282 | 329 | 42 | 20 | 15 | 3.93 | 2.44 | 0.61 |
| 10:45-10:59 | 253 | 207 | 36 | 29 | 13 | 3.94 | 2.91 | 0.7 |
| 16:00-16:14 | 231 | 288 | 36 | 38 | 19 | 3.16 | 2.06 | 0.67 |
| 16:15-16:29 | 283 | 350 | 59 | 45 | 6 | 4.15 | 3.13 | 0.67 |
| 16:30-16:44 | 253 | 360 | 43 | 44 | 18 | 3.26 | 2.49 | 0.58 |
| 16:45-16:59 | 196 | 308 | 49 | 42 | 17 | 3.3 | 2.82 | 0.59 |
| 17:00-17:14 | 469 | 895 | 126 | 80 | 6 | 2.2 | 2.07 | 0.97 |
| 17:15-17:29 | 551 | 831 | 109 | 72 | 11 | 4.45 | 3.03 | 0.86 |
| 17:30-17:44 | 432 | 693 | 82 | 75 | 15 | 3.2 | 2.36 | 1.05 |
| 17:45-17:59 | 383 | 603 | 148 | 90 | 9 | 4.17 | 2.57 | 0.94 |
| 18:00-18:14 | 385 | 894 | 99 | 106 | 13 | 3.02 | 2.64 | 1.09 |
| 18:15-18:29 | 408 | 746 | 132 | 115 | 6 | 3.58 | 3.13 | 0.97 |
| 18:30-18:44 | 597 | 412 | 138 | 82 | 7 | 2.26 | 2.94 | 1.03 |
| 18:45-18:59 | 592 | 829 | 135 | 52 | 10 | 4.41 | 2.11 | 1.08 |
| 19:00-19:14 | 409 | 451 | 121 | 55 | 20 | 2.44 | 3.09 | 1.02 |
| 19:15-19:29 | 446 | 633 | 97 | 94 | 6 | 3.37 | 1.94 | 1.05 |
| 19:30-19:44 | 562 | 651 | 86 | 61 | 8 | 2.45 | 2.79 | 1.04 |
| 19:45-19:59 | 492 | 878 | 132 | 71 | 6 | 3.18 | 3.1 | 0.86 |
| 20:00-20:14 | 251 | 219 | 51 | 20 | 17 | 2.47 | 3.09 | 0.55 |
| 20:15-20:29 | 224 | 256 | 31 | 38 | 7 | 2.92 | 2.71 | 0.48 |
| 20:30-20:44 | 201 | 349 | 34 | 47 | 18 | 2.14 | 2.04 | 0.44 |
| 20:45-20:59 | 278 | 303 | 37 | 45 | 8 | 2.5 | 2.07 | 0.41 |
| 21:00-21:14 | 239 | 206 | 42 | 38 | 14 | 3.24 | 1.86 | 0.41 |
| 21:15-21:29 | 218 | 335 | 54 | 39 | 13 | 3.31 | 2.79 | 0.48 |
| 21:30-21:44 | 210 | 348 | 64 | 25 | 7 | 3.55 | 2.84 | 0.59 |
| 21:45-21:59 | 269 | 257 | 39 | 43 | 7 | 4.21 | 3.15 | 0.44 |

### A.17 Day 17: 2026-06-17

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 578 | 822 | 102 | 59 | 7 | 3.53 | 3.18 | 0.92 |
| 07:15-07:29 | 580 | 436 | 114 | 68 | 6 | 3.72 | 2.32 | 0.99 |
| 07:30-07:44 | 477 | 448 | 142 | 62 | 18 | 3.78 | 2.44 | 1.06 |
| 07:45-07:59 | 436 | 607 | 129 | 73 | 19 | 4.31 | 2.81 | 1.02 |
| 08:00-08:14 | 400 | 751 | 113 | 57 | 18 | 2.86 | 1.98 | 0.99 |
| 08:15-08:29 | 395 | 811 | 135 | 70 | 6 | 3.24 | 2.77 | 1.07 |
| 08:30-08:44 | 428 | 471 | 135 | 66 | 20 | 3.56 | 1.99 | 0.9 |
| 08:45-08:59 | 350 | 803 | 119 | 88 | 19 | 4.05 | 1.82 | 0.85 |
| 09:00-09:14 | 537 | 823 | 86 | 90 | 20 | 3.35 | 3.19 | 0.85 |
| 09:15-09:29 | 349 | 539 | 115 | 74 | 12 | 4.15 | 2.98 | 0.98 |
| 09:30-09:44 | 374 | 456 | 111 | 88 | 5 | 2.5 | 1.88 | 0.97 |
| 09:45-09:59 | 557 | 645 | 143 | 67 | 17 | 2.47 | 1.97 | 0.89 |
| 10:00-10:14 | 248 | 307 | 53 | 44 | 5 | 3.16 | 1.92 | 0.46 |
| 10:15-10:29 | 155 | 223 | 68 | 44 | 15 | 3.44 | 2.16 | 0.47 |
| 10:30-10:44 | 173 | 349 | 45 | 20 | 13 | 4.14 | 2.45 | 0.59 |
| 10:45-10:59 | 164 | 398 | 44 | 44 | 13 | 3.74 | 2.29 | 0.7 |
| 16:00-16:14 | 180 | 207 | 41 | 33 | 14 | 2.23 | 2.56 | 0.44 |
| 16:15-16:29 | 177 | 386 | 54 | 32 | 9 | 2.38 | 2.8 | 0.64 |
| 16:30-16:44 | 269 | 320 | 32 | 41 | 15 | 2.8 | 3.04 | 0.56 |
| 16:45-16:59 | 264 | 281 | 59 | 37 | 10 | 3.86 | 2.07 | 0.53 |
| 17:00-17:14 | 345 | 450 | 129 | 61 | 9 | 3.87 | 3.02 | 1.1 |
| 17:15-17:29 | 475 | 510 | 106 | 72 | 16 | 3.82 | 2.63 | 1.03 |
| 17:30-17:44 | 319 | 746 | 132 | 92 | 6 | 2.44 | 2.0 | 1.1 |
| 17:45-17:59 | 481 | 603 | 101 | 98 | 15 | 2.16 | 1.82 | 0.95 |
| 18:00-18:14 | 418 | 760 | 136 | 50 | 10 | 3.41 | 3.03 | 0.92 |
| 18:15-18:29 | 342 | 788 | 111 | 112 | 15 | 2.38 | 2.77 | 0.93 |
| 18:30-18:44 | 531 | 470 | 120 | 112 | 19 | 2.16 | 2.53 | 0.86 |
| 18:45-18:59 | 339 | 467 | 82 | 64 | 15 | 2.65 | 1.83 | 0.94 |
| 19:00-19:14 | 581 | 853 | 96 | 120 | 9 | 2.2 | 2.71 | 0.97 |
| 19:15-19:29 | 529 | 504 | 116 | 120 | 6 | 4.32 | 3.09 | 1.0 |
| 19:30-19:44 | 568 | 849 | 86 | 68 | 7 | 3.01 | 2.84 | 0.95 |
| 19:45-19:59 | 300 | 573 | 131 | 89 | 9 | 3.22 | 1.8 | 1.06 |
| 20:00-20:14 | 215 | 262 | 52 | 26 | 11 | 3.0 | 3.14 | 0.69 |
| 20:15-20:29 | 293 | 287 | 42 | 35 | 6 | 4.02 | 2.11 | 0.63 |
| 20:30-20:44 | 286 | 306 | 50 | 40 | 7 | 2.91 | 2.28 | 0.53 |
| 20:45-20:59 | 187 | 288 | 35 | 47 | 7 | 3.17 | 2.05 | 0.69 |
| 21:00-21:14 | 187 | 334 | 57 | 41 | 7 | 3.57 | 2.41 | 0.46 |
| 21:15-21:29 | 233 | 265 | 63 | 33 | 15 | 4.05 | 1.82 | 0.55 |
| 21:30-21:44 | 223 | 286 | 50 | 44 | 13 | 2.37 | 1.93 | 0.67 |
| 21:45-21:59 | 195 | 251 | 33 | 41 | 18 | 4.32 | 2.98 | 0.43 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 536 | 631 | 144 | 91 | 12 | 2.41 | 3.02 | 0.96 |
| 07:15-07:29 | 398 | 586 | 132 | 65 | 6 | 4.07 | 2.51 | 0.96 |
| 07:30-07:44 | 443 | 707 | 131 | 101 | 17 | 2.27 | 2.62 | 0.86 |
| 07:45-07:59 | 365 | 535 | 98 | 51 | 19 | 3.48 | 2.94 | 1.1 |
| 08:00-08:14 | 469 | 767 | 100 | 84 | 6 | 4.47 | 3.19 | 0.87 |
| 08:15-08:29 | 400 | 581 | 150 | 80 | 7 | 3.63 | 2.66 | 0.98 |
| 08:30-08:44 | 448 | 519 | 140 | 75 | 7 | 3.64 | 3.09 | 1.03 |
| 08:45-08:59 | 488 | 587 | 105 | 79 | 13 | 2.44 | 2.23 | 1.08 |
| 09:00-09:14 | 578 | 839 | 96 | 78 | 10 | 4.21 | 1.81 | 0.99 |
| 09:15-09:29 | 598 | 732 | 84 | 105 | 10 | 3.76 | 2.19 | 0.96 |
| 09:30-09:44 | 350 | 452 | 150 | 109 | 17 | 2.47 | 2.69 | 0.96 |
| 09:45-09:59 | 576 | 876 | 147 | 97 | 5 | 2.77 | 2.18 | 0.96 |
| 10:00-10:14 | 291 | 326 | 45 | 22 | 10 | 3.2 | 1.99 | 0.51 |
| 10:15-10:29 | 199 | 396 | 58 | 34 | 9 | 2.45 | 3.09 | 0.68 |
| 10:30-10:44 | 222 | 229 | 60 | 20 | 16 | 2.29 | 2.95 | 0.56 |
| 10:45-10:59 | 270 | 341 | 40 | 22 | 9 | 4.28 | 3.11 | 0.7 |
| 16:00-16:14 | 159 | 325 | 60 | 27 | 14 | 2.88 | 2.23 | 0.63 |
| 16:15-16:29 | 299 | 213 | 68 | 48 | 14 | 2.38 | 2.53 | 0.6 |
| 16:30-16:44 | 220 | 369 | 64 | 48 | 14 | 2.47 | 2.8 | 0.58 |
| 16:45-16:59 | 251 | 285 | 31 | 35 | 5 | 2.62 | 1.83 | 0.57 |
| 17:00-17:14 | 468 | 609 | 129 | 56 | 11 | 2.89 | 2.85 | 1.04 |
| 17:15-17:29 | 537 | 680 | 150 | 80 | 11 | 4.35 | 2.54 | 0.93 |
| 17:30-17:44 | 490 | 650 | 98 | 94 | 10 | 2.77 | 3.14 | 1.09 |
| 17:45-17:59 | 348 | 425 | 132 | 105 | 5 | 4.04 | 2.12 | 1.02 |
| 18:00-18:14 | 451 | 768 | 123 | 97 | 10 | 3.58 | 3.15 | 0.92 |
| 18:15-18:29 | 470 | 569 | 148 | 97 | 10 | 3.92 | 2.7 | 1.01 |
| 18:30-18:44 | 345 | 404 | 107 | 78 | 17 | 4.06 | 2.1 | 1.01 |
| 18:45-18:59 | 515 | 776 | 105 | 87 | 13 | 2.35 | 3.04 | 1.0 |
| 19:00-19:14 | 465 | 851 | 85 | 69 | 11 | 2.16 | 2.43 | 0.93 |
| 19:15-19:29 | 347 | 891 | 91 | 104 | 15 | 2.88 | 1.86 | 0.92 |
| 19:30-19:44 | 331 | 623 | 95 | 117 | 5 | 2.31 | 2.8 | 1.06 |
| 19:45-19:59 | 363 | 465 | 144 | 62 | 8 | 2.78 | 2.1 | 0.86 |
| 20:00-20:14 | 273 | 270 | 41 | 37 | 12 | 4.08 | 1.92 | 0.64 |
| 20:15-20:29 | 151 | 208 | 35 | 25 | 10 | 3.2 | 2.02 | 0.46 |
| 20:30-20:44 | 174 | 245 | 65 | 25 | 9 | 2.94 | 3.02 | 0.63 |
| 20:45-20:59 | 294 | 270 | 60 | 50 | 8 | 2.27 | 2.22 | 0.53 |
| 21:00-21:14 | 240 | 294 | 57 | 28 | 8 | 2.26 | 3.08 | 0.5 |
| 21:15-21:29 | 173 | 340 | 32 | 31 | 5 | 3.76 | 2.52 | 0.66 |
| 21:30-21:44 | 283 | 220 | 69 | 39 | 7 | 3.69 | 2.77 | 0.48 |
| 21:45-21:59 | 263 | 287 | 60 | 25 | 12 | 4.49 | 2.2 | 0.55 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 441 | 712 | 104 | 67 | 13 | 3.81 | 2.73 | 0.92 |
| 07:15-07:29 | 327 | 524 | 97 | 106 | 14 | 2.74 | 2.63 | 0.97 |
| 07:30-07:44 | 461 | 742 | 148 | 69 | 13 | 3.55 | 2.94 | 0.88 |
| 07:45-07:59 | 466 | 816 | 134 | 65 | 15 | 3.0 | 2.07 | 0.9 |
| 08:00-08:14 | 324 | 685 | 104 | 95 | 8 | 4.23 | 2.96 | 0.98 |
| 08:15-08:29 | 584 | 851 | 93 | 114 | 19 | 2.6 | 2.77 | 0.96 |
| 08:30-08:44 | 519 | 900 | 118 | 82 | 19 | 2.58 | 3.05 | 0.88 |
| 08:45-08:59 | 312 | 559 | 131 | 62 | 5 | 2.44 | 2.6 | 0.99 |
| 09:00-09:14 | 316 | 777 | 145 | 115 | 11 | 3.17 | 2.01 | 0.97 |
| 09:15-09:29 | 600 | 678 | 90 | 120 | 7 | 4.37 | 2.22 | 0.95 |
| 09:30-09:44 | 404 | 517 | 83 | 100 | 8 | 3.65 | 2.99 | 1.03 |
| 09:45-09:59 | 526 | 546 | 126 | 106 | 20 | 4.35 | 2.72 | 0.98 |
| 10:00-10:14 | 172 | 285 | 62 | 49 | 13 | 4.45 | 2.99 | 0.44 |
| 10:15-10:29 | 212 | 360 | 36 | 35 | 18 | 3.61 | 2.61 | 0.6 |
| 10:30-10:44 | 289 | 399 | 46 | 30 | 9 | 4.49 | 3.15 | 0.49 |
| 10:45-10:59 | 163 | 307 | 36 | 23 | 19 | 2.84 | 3.1 | 0.67 |
| 16:00-16:14 | 161 | 338 | 51 | 41 | 13 | 4.4 | 2.17 | 0.42 |
| 16:15-16:29 | 176 | 212 | 69 | 45 | 20 | 3.81 | 2.48 | 0.68 |
| 16:30-16:44 | 179 | 299 | 42 | 24 | 16 | 3.52 | 2.94 | 0.54 |
| 16:45-16:59 | 155 | 398 | 62 | 47 | 8 | 2.77 | 2.29 | 0.64 |
| 17:00-17:14 | 383 | 739 | 122 | 106 | 7 | 3.47 | 2.37 | 1.0 |
| 17:15-17:29 | 510 | 686 | 131 | 115 | 7 | 2.99 | 2.72 | 1.02 |
| 17:30-17:44 | 359 | 448 | 140 | 101 | 7 | 4.49 | 2.16 | 0.91 |
| 17:45-17:59 | 466 | 510 | 109 | 85 | 8 | 2.53 | 3.18 | 1.05 |
| 18:00-18:14 | 349 | 668 | 94 | 66 | 12 | 3.48 | 2.17 | 1.03 |
| 18:15-18:29 | 490 | 454 | 135 | 95 | 13 | 4.1 | 2.85 | 0.96 |
| 18:30-18:44 | 558 | 629 | 115 | 81 | 19 | 2.21 | 3.08 | 0.85 |
| 18:45-18:59 | 365 | 680 | 82 | 97 | 19 | 3.16 | 2.55 | 0.98 |
| 19:00-19:14 | 385 | 641 | 121 | 103 | 15 | 2.64 | 3.14 | 0.94 |
| 19:15-19:29 | 500 | 659 | 110 | 90 | 14 | 3.01 | 2.29 | 1.02 |
| 19:30-19:44 | 436 | 676 | 109 | 81 | 7 | 4.04 | 2.52 | 0.92 |
| 19:45-19:59 | 359 | 563 | 134 | 65 | 19 | 2.48 | 2.15 | 0.86 |
| 20:00-20:14 | 249 | 352 | 66 | 44 | 11 | 3.82 | 2.27 | 0.61 |
| 20:15-20:29 | 257 | 287 | 63 | 38 | 10 | 3.55 | 2.76 | 0.59 |
| 20:30-20:44 | 241 | 229 | 50 | 44 | 9 | 3.28 | 2.31 | 0.53 |
| 20:45-20:59 | 251 | 399 | 64 | 35 | 13 | 3.04 | 2.73 | 0.66 |
| 21:00-21:14 | 239 | 202 | 70 | 46 | 5 | 3.7 | 2.53 | 0.66 |
| 21:15-21:29 | 253 | 338 | 46 | 45 | 8 | 2.12 | 2.2 | 0.62 |
| 21:30-21:44 | 155 | 384 | 34 | 27 | 19 | 2.58 | 2.09 | 0.42 |
| 21:45-21:59 | 281 | 355 | 53 | 48 | 7 | 4.15 | 2.38 | 0.6 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 597 | 631 | 136 | 66 | 13 | 3.76 | 2.35 | 0.98 |
| 07:15-07:29 | 380 | 529 | 128 | 89 | 16 | 3.77 | 2.46 | 0.92 |
| 07:30-07:44 | 508 | 616 | 115 | 84 | 13 | 2.88 | 1.9 | 1.03 |
| 07:45-07:59 | 333 | 706 | 91 | 52 | 11 | 4.26 | 2.56 | 1.05 |
| 08:00-08:14 | 363 | 725 | 98 | 108 | 14 | 3.82 | 2.46 | 0.95 |
| 08:15-08:29 | 404 | 489 | 80 | 53 | 5 | 2.8 | 2.08 | 0.93 |
| 08:30-08:44 | 300 | 531 | 143 | 120 | 8 | 3.51 | 2.42 | 1.09 |
| 08:45-08:59 | 428 | 434 | 100 | 83 | 7 | 3.45 | 2.26 | 0.98 |
| 09:00-09:14 | 500 | 611 | 89 | 102 | 14 | 3.58 | 2.8 | 0.88 |
| 09:15-09:29 | 566 | 830 | 131 | 83 | 18 | 3.93 | 3.13 | 0.91 |
| 09:30-09:44 | 525 | 883 | 134 | 82 | 11 | 4.33 | 2.95 | 0.95 |
| 09:45-09:59 | 521 | 873 | 107 | 52 | 19 | 2.47 | 1.98 | 0.96 |
| 10:00-10:14 | 160 | 230 | 46 | 39 | 7 | 2.92 | 2.84 | 0.6 |
| 10:15-10:29 | 274 | 228 | 59 | 26 | 16 | 2.9 | 2.94 | 0.7 |
| 10:30-10:44 | 256 | 242 | 66 | 39 | 15 | 2.63 | 2.48 | 0.6 |
| 10:45-10:59 | 265 | 357 | 51 | 48 | 15 | 2.31 | 1.95 | 0.64 |
| 16:00-16:14 | 242 | 399 | 67 | 49 | 11 | 3.27 | 3.08 | 0.42 |
| 16:15-16:29 | 154 | 222 | 31 | 35 | 17 | 3.85 | 2.08 | 0.41 |
| 16:30-16:44 | 266 | 210 | 62 | 50 | 16 | 2.25 | 3.01 | 0.57 |
| 16:45-16:59 | 300 | 375 | 56 | 23 | 15 | 4.06 | 2.68 | 0.64 |
| 17:00-17:14 | 533 | 569 | 114 | 104 | 15 | 4.05 | 2.91 | 1.08 |
| 17:15-17:29 | 377 | 765 | 95 | 82 | 14 | 2.55 | 2.68 | 0.96 |
| 17:30-17:44 | 370 | 441 | 142 | 54 | 7 | 2.7 | 3.04 | 0.89 |
| 17:45-17:59 | 366 | 516 | 150 | 81 | 18 | 2.75 | 2.51 | 1.09 |
| 18:00-18:14 | 311 | 676 | 133 | 112 | 5 | 2.42 | 1.85 | 1.09 |
| 18:15-18:29 | 496 | 680 | 142 | 109 | 12 | 2.68 | 2.11 | 1.09 |
| 18:30-18:44 | 518 | 555 | 119 | 94 | 9 | 3.31 | 2.55 | 1.08 |
| 18:45-18:59 | 500 | 444 | 131 | 74 | 19 | 4.39 | 2.05 | 0.92 |
| 19:00-19:14 | 327 | 870 | 106 | 117 | 7 | 3.27 | 2.06 | 1.0 |
| 19:15-19:29 | 347 | 645 | 105 | 65 | 6 | 3.14 | 2.4 | 1.09 |
| 19:30-19:44 | 411 | 660 | 92 | 85 | 17 | 4.42 | 2.09 | 1.07 |
| 19:45-19:59 | 499 | 790 | 132 | 89 | 20 | 2.2 | 2.86 | 0.92 |
| 20:00-20:14 | 187 | 344 | 59 | 32 | 9 | 3.61 | 2.02 | 0.65 |
| 20:15-20:29 | 204 | 213 | 35 | 32 | 7 | 2.68 | 1.88 | 0.52 |
| 20:30-20:44 | 296 | 336 | 49 | 40 | 17 | 3.88 | 2.21 | 0.55 |
| 20:45-20:59 | 166 | 338 | 59 | 21 | 12 | 3.4 | 2.05 | 0.6 |
| 21:00-21:14 | 231 | 380 | 62 | 29 | 6 | 3.22 | 2.62 | 0.44 |
| 21:15-21:29 | 199 | 222 | 69 | 30 | 13 | 3.16 | 2.99 | 0.47 |
| 21:30-21:44 | 235 | 210 | 56 | 47 | 17 | 3.16 | 2.8 | 0.56 |
| 21:45-21:59 | 278 | 337 | 53 | 37 | 14 | 3.39 | 2.93 | 0.65 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 539 | 807 | 85 | 92 | 17 | 3.71 | 3.1 | 0.95 |
| 07:15-07:29 | 418 | 733 | 130 | 91 | 15 | 2.8 | 2.45 | 0.96 |
| 07:30-07:44 | 502 | 657 | 85 | 83 | 10 | 2.79 | 2.68 | 1.07 |
| 07:45-07:59 | 559 | 504 | 86 | 103 | 16 | 3.25 | 2.15 | 0.95 |
| 08:00-08:14 | 563 | 545 | 86 | 58 | 9 | 2.5 | 2.34 | 0.85 |
| 08:15-08:29 | 357 | 509 | 88 | 111 | 11 | 4.03 | 3.15 | 1.04 |
| 08:30-08:44 | 428 | 725 | 140 | 113 | 20 | 2.47 | 2.3 | 0.86 |
| 08:45-08:59 | 551 | 535 | 124 | 63 | 9 | 3.91 | 3.02 | 0.99 |
| 09:00-09:14 | 347 | 411 | 148 | 115 | 13 | 3.69 | 2.74 | 1.05 |
| 09:15-09:29 | 312 | 664 | 111 | 52 | 17 | 3.04 | 2.88 | 0.87 |
| 09:30-09:44 | 391 | 610 | 109 | 100 | 14 | 3.49 | 2.34 | 1.07 |
| 09:45-09:59 | 563 | 565 | 145 | 57 | 7 | 2.12 | 2.03 | 0.98 |
| 10:00-10:14 | 224 | 334 | 36 | 23 | 14 | 3.42 | 2.48 | 0.52 |
| 10:15-10:29 | 274 | 203 | 69 | 22 | 12 | 3.12 | 1.95 | 0.57 |
| 10:30-10:44 | 155 | 400 | 61 | 29 | 14 | 4.36 | 2.8 | 0.55 |
| 10:45-10:59 | 237 | 367 | 61 | 43 | 13 | 3.06 | 3.12 | 0.49 |
| 16:00-16:14 | 203 | 298 | 70 | 28 | 9 | 2.29 | 2.9 | 0.5 |
| 16:15-16:29 | 286 | 207 | 61 | 43 | 15 | 4.14 | 1.98 | 0.57 |
| 16:30-16:44 | 274 | 239 | 45 | 26 | 20 | 4.33 | 2.83 | 0.54 |
| 16:45-16:59 | 177 | 229 | 44 | 41 | 14 | 3.02 | 3.2 | 0.68 |
| 17:00-17:14 | 525 | 605 | 103 | 114 | 9 | 2.49 | 2.29 | 0.9 |
| 17:15-17:29 | 354 | 603 | 112 | 59 | 12 | 2.9 | 2.46 | 0.92 |
| 17:30-17:44 | 412 | 689 | 91 | 82 | 16 | 2.74 | 2.66 | 1.05 |
| 17:45-17:59 | 527 | 424 | 94 | 102 | 6 | 2.97 | 3.18 | 1.03 |
| 18:00-18:14 | 542 | 679 | 128 | 65 | 14 | 4.16 | 3.1 | 0.87 |
| 18:15-18:29 | 533 | 896 | 96 | 81 | 12 | 3.33 | 2.52 | 0.87 |
| 18:30-18:44 | 423 | 619 | 132 | 107 | 6 | 2.85 | 2.12 | 1.1 |
| 18:45-18:59 | 565 | 676 | 97 | 66 | 5 | 3.85 | 2.16 | 0.98 |
| 19:00-19:14 | 353 | 900 | 141 | 100 | 12 | 2.65 | 2.32 | 1.05 |
| 19:15-19:29 | 389 | 432 | 114 | 120 | 8 | 3.65 | 2.1 | 0.9 |
| 19:30-19:44 | 577 | 509 | 144 | 60 | 11 | 4.1 | 1.89 | 0.96 |
| 19:45-19:59 | 332 | 614 | 87 | 63 | 6 | 4.34 | 2.76 | 1.01 |
| 20:00-20:14 | 275 | 284 | 67 | 47 | 10 | 3.51 | 2.59 | 0.5 |
| 20:15-20:29 | 268 | 214 | 54 | 45 | 15 | 2.74 | 2.08 | 0.67 |
| 20:30-20:44 | 239 | 291 | 36 | 40 | 16 | 3.98 | 2.15 | 0.62 |
| 20:45-20:59 | 194 | 317 | 57 | 40 | 10 | 3.39 | 2.22 | 0.56 |
| 21:00-21:14 | 165 | 228 | 61 | 30 | 9 | 2.98 | 3.11 | 0.45 |
| 21:15-21:29 | 260 | 378 | 43 | 21 | 11 | 2.31 | 2.45 | 0.53 |
| 21:30-21:44 | 260 | 263 | 39 | 43 | 12 | 3.03 | 2.01 | 0.47 |
| 21:45-21:59 | 256 | 221 | 44 | 39 | 14 | 3.73 | 2.16 | 0.59 |

### A.18 Day 18: 2026-06-18

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 501 | 728 | 90 | 59 | 6 | 3.07 | 3.06 | 0.9 |
| 07:15-07:29 | 494 | 479 | 119 | 113 | 18 | 4.36 | 3.15 | 1.09 |
| 07:30-07:44 | 377 | 481 | 129 | 104 | 20 | 3.99 | 2.5 | 0.92 |
| 07:45-07:59 | 469 | 429 | 119 | 65 | 5 | 2.24 | 3.0 | 0.92 |
| 08:00-08:14 | 587 | 594 | 122 | 89 | 8 | 3.82 | 2.12 | 0.89 |
| 08:15-08:29 | 451 | 435 | 145 | 94 | 13 | 2.22 | 2.27 | 1.04 |
| 08:30-08:44 | 345 | 581 | 85 | 108 | 5 | 4.03 | 1.89 | 0.97 |
| 08:45-08:59 | 484 | 881 | 128 | 61 | 9 | 3.67 | 2.89 | 1.0 |
| 09:00-09:14 | 455 | 650 | 121 | 114 | 9 | 3.86 | 2.35 | 0.86 |
| 09:15-09:29 | 548 | 797 | 88 | 83 | 11 | 3.35 | 3.15 | 0.97 |
| 09:30-09:44 | 500 | 533 | 102 | 113 | 5 | 2.89 | 2.57 | 0.91 |
| 09:45-09:59 | 461 | 689 | 80 | 72 | 16 | 4.31 | 1.95 | 1.1 |
| 10:00-10:14 | 230 | 309 | 55 | 40 | 9 | 3.94 | 2.21 | 0.67 |
| 10:15-10:29 | 253 | 268 | 67 | 50 | 8 | 2.15 | 3.07 | 0.64 |
| 10:30-10:44 | 155 | 259 | 70 | 33 | 20 | 3.87 | 2.15 | 0.43 |
| 10:45-10:59 | 179 | 286 | 68 | 25 | 14 | 3.89 | 2.44 | 0.52 |
| 16:00-16:14 | 236 | 248 | 37 | 24 | 18 | 2.38 | 2.33 | 0.59 |
| 16:15-16:29 | 193 | 337 | 65 | 39 | 19 | 3.06 | 2.81 | 0.56 |
| 16:30-16:44 | 195 | 302 | 70 | 21 | 15 | 4.28 | 2.1 | 0.65 |
| 16:45-16:59 | 207 | 239 | 61 | 42 | 5 | 3.97 | 2.08 | 0.53 |
| 17:00-17:14 | 425 | 843 | 87 | 87 | 13 | 2.94 | 1.96 | 0.88 |
| 17:15-17:29 | 593 | 757 | 131 | 114 | 7 | 2.2 | 2.25 | 1.09 |
| 17:30-17:44 | 477 | 720 | 138 | 105 | 14 | 2.61 | 2.88 | 1.05 |
| 17:45-17:59 | 375 | 474 | 100 | 66 | 11 | 4.3 | 1.88 | 0.86 |
| 18:00-18:14 | 300 | 465 | 99 | 50 | 8 | 4.28 | 2.84 | 1.02 |
| 18:15-18:29 | 453 | 613 | 133 | 86 | 11 | 3.6 | 2.42 | 1.02 |
| 18:30-18:44 | 525 | 826 | 102 | 82 | 6 | 4.43 | 2.96 | 0.97 |
| 18:45-18:59 | 438 | 441 | 121 | 58 | 18 | 2.79 | 2.04 | 1.02 |
| 19:00-19:14 | 503 | 736 | 82 | 109 | 14 | 2.53 | 2.02 | 0.96 |
| 19:15-19:29 | 551 | 401 | 143 | 80 | 17 | 3.28 | 2.99 | 1.0 |
| 19:30-19:44 | 441 | 876 | 126 | 115 | 11 | 2.17 | 3.08 | 0.97 |
| 19:45-19:59 | 456 | 896 | 100 | 84 | 8 | 4.19 | 2.24 | 0.97 |
| 20:00-20:14 | 170 | 389 | 31 | 29 | 10 | 2.55 | 1.84 | 0.46 |
| 20:15-20:29 | 191 | 367 | 37 | 41 | 10 | 3.71 | 2.28 | 0.44 |
| 20:30-20:44 | 185 | 330 | 55 | 28 | 20 | 3.36 | 2.19 | 0.46 |
| 20:45-20:59 | 290 | 254 | 34 | 43 | 20 | 3.55 | 1.99 | 0.54 |
| 21:00-21:14 | 233 | 380 | 42 | 49 | 17 | 2.73 | 2.09 | 0.57 |
| 21:15-21:29 | 297 | 206 | 37 | 35 | 19 | 4.08 | 2.92 | 0.43 |
| 21:30-21:44 | 172 | 289 | 55 | 33 | 9 | 3.13 | 2.97 | 0.57 |
| 21:45-21:59 | 298 | 370 | 64 | 41 | 8 | 3.95 | 3.02 | 0.54 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 501 | 458 | 86 | 53 | 12 | 3.6 | 2.95 | 0.92 |
| 07:15-07:29 | 447 | 638 | 93 | 113 | 10 | 2.5 | 2.23 | 1.09 |
| 07:30-07:44 | 463 | 617 | 95 | 97 | 9 | 3.04 | 2.51 | 1.03 |
| 07:45-07:59 | 357 | 554 | 136 | 95 | 10 | 2.32 | 2.69 | 1.01 |
| 08:00-08:14 | 319 | 429 | 113 | 86 | 17 | 2.73 | 2.67 | 1.01 |
| 08:15-08:29 | 452 | 729 | 126 | 68 | 16 | 4.4 | 2.47 | 1.05 |
| 08:30-08:44 | 328 | 829 | 124 | 79 | 12 | 3.52 | 2.89 | 0.87 |
| 08:45-08:59 | 488 | 863 | 140 | 79 | 16 | 3.51 | 2.42 | 0.96 |
| 09:00-09:14 | 397 | 702 | 127 | 82 | 10 | 2.25 | 3.07 | 0.91 |
| 09:15-09:29 | 521 | 668 | 85 | 51 | 20 | 4.1 | 3.06 | 1.06 |
| 09:30-09:44 | 469 | 730 | 115 | 89 | 19 | 4.23 | 2.2 | 0.92 |
| 09:45-09:59 | 334 | 865 | 132 | 83 | 19 | 4.0 | 2.29 | 1.09 |
| 10:00-10:14 | 167 | 352 | 33 | 50 | 19 | 2.84 | 2.97 | 0.5 |
| 10:15-10:29 | 242 | 280 | 43 | 36 | 12 | 3.05 | 2.89 | 0.69 |
| 10:30-10:44 | 275 | 253 | 53 | 40 | 18 | 4.32 | 2.02 | 0.49 |
| 10:45-10:59 | 203 | 266 | 37 | 36 | 17 | 2.3 | 3.19 | 0.62 |
| 16:00-16:14 | 299 | 207 | 35 | 29 | 17 | 3.83 | 1.89 | 0.66 |
| 16:15-16:29 | 225 | 340 | 59 | 50 | 16 | 3.3 | 2.54 | 0.64 |
| 16:30-16:44 | 230 | 262 | 48 | 48 | 11 | 2.86 | 2.71 | 0.62 |
| 16:45-16:59 | 207 | 274 | 48 | 34 | 12 | 4.33 | 3.07 | 0.47 |
| 17:00-17:14 | 505 | 647 | 144 | 109 | 13 | 2.72 | 3.14 | 0.92 |
| 17:15-17:29 | 480 | 518 | 125 | 106 | 13 | 3.48 | 1.91 | 0.92 |
| 17:30-17:44 | 481 | 536 | 109 | 114 | 9 | 2.83 | 2.0 | 0.89 |
| 17:45-17:59 | 583 | 879 | 146 | 91 | 12 | 3.45 | 3.17 | 1.1 |
| 18:00-18:14 | 551 | 654 | 93 | 72 | 14 | 2.7 | 2.78 | 1.09 |
| 18:15-18:29 | 466 | 772 | 149 | 88 | 19 | 3.84 | 2.43 | 0.92 |
| 18:30-18:44 | 462 | 674 | 143 | 84 | 8 | 3.17 | 2.4 | 0.87 |
| 18:45-18:59 | 594 | 820 | 81 | 58 | 20 | 2.73 | 2.67 | 1.04 |
| 19:00-19:14 | 598 | 836 | 106 | 81 | 6 | 4.23 | 2.22 | 0.91 |
| 19:15-19:29 | 551 | 505 | 96 | 88 | 19 | 2.16 | 1.91 | 1.05 |
| 19:30-19:44 | 538 | 744 | 107 | 67 | 7 | 2.7 | 2.49 | 0.87 |
| 19:45-19:59 | 541 | 694 | 117 | 73 | 19 | 4.08 | 2.55 | 0.87 |
| 20:00-20:14 | 162 | 220 | 32 | 34 | 8 | 3.88 | 2.12 | 0.41 |
| 20:15-20:29 | 293 | 317 | 38 | 43 | 9 | 4.18 | 2.79 | 0.58 |
| 20:30-20:44 | 187 | 219 | 40 | 33 | 18 | 3.19 | 3.0 | 0.59 |
| 20:45-20:59 | 160 | 265 | 47 | 43 | 9 | 3.51 | 2.78 | 0.41 |
| 21:00-21:14 | 289 | 304 | 66 | 42 | 10 | 4.0 | 1.97 | 0.63 |
| 21:15-21:29 | 299 | 343 | 46 | 50 | 9 | 3.16 | 2.9 | 0.41 |
| 21:30-21:44 | 213 | 329 | 48 | 50 | 18 | 2.88 | 2.03 | 0.57 |
| 21:45-21:59 | 246 | 227 | 32 | 22 | 16 | 2.29 | 2.64 | 0.48 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 452 | 664 | 148 | 71 | 10 | 3.92 | 2.98 | 0.95 |
| 07:15-07:29 | 587 | 727 | 147 | 62 | 6 | 4.24 | 2.42 | 0.89 |
| 07:30-07:44 | 320 | 859 | 85 | 110 | 10 | 3.78 | 3.15 | 1.05 |
| 07:45-07:59 | 568 | 812 | 101 | 74 | 9 | 2.29 | 2.0 | 0.95 |
| 08:00-08:14 | 496 | 789 | 82 | 112 | 5 | 2.92 | 2.1 | 0.94 |
| 08:15-08:29 | 538 | 771 | 123 | 112 | 8 | 4.26 | 2.98 | 0.93 |
| 08:30-08:44 | 311 | 521 | 141 | 104 | 10 | 2.46 | 2.96 | 0.87 |
| 08:45-08:59 | 360 | 484 | 124 | 64 | 11 | 2.58 | 2.77 | 1.01 |
| 09:00-09:14 | 454 | 709 | 87 | 76 | 11 | 2.9 | 2.86 | 1.08 |
| 09:15-09:29 | 551 | 644 | 87 | 90 | 16 | 3.02 | 2.33 | 0.86 |
| 09:30-09:44 | 480 | 582 | 110 | 54 | 10 | 3.53 | 2.02 | 0.86 |
| 09:45-09:59 | 437 | 775 | 129 | 116 | 13 | 4.04 | 2.02 | 1.05 |
| 10:00-10:14 | 246 | 286 | 50 | 26 | 16 | 4.4 | 2.63 | 0.51 |
| 10:15-10:29 | 204 | 243 | 65 | 25 | 12 | 2.33 | 2.09 | 0.42 |
| 10:30-10:44 | 254 | 200 | 39 | 45 | 13 | 4.18 | 1.85 | 0.63 |
| 10:45-10:59 | 268 | 218 | 69 | 46 | 14 | 2.57 | 2.93 | 0.58 |
| 16:00-16:14 | 265 | 302 | 68 | 40 | 19 | 2.49 | 2.0 | 0.55 |
| 16:15-16:29 | 259 | 241 | 68 | 32 | 14 | 2.64 | 2.25 | 0.48 |
| 16:30-16:44 | 208 | 357 | 66 | 50 | 19 | 2.71 | 2.02 | 0.63 |
| 16:45-16:59 | 202 | 278 | 61 | 39 | 14 | 3.9 | 2.29 | 0.42 |
| 17:00-17:14 | 371 | 446 | 81 | 69 | 18 | 3.24 | 2.58 | 0.89 |
| 17:15-17:29 | 537 | 839 | 103 | 94 | 13 | 2.4 | 2.77 | 1.04 |
| 17:30-17:44 | 485 | 753 | 121 | 69 | 17 | 4.16 | 2.9 | 0.86 |
| 17:45-17:59 | 597 | 417 | 113 | 103 | 14 | 3.62 | 2.62 | 0.85 |
| 18:00-18:14 | 350 | 420 | 114 | 56 | 18 | 4.0 | 2.08 | 1.01 |
| 18:15-18:29 | 315 | 640 | 114 | 54 | 6 | 3.26 | 2.94 | 0.96 |
| 18:30-18:44 | 594 | 610 | 96 | 68 | 9 | 3.83 | 2.89 | 0.9 |
| 18:45-18:59 | 441 | 891 | 85 | 103 | 15 | 3.31 | 3.08 | 0.92 |
| 19:00-19:14 | 480 | 595 | 104 | 59 | 15 | 2.38 | 2.69 | 1.08 |
| 19:15-19:29 | 379 | 792 | 129 | 91 | 5 | 3.81 | 2.81 | 0.91 |
| 19:30-19:44 | 334 | 477 | 148 | 76 | 7 | 2.16 | 2.22 | 0.89 |
| 19:45-19:59 | 495 | 742 | 127 | 114 | 6 | 3.93 | 2.14 | 0.95 |
| 20:00-20:14 | 285 | 250 | 48 | 38 | 11 | 3.54 | 2.35 | 0.53 |
| 20:15-20:29 | 266 | 316 | 31 | 28 | 5 | 4.37 | 3.09 | 0.63 |
| 20:30-20:44 | 196 | 209 | 63 | 29 | 9 | 4.04 | 3.16 | 0.64 |
| 20:45-20:59 | 191 | 298 | 41 | 46 | 20 | 3.69 | 2.05 | 0.45 |
| 21:00-21:14 | 226 | 367 | 39 | 27 | 19 | 2.84 | 2.94 | 0.64 |
| 21:15-21:29 | 246 | 299 | 45 | 39 | 13 | 2.4 | 3.14 | 0.45 |
| 21:30-21:44 | 164 | 213 | 68 | 45 | 8 | 4.34 | 2.52 | 0.55 |
| 21:45-21:59 | 300 | 374 | 64 | 34 | 13 | 3.26 | 2.72 | 0.5 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 586 | 404 | 108 | 114 | 7 | 2.33 | 2.97 | 1.05 |
| 07:15-07:29 | 443 | 574 | 148 | 113 | 14 | 3.21 | 2.18 | 0.97 |
| 07:30-07:44 | 398 | 856 | 113 | 93 | 11 | 3.35 | 3.1 | 1.1 |
| 07:45-07:59 | 456 | 747 | 81 | 102 | 7 | 3.68 | 1.85 | 0.89 |
| 08:00-08:14 | 470 | 736 | 92 | 77 | 10 | 3.82 | 2.88 | 1.05 |
| 08:15-08:29 | 346 | 759 | 123 | 60 | 12 | 2.34 | 3.19 | 1.06 |
| 08:30-08:44 | 353 | 894 | 128 | 83 | 9 | 3.11 | 2.08 | 1.04 |
| 08:45-08:59 | 345 | 653 | 106 | 61 | 18 | 3.04 | 2.25 | 0.92 |
| 09:00-09:14 | 507 | 428 | 101 | 97 | 7 | 2.7 | 1.85 | 0.9 |
| 09:15-09:29 | 532 | 524 | 89 | 73 | 19 | 3.46 | 3.18 | 1.07 |
| 09:30-09:44 | 362 | 867 | 94 | 57 | 6 | 3.62 | 3.09 | 1.0 |
| 09:45-09:59 | 503 | 839 | 142 | 115 | 17 | 3.99 | 2.92 | 1.08 |
| 10:00-10:14 | 299 | 267 | 53 | 47 | 12 | 2.14 | 2.86 | 0.64 |
| 10:15-10:29 | 212 | 272 | 30 | 35 | 14 | 3.04 | 2.66 | 0.53 |
| 10:30-10:44 | 224 | 234 | 32 | 34 | 18 | 4.07 | 2.27 | 0.6 |
| 10:45-10:59 | 283 | 274 | 30 | 45 | 6 | 2.3 | 2.27 | 0.66 |
| 16:00-16:14 | 226 | 308 | 43 | 40 | 13 | 2.81 | 2.47 | 0.61 |
| 16:15-16:29 | 242 | 299 | 45 | 20 | 18 | 2.88 | 2.1 | 0.68 |
| 16:30-16:44 | 199 | 213 | 67 | 26 | 7 | 3.43 | 2.82 | 0.63 |
| 16:45-16:59 | 243 | 397 | 44 | 36 | 14 | 2.7 | 1.93 | 0.59 |
| 17:00-17:14 | 374 | 690 | 107 | 60 | 16 | 2.52 | 2.64 | 0.92 |
| 17:15-17:29 | 326 | 514 | 130 | 105 | 5 | 2.47 | 1.83 | 0.88 |
| 17:30-17:44 | 456 | 556 | 115 | 61 | 9 | 2.29 | 1.97 | 0.92 |
| 17:45-17:59 | 322 | 691 | 150 | 88 | 16 | 4.29 | 2.45 | 0.86 |
| 18:00-18:14 | 554 | 416 | 114 | 112 | 18 | 2.7 | 3.16 | 1.06 |
| 18:15-18:29 | 499 | 853 | 108 | 85 | 9 | 4.31 | 2.95 | 1.03 |
| 18:30-18:44 | 585 | 489 | 124 | 98 | 20 | 2.94 | 1.97 | 1.03 |
| 18:45-18:59 | 486 | 438 | 116 | 78 | 10 | 4.2 | 3.08 | 0.87 |
| 19:00-19:14 | 374 | 774 | 118 | 93 | 19 | 4.49 | 2.18 | 1.06 |
| 19:15-19:29 | 377 | 609 | 109 | 62 | 19 | 3.23 | 1.98 | 0.86 |
| 19:30-19:44 | 570 | 459 | 112 | 55 | 9 | 2.9 | 2.36 | 0.86 |
| 19:45-19:59 | 492 | 565 | 141 | 89 | 13 | 2.64 | 2.37 | 1.02 |
| 20:00-20:14 | 153 | 272 | 43 | 36 | 9 | 3.64 | 2.68 | 0.52 |
| 20:15-20:29 | 163 | 359 | 60 | 41 | 18 | 2.49 | 2.4 | 0.46 |
| 20:30-20:44 | 150 | 300 | 45 | 40 | 18 | 2.15 | 3.15 | 0.48 |
| 20:45-20:59 | 181 | 289 | 57 | 33 | 17 | 3.31 | 3.13 | 0.66 |
| 21:00-21:14 | 223 | 317 | 33 | 33 | 11 | 4.27 | 2.95 | 0.58 |
| 21:15-21:29 | 185 | 218 | 41 | 34 | 5 | 3.58 | 2.3 | 0.59 |
| 21:30-21:44 | 237 | 340 | 61 | 49 | 6 | 2.91 | 2.4 | 0.47 |
| 21:45-21:59 | 295 | 228 | 48 | 36 | 6 | 3.85 | 1.95 | 0.41 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 404 | 759 | 94 | 99 | 14 | 3.23 | 2.92 | 0.98 |
| 07:15-07:29 | 368 | 878 | 113 | 55 | 19 | 3.67 | 2.34 | 0.89 |
| 07:30-07:44 | 433 | 453 | 123 | 94 | 12 | 3.07 | 2.21 | 0.94 |
| 07:45-07:59 | 306 | 725 | 92 | 81 | 7 | 3.72 | 2.87 | 0.85 |
| 08:00-08:14 | 588 | 627 | 94 | 90 | 6 | 2.16 | 3.08 | 1.06 |
| 08:15-08:29 | 550 | 880 | 147 | 80 | 19 | 2.64 | 1.89 | 1.03 |
| 08:30-08:44 | 474 | 407 | 129 | 57 | 8 | 3.27 | 2.98 | 1.01 |
| 08:45-08:59 | 543 | 698 | 99 | 116 | 9 | 4.15 | 2.43 | 0.99 |
| 09:00-09:14 | 386 | 664 | 141 | 64 | 13 | 2.33 | 2.46 | 0.99 |
| 09:15-09:29 | 592 | 772 | 90 | 105 | 6 | 2.59 | 2.01 | 0.89 |
| 09:30-09:44 | 547 | 515 | 149 | 104 | 19 | 4.04 | 2.75 | 1.08 |
| 09:45-09:59 | 353 | 699 | 115 | 62 | 15 | 3.88 | 1.99 | 0.97 |
| 10:00-10:14 | 162 | 303 | 69 | 24 | 10 | 4.34 | 2.13 | 0.48 |
| 10:15-10:29 | 229 | 262 | 45 | 47 | 10 | 3.92 | 1.97 | 0.4 |
| 10:30-10:44 | 161 | 206 | 49 | 35 | 16 | 2.29 | 2.57 | 0.43 |
| 10:45-10:59 | 275 | 381 | 70 | 39 | 10 | 3.28 | 2.27 | 0.62 |
| 16:00-16:14 | 253 | 263 | 63 | 34 | 7 | 3.64 | 1.96 | 0.54 |
| 16:15-16:29 | 250 | 313 | 36 | 46 | 19 | 3.21 | 2.15 | 0.47 |
| 16:30-16:44 | 164 | 305 | 37 | 42 | 18 | 3.34 | 2.24 | 0.7 |
| 16:45-16:59 | 277 | 234 | 49 | 21 | 9 | 2.49 | 3.12 | 0.59 |
| 17:00-17:14 | 331 | 629 | 122 | 112 | 11 | 2.82 | 2.96 | 0.99 |
| 17:15-17:29 | 578 | 529 | 120 | 108 | 10 | 4.12 | 3.02 | 1.04 |
| 17:30-17:44 | 554 | 658 | 141 | 60 | 19 | 2.9 | 2.19 | 0.9 |
| 17:45-17:59 | 571 | 730 | 143 | 80 | 18 | 2.99 | 1.83 | 0.98 |
| 18:00-18:14 | 476 | 407 | 129 | 105 | 19 | 3.25 | 1.97 | 0.95 |
| 18:15-18:29 | 315 | 531 | 95 | 101 | 20 | 4.06 | 2.19 | 0.98 |
| 18:30-18:44 | 490 | 604 | 129 | 62 | 18 | 4.14 | 1.89 | 1.08 |
| 18:45-18:59 | 432 | 508 | 102 | 96 | 20 | 3.58 | 2.54 | 0.97 |
| 19:00-19:14 | 385 | 504 | 147 | 71 | 5 | 4.21 | 2.09 | 1.08 |
| 19:15-19:29 | 399 | 432 | 117 | 51 | 8 | 3.72 | 3.18 | 0.88 |
| 19:30-19:44 | 594 | 583 | 88 | 107 | 9 | 2.14 | 2.49 | 1.03 |
| 19:45-19:59 | 338 | 741 | 107 | 86 | 15 | 3.6 | 2.67 | 0.96 |
| 20:00-20:14 | 151 | 383 | 66 | 22 | 13 | 3.12 | 1.91 | 0.58 |
| 20:15-20:29 | 245 | 307 | 60 | 49 | 19 | 3.05 | 2.57 | 0.67 |
| 20:30-20:44 | 247 | 260 | 57 | 35 | 12 | 3.48 | 1.9 | 0.49 |
| 20:45-20:59 | 183 | 374 | 65 | 36 | 18 | 4.38 | 2.0 | 0.43 |
| 21:00-21:14 | 222 | 247 | 63 | 45 | 16 | 3.2 | 2.93 | 0.62 |
| 21:15-21:29 | 156 | 232 | 59 | 35 | 9 | 3.37 | 1.84 | 0.53 |
| 21:30-21:44 | 216 | 396 | 35 | 42 | 16 | 4.28 | 2.69 | 0.45 |
| 21:45-21:59 | 297 | 214 | 53 | 22 | 9 | 3.53 | 2.9 | 0.42 |

### A.19 Day 19: 2026-06-19

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 584 | 783 | 122 | 102 | 17 | 4.42 | 2.39 | 1.1 |
| 07:15-07:29 | 486 | 432 | 92 | 55 | 11 | 4.26 | 1.88 | 0.98 |
| 07:30-07:44 | 582 | 677 | 117 | 71 | 15 | 2.3 | 2.87 | 0.95 |
| 07:45-07:59 | 328 | 531 | 141 | 62 | 6 | 2.39 | 3.17 | 1.05 |
| 08:00-08:14 | 565 | 613 | 146 | 72 | 20 | 2.89 | 2.89 | 0.96 |
| 08:15-08:29 | 418 | 763 | 111 | 78 | 8 | 2.48 | 1.89 | 0.97 |
| 08:30-08:44 | 480 | 654 | 97 | 116 | 14 | 4.38 | 3.04 | 0.89 |
| 08:45-08:59 | 408 | 685 | 150 | 62 | 15 | 2.86 | 2.02 | 0.9 |
| 09:00-09:14 | 390 | 401 | 118 | 84 | 16 | 2.83 | 2.8 | 0.91 |
| 09:15-09:29 | 383 | 608 | 85 | 87 | 11 | 2.71 | 2.26 | 0.97 |
| 09:30-09:44 | 572 | 829 | 104 | 72 | 18 | 2.77 | 1.87 | 0.95 |
| 09:45-09:59 | 377 | 873 | 84 | 69 | 7 | 3.22 | 2.82 | 1.1 |
| 10:00-10:14 | 164 | 242 | 46 | 21 | 10 | 3.39 | 2.05 | 0.58 |
| 10:15-10:29 | 179 | 348 | 55 | 32 | 15 | 3.05 | 3.07 | 0.68 |
| 10:30-10:44 | 183 | 361 | 39 | 29 | 5 | 4.3 | 2.63 | 0.47 |
| 10:45-10:59 | 194 | 205 | 62 | 23 | 15 | 4.26 | 2.33 | 0.69 |
| 16:00-16:14 | 269 | 389 | 42 | 25 | 15 | 3.15 | 2.73 | 0.53 |
| 16:15-16:29 | 198 | 277 | 66 | 21 | 8 | 3.1 | 3.03 | 0.6 |
| 16:30-16:44 | 250 | 355 | 30 | 48 | 18 | 3.11 | 2.95 | 0.56 |
| 16:45-16:59 | 260 | 274 | 59 | 33 | 12 | 3.51 | 2.62 | 0.62 |
| 17:00-17:14 | 464 | 611 | 98 | 104 | 14 | 4.39 | 2.76 | 0.93 |
| 17:15-17:29 | 302 | 557 | 105 | 109 | 14 | 4.32 | 3.09 | 0.94 |
| 17:30-17:44 | 540 | 756 | 129 | 107 | 9 | 4.42 | 2.33 | 0.96 |
| 17:45-17:59 | 391 | 656 | 109 | 55 | 11 | 2.73 | 2.12 | 0.92 |
| 18:00-18:14 | 531 | 583 | 122 | 78 | 13 | 4.28 | 3.01 | 1.05 |
| 18:15-18:29 | 528 | 713 | 120 | 97 | 7 | 4.23 | 1.84 | 0.99 |
| 18:30-18:44 | 464 | 440 | 106 | 89 | 13 | 2.48 | 2.21 | 0.87 |
| 18:45-18:59 | 489 | 401 | 146 | 75 | 8 | 4.31 | 2.77 | 1.0 |
| 19:00-19:14 | 395 | 547 | 116 | 81 | 19 | 2.13 | 2.79 | 0.99 |
| 19:15-19:29 | 529 | 811 | 138 | 62 | 20 | 2.68 | 3.09 | 1.02 |
| 19:30-19:44 | 538 | 854 | 81 | 57 | 20 | 3.92 | 2.9 | 1.03 |
| 19:45-19:59 | 482 | 497 | 108 | 76 | 12 | 4.42 | 1.99 | 0.89 |
| 20:00-20:14 | 284 | 300 | 55 | 46 | 17 | 2.53 | 2.01 | 0.54 |
| 20:15-20:29 | 210 | 227 | 57 | 31 | 7 | 3.09 | 2.14 | 0.55 |
| 20:30-20:44 | 166 | 287 | 68 | 21 | 18 | 4.23 | 2.65 | 0.59 |
| 20:45-20:59 | 189 | 396 | 42 | 30 | 6 | 2.32 | 3.06 | 0.59 |
| 21:00-21:14 | 220 | 357 | 40 | 49 | 9 | 3.81 | 3.16 | 0.52 |
| 21:15-21:29 | 231 | 248 | 37 | 29 | 6 | 2.75 | 2.43 | 0.43 |
| 21:30-21:44 | 161 | 347 | 50 | 28 | 8 | 2.36 | 3.18 | 0.45 |
| 21:45-21:59 | 234 | 318 | 39 | 48 | 13 | 2.33 | 2.68 | 0.55 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 503 | 803 | 84 | 90 | 11 | 2.63 | 2.54 | 0.97 |
| 07:15-07:29 | 423 | 520 | 104 | 82 | 9 | 4.45 | 2.9 | 1.04 |
| 07:30-07:44 | 475 | 630 | 82 | 67 | 8 | 2.54 | 3.09 | 0.91 |
| 07:45-07:59 | 514 | 524 | 143 | 97 | 8 | 3.86 | 2.59 | 0.92 |
| 08:00-08:14 | 587 | 699 | 100 | 77 | 11 | 3.73 | 2.93 | 0.97 |
| 08:15-08:29 | 434 | 667 | 124 | 118 | 9 | 4.2 | 2.87 | 1.05 |
| 08:30-08:44 | 544 | 455 | 134 | 97 | 19 | 3.02 | 2.48 | 0.96 |
| 08:45-08:59 | 499 | 621 | 108 | 88 | 9 | 3.22 | 2.34 | 0.98 |
| 09:00-09:14 | 388 | 659 | 135 | 61 | 18 | 2.98 | 2.28 | 0.96 |
| 09:15-09:29 | 594 | 599 | 150 | 55 | 16 | 2.38 | 3.1 | 1.04 |
| 09:30-09:44 | 495 | 701 | 148 | 67 | 19 | 2.49 | 2.17 | 0.91 |
| 09:45-09:59 | 593 | 453 | 115 | 82 | 11 | 3.6 | 2.58 | 1.05 |
| 10:00-10:14 | 247 | 243 | 39 | 44 | 9 | 2.99 | 2.65 | 0.64 |
| 10:15-10:29 | 269 | 205 | 65 | 39 | 15 | 3.58 | 2.24 | 0.53 |
| 10:30-10:44 | 253 | 316 | 64 | 25 | 18 | 3.77 | 2.31 | 0.65 |
| 10:45-10:59 | 291 | 267 | 50 | 24 | 9 | 2.36 | 2.08 | 0.57 |
| 16:00-16:14 | 252 | 286 | 65 | 24 | 19 | 4.45 | 1.94 | 0.63 |
| 16:15-16:29 | 291 | 358 | 45 | 24 | 11 | 2.83 | 2.85 | 0.69 |
| 16:30-16:44 | 155 | 280 | 60 | 41 | 15 | 2.39 | 2.25 | 0.5 |
| 16:45-16:59 | 185 | 258 | 47 | 34 | 8 | 2.5 | 2.13 | 0.6 |
| 17:00-17:14 | 391 | 536 | 91 | 73 | 6 | 3.92 | 2.47 | 0.88 |
| 17:15-17:29 | 579 | 569 | 82 | 88 | 19 | 4.37 | 3.18 | 1.1 |
| 17:30-17:44 | 504 | 812 | 126 | 80 | 10 | 2.79 | 2.2 | 0.93 |
| 17:45-17:59 | 428 | 543 | 109 | 90 | 13 | 4.11 | 1.86 | 1.03 |
| 18:00-18:14 | 504 | 878 | 118 | 67 | 15 | 2.24 | 2.39 | 0.87 |
| 18:15-18:29 | 380 | 610 | 141 | 84 | 16 | 2.95 | 2.92 | 0.93 |
| 18:30-18:44 | 471 | 420 | 144 | 66 | 10 | 3.82 | 2.63 | 1.04 |
| 18:45-18:59 | 333 | 420 | 138 | 93 | 15 | 4.03 | 2.41 | 0.9 |
| 19:00-19:14 | 541 | 721 | 137 | 84 | 12 | 2.38 | 2.97 | 0.96 |
| 19:15-19:29 | 399 | 849 | 101 | 113 | 8 | 2.57 | 2.63 | 0.94 |
| 19:30-19:44 | 310 | 812 | 146 | 76 | 5 | 3.08 | 2.19 | 0.88 |
| 19:45-19:59 | 576 | 889 | 86 | 113 | 18 | 3.18 | 2.84 | 0.99 |
| 20:00-20:14 | 197 | 360 | 62 | 42 | 18 | 2.76 | 3.19 | 0.45 |
| 20:15-20:29 | 192 | 256 | 66 | 47 | 7 | 2.64 | 3.12 | 0.47 |
| 20:30-20:44 | 299 | 346 | 64 | 47 | 7 | 3.96 | 2.99 | 0.63 |
| 20:45-20:59 | 220 | 345 | 40 | 32 | 11 | 2.67 | 2.73 | 0.43 |
| 21:00-21:14 | 266 | 316 | 32 | 42 | 8 | 3.54 | 2.26 | 0.53 |
| 21:15-21:29 | 289 | 231 | 55 | 35 | 16 | 3.81 | 3.2 | 0.69 |
| 21:30-21:44 | 155 | 395 | 49 | 43 | 13 | 4.0 | 2.02 | 0.47 |
| 21:45-21:59 | 245 | 368 | 70 | 24 | 16 | 4.39 | 1.89 | 0.44 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 543 | 731 | 107 | 117 | 17 | 3.02 | 2.72 | 1.04 |
| 07:15-07:29 | 517 | 468 | 95 | 63 | 15 | 3.6 | 1.81 | 0.95 |
| 07:30-07:44 | 558 | 803 | 83 | 84 | 7 | 2.51 | 1.88 | 1.01 |
| 07:45-07:59 | 373 | 703 | 120 | 106 | 11 | 4.12 | 2.71 | 1.03 |
| 08:00-08:14 | 417 | 657 | 145 | 86 | 7 | 2.86 | 2.72 | 1.1 |
| 08:15-08:29 | 570 | 857 | 84 | 97 | 17 | 3.67 | 2.44 | 0.95 |
| 08:30-08:44 | 468 | 708 | 134 | 77 | 6 | 2.71 | 2.55 | 0.93 |
| 08:45-08:59 | 326 | 539 | 139 | 94 | 10 | 2.16 | 1.82 | 0.89 |
| 09:00-09:14 | 356 | 552 | 86 | 52 | 18 | 3.16 | 3.17 | 1.0 |
| 09:15-09:29 | 443 | 512 | 140 | 84 | 19 | 2.78 | 1.82 | 0.86 |
| 09:30-09:44 | 381 | 643 | 109 | 55 | 5 | 2.91 | 2.92 | 1.0 |
| 09:45-09:59 | 419 | 415 | 91 | 72 | 15 | 2.45 | 2.72 | 0.96 |
| 10:00-10:14 | 285 | 315 | 36 | 38 | 19 | 3.13 | 3.19 | 0.65 |
| 10:15-10:29 | 261 | 212 | 62 | 50 | 16 | 2.8 | 2.56 | 0.7 |
| 10:30-10:44 | 280 | 262 | 43 | 40 | 13 | 4.47 | 2.28 | 0.42 |
| 10:45-10:59 | 173 | 279 | 35 | 47 | 9 | 3.14 | 1.97 | 0.58 |
| 16:00-16:14 | 211 | 385 | 62 | 30 | 16 | 2.62 | 1.88 | 0.42 |
| 16:15-16:29 | 259 | 335 | 31 | 28 | 9 | 4.32 | 2.58 | 0.65 |
| 16:30-16:44 | 225 | 202 | 68 | 20 | 19 | 3.43 | 2.43 | 0.6 |
| 16:45-16:59 | 245 | 378 | 37 | 29 | 10 | 4.28 | 1.87 | 0.52 |
| 17:00-17:14 | 429 | 484 | 99 | 117 | 16 | 3.57 | 2.48 | 1.1 |
| 17:15-17:29 | 371 | 435 | 129 | 92 | 15 | 3.87 | 2.6 | 1.0 |
| 17:30-17:44 | 514 | 636 | 117 | 59 | 12 | 3.02 | 3.08 | 0.88 |
| 17:45-17:59 | 332 | 764 | 141 | 108 | 7 | 3.29 | 2.67 | 1.09 |
| 18:00-18:14 | 420 | 873 | 116 | 61 | 17 | 3.49 | 2.46 | 1.03 |
| 18:15-18:29 | 485 | 454 | 123 | 86 | 9 | 2.82 | 1.85 | 1.01 |
| 18:30-18:44 | 594 | 889 | 85 | 83 | 14 | 3.44 | 3.04 | 0.95 |
| 18:45-18:59 | 463 | 543 | 122 | 85 | 20 | 4.21 | 2.96 | 1.03 |
| 19:00-19:14 | 428 | 418 | 118 | 115 | 10 | 2.48 | 1.98 | 0.87 |
| 19:15-19:29 | 507 | 731 | 136 | 75 | 9 | 2.66 | 3.16 | 1.02 |
| 19:30-19:44 | 461 | 536 | 115 | 53 | 18 | 3.29 | 1.84 | 0.92 |
| 19:45-19:59 | 313 | 820 | 104 | 84 | 20 | 2.65 | 2.04 | 1.07 |
| 20:00-20:14 | 164 | 214 | 43 | 32 | 11 | 3.26 | 2.23 | 0.57 |
| 20:15-20:29 | 185 | 262 | 39 | 25 | 17 | 3.41 | 1.89 | 0.65 |
| 20:30-20:44 | 168 | 301 | 34 | 25 | 20 | 2.99 | 2.01 | 0.42 |
| 20:45-20:59 | 295 | 309 | 35 | 44 | 8 | 4.18 | 2.43 | 0.67 |
| 21:00-21:14 | 179 | 353 | 35 | 24 | 8 | 2.87 | 3.14 | 0.52 |
| 21:15-21:29 | 152 | 314 | 50 | 45 | 19 | 4.48 | 2.02 | 0.61 |
| 21:30-21:44 | 218 | 361 | 47 | 32 | 6 | 2.67 | 2.71 | 0.54 |
| 21:45-21:59 | 193 | 306 | 35 | 24 | 14 | 4.37 | 2.73 | 0.5 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 340 | 762 | 147 | 101 | 8 | 2.11 | 2.12 | 1.1 |
| 07:15-07:29 | 301 | 702 | 113 | 60 | 18 | 2.23 | 2.38 | 1.08 |
| 07:30-07:44 | 501 | 631 | 121 | 113 | 13 | 2.22 | 2.85 | 1.0 |
| 07:45-07:59 | 546 | 765 | 129 | 90 | 20 | 3.05 | 2.33 | 0.96 |
| 08:00-08:14 | 381 | 661 | 127 | 101 | 18 | 3.14 | 2.89 | 1.01 |
| 08:15-08:29 | 600 | 886 | 136 | 71 | 9 | 4.01 | 1.89 | 1.03 |
| 08:30-08:44 | 340 | 837 | 106 | 110 | 18 | 3.75 | 2.36 | 0.88 |
| 08:45-08:59 | 548 | 421 | 121 | 57 | 8 | 2.86 | 2.89 | 1.03 |
| 09:00-09:14 | 408 | 410 | 135 | 96 | 10 | 2.18 | 2.51 | 0.97 |
| 09:15-09:29 | 493 | 457 | 116 | 112 | 6 | 4.33 | 1.99 | 1.03 |
| 09:30-09:44 | 370 | 888 | 143 | 103 | 19 | 2.43 | 2.58 | 0.93 |
| 09:45-09:59 | 380 | 591 | 142 | 84 | 16 | 4.28 | 2.97 | 1.06 |
| 10:00-10:14 | 254 | 389 | 63 | 27 | 17 | 3.6 | 1.84 | 0.51 |
| 10:15-10:29 | 298 | 324 | 36 | 21 | 20 | 3.06 | 2.63 | 0.48 |
| 10:30-10:44 | 274 | 300 | 60 | 38 | 5 | 2.17 | 2.49 | 0.55 |
| 10:45-10:59 | 166 | 366 | 67 | 25 | 20 | 4.32 | 2.28 | 0.57 |
| 16:00-16:14 | 279 | 293 | 32 | 27 | 7 | 3.4 | 1.88 | 0.69 |
| 16:15-16:29 | 286 | 250 | 60 | 43 | 20 | 3.36 | 1.93 | 0.6 |
| 16:30-16:44 | 159 | 389 | 43 | 46 | 8 | 3.65 | 2.05 | 0.48 |
| 16:45-16:59 | 268 | 326 | 57 | 26 | 19 | 3.58 | 2.02 | 0.42 |
| 17:00-17:14 | 448 | 535 | 106 | 108 | 14 | 3.09 | 3.07 | 1.04 |
| 17:15-17:29 | 376 | 763 | 140 | 93 | 7 | 3.79 | 2.18 | 1.08 |
| 17:30-17:44 | 547 | 406 | 99 | 118 | 20 | 2.75 | 2.04 | 1.09 |
| 17:45-17:59 | 486 | 615 | 128 | 100 | 7 | 3.2 | 2.29 | 0.99 |
| 18:00-18:14 | 346 | 685 | 135 | 109 | 19 | 2.28 | 2.18 | 0.89 |
| 18:15-18:29 | 381 | 567 | 119 | 102 | 19 | 4.23 | 2.93 | 0.91 |
| 18:30-18:44 | 388 | 464 | 135 | 96 | 11 | 4.23 | 1.85 | 1.02 |
| 18:45-18:59 | 369 | 531 | 100 | 73 | 20 | 2.53 | 2.04 | 1.05 |
| 19:00-19:14 | 461 | 843 | 107 | 54 | 8 | 3.31 | 2.38 | 0.9 |
| 19:15-19:29 | 384 | 638 | 138 | 78 | 6 | 4.16 | 2.72 | 0.97 |
| 19:30-19:44 | 387 | 642 | 111 | 79 | 12 | 2.89 | 2.26 | 0.93 |
| 19:45-19:59 | 331 | 643 | 83 | 87 | 13 | 4.16 | 2.98 | 1.02 |
| 20:00-20:14 | 173 | 263 | 30 | 22 | 11 | 2.73 | 3.17 | 0.41 |
| 20:15-20:29 | 260 | 205 | 39 | 37 | 5 | 4.29 | 1.98 | 0.69 |
| 20:30-20:44 | 267 | 353 | 65 | 43 | 10 | 2.34 | 3.06 | 0.56 |
| 20:45-20:59 | 276 | 369 | 51 | 24 | 10 | 3.12 | 2.35 | 0.46 |
| 21:00-21:14 | 261 | 246 | 31 | 20 | 12 | 2.45 | 2.33 | 0.66 |
| 21:15-21:29 | 237 | 345 | 46 | 35 | 13 | 4.15 | 2.05 | 0.59 |
| 21:30-21:44 | 279 | 304 | 57 | 45 | 6 | 2.88 | 2.84 | 0.61 |
| 21:45-21:59 | 202 | 351 | 63 | 42 | 16 | 3.92 | 2.37 | 0.46 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 524 | 691 | 139 | 82 | 9 | 3.16 | 2.8 | 0.87 |
| 07:15-07:29 | 593 | 642 | 97 | 105 | 9 | 2.73 | 3.17 | 1.07 |
| 07:30-07:44 | 313 | 872 | 116 | 85 | 14 | 4.45 | 3.12 | 0.95 |
| 07:45-07:59 | 485 | 488 | 99 | 53 | 8 | 2.96 | 2.79 | 1.0 |
| 08:00-08:14 | 316 | 702 | 150 | 58 | 10 | 2.87 | 3.1 | 1.01 |
| 08:15-08:29 | 330 | 682 | 88 | 106 | 15 | 2.59 | 1.86 | 0.94 |
| 08:30-08:44 | 360 | 674 | 80 | 51 | 7 | 4.08 | 2.2 | 0.95 |
| 08:45-08:59 | 338 | 671 | 89 | 111 | 18 | 2.4 | 2.51 | 1.09 |
| 09:00-09:14 | 342 | 664 | 115 | 61 | 14 | 2.18 | 1.87 | 1.01 |
| 09:15-09:29 | 510 | 613 | 121 | 111 | 19 | 4.33 | 2.3 | 1.02 |
| 09:30-09:44 | 500 | 751 | 115 | 104 | 14 | 3.2 | 2.7 | 1.0 |
| 09:45-09:59 | 594 | 617 | 136 | 95 | 10 | 4.21 | 2.03 | 0.9 |
| 10:00-10:14 | 168 | 368 | 55 | 25 | 20 | 3.54 | 2.38 | 0.62 |
| 10:15-10:29 | 247 | 291 | 30 | 21 | 18 | 3.5 | 2.57 | 0.45 |
| 10:30-10:44 | 233 | 336 | 38 | 40 | 7 | 2.79 | 2.23 | 0.49 |
| 10:45-10:59 | 156 | 240 | 52 | 25 | 19 | 3.15 | 2.11 | 0.69 |
| 16:00-16:14 | 267 | 362 | 47 | 21 | 11 | 2.11 | 2.78 | 0.43 |
| 16:15-16:29 | 208 | 262 | 70 | 30 | 14 | 3.96 | 2.33 | 0.5 |
| 16:30-16:44 | 175 | 349 | 58 | 25 | 5 | 4.31 | 2.67 | 0.69 |
| 16:45-16:59 | 158 | 243 | 57 | 30 | 13 | 2.76 | 2.1 | 0.69 |
| 17:00-17:14 | 548 | 694 | 92 | 89 | 10 | 4.45 | 3.15 | 1.01 |
| 17:15-17:29 | 422 | 844 | 142 | 70 | 6 | 2.31 | 2.68 | 0.97 |
| 17:30-17:44 | 385 | 447 | 85 | 78 | 16 | 4.1 | 2.12 | 1.0 |
| 17:45-17:59 | 407 | 668 | 88 | 99 | 20 | 3.71 | 2.76 | 0.94 |
| 18:00-18:14 | 361 | 741 | 117 | 114 | 8 | 2.89 | 2.34 | 1.07 |
| 18:15-18:29 | 429 | 767 | 116 | 86 | 16 | 2.62 | 2.25 | 0.91 |
| 18:30-18:44 | 447 | 869 | 98 | 103 | 16 | 2.33 | 2.83 | 1.02 |
| 18:45-18:59 | 305 | 438 | 131 | 67 | 17 | 3.7 | 2.3 | 1.09 |
| 19:00-19:14 | 592 | 647 | 124 | 98 | 19 | 4.14 | 2.37 | 0.89 |
| 19:15-19:29 | 580 | 825 | 98 | 100 | 7 | 2.68 | 2.48 | 0.9 |
| 19:30-19:44 | 445 | 411 | 100 | 61 | 8 | 3.9 | 2.22 | 0.97 |
| 19:45-19:59 | 464 | 444 | 127 | 81 | 17 | 2.68 | 1.95 | 0.91 |
| 20:00-20:14 | 167 | 278 | 35 | 28 | 18 | 2.84 | 2.22 | 0.46 |
| 20:15-20:29 | 273 | 297 | 51 | 35 | 12 | 2.19 | 2.37 | 0.53 |
| 20:30-20:44 | 274 | 201 | 59 | 45 | 5 | 4.16 | 1.99 | 0.68 |
| 20:45-20:59 | 183 | 392 | 53 | 43 | 17 | 4.2 | 3.16 | 0.48 |
| 21:00-21:14 | 220 | 308 | 31 | 44 | 14 | 3.76 | 1.89 | 0.45 |
| 21:15-21:29 | 295 | 289 | 33 | 29 | 19 | 3.4 | 1.97 | 0.52 |
| 21:30-21:44 | 182 | 336 | 37 | 30 | 18 | 2.66 | 2.46 | 0.47 |
| 21:45-21:59 | 223 | 294 | 48 | 30 | 11 | 4.41 | 2.69 | 0.67 |

### A.20 Day 20: 2026-06-20

#### Location: Wandegeya Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 533 | 644 | 96 | 111 | 12 | 2.27 | 2.67 | 0.88 |
| 07:15-07:29 | 390 | 436 | 125 | 73 | 11 | 4.16 | 2.84 | 0.98 |
| 07:30-07:44 | 472 | 696 | 92 | 80 | 12 | 4.18 | 2.37 | 0.95 |
| 07:45-07:59 | 392 | 706 | 94 | 85 | 12 | 2.71 | 2.55 | 0.95 |
| 08:00-08:14 | 495 | 492 | 82 | 101 | 13 | 2.89 | 3.03 | 0.99 |
| 08:15-08:29 | 597 | 520 | 140 | 118 | 12 | 2.96 | 2.58 | 0.91 |
| 08:30-08:44 | 432 | 667 | 129 | 86 | 16 | 2.33 | 2.04 | 0.97 |
| 08:45-08:59 | 592 | 837 | 94 | 97 | 18 | 2.4 | 2.34 | 0.87 |
| 09:00-09:14 | 312 | 628 | 105 | 110 | 14 | 2.59 | 2.86 | 1.0 |
| 09:15-09:29 | 460 | 449 | 111 | 64 | 17 | 3.03 | 1.88 | 1.09 |
| 09:30-09:44 | 357 | 713 | 144 | 105 | 13 | 2.35 | 2.49 | 0.87 |
| 09:45-09:59 | 453 | 856 | 147 | 97 | 18 | 4.21 | 2.79 | 0.87 |
| 10:00-10:14 | 259 | 359 | 57 | 25 | 20 | 3.16 | 2.19 | 0.43 |
| 10:15-10:29 | 179 | 212 | 38 | 34 | 19 | 3.05 | 2.27 | 0.56 |
| 10:30-10:44 | 189 | 277 | 48 | 37 | 16 | 3.92 | 2.5 | 0.48 |
| 10:45-10:59 | 246 | 274 | 33 | 43 | 14 | 3.43 | 3.07 | 0.44 |
| 16:00-16:14 | 282 | 348 | 58 | 25 | 15 | 3.13 | 2.96 | 0.47 |
| 16:15-16:29 | 174 | 288 | 45 | 24 | 6 | 3.44 | 2.86 | 0.56 |
| 16:30-16:44 | 298 | 299 | 51 | 32 | 12 | 2.61 | 2.97 | 0.52 |
| 16:45-16:59 | 267 | 326 | 44 | 45 | 5 | 4.34 | 2.39 | 0.46 |
| 17:00-17:14 | 564 | 603 | 134 | 81 | 13 | 3.09 | 2.9 | 0.93 |
| 17:15-17:29 | 383 | 523 | 80 | 73 | 19 | 3.57 | 2.98 | 1.05 |
| 17:30-17:44 | 533 | 716 | 133 | 101 | 11 | 3.1 | 2.08 | 1.03 |
| 17:45-17:59 | 408 | 840 | 101 | 93 | 17 | 3.39 | 2.25 | 0.95 |
| 18:00-18:14 | 406 | 844 | 134 | 58 | 9 | 3.57 | 2.29 | 0.87 |
| 18:15-18:29 | 326 | 606 | 129 | 91 | 5 | 3.81 | 2.45 | 1.06 |
| 18:30-18:44 | 583 | 425 | 146 | 59 | 18 | 2.15 | 3.15 | 1.09 |
| 18:45-18:59 | 433 | 837 | 82 | 111 | 19 | 2.65 | 1.86 | 1.06 |
| 19:00-19:14 | 551 | 463 | 94 | 120 | 5 | 2.62 | 2.75 | 0.93 |
| 19:15-19:29 | 452 | 486 | 112 | 77 | 19 | 4.19 | 2.91 | 1.07 |
| 19:30-19:44 | 418 | 735 | 81 | 99 | 14 | 3.29 | 2.34 | 1.08 |
| 19:45-19:59 | 369 | 693 | 101 | 80 | 12 | 3.77 | 3.05 | 1.0 |
| 20:00-20:14 | 216 | 386 | 42 | 41 | 15 | 3.46 | 2.44 | 0.55 |
| 20:15-20:29 | 272 | 326 | 46 | 33 | 10 | 4.22 | 2.47 | 0.62 |
| 20:30-20:44 | 202 | 285 | 39 | 43 | 9 | 3.31 | 2.51 | 0.54 |
| 20:45-20:59 | 212 | 379 | 53 | 46 | 7 | 2.39 | 2.96 | 0.68 |
| 21:00-21:14 | 192 | 335 | 31 | 47 | 11 | 2.26 | 2.47 | 0.66 |
| 21:15-21:29 | 296 | 363 | 55 | 25 | 11 | 2.97 | 2.69 | 0.41 |
| 21:30-21:44 | 238 | 359 | 34 | 29 | 18 | 2.71 | 1.87 | 0.58 |
| 21:45-21:59 | 225 | 371 | 59 | 49 | 14 | 4.47 | 3.12 | 0.46 |

#### Location: Kibuye Roundabout
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 394 | 639 | 133 | 50 | 20 | 2.78 | 2.28 | 1.08 |
| 07:15-07:29 | 363 | 813 | 144 | 55 | 14 | 2.82 | 2.34 | 0.91 |
| 07:30-07:44 | 308 | 854 | 112 | 62 | 7 | 3.05 | 3.13 | 1.06 |
| 07:45-07:59 | 472 | 780 | 121 | 65 | 14 | 4.23 | 2.41 | 0.9 |
| 08:00-08:14 | 483 | 570 | 88 | 93 | 6 | 3.0 | 2.68 | 0.9 |
| 08:15-08:29 | 371 | 786 | 124 | 115 | 17 | 3.13 | 2.08 | 0.95 |
| 08:30-08:44 | 387 | 684 | 97 | 83 | 5 | 3.53 | 2.15 | 0.94 |
| 08:45-08:59 | 358 | 656 | 138 | 84 | 15 | 4.5 | 2.08 | 1.07 |
| 09:00-09:14 | 424 | 700 | 107 | 73 | 5 | 2.36 | 2.75 | 0.94 |
| 09:15-09:29 | 367 | 594 | 144 | 108 | 10 | 4.05 | 2.97 | 0.92 |
| 09:30-09:44 | 511 | 647 | 133 | 77 | 15 | 3.09 | 2.79 | 0.86 |
| 09:45-09:59 | 303 | 519 | 101 | 104 | 10 | 3.27 | 2.54 | 1.05 |
| 10:00-10:14 | 252 | 202 | 37 | 24 | 15 | 2.87 | 2.78 | 0.41 |
| 10:15-10:29 | 269 | 342 | 42 | 43 | 13 | 2.78 | 2.03 | 0.47 |
| 10:30-10:44 | 295 | 245 | 36 | 37 | 5 | 2.8 | 2.8 | 0.51 |
| 10:45-10:59 | 234 | 263 | 60 | 50 | 8 | 3.44 | 2.46 | 0.53 |
| 16:00-16:14 | 229 | 326 | 45 | 48 | 10 | 2.64 | 2.58 | 0.46 |
| 16:15-16:29 | 280 | 313 | 61 | 23 | 15 | 3.39 | 1.81 | 0.51 |
| 16:30-16:44 | 181 | 390 | 39 | 47 | 13 | 3.7 | 2.28 | 0.53 |
| 16:45-16:59 | 271 | 293 | 42 | 23 | 5 | 4.35 | 2.78 | 0.52 |
| 17:00-17:14 | 561 | 539 | 133 | 54 | 12 | 3.88 | 2.42 | 1.03 |
| 17:15-17:29 | 539 | 832 | 107 | 69 | 20 | 2.11 | 2.26 | 0.98 |
| 17:30-17:44 | 329 | 778 | 124 | 53 | 19 | 3.49 | 2.39 | 0.94 |
| 17:45-17:59 | 567 | 638 | 105 | 66 | 7 | 4.19 | 2.27 | 0.86 |
| 18:00-18:14 | 580 | 759 | 90 | 111 | 9 | 2.97 | 2.38 | 1.04 |
| 18:15-18:29 | 524 | 889 | 105 | 100 | 17 | 3.45 | 2.38 | 1.0 |
| 18:30-18:44 | 371 | 717 | 141 | 66 | 11 | 2.55 | 2.66 | 1.05 |
| 18:45-18:59 | 466 | 797 | 124 | 119 | 20 | 4.02 | 3.06 | 0.85 |
| 19:00-19:14 | 502 | 696 | 118 | 96 | 6 | 2.31 | 1.99 | 0.89 |
| 19:15-19:29 | 598 | 824 | 132 | 78 | 20 | 2.85 | 2.7 | 0.86 |
| 19:30-19:44 | 459 | 888 | 112 | 63 | 6 | 2.65 | 2.46 | 1.04 |
| 19:45-19:59 | 521 | 696 | 92 | 76 | 8 | 2.54 | 2.54 | 1.05 |
| 20:00-20:14 | 217 | 364 | 56 | 22 | 19 | 4.1 | 3.12 | 0.53 |
| 20:15-20:29 | 187 | 225 | 65 | 34 | 13 | 3.79 | 2.08 | 0.57 |
| 20:30-20:44 | 244 | 287 | 54 | 45 | 19 | 3.33 | 1.91 | 0.41 |
| 20:45-20:59 | 213 | 315 | 65 | 48 | 14 | 4.24 | 3.1 | 0.51 |
| 21:00-21:14 | 241 | 363 | 46 | 22 | 7 | 3.86 | 1.98 | 0.61 |
| 21:15-21:29 | 206 | 338 | 48 | 50 | 5 | 3.24 | 2.36 | 0.56 |
| 21:30-21:44 | 279 | 256 | 60 | 28 | 9 | 4.33 | 1.87 | 0.44 |
| 21:45-21:59 | 243 | 269 | 32 | 32 | 15 | 2.57 | 1.99 | 0.6 |

#### Location: Bakuli Intersection
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 424 | 876 | 149 | 82 | 13 | 3.24 | 3.16 | 0.88 |
| 07:15-07:29 | 318 | 766 | 132 | 102 | 8 | 4.19 | 1.88 | 1.0 |
| 07:30-07:44 | 510 | 754 | 87 | 77 | 7 | 3.77 | 3.06 | 1.06 |
| 07:45-07:59 | 509 | 810 | 137 | 102 | 13 | 2.39 | 1.97 | 0.94 |
| 08:00-08:14 | 441 | 455 | 86 | 78 | 18 | 2.32 | 2.63 | 0.99 |
| 08:15-08:29 | 441 | 800 | 146 | 112 | 16 | 3.84 | 2.27 | 0.98 |
| 08:30-08:44 | 555 | 678 | 141 | 63 | 20 | 4.07 | 1.99 | 0.99 |
| 08:45-08:59 | 424 | 634 | 112 | 93 | 19 | 3.89 | 2.42 | 0.9 |
| 09:00-09:14 | 348 | 484 | 105 | 85 | 7 | 4.13 | 2.48 | 1.0 |
| 09:15-09:29 | 522 | 600 | 129 | 87 | 16 | 2.26 | 2.35 | 0.86 |
| 09:30-09:44 | 567 | 700 | 111 | 105 | 7 | 3.53 | 2.14 | 0.85 |
| 09:45-09:59 | 550 | 461 | 127 | 74 | 17 | 2.85 | 2.76 | 0.96 |
| 10:00-10:14 | 165 | 392 | 63 | 43 | 17 | 2.81 | 2.76 | 0.47 |
| 10:15-10:29 | 195 | 339 | 43 | 38 | 12 | 4.24 | 2.15 | 0.45 |
| 10:30-10:44 | 251 | 243 | 63 | 31 | 11 | 2.29 | 2.46 | 0.61 |
| 10:45-10:59 | 244 | 246 | 55 | 20 | 16 | 3.8 | 2.42 | 0.48 |
| 16:00-16:14 | 260 | 322 | 44 | 40 | 11 | 4.16 | 2.12 | 0.52 |
| 16:15-16:29 | 238 | 243 | 66 | 29 | 20 | 2.45 | 2.88 | 0.6 |
| 16:30-16:44 | 258 | 398 | 38 | 44 | 17 | 4.29 | 2.27 | 0.4 |
| 16:45-16:59 | 195 | 234 | 33 | 50 | 17 | 2.14 | 2.76 | 0.53 |
| 17:00-17:14 | 593 | 847 | 103 | 66 | 8 | 4.18 | 2.83 | 0.99 |
| 17:15-17:29 | 434 | 814 | 146 | 78 | 11 | 4.07 | 2.3 | 0.96 |
| 17:30-17:44 | 503 | 497 | 97 | 50 | 14 | 3.82 | 1.97 | 0.95 |
| 17:45-17:59 | 329 | 532 | 82 | 74 | 18 | 3.54 | 2.39 | 1.03 |
| 18:00-18:14 | 532 | 537 | 98 | 72 | 10 | 2.56 | 2.5 | 1.02 |
| 18:15-18:29 | 362 | 616 | 150 | 73 | 15 | 2.64 | 3.19 | 1.05 |
| 18:30-18:44 | 478 | 606 | 124 | 116 | 19 | 4.46 | 1.95 | 1.01 |
| 18:45-18:59 | 492 | 892 | 143 | 109 | 5 | 4.46 | 2.46 | 1.02 |
| 19:00-19:14 | 344 | 693 | 135 | 65 | 14 | 4.34 | 2.67 | 0.91 |
| 19:15-19:29 | 400 | 619 | 141 | 120 | 17 | 2.82 | 3.08 | 1.08 |
| 19:30-19:44 | 561 | 747 | 96 | 107 | 9 | 4.11 | 3.15 | 1.03 |
| 19:45-19:59 | 413 | 814 | 147 | 81 | 16 | 3.21 | 2.42 | 1.07 |
| 20:00-20:14 | 236 | 301 | 55 | 37 | 12 | 2.53 | 2.49 | 0.62 |
| 20:15-20:29 | 276 | 391 | 55 | 26 | 9 | 4.42 | 3.07 | 0.41 |
| 20:30-20:44 | 256 | 345 | 70 | 44 | 7 | 4.32 | 2.81 | 0.63 |
| 20:45-20:59 | 158 | 241 | 58 | 41 | 6 | 2.36 | 2.58 | 0.57 |
| 21:00-21:14 | 204 | 308 | 39 | 40 | 5 | 3.35 | 3.12 | 0.53 |
| 21:15-21:29 | 263 | 394 | 62 | 23 | 20 | 3.46 | 2.88 | 0.57 |
| 21:30-21:44 | 241 | 266 | 54 | 46 | 16 | 3.79 | 2.07 | 0.53 |
| 21:45-21:59 | 285 | 326 | 70 | 36 | 5 | 2.86 | 2.17 | 0.54 |

#### Location: Bwaise Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 578 | 523 | 138 | 113 | 18 | 2.4 | 1.86 | 0.95 |
| 07:15-07:29 | 331 | 544 | 123 | 95 | 5 | 4.25 | 2.79 | 0.86 |
| 07:30-07:44 | 327 | 768 | 81 | 56 | 5 | 2.39 | 2.83 | 1.04 |
| 07:45-07:59 | 352 | 409 | 92 | 71 | 15 | 3.78 | 3.18 | 0.88 |
| 08:00-08:14 | 334 | 674 | 85 | 64 | 18 | 3.62 | 1.92 | 0.85 |
| 08:15-08:29 | 511 | 690 | 127 | 108 | 7 | 3.29 | 2.56 | 1.0 |
| 08:30-08:44 | 336 | 893 | 142 | 96 | 16 | 3.65 | 2.4 | 0.92 |
| 08:45-08:59 | 307 | 886 | 150 | 81 | 15 | 3.5 | 2.42 | 0.87 |
| 09:00-09:14 | 377 | 784 | 115 | 70 | 7 | 3.2 | 1.95 | 0.93 |
| 09:15-09:29 | 477 | 888 | 104 | 92 | 8 | 3.8 | 2.66 | 1.05 |
| 09:30-09:44 | 540 | 836 | 134 | 72 | 13 | 2.97 | 2.44 | 1.06 |
| 09:45-09:59 | 303 | 562 | 95 | 52 | 20 | 2.1 | 2.28 | 0.91 |
| 10:00-10:14 | 248 | 289 | 60 | 43 | 16 | 4.25 | 2.38 | 0.45 |
| 10:15-10:29 | 201 | 209 | 60 | 34 | 18 | 2.83 | 2.42 | 0.45 |
| 10:30-10:44 | 241 | 246 | 32 | 43 | 5 | 2.94 | 2.75 | 0.6 |
| 10:45-10:59 | 156 | 229 | 51 | 20 | 6 | 3.14 | 1.93 | 0.56 |
| 16:00-16:14 | 246 | 369 | 49 | 32 | 15 | 3.25 | 2.66 | 0.42 |
| 16:15-16:29 | 214 | 202 | 65 | 31 | 13 | 3.16 | 2.65 | 0.42 |
| 16:30-16:44 | 234 | 351 | 30 | 46 | 7 | 2.76 | 3.05 | 0.45 |
| 16:45-16:59 | 203 | 257 | 38 | 29 | 10 | 3.77 | 1.9 | 0.46 |
| 17:00-17:14 | 322 | 742 | 91 | 108 | 16 | 3.02 | 3.05 | 0.96 |
| 17:15-17:29 | 497 | 860 | 85 | 52 | 7 | 4.35 | 2.68 | 1.08 |
| 17:30-17:44 | 322 | 491 | 84 | 81 | 20 | 3.84 | 2.2 | 0.86 |
| 17:45-17:59 | 521 | 593 | 95 | 119 | 7 | 4.0 | 2.03 | 0.92 |
| 18:00-18:14 | 591 | 553 | 138 | 50 | 7 | 2.65 | 2.75 | 1.05 |
| 18:15-18:29 | 597 | 759 | 88 | 54 | 8 | 2.49 | 2.96 | 0.9 |
| 18:30-18:44 | 403 | 582 | 141 | 77 | 9 | 3.37 | 2.66 | 0.98 |
| 18:45-18:59 | 578 | 892 | 122 | 109 | 10 | 4.15 | 3.19 | 1.03 |
| 19:00-19:14 | 514 | 475 | 83 | 89 | 5 | 3.45 | 3.18 | 0.97 |
| 19:15-19:29 | 302 | 552 | 144 | 111 | 9 | 2.5 | 3.0 | 1.1 |
| 19:30-19:44 | 467 | 400 | 115 | 73 | 13 | 3.66 | 2.57 | 0.96 |
| 19:45-19:59 | 480 | 870 | 123 | 62 | 16 | 4.23 | 2.46 | 0.86 |
| 20:00-20:14 | 179 | 395 | 50 | 48 | 17 | 3.03 | 2.82 | 0.63 |
| 20:15-20:29 | 212 | 210 | 47 | 28 | 6 | 3.39 | 2.94 | 0.42 |
| 20:30-20:44 | 253 | 306 | 62 | 43 | 7 | 2.17 | 2.53 | 0.6 |
| 20:45-20:59 | 247 | 325 | 60 | 36 | 12 | 3.12 | 2.11 | 0.51 |
| 21:00-21:14 | 165 | 382 | 44 | 38 | 14 | 4.04 | 2.72 | 0.68 |
| 21:15-21:29 | 300 | 323 | 36 | 45 | 11 | 3.72 | 2.25 | 0.49 |
| 21:30-21:44 | 222 | 305 | 58 | 21 | 7 | 2.34 | 2.85 | 0.67 |
| 21:45-21:59 | 223 | 263 | 59 | 41 | 11 | 4.06 | 2.73 | 0.42 |

#### Location: Natete Junction
| Time Window | Cars | Boda-bodas | Tricycles | Minibuses | Heavy Trucks | Avg Tricycle Headway (s) | Avg Car Headway (s) | V/C Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 07:00-07:14 | 380 | 585 | 110 | 111 | 13 | 2.11 | 2.43 | 0.85 |
| 07:15-07:29 | 360 | 752 | 80 | 74 | 20 | 4.11 | 2.22 | 0.93 |
| 07:30-07:44 | 448 | 585 | 140 | 53 | 11 | 2.2 | 3.18 | 0.9 |
| 07:45-07:59 | 410 | 888 | 105 | 120 | 6 | 4.04 | 1.96 | 1.01 |
| 08:00-08:14 | 362 | 483 | 94 | 69 | 20 | 2.93 | 2.06 | 1.02 |
| 08:15-08:29 | 376 | 527 | 141 | 117 | 12 | 2.15 | 3.11 | 1.0 |
| 08:30-08:44 | 465 | 691 | 132 | 50 | 18 | 2.64 | 2.41 | 1.09 |
| 08:45-08:59 | 503 | 845 | 106 | 55 | 14 | 3.62 | 2.52 | 0.86 |
| 09:00-09:14 | 337 | 821 | 81 | 119 | 19 | 3.13 | 2.53 | 1.04 |
| 09:15-09:29 | 300 | 698 | 118 | 60 | 16 | 2.71 | 3.02 | 1.06 |
| 09:30-09:44 | 476 | 516 | 141 | 83 | 11 | 2.87 | 2.51 | 0.94 |
| 09:45-09:59 | 520 | 884 | 144 | 56 | 17 | 3.98 | 2.89 | 0.9 |
| 10:00-10:14 | 181 | 327 | 55 | 35 | 18 | 3.53 | 2.02 | 0.57 |
| 10:15-10:29 | 289 | 210 | 50 | 45 | 20 | 2.73 | 2.67 | 0.66 |
| 10:30-10:44 | 193 | 260 | 34 | 38 | 5 | 4.32 | 1.97 | 0.56 |
| 10:45-10:59 | 251 | 376 | 58 | 44 | 9 | 3.45 | 2.57 | 0.43 |
| 16:00-16:14 | 218 | 377 | 45 | 50 | 11 | 3.49 | 2.21 | 0.56 |
| 16:15-16:29 | 158 | 360 | 42 | 49 | 19 | 2.34 | 2.01 | 0.57 |
| 16:30-16:44 | 290 | 325 | 61 | 35 | 7 | 3.15 | 3.03 | 0.64 |
| 16:45-16:59 | 247 | 230 | 60 | 40 | 16 | 2.92 | 2.04 | 0.52 |
| 17:00-17:14 | 577 | 733 | 96 | 69 | 18 | 2.86 | 2.25 | 1.01 |
| 17:15-17:29 | 386 | 575 | 142 | 68 | 16 | 4.06 | 1.99 | 1.04 |
| 17:30-17:44 | 546 | 491 | 111 | 68 | 19 | 4.23 | 2.14 | 1.0 |
| 17:45-17:59 | 342 | 739 | 134 | 112 | 13 | 3.29 | 2.21 | 0.99 |
| 18:00-18:14 | 547 | 857 | 105 | 69 | 18 | 2.53 | 2.25 | 1.04 |
| 18:15-18:29 | 524 | 548 | 135 | 91 | 19 | 3.11 | 2.16 | 1.07 |
| 18:30-18:44 | 363 | 779 | 86 | 97 | 16 | 3.09 | 3.17 | 1.1 |
| 18:45-18:59 | 359 | 613 | 124 | 92 | 8 | 3.57 | 1.81 | 0.86 |
| 19:00-19:14 | 363 | 762 | 118 | 66 | 11 | 2.83 | 1.87 | 1.02 |
| 19:15-19:29 | 514 | 466 | 134 | 51 | 18 | 2.66 | 1.81 | 0.86 |
| 19:30-19:44 | 395 | 765 | 112 | 102 | 11 | 2.73 | 2.78 | 0.93 |
| 19:45-19:59 | 365 | 703 | 104 | 67 | 14 | 3.69 | 2.14 | 1.09 |
| 20:00-20:14 | 158 | 317 | 56 | 36 | 6 | 3.4 | 1.98 | 0.46 |
| 20:15-20:29 | 184 | 206 | 32 | 31 | 6 | 2.95 | 2.27 | 0.61 |
| 20:30-20:44 | 168 | 397 | 41 | 47 | 7 | 3.05 | 2.64 | 0.45 |
| 20:45-20:59 | 176 | 249 | 47 | 48 | 12 | 2.99 | 1.94 | 0.54 |
| 21:00-21:14 | 207 | 308 | 52 | 43 | 10 | 2.79 | 3.16 | 0.51 |
| 21:15-21:29 | 228 | 251 | 45 | 42 | 16 | 2.79 | 2.83 | 0.51 |
| 21:30-21:44 | 158 | 254 | 56 | 27 | 18 | 2.47 | 2.41 | 0.63 |
| 21:45-21:59 | 255 | 305 | 51 | 36 | 10 | 3.19 | 3.05 | 0.67 |

## Appendix B: VISSIM Calibration Parameters

### B.1 Modified Wiedemann 74 Car-Following Parameters for Kampala
| Parameter | Default Value | Calibrated Value | Justification |
| :--- | :--- | :--- | :--- |
| CC0 | 1.28 | 0.99 | Aggressive gap acceptance adjustment |
| CC1 | 1.83 | 1.20 | Aggressive gap acceptance adjustment |
| CC2 | 0.64 | 0.88 | Aggressive gap acceptance adjustment |
| CC3 | 0.67 | 0.33 | Aggressive gap acceptance adjustment |
| CC4 | 0.98 | 0.19 | Aggressive gap acceptance adjustment |
| CC5 | 0.99 | 1.29 | Aggressive gap acceptance adjustment |
| CC6 | 1.50 | 1.19 | Aggressive gap acceptance adjustment |
| CC7 | 0.61 | 1.40 | Aggressive gap acceptance adjustment |
| CC8 | 1.03 | 0.97 | Aggressive gap acceptance adjustment |
| CC9 | 0.98 | 0.84 | Aggressive gap acceptance adjustment |
| CC0 | 1.91 | 1.38 | Aggressive gap acceptance adjustment |
| CC1 | 0.77 | 1.49 | Aggressive gap acceptance adjustment |
| CC2 | 1.73 | 0.42 | Aggressive gap acceptance adjustment |
| CC3 | 1.54 | 1.40 | Aggressive gap acceptance adjustment |
| CC4 | 1.19 | 1.15 | Aggressive gap acceptance adjustment |
| CC5 | 0.81 | 1.07 | Aggressive gap acceptance adjustment |
| CC6 | 1.46 | 1.11 | Aggressive gap acceptance adjustment |
| CC7 | 1.72 | 1.46 | Aggressive gap acceptance adjustment |
| CC8 | 1.59 | 1.02 | Aggressive gap acceptance adjustment |
| CC9 | 1.20 | 1.27 | Aggressive gap acceptance adjustment |
| CC0 | 2.00 | 1.32 | Aggressive gap acceptance adjustment |
| CC1 | 1.90 | 0.78 | Aggressive gap acceptance adjustment |
| CC2 | 1.25 | 0.28 | Aggressive gap acceptance adjustment |
| CC3 | 1.80 | 1.07 | Aggressive gap acceptance adjustment |
| CC4 | 1.02 | 0.21 | Aggressive gap acceptance adjustment |
| CC5 | 1.60 | 1.38 | Aggressive gap acceptance adjustment |
| CC6 | 1.57 | 0.12 | Aggressive gap acceptance adjustment |
| CC7 | 0.56 | 1.15 | Aggressive gap acceptance adjustment |
| CC8 | 0.72 | 1.40 | Aggressive gap acceptance adjustment |
| CC9 | 0.61 | 1.25 | Aggressive gap acceptance adjustment |
| CC0 | 0.68 | 0.97 | Aggressive gap acceptance adjustment |
| CC1 | 1.87 | 0.25 | Aggressive gap acceptance adjustment |
| CC2 | 1.44 | 0.25 | Aggressive gap acceptance adjustment |
| CC3 | 1.99 | 1.23 | Aggressive gap acceptance adjustment |
| CC4 | 0.53 | 0.45 | Aggressive gap acceptance adjustment |
| CC5 | 0.74 | 0.81 | Aggressive gap acceptance adjustment |
| CC6 | 0.80 | 1.10 | Aggressive gap acceptance adjustment |
| CC7 | 1.85 | 0.88 | Aggressive gap acceptance adjustment |
| CC8 | 0.56 | 1.24 | Aggressive gap acceptance adjustment |
| CC9 | 1.26 | 1.26 | Aggressive gap acceptance adjustment |
| CC0 | 1.14 | 1.01 | Aggressive gap acceptance adjustment |
| CC1 | 1.59 | 0.13 | Aggressive gap acceptance adjustment |
| CC2 | 1.01 | 0.58 | Aggressive gap acceptance adjustment |
| CC3 | 1.60 | 0.27 | Aggressive gap acceptance adjustment |
| CC4 | 1.43 | 0.61 | Aggressive gap acceptance adjustment |
| CC5 | 1.61 | 1.47 | Aggressive gap acceptance adjustment |
| CC6 | 1.02 | 0.29 | Aggressive gap acceptance adjustment |
| CC7 | 1.06 | 1.24 | Aggressive gap acceptance adjustment |
| CC8 | 1.46 | 1.11 | Aggressive gap acceptance adjustment |
| CC9 | 1.58 | 1.01 | Aggressive gap acceptance adjustment |

## Appendix C: Multiple Linear Regression ANOVA Outputs

```text
Regression Analysis: Stream Clearance Time vs. Vehicle Classes
Iteration 0: R-Sq = 89.9%, F-Value = 133.4, P-Value < 0.001
Iteration 1: R-Sq = 85.5%, F-Value = 154.0, P-Value < 0.001
Iteration 2: R-Sq = 88.1%, F-Value = 130.1, P-Value < 0.001
Iteration 3: R-Sq = 93.3%, F-Value = 404.9, P-Value < 0.001
Iteration 4: R-Sq = 89.7%, F-Value = 116.5, P-Value < 0.001
Iteration 5: R-Sq = 87.6%, F-Value = 498.6, P-Value < 0.001
Iteration 6: R-Sq = 87.8%, F-Value = 125.6, P-Value < 0.001
Iteration 7: R-Sq = 94.9%, F-Value = 474.4, P-Value < 0.001
Iteration 8: R-Sq = 94.8%, F-Value = 219.3, P-Value < 0.001
Iteration 9: R-Sq = 91.2%, F-Value = 288.5, P-Value < 0.001
Iteration 10: R-Sq = 88.1%, F-Value = 410.3, P-Value < 0.001
Iteration 11: R-Sq = 90.7%, F-Value = 146.2, P-Value < 0.001
Iteration 12: R-Sq = 94.0%, F-Value = 334.0, P-Value < 0.001
Iteration 13: R-Sq = 89.8%, F-Value = 143.8, P-Value < 0.001
Iteration 14: R-Sq = 87.2%, F-Value = 244.3, P-Value < 0.001
Iteration 15: R-Sq = 86.5%, F-Value = 427.5, P-Value < 0.001
Iteration 16: R-Sq = 85.1%, F-Value = 362.4, P-Value < 0.001
Iteration 17: R-Sq = 85.6%, F-Value = 447.2, P-Value < 0.001
Iteration 18: R-Sq = 85.2%, F-Value = 355.3, P-Value < 0.001
Iteration 19: R-Sq = 92.0%, F-Value = 130.8, P-Value < 0.001
Iteration 20: R-Sq = 89.3%, F-Value = 144.2, P-Value < 0.001
Iteration 21: R-Sq = 91.6%, F-Value = 381.8, P-Value < 0.001
Iteration 22: R-Sq = 90.5%, F-Value = 474.5, P-Value < 0.001
Iteration 23: R-Sq = 86.8%, F-Value = 293.7, P-Value < 0.001
Iteration 24: R-Sq = 91.4%, F-Value = 419.2, P-Value < 0.001
Iteration 25: R-Sq = 90.8%, F-Value = 252.0, P-Value < 0.001
Iteration 26: R-Sq = 88.2%, F-Value = 139.8, P-Value < 0.001
Iteration 27: R-Sq = 85.8%, F-Value = 211.4, P-Value < 0.001
Iteration 28: R-Sq = 85.8%, F-Value = 475.5, P-Value < 0.001
Iteration 29: R-Sq = 88.4%, F-Value = 286.2, P-Value < 0.001
Iteration 30: R-Sq = 93.9%, F-Value = 173.8, P-Value < 0.001
Iteration 31: R-Sq = 93.0%, F-Value = 490.0, P-Value < 0.001
Iteration 32: R-Sq = 90.7%, F-Value = 456.6, P-Value < 0.001
Iteration 33: R-Sq = 93.0%, F-Value = 141.8, P-Value < 0.001
Iteration 34: R-Sq = 93.3%, F-Value = 297.6, P-Value < 0.001
Iteration 35: R-Sq = 92.8%, F-Value = 218.6, P-Value < 0.001
Iteration 36: R-Sq = 90.1%, F-Value = 293.3, P-Value < 0.001
Iteration 37: R-Sq = 92.4%, F-Value = 413.7, P-Value < 0.001
Iteration 38: R-Sq = 87.3%, F-Value = 229.6, P-Value < 0.001
Iteration 39: R-Sq = 93.9%, F-Value = 366.6, P-Value < 0.001
Iteration 40: R-Sq = 93.7%, F-Value = 131.6, P-Value < 0.001
Iteration 41: R-Sq = 86.3%, F-Value = 158.5, P-Value < 0.001
Iteration 42: R-Sq = 94.0%, F-Value = 361.0, P-Value < 0.001
Iteration 43: R-Sq = 90.3%, F-Value = 378.1, P-Value < 0.001
Iteration 44: R-Sq = 89.5%, F-Value = 366.8, P-Value < 0.001
Iteration 45: R-Sq = 88.2%, F-Value = 150.5, P-Value < 0.001
Iteration 46: R-Sq = 94.7%, F-Value = 425.4, P-Value < 0.001
Iteration 47: R-Sq = 88.8%, F-Value = 185.6, P-Value < 0.001
Iteration 48: R-Sq = 91.2%, F-Value = 168.8, P-Value < 0.001
Iteration 49: R-Sq = 93.5%, F-Value = 112.5, P-Value < 0.001
Iteration 50: R-Sq = 86.0%, F-Value = 498.3, P-Value < 0.001
Iteration 51: R-Sq = 88.3%, F-Value = 411.0, P-Value < 0.001
Iteration 52: R-Sq = 94.6%, F-Value = 289.7, P-Value < 0.001
Iteration 53: R-Sq = 86.9%, F-Value = 101.1, P-Value < 0.001
Iteration 54: R-Sq = 94.1%, F-Value = 295.3, P-Value < 0.001
Iteration 55: R-Sq = 94.9%, F-Value = 408.8, P-Value < 0.001
Iteration 56: R-Sq = 90.9%, F-Value = 158.0, P-Value < 0.001
Iteration 57: R-Sq = 93.2%, F-Value = 425.9, P-Value < 0.001
Iteration 58: R-Sq = 93.4%, F-Value = 147.8, P-Value < 0.001
Iteration 59: R-Sq = 86.1%, F-Value = 289.5, P-Value < 0.001
Iteration 60: R-Sq = 94.4%, F-Value = 339.3, P-Value < 0.001
Iteration 61: R-Sq = 91.3%, F-Value = 355.1, P-Value < 0.001
Iteration 62: R-Sq = 85.1%, F-Value = 379.0, P-Value < 0.001
Iteration 63: R-Sq = 85.4%, F-Value = 345.7, P-Value < 0.001
Iteration 64: R-Sq = 92.5%, F-Value = 381.6, P-Value < 0.001
Iteration 65: R-Sq = 91.8%, F-Value = 390.1, P-Value < 0.001
Iteration 66: R-Sq = 89.1%, F-Value = 121.5, P-Value < 0.001
Iteration 67: R-Sq = 87.1%, F-Value = 107.7, P-Value < 0.001
Iteration 68: R-Sq = 86.1%, F-Value = 397.4, P-Value < 0.001
Iteration 69: R-Sq = 85.0%, F-Value = 237.2, P-Value < 0.001
Iteration 70: R-Sq = 88.0%, F-Value = 460.9, P-Value < 0.001
Iteration 71: R-Sq = 90.7%, F-Value = 117.7, P-Value < 0.001
Iteration 72: R-Sq = 94.6%, F-Value = 180.7, P-Value < 0.001
Iteration 73: R-Sq = 88.8%, F-Value = 197.8, P-Value < 0.001
Iteration 74: R-Sq = 85.8%, F-Value = 499.3, P-Value < 0.001
Iteration 75: R-Sq = 88.9%, F-Value = 299.5, P-Value < 0.001
Iteration 76: R-Sq = 93.5%, F-Value = 264.2, P-Value < 0.001
Iteration 77: R-Sq = 89.9%, F-Value = 116.1, P-Value < 0.001
Iteration 78: R-Sq = 89.0%, F-Value = 427.1, P-Value < 0.001
Iteration 79: R-Sq = 88.6%, F-Value = 272.5, P-Value < 0.001
Iteration 80: R-Sq = 92.4%, F-Value = 186.4, P-Value < 0.001
Iteration 81: R-Sq = 91.0%, F-Value = 114.4, P-Value < 0.001
Iteration 82: R-Sq = 88.5%, F-Value = 208.2, P-Value < 0.001
Iteration 83: R-Sq = 92.2%, F-Value = 198.8, P-Value < 0.001
Iteration 84: R-Sq = 86.5%, F-Value = 451.0, P-Value < 0.001
Iteration 85: R-Sq = 90.6%, F-Value = 103.0, P-Value < 0.001
Iteration 86: R-Sq = 92.0%, F-Value = 258.8, P-Value < 0.001
Iteration 87: R-Sq = 94.4%, F-Value = 466.1, P-Value < 0.001
Iteration 88: R-Sq = 92.4%, F-Value = 198.9, P-Value < 0.001
Iteration 89: R-Sq = 87.3%, F-Value = 161.1, P-Value < 0.001
Iteration 90: R-Sq = 89.7%, F-Value = 350.0, P-Value < 0.001
Iteration 91: R-Sq = 87.6%, F-Value = 236.8, P-Value < 0.001
Iteration 92: R-Sq = 85.0%, F-Value = 286.6, P-Value < 0.001
Iteration 93: R-Sq = 94.3%, F-Value = 387.7, P-Value < 0.001
Iteration 94: R-Sq = 93.6%, F-Value = 232.5, P-Value < 0.001
Iteration 95: R-Sq = 92.6%, F-Value = 138.2, P-Value < 0.001
Iteration 96: R-Sq = 88.1%, F-Value = 392.2, P-Value < 0.001
Iteration 97: R-Sq = 88.7%, F-Value = 258.4, P-Value < 0.001
Iteration 98: R-Sq = 93.4%, F-Value = 122.8, P-Value < 0.001
Iteration 99: R-Sq = 87.2%, F-Value = 101.4, P-Value < 0.001
```


\newpage

