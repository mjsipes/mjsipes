# pytorch_notebooks


### TL;DR

PyTorch is really cool. I spent a lot of time over the summer diving deep into PyTorch through a series of Colab notebooks. Ask me what any one line of code in these notebooks does... I will know.


### Introduction

I’ve always loved photography. I have a website where I post my photos of stars, clouds, and the earth. To me, cameras are tools that offer different perspectives on the world, whether it’s a tiny camera attached to a drone or a large one planted on a tripod looking up at the stars. Regardless of the equipment, I love capturing moments that make people stop and say, “Whoa!”

During my sophomore year of college, DALL-E 2 came out, and trying it for the first time was jaw-dropping. It was like magic—an incredible blend of art and technology. As both a computer science major and a photographer, I was instantly inspired to learn more about how AI works. That summer, I discovered PyTorch and quickly realized it could be my gateway to understanding AI. I had just completed a data structures and algorithms class, and I finally felt ready to dive deeper into coding on my own.

I found a 24-hour YouTube tutorial by Daniele Burke on PyTorch, and it was both challenging and fundamental. I was hooked. I started learning about neural networks, convolutional neural networks, long short-term memory units, and transformer models.

My goal quickly became clear: I wanted to understand an AI model line by line in the code, knowing exactly what was happening at every step.


### My Experimentation with PyTorch

This collection of PyTorch notebooks reflects my experimentation and growth. They demonstrate my ability to tackle small but meaningful tasks, with a level of detail and control that helped me truly understand the underlying mechanics.

For example, LinearRegression.ipynb is a simple linear regression model—like one you might run on a calculator—but I spent weeks playing with this notebook. I meticulously read through PyTorch documentation and consulted ChatGPT to understand how everything works and explore different approaches.

I experimented with:

Controlling the training data: adjusting the slope and y-intercept, the number of data points, and whether to feed the data to the model in a scrambled order.
Does scrambling the data make a difference? I wanted to find out.
Fine-tuning the model itself: deciding the number of parameters, how they should be connected, and whether they should be initialized randomly, set to zero, or assigned other values.
I also focused on understanding the training process. I loved examining the output of the training cell, which allowed me to see every parameter in the model and track how values and gradients changed from one step to the next.

**MatrixRegression.ipynb** is set up almost identically to **LinearRegression.ipynb**, but it explores a different question: *How does adding random noise into a neural network impact the way it trains?*

To investigate this, I used the same `x` and `y` values for the training data as in the linear regression model, but with a twist: for every `x` input value, I added three additional randomly generated inputs. These random inputs were each tied to their own weights, and I ran the model under these conditions.

My assumption was that the weights associated with the random inputs would eventually learn a value of 0, given that these inputs had no correlation with the output. The key question I wanted to answer was: *Would introducing these random inputs affect the way the gradient is calculated for the weight attached to the original `x` input?*

**LinearRegression.ipynb** training
<img width="800" alt="image" src="https://github.com/user-attachments/assets/bc81d6d2-7f6b-4d25-81ee-52c3964286c4">

**MatrixRegression.ipynb** training
<img width="800" alt="image" src="https://github.com/user-attachments/assets/6b925a98-01c8-49e3-8e6c-a425c77b91fd">

**LinearRegression.ipynb** results
<img width="800" alt="image" src="https://github.com/user-attachments/assets/8fe1d896-5c83-4a24-917d-963efcd362d2">

**MatrixRegression.ipynb** results
<img width="800" alt="image" src="https://github.com/user-attachments/assets/22bc0908-e705-48c0-ad75-002256bd90e1">

**Features.ipynb** is a notebook that fascinates me because it prompted me to think about machine learning in the context of problem-solving. What is the ultimate goal of artificial intelligence? To solve problems. For example, a linear regression model can solve any problem involving a straight line on a 2D plane. That's incredible! The next step is to solve problems involving curved lines.

So, what is artificial superintelligence? In line with this analogy, I think artificial superintelligence would be AI that can solve any problem, essentially predicting the future.

This concept aligns with how we train our best AI models today. Large language models (LLMs), for instance, are trained to predict the next word in a sequence — in a way, they are predicting the future! If artificial superintelligence were to exist, it might resemble a function where, given the current conditions of our universe, we could predict future events (*is this determinism?*).

However, **Features.ipynb** focuses on the second level of this idea: *How can I design an AI model to solve the problem of a curved line, such as* `y = x^2`? A model with just two parameters (one weight and one bias) can't solve this problem. This is where I learned about non-linearity, specifically ReLU (Rectified Linear Unit).

My questions centered around ideas like:
- How many ReLUs or parameters are needed to approximate a polynomial function, an exponential function, or a sine function with a certain level of accuracy?
- I’m not sure which field of mathematics this falls under, but it was a fun exploration.

Another tangent I explored was: What type of features should you feed into a neural network? Should you provide it with all the information you possibly can? Should you augment existing inputs in intelligent ways to create non-linear insights and provide both to the model? Or should you avoid unnecessary input features to prevent confusing the neural network?

**Features.ipynb** results when fitting to a curved line with curved features
<img width="869" alt="image" src="https://github.com/user-attachments/assets/13f51a38-a232-40c8-8aaf-698ec30bf592">

**Features.ipynb** results when fitting to a curved line with out curved features
<img width="862" alt="image" src="https://github.com/user-attachments/assets/ecbf8321-1fb4-4194-b301-8092baf70dad">
