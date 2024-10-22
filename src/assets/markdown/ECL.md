# AAE 590 ECL: Estimation and Controls Lab

**Professor**: Dr. Ran Dai

In the AAE 590 Estimation and Controls Lab, I gained hands-on experience with essential concepts in autonomy, focusing on estimation, control, and optimization. The course emphasized the integration of these core areas into practical applications, specifically through the execution of unmanned missions. I collaborated with with <a href="https://www.linkedin.com/in/shashank-namboodiri/" target="_blank" title="LinkedIn">Shashank Namboodiri</a>,  <a href="https://www.linkedin.com/in/adityakini/" target="_blank" title="LinkedIn">Aditya Kini</a> and Jittipat Shobbakbun to develop and implement various estimation schemes to track the motion of mobile objects, design classical and optimal control laws to guide robotic systems, and apply numerical optimization algorithms for path planning. 

In future labs, we will explore cooperative control schemes, enabling multi-agent systems to collaborate in mission-critical tasks. This experience was further enhanced by constructing, programming, and testing robotic systems to perform designated tasks, bridging the gap between theoretical knowledge and real-world autonomous applications.

**Lab : Obstacle avoidance and path planning**

In this lab, we implement the A* algorithm to plan a path for the robot to reach a predefined end goal while avoiding the obstacle. The video below shows real time obstacle avoidance where in thr robot recalculates its path as certain way points everytime the obstacle is lifted off the ground and moved. The location of the robot and the obstacle is measured using cameras, and the robot is controls autonomously. Additionally, the speed and heading of the robot is controlled using PID controllers that we created and tested in previous labs. 

<video width="320" height="240" controls muted>
  <source src="assets\images\lab3.mp4" type="video/mp4">
</video>

**Lab : Control of multigent system**

In this lab, we implement the consensus formation theory to make a equilateral triangle using 3 robots. The algorithm works starting from any initial points, and can be seen in the video below. 
<video width="320" height="240" controls muted>
  <source src="assets\images\lab4_1.mp4" type="video/mp4">
</video>

A bonus feature allows a leader to make the other robots follow it, and can be seen in the video below. 
<video width="320" height="240" controls muted>
  <source src="assets\images\lab4_2.mp4" type="video/mp4">
</video>
