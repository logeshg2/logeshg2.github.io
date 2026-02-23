---
permalink: /projects_and_competitions/
title: "Projects and Competitions"
---

## Projects

### Visual Servoing - Precise Assembly

I am currently working on robot manipulators (Fanuc LR Mate 200id 4s to be specific) to perform useful tasks like assembly and house hold tasks using visual servoing.

<!-- [![demo video](../assets/images/vs_fanuc.png)](https://youtu.be/xhDitOjOgP4?si=rT_XWNHFYGiVujal) -->

{% include video id="xhDitOjOgP4" provider="youtube" %}

Fanuc LR Mate ROS2 Driver: <a href="https://github.com/logeshg2/fanuc_ros2_drivers" target="_blank">ROS2 Driver Repo</a>
<br> 
Visual Servoing Pkg: <a href="https://github.com/logeshg2/visual-servoing-pkg" target="_blank">Visua Servoing Pkg</a>

---

### SCARA Robotic Arm

I developed an autonomous SCARA robot capable of picking parcel packages from a tote and placing them on a conveyor in a warehouse environment. The entire operation is hardcoded in Python, and the robot uses the YOLOv8 object detection algorithm to accurately detect parcels.

This project provided me with hands-on experience in applying inverse kinematics for a 2DOF robotic arm and integrating various hardware components, such as cameras and robotic arms, with software to perform specific tasks effectively.

<!-- <a href="https://github.com/logeshg2/SCARA-Shape-Sorter" target="_blank"><img src="/assets/images/scara_img.png" alt="shape sorter scara"></a> -->

{% include video id="pxm8bvZ1m_0" provider="youtube" %}

For more information check: <a href="https://github.com/logeshg2/Autonomous_pick_and_place_robot" target="_blank">Project Repo</a>

---

### BCN-3D Moveo Robotic Arm

My team and I built the open source BCN-3D Moveo robotic arm. Where I contributed by developing the software part in this project. I developed the Moveo model in Robotics Toolbox which enabled IK, FK, and trajectory planning algorithms. I have used ROS1 framework the communication between the different sub-systems.

<!-- <a href="https://youtu.be/r1xQ_Y04pLA?si=p7QPUlimRWkuEtJb" target="_blank"><img src="/assets/images/img.jpg" alt="moveo robot arm"></a> -->

{% include video id="r1xQ_Y04pLA" provider="youtube" %}

For more information check: <a href="https://github.com/logeshg2/Moveo_5-DOF_Software"> Project Repo </a>

---

### Robotic Manipulators (Fanuc Robotic Arm)

I worked on developing the robot model and high level software control for Fanuc Robotic arm (LR Mate 200iD 4s model). Documentation and demo can be seen here: <a href="https://github.com/logeshg2/LR_Mate_200iD_4S-Robot-Model/" target="_blank">Project Repo</a> .

<!-- [![fanuc robot](https://img.youtube.com/vi/GiFRFGhvIwU/0.jpg)](https://www.youtube.com/watch?v=GiFRFGhvIwU) -->

{% include video id="GiFRFGhvIwU" provider="youtube" %}

---

## Competitions

### RoboCup ARM Challenge 2024 - Finalist (Team: Log Robotics) 

<!-- <a href="http://www.youtube.com/watch?v=y-bqcrgRPyc&t=6s" target="_blank"><img src="/assets/images/arm_2024.png" alt="arm challenge image"></a> -->

{% include video id="y-bqcrgRPyc" provider="youtube" %}

I developed the complete perception and control stack for the RoboCup ARM Challenge 2024. The objective was to pick and sort objects such as bottles, cans, and pouches based on their color and label. I utilized MATLAB tools to build the project’s code base, incorporating a custom fine-tuned YOLOv4 object detector and object pose estimation through Principal Component Analysis (PCA) for the perception stack.

My submission was selected as one of the top 6 finalists in the 2024 competition.

For more information check: <a href="http://www.youtube.com/watch?v=y-bqcrgRPyc&t=6s" target="_blank">Submission Video</a>

---

### F1TENTH Sim Racing - Phase 1 Qualified (Team: Log Robotics) 

<!-- <a href="https://www.youtube.com/watch?v=nB4EuUxQzng" target="_blank"><img src="/assets/images/sim_racing_2024.jpg" alt="frame_sim_racing"></a> -->

{% include video id="nB4EuUxQzng" provider="youtube" %}

I developed a wall-following algorithm for the 1st F1Tenth Sim Racing League. The algorithm was implemented using ROS2 and Python.

My docker image of the algorithm can be found here: <a href="https://hub.docker.com/r/logeshg2/log_robotics_api" target="_blank">My docker repo Link</a>

Qualification round performance: <a href="https://youtu.be/SzUYifnIKxE?si=eqaUzJYM-I6juQCV" target="_blank">Link</a> | 
Demo Video: <a href="https://www.youtube.com/watch?v=nB4EuUxQzng" target="_blank">Link</a>

---

### Autonomous Drones

![Screenshot from 2024-08-22 21-05-34](https://github.com/user-attachments/assets/e4a0dfed-5104-4f85-96d9-e328a4b5f394)

I have experience working on the computer vision component of an autonomous drone, including some drone control using the DroneKit library. My work primarily involves simulating YOLOv8 algorithms in a Gazebo environment, with a focus on basic object tracking and detection tasks. 

For more information check: <a href="https://github.com/logeshg2/autonomous_drone_py/" target="_blank">Project Repo</a>
