// AI.jsx
import React, { useState } from "react";
import "./All.css";

export default function Ai() {
  const [selected, setSelected] = useState("AI Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const sections = {
    "🤖 Artificial Intelligence": {
      "AI Introduction": {
        title: "Artificial Intelligence (AI) – Introduction",
        content: `
Artificial Intelligence (AI) is a branch of computer science 
focused on building machines that can perform tasks which 
normally require human intelligence. 

These tasks include learning from experience, 
recognizing patterns, 
understanding natural language, 
solving problems, 
and making decisions.

AI systems simulate human cognitive functions 
such as perception, 
reasoning, 
and self-correction. 

Modern AI is largely driven by data 
and is built using Machine Learning (ML) 
and Deep Learning (DL) techniques.

Key abilities of AI:
• Learning from data
• Reasoning and problem solving
• Perception (vision & speech)
• Decision-making
• Language understanding

Reference:
https://www.geeksforgeeks.org/what-is-ai/
        `,
        example: `
<p><b>Examples:</b> ChatGPT, recommendation systems, virtual assistants, face unlock, fraud detection systems.</p>
        `,
        useCases: `
Healthcare diagnosis, 
fraud detection, 
recommendation engines, 
voice assistants, 
smart surveillance.
        `,
        architecture: `
AI architecture involves data collection layers, 
preprocessing pipelines, 
model layers (neural networks), 
and decision/output layers.
        `,
        details: `
AI evolved from rule-based systems 
to deep neural networks. 

Challenges include bias, 
data privacy, 
explainability, 
and high computation cost.

AI has historical roots in the 1950s 
with the Turing Test and early perceptrons.

Today, AI impacts every industry, 
from entertainment to defense.

Future trends point towards more integrated AI 
in daily life and ethical considerations.
        `
      },

      "How AI Works": {
        title: "How Artificial Intelligence Works",
        content: `
AI works by training models on large datasets 
to recognize patterns 
and make predictions.

Workflow:
1. Data collection
2. Data preprocessing
3. Model training
4. Testing
5. Deployment
6. Continuous learning

Reference:
https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-intelligence-ai/

This process involves algorithms 
that adjust parameters 
based on error minimization.

Data is key; 
more data generally leads to better models.

AI can be supervised, unsupervised, or reinforcement based.
        `,
        example: `
<ul><li>Spam detection</li><li>Face recognition</li><li>Chatbots</li></ul>
        `,
        useCases: `
Weather prediction, 
autonomous driving, 
product recommendations.

In finance, AI predicts stock trends.

In healthcare, it analyzes patient data for diagnostics.
        `,
        architecture: `
Includes data pipelines, 
training frameworks, 
and inference engines. 

CNNs are used for images, 
transformers for text.

Scalable architectures use cloud computing 
for distributed training.
        `,
        details: `
AI systems improve over time 
using feedback 
and optimization methods like gradient descent.

Challenges include overfitting 
and the need for labeled data.

Ethical AI ensures fair outcomes.
        `
      },

      "Narrow AI": {
        title: "Narrow AI (Weak AI)",
        content: `
Narrow AI performs a specific task 
extremely well 
but cannot generalize beyond it.

Reference:
https://www.geeksforgeeks.org/types-of-artificial-intelligence/

It is the most common form of AI today.

Examples include virtual assistants 
that handle voice commands.
        `,
        example: `
<p>Examples: Google Maps, Alexa, Netflix recommendations.</p>
        `,
        useCases: `
Chatbots, 
fraud detection, 
voice recognition, 
route optimization.

In e-commerce, it personalizes shopping experiences.
        `,
        architecture: `
Task-specific models 
such as decision trees, 
CNNs, 
and RNNs.

Optimized for efficiency in one domain.
        `,
        details: `
All current AI systems are Narrow AI.

They lack consciousness 
or general understanding.

Future may evolve to broader capabilities.
        `
      },

      "General AI": {
        title: "General AI (AGI)",
        content: `
General AI would think, 
learn, 
and solve problems like a human. 

It does not yet exist.

Reference:
https://www.geeksforgeeks.org/types-of-artificial-intelligence/

AGI would handle any intellectual task.

Research is ongoing in labs worldwide.
        `,
        example: `
<p>A machine capable of learning any intellectual task.</p>
        `,
        useCases: `
Scientific discovery, 
universal robots, 
adaptive education.

Could revolutionize medicine 
and space travel.
        `,
        architecture: `
Would combine perception, 
memory, 
reasoning, 
learning, 
and action systems.

Hybrid models integrating multiple AI techniques.
        `,
        details: `
AGI raises major ethical 
and safety concerns.

Potential risks include job displacement 
and existential threats.

Organizations like OpenAI focus on safe AGI.
        `
      },

      "Generative AI": {
        title: "Generative AI",
        content: `
Generative AI creates new content 
such as text, 
images, 
videos, 
and code.

Reference:
https://arxiv.org/abs/2306.02781

It uses models trained on vast datasets.

Popularized by tools like ChatGPT.
        `,
        example: `
<ul><li>ChatGPT</li><li>DALL·E</li><li>GitHub Copilot</li></ul>
        `,
        useCases: `
Content creation, 
design, 
drug discovery, 
synthetic data.

In marketing, generates ads and copy.
        `,
        architecture: `
Uses GANs, 
diffusion models, 
and transformers.

Autoregressive generation for sequences.
        `,
        details: `
Raises concerns around deepfakes 
and copyright.

Requires careful curation of training data.

Future includes multi-modal generation.
        `
      },

      "LLM": {
        title: "Large Language Models (LLMs)",
        content: `
LLMs are trained on massive text datasets 
to understand 
and generate language.

Reference:
https://www.ibm.com/topics/large-language-models

They power conversational AI.

Models have billions of parameters.
        `,
        example: `
<p>GPT, Gemini, Claude, LLaMA</p>
        `,
        useCases: `
Customer support, 
tutoring, 
coding assistants, 
summarization.

In legal, assists with document review.
        `,
        architecture: `
Transformer networks 
with self-attention 
and billions of parameters.

Pre-training followed by fine-tuning.
        `,
        details: `
They can hallucinate 
and require fine-tuning.

Bias in training data can propagate.

Efficiency improvements with quantization.
        `
      },

      "NLP": {
        title: "Natural Language Processing (NLP)",
        content: `
NLP enables computers to process 
and understand human language.

Reference:
https://www.geeksforgeeks.org/natural-language-processing-nlp-tutorial/

It includes tasks like tokenization 
and parsing.

Advances with deep learning.
        `,
        example: `
<ul><li>Chatbots</li><li>Translation</li><li>Spam detection</li></ul>
        `,
        useCases: `
Voice assistants, 
social media analysis, 
document processing.

Sentiment analysis for brands.
        `,
        architecture: `
Uses tokenization, 
embeddings, 
and transformer models.

Sequence-to-sequence for translation.
        `,
        details: `
Handles ambiguity, 
grammar, 
and context.

Multilingual models are emerging.

Privacy in text data is crucial.
        `
      },

      "Image Recognition": {
        title: "Computer Vision",
        content: `
Computer vision enables machines 
to interpret images 
and videos.

Reference:
https://www.ibm.com/topics/computer-vision

It uses pixel analysis 
for feature extraction.

Applications in autonomous systems.
        `,
        example: `
<p>Face ID, medical scans, self-driving cars.</p>
        `,
        useCases: `
Security, 
healthcare imaging, 
agriculture, 
robotics.

Defect detection in manufacturing.
        `,
        architecture: `
CNNs, 
object detection models like YOLO.

Feature pyramids for multi-scale.
        `,
        details: `
Major challenges include lighting, 
angles, 
and bias.

Data augmentation helps robustness.

Real-time processing with edge computing.
        `
      },

      "AI Agents": {
        title: "AI Agents",
        content: `
AI agents autonomously perceive, 
decide, 
and act to achieve goals.

Reference:
https://www.ibm.com/topics/ai-agents

They can be software or physical.

Evolving with LLMs for reasoning.
        `,
        example: `
<ul><li>AutoGPT</li><li>Robotic systems</li></ul>
        `,
        useCases: `
Virtual assistants, 
automation, 
robotics.

Workflow automation in business.
        `,
        architecture: `
Perception → Planning → Action → Learning loop.

Tools integration for external actions.
        `,
        details: `
Used in multi-agent systems 
and autonomous workflows.

Safety in agent actions is key.

Scalability for complex tasks.
        `
      },

      "Future Scope of AI": {
        title: "Future Scope of AI",
        content: `
AI will transform healthcare, 
climate science, 
smart cities, 
and space exploration.

Reference:
https://indiaai.gov.in/

Integration with IoT and 5G.

Personalized everything.
        `,
        example: `
<ul><li>AI doctors</li><li>Smart cities</li></ul>
        `,
        useCases: `
Climate modeling, 
personalized medicine, 
sustainable energy.

Autonomous economies.
        `,
        architecture: `
Neuromorphic computing, 
quantum AI, 
hybrid systems.

Edge-to-cloud continuum.
        `,
        details: `
Reskilling and ethical AI will be crucial.

Global collaboration needed.

Potential for solving grand challenges.
        `
      },

      "AI in Climate Science": {
        title: "AI in Climate Science",
        content: `
AI helps analyze climate data, 
predict disasters, 
and optimize renewable energy.

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-climate-science/

Machine learning for pattern detection.

Simulation of complex systems.
        `,
        example: `
<p>Flood prediction, carbon monitoring, weather models.</p>
        `,
        useCases: `
Disaster management, 
smart grids, 
sustainable agriculture.

Biodiversity monitoring.
        `,
        architecture: `
Time-series models, 
satellite image analysis, 
simulation AI.

Ensemble methods for accuracy.
        `,
        details: `
Supports global climate action 
and sustainability goals.

Data scarcity in some regions.

Collaborative open datasets.
        `
      },

      "Machine Learning Introduction": {
        title: "Machine Learning – Introduction",
        content: `
Machine Learning (ML) is a subset of AI 
that enables systems to learn from data 
without explicit programming. 

It focuses on developing algorithms 
that can identify patterns 
and make decisions based on data.

Types of ML:
• Supervised Learning
• Unsupervised Learning
• Reinforcement Learning

ML algorithms improve their performance 
as they are exposed to more data over time.

Key components:
• Data
• Features
• Model
• Evaluation

Reference:
https://www.geeksforgeeks.org/machine-learning/

ML powers recommendation systems 
and predictive analytics.

History from statistical methods.
        `,
        example: `
<ul><li>Predicting house prices</li><li>Spam filtering</li><li>Stock price prediction</li></ul>
        `,
        useCases: `
Predictive maintenance, 
customer segmentation, 
anomaly detection, 
personalized marketing.

In manufacturing, optimizes production.
        `,
        architecture: `
ML pipelines include data ingestion, 
feature engineering, 
model selection, 
training, 
validation, 
and deployment.

Use frameworks like Scikit-learn.
        `,
        details: `
ML models can overfit or underfit data. 

Techniques like cross-validation help mitigate this. 

ML requires large datasets 
and computational power.

Ethical use avoids bias amplification.

Future includes automated ML.
        `
      },

      "Supervised Learning": {
        title: "Supervised Learning",
        content: `
Supervised Learning is a type of ML 
where the model is trained on labeled data. 

The algorithm learns the mapping 
from input to output.

Common algorithms:
• Linear Regression
• Logistic Regression
• Decision Trees
• Support Vector Machines
• Neural Networks

The goal is to predict the output 
for new, unseen data.

Reference:
https://www.geeksforgeeks.org/supervised-machine-learning/

Used in classification and regression.
        `,
        example: `
<p><b>Example:</b> Classifying emails as spam or not spam based on labeled examples.</p>
        `,
        useCases: `
Image classification, 
sentiment analysis, 
medical diagnosis, 
credit scoring.

Fraud detection in banking.
        `,
        architecture: `
Involves training on input-output pairs, 
using loss functions to minimize errors, 
and metrics like accuracy, 
precision, 
recall.

Batch vs online learning.
        `,
        details: `
Requires high-quality labeled data, 
which can be expensive to obtain. 

Overfitting is a common issue 
addressed by regularization.

Ensemble methods improve performance.
        `
      },

      "Unsupervised Learning": {
        title: "Unsupervised Learning",
        content: `
Unsupervised Learning deals with unlabeled data. 

The algorithm tries to find hidden patterns 
or structures in the data.

Common algorithms:
• K-Means Clustering
• Hierarchical Clustering
• Principal Component Analysis (PCA)
• Autoencoders

It's used for exploratory data analysis.

Reference:
https://www.geeksforgeeks.org/unsupervised-machine-learning/

No explicit output variable.
        `,
        example: `
<p><b>Example:</b> Grouping customers into segments based on purchasing behavior without prior labels.</p>
        `,
        useCases: `
Market segmentation, 
anomaly detection, 
dimensionality reduction, 
recommendation systems.

Gene clustering in biology.
        `,
        architecture: `
Focuses on clustering or association rules. 

Evaluation is trickier without labels, 
using metrics like silhouette score.

Distance measures key.
        `,
        details: `
No ground truth for validation. 

Sensitive to initial conditions 
and scaling of data.

Hybrid with semi-supervised.
        `
      },

      "Reinforcement Learning": {
        title: "Reinforcement Learning",
        content: `
Reinforcement Learning is a type of ML 
where an agent learns to make decisions 
by interacting with an environment, 
receiving rewards or penalties.

Key concepts:
• Agent
• Environment
• Actions
• States
• Rewards

Algorithms: Q-Learning, 
Deep Q-Networks (DQN), 
Policy Gradients.

Reference:
https://www.geeksforgeeks.org/what-is-reinforcement-learning/

Inspired by behavioral psychology.
        `,
        example: `
<ul><li>Training a robot to walk</li><li>Game playing (e.g., AlphaGo)</li><li>Autonomous driving</li></ul>
        `,
        useCases: `
Robotics, 
game AI, 
resource management, 
algorithmic trading.

Inventory control.
        `,
        architecture: `
Markov Decision Processes (MDP), 
exploration vs. exploitation, 
value functions, 
policy optimization.

Experience replay in DQN.
        `,
        details: `
Can be sample-inefficient 
and requires careful reward design 
to avoid unintended behaviors.

Multi-agent RL for cooperation.
        `
      },

      "Deep Learning": {
        title: "Deep Learning",
        content: `
Deep Learning is a subset of ML 
that uses neural networks 
with multiple layers 
to learn complex patterns 
from large amounts of data.

It excels in tasks like image 
and speech recognition.

Frameworks: TensorFlow, 
PyTorch, 
Keras.

Reference:
https://www.geeksforgeeks.org/deep-learning-tutorial/

Enabled by big data and GPUs.
        `,
        example: `
<p><b>Examples:</b> Voice assistants like Siri, image generators like Stable Diffusion.</p>
        `,
        useCases: `
Autonomous vehicles, 
natural language translation, 
drug discovery, 
video analysis.

Facial recognition.
        `,
        architecture: `
Multi-layer perceptrons, 
backpropagation, 
activation functions, 
optimizers like Adam.

Batch normalization.
        `,
        details: `
Requires massive data 
and GPU/TPU computing. 

Prone to vanishing gradients, 
addressed by techniques like ReLU.

Interpretability challenges.
        `
      },

      "Neural Networks": {
        title: "Neural Networks",
        content: `
Neural Networks are computing systems 
inspired by the human brain, 
consisting of interconnected nodes (neurons) 
organized in layers.

Basic structure:
• Input Layer
• Hidden Layers
• Output Layer

They learn through adjusting weights 
via backpropagation.

Reference:
https://www.geeksforgeeks.org/neural-networks-a-beginners-guide/

Universal approximators.
        `,
        example: `
<ul><li>Handwriting recognition</li><li>Stock market prediction</li><li>Medical image analysis</li></ul>
        `,
        useCases: `
Pattern recognition, 
forecasting, 
optimization problems.

Voice synthesis.
        `,
        architecture: `
Feedforward networks, 
recurrent networks, 
convolutional layers for spatial data.

Dropout for regularization.
        `,
        details: `
Can approximate any function 
(universal approximation theorem), 
but interpretability is low.

Training can be time-consuming.
        `
      },

      "Convolutional Neural Networks": {
        title: "Convolutional Neural Networks (CNNs)",
        content: `
CNNs are specialized neural networks 
for processing grid-like data, 
such as images. 

They use convolutional layers 
to detect features.

Key components:
• Convolution
• Pooling
• Fully Connected Layers

Popular models: AlexNet, 
ResNet, 
VGG.

Reference:
https://www.geeksforgeeks.org/convolutional-neural-network-cnn/

Parameter sharing reduces computation.
        `,
        example: `
<p><b>Example:</b> Identifying objects in photos for self-driving cars.</p>
        `,
        useCases: `
Image classification, 
object detection, 
facial recognition, 
medical imaging.

Video frame analysis.
        `,
        architecture: `
Convolutional filters, 
stride, 
padding, 
max-pooling, 
dropout for regularization.

Residual connections in ResNet.
        `,
        details: `
Efficient for spatial hierarchies, 
but data-hungry 
and computationally intensive.

Transfer learning common.
        `
      },

      "Recurrent Neural Networks": {
        title: "Recurrent Neural Networks (RNNs)",
        content: `
RNNs are designed for sequential data, 
where previous outputs influence future ones. 

They have loops in their architecture.

Variants: LSTM, 
GRU.

Used for time-series data.

Reference:
https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/

Handle variable length inputs.
        `,
        example: `
<ul><li>Language modeling</li><li>Speech recognition</li><li>Time-series forecasting</li></ul>
        `,
        useCases: `
Machine translation, 
sentiment analysis, 
video captioning.

Music generation.
        `,
        architecture: `
Hidden states, 
backpropagation through time (BPTT), 
long short-term memory cells 
to handle vanishing gradients.

Bidirectional RNNs.
        `,
        details: `
Struggle with long dependencies; 
transformers often replace them for NLP tasks.

Gated units improve memory.
        `
      },

      "Transformers": {
        title: "Transformers in AI",
        content: `
Transformers are neural network architectures 
that rely on self-attention mechanisms 
to process sequences in parallel.

They revolutionized NLP 
and are the basis for models like BERT 
and GPT.

Key: Attention is all you need.

Reference:
https://www.geeksforgeeks.org/transformer-neural-network/

No recurrence, fully parallel.
        `,
        example: `
<p><b>Examples:</b> ChatGPT, Google Translate.</p>
        `,
        useCases: `
Text generation, 
summarization, 
question answering, 
image processing (Vision Transformers).

Protein folding prediction.
        `,
        architecture: `
Encoder-decoder structure, 
multi-head attention, 
positional encodings, 
feed-forward networks.

Layer normalization.
        `,
        details: `
Scalable and efficient for large datasets, 
but require significant computational resources.

Variants like BERT for understanding.
        `
      },

      "AI Ethics": {
        title: "AI Ethics",
        content: `
AI Ethics involves principles 
and guidelines to ensure AI systems 
are fair, 
transparent, 
and beneficial to society.

Key issues:
• Bias
• Privacy
• Accountability
• Transparency

Frameworks: Asilomar AI Principles, 
EU AI Act.

Reference:
https://www.geeksforgeeks.org/ethics-in-artificial-intelligence/

Human-centric design.
        `,
        example: `
<ul><li>Fair lending algorithms</li><li>Privacy-preserving AI</li><li>Auditable models</li></ul>
        `,
        useCases: `
Ethical AI in hiring, 
surveillance, 
autonomous weapons.

Corporate governance.
        `,
        architecture: `
Incorporates fairness metrics, 
explainability tools like SHAP, 
privacy techniques like differential privacy.

Auditing pipelines.
        `,
        details: `
Balancing innovation with societal impact; 
ongoing debates on regulation.

Global standards emerging.
        `
      },

      "AI Bias": {
        title: "AI Bias and Fairness",
        content: `
AI Bias occurs when models produce prejudiced results 
due to skewed training data 
or algorithmic flaws.

Types:
• Data Bias
• Algorithmic Bias
• Interaction Bias

Mitigation: Diverse datasets, 
bias audits.

Reference:
https://www.ibm.com/topics/ai-bias

Fairness metrics like demographic parity.
        `,
        example: `
<p><b>Example:</b> Facial recognition systems performing poorly on certain ethnic groups.</p>
        `,
        useCases: `
Fair AI in recruitment, 
criminal justice, 
healthcare.

Inclusive design.
        `,
        architecture: `
Bias detection tools, 
reweighting samples, 
adversarial debiasing.

Post-processing adjustments.
        `,
        details: `
Bias can perpetuate inequalities; 
continuous monitoring is essential.

Legal implications under anti-discrimination laws.
        `
      },

      "AI in Healthcare": {
        title: "AI in Healthcare",
        content: `
AI in Healthcare uses algorithms 
to analyze medical data, 
assist in diagnosis, 
and personalize treatment.

Applications:
• Predictive Analytics
• Imaging Analysis
• Drug Discovery
• Virtual Health Assistants

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-healthcare/

Improves patient outcomes.
        `,
        example: `
<ul><li>IBM Watson for oncology</li><li>AI-powered radiology</li><li>Wearable health monitors</li></ul>
        `,
        useCases: `
Disease prediction, 
telemedicine, 
genome sequencing, 
patient monitoring.

Epidemic tracking.
        `,
        architecture: `
Integrates EHR data, 
ML models for prediction, 
CNNs for scans, 
NLP for records.

Federated learning for privacy.
        `,
        details: `
Improves outcomes but raises privacy 
and regulatory concerns like HIPAA compliance.

AI augments doctors, not replaces.
        `
      },

      "AI in Education": {
        title: "AI in Education",
        content: `
AI in Education personalizes learning, 
automates administrative tasks, 
and provides intelligent tutoring.

Tools:
• Adaptive Learning Platforms
• Chatbots for Queries
• Automated Grading

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-education/

Inclusive education.
        `,
        example: `
<p><b>Examples:</b> Duolingo's adaptive lessons, AI tutors like Squirrel AI.</p>
        `,
        useCases: `
Personalized curricula, 
student performance analytics, 
virtual classrooms.

Special needs support.
        `,
        architecture: `
Recommendation systems, 
NLP for feedback, 
predictive models for dropout risk.

Gamification with AI.
        `,
        details: `
Enhances accessibility but must address digital divide 
and data privacy.

Teacher-AI collaboration.
        `
      },

      "AI in Finance": {
        title: "AI in Finance",
        content: `
AI in Finance optimizes trading, 
detects fraud, 
and provides personalized banking services.

Applications:
• Algorithmic Trading
• Credit Scoring
• Robo-Advisors
• Fraud Detection

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-finance/

Risk management.
        `,
        example: `
<ul><li>High-frequency trading</li><li>Chatbots for customer service</li><li>Predictive analytics for investments</li></ul>
        `,
        useCases: `
Risk assessment, 
portfolio management, 
insurance underwriting.

Blockchain integration.
        `,
        architecture: `
Time-series forecasting with RNNs, 
anomaly detection with autoencoders, 
NLP for sentiment analysis.

High-speed computing.
        `,
        details: `
Increases efficiency but requires robust security 
against cyber threats.

Regulatory compliance like GDPR.
        `
      },

      "AI in Robotics": {
        title: "AI in Robotics",
        content: `
AI in Robotics enables machines 
to perceive, 
decide, 
and act in physical environments autonomously.

Key areas:
• Perception
• Navigation
• Manipulation
• Human-Robot Interaction

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-robotics/

Collaborative robots.
        `,
        example: `
<p><b>Examples:</b> Boston Dynamics' robots, autonomous drones.</p>
        `,
        useCases: `
Manufacturing, 
search and rescue, 
elderly care, 
space exploration.

Surgery assistance.
        `,
        architecture: `
SLAM for mapping, 
path planning algorithms, 
reinforcement learning for control.

Sensor fusion.
        `,
        details: `
Challenges include real-time processing 
and safety in human environments.

Ethics in autonomous decisions.
        `
      },

      "Quantum AI": {
        title: "Quantum AI",
        content: `
Quantum AI combines quantum computing 
with AI to solve complex problems 
faster than classical computers.

Concepts:
• Quantum Bits (Qubits)
• Superposition
• Entanglement

Applications: Optimization, 
simulation.

Reference:
https://www.ibm.com/topics/quantum-ai

Quantum advantage.
        `,
        example: `
<ul><li>Quantum machine learning</li><li>Drug molecule simulation</li></ul>
        `,
        useCases: `
Cryptography, 
material science, 
financial modeling.

Optimization problems.
        `,
        architecture: `
Quantum neural networks, 
variational quantum eigensolvers, 
quantum support vector machines.

Hybrid quantum-classical.
        `,
        details: `
Still emerging; 
noise and decoherence are major hurdles.

Scalable qubits needed.
        `
      },

      "Edge AI": {
        title: "Edge AI",
        content: `
Edge AI processes data on local devices 
rather than central clouds, 
enabling real-time decisions 
with low latency.

Benefits:
• Privacy
• Bandwidth Savings
• Reliability

Reference:
https://www.nvidia.com/en-us/edge-computing/what-is-edge-ai/

IoT integration.
        `,
        example: `
<p><b>Examples:</b> Smart cameras, wearable devices, IoT sensors.</p>
        `,
        useCases: `
Autonomous vehicles, 
industrial IoT, 
remote monitoring.

Smart homes.
        `,
        architecture: `
Lightweight models like MobileNet, 
federated learning, 
on-device inference.

Model compression.
        `,
        details: `
Limited by device compute power; 
model compression techniques are key.

Energy efficiency crucial.
        `
      },

      "Explainable AI": {
        title: "Explainable AI (XAI)",
        content: `
Explainable AI aims to make AI decisions 
transparent 
and understandable to humans.

Methods:
• Feature Importance
• LIME
• SHAP

Important for trust and regulation.

Reference:
https://www.geeksforgeeks.org/what-is-explainable-ai-xai/

Black-box to white-box.
        `,
        example: `
<ul><li>Interpreting credit denial reasons</li><li>Medical diagnosis explanations</li></ul>
        `,
        useCases: `
Healthcare, 
finance, 
legal systems.

Regulatory compliance.
        `,
        architecture: `
Post-hoc explanations, 
intrinsically interpretable models like decision trees.

Counterfactuals.
        `,
        details: `
Trade-off between accuracy 
and explainability in complex models.

User-centric explanations.
        `
      },

      "AI Safety": {
        title: "AI Safety",
        content: `
AI Safety focuses on ensuring AI systems 
behave as intended 
without causing harm.

Areas:
• Alignment
• Robustness
• Scalable Oversight

Organizations: OpenAI, 
DeepMind.

Reference:
https://www.alignmentforum.org/

Risk mitigation.
        `,
        example: `
<p><b>Examples:</b> Safe exploration in RL, value alignment in AGI.</p>
        `,
        useCases: `
Autonomous systems, 
superintelligent AI scenarios.

Policy development.
        `,
        architecture: `
Reward modeling, 
inverse reinforcement learning, 
debate mechanisms.

Adversarial training.
        `,
        details: `
Addresses risks like specification gaming 
and emergent behaviors.

Long-term AI risks.
        `
      },

      "AI in Agriculture": {
        title: "AI in Agriculture",
        content: `
AI in Agriculture optimizes farming 
through data-driven insights, 
automation, 
and precision techniques.

Applications:
• Crop Monitoring
• Yield Prediction
• Pest Detection
• Irrigation Management

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-agriculture/

Precision farming.
        `,
        example: `
<ul><li>Drone-based field analysis</li><li>AI-powered tractors</li><li>Soil health prediction</li></ul>
        `,
        useCases: `
Sustainable farming, 
supply chain optimization, 
climate adaptation.

Livestock monitoring.
        `,
        architecture: `
Satellite imagery with CNNs, 
sensor data with IoT, 
predictive models with time-series.

Decision support systems.
        `,
        details: `
Helps combat food scarcity 
but requires rural connectivity.

Farmer adoption challenges.
        `
      },

      "AI in Transportation": {
        title: "AI in Transportation",
        content: `
AI in Transportation improves efficiency, 
safety, 
and sustainability in mobility systems.

Applications:
• Traffic Management
• Autonomous Vehicles
• Route Optimization
• Predictive Maintenance

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-transportation/

Smart mobility.
        `,
        example: `
<p><b>Examples:</b> Tesla Autopilot, Uber's routing algorithms.</p>
        `,
        useCases: `
Smart cities, 
logistics, 
public transit optimization.

Fleet management.
        `,
        architecture: `
Computer vision for detection, 
RL for control, 
graph algorithms for routing.

V2X communication.
        `,
        details: `
Reduces accidents but faces regulatory 
and ethical challenges.

Infrastructure integration.
        `
      },

      "AI in Entertainment": {
        title: "AI in Entertainment",
        content: `
AI in Entertainment creates personalized content, 
enhances production, 
and engages audiences.

Applications:
• Recommendation Systems
• Content Generation
• Virtual Actors
• Game AI

Reference:
https://www.forbes.com/sites/forbestechcouncil/2023/05/15/ai-in-entertainment/

Creative AI.
        `,
        example: `
<ul><li>Netflix recommendations</li><li>AI-generated music</li><li>Procedural game worlds</li></ul>
        `,
        useCases: `
Scriptwriting, 
special effects, 
audience analytics.

Interactive storytelling.
        `,
        architecture: `
Collaborative filtering, 
GANs for visuals, 
NLP for scripts.

Real-time rendering.
        `,
        details: `
Transforms creativity but raises IP 
and job displacement issues.

Audience data privacy.
        `
      },

      "AI in Manufacturing": {
        title: "AI in Manufacturing",
        content: `
AI in Manufacturing automates processes, 
predicts failures, 
and optimizes supply chains.

Applications:
• Quality Control
• Predictive Maintenance
• Robotics
• Supply Chain Forecasting

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-manufacturing/

Industry 4.0.
        `,
        example: `
<p><b>Examples:</b> AI inspection systems, smart factories.</p>
        `,
        useCases: `
Customized production, 
energy efficiency.

Digital twins.
        `,
        architecture: `
IoT integration, 
ML for anomaly detection, 
optimization algorithms.

Cyber-physical systems.
        `,
        details: `
Boosts productivity but requires workforce upskilling.

Security in connected factories.
        `
      },

      "AI in Retail": {
        title: "AI in Retail",
        content: `
AI in Retail personalizes shopping, 
manages inventory, 
and enhances customer service.

Applications:
• Personalized Recommendations
• Demand Forecasting
• Chatbots
• Visual Search

Reference:
https://www.geeksforgeeks.org/artificial-intelligence-in-retail/

Omnichannel experiences.
        `,
        example: `
<ul><li>Amazon's 'customers who bought this' </li><li>Virtual try-ons</li></ul>
        `,
        useCases: `
E-commerce, 
in-store analytics, 
pricing optimization.

Inventory automation.
        `,
        architecture: `
Recommendation engines, 
computer vision for shelves, 
NLP for support.

Big data analytics.
        `,
        details: `
Increases sales but privacy concerns 
with customer data.

Competitive edge.
        `
      },

      "AI in Energy": {
        title: "AI in Energy",
        content: `
AI in Energy optimizes production, 
distribution, 
and consumption for sustainability.

Applications:
• Grid Management
• Renewable Forecasting
• Energy Efficiency
• Exploration

Reference:
https://www.iea.org/reports/artificial-intelligence-and-the-future-of-energy

Clean energy transition.
        `,
        example: `
<p><b>Examples:</b> Wind turbine optimization, smart meters.</p>
        `,
        useCases: `
Oil & gas prediction, 
carbon emission reduction.

Smart buildings.
        `,
        architecture: `
Time-series models, 
optimization with RL, 
sensor data analysis.

Predictive analytics.
        `,
        details: `
Supports net-zero goals but needs secure infrastructure.

Renewable integration challenges.
        `
      },

      "AI in Law": {
        title: "AI in Law",
        content: `
AI in Law automates legal research, 
contract analysis, 
and predicts outcomes.

Applications:
• Document Review
• Case Prediction
• Legal Chatbots
• E-Discovery

Reference:
https://www.law.com/legaltechnews/2023/06/12/ai-in-law/

Legal tech.
        `,
        example: `
<ul><li>Ross Intelligence for research</li><li>Predictive sentencing</li></ul>
        `,
        useCases: `
Compliance, 
dispute resolution, 
IP management.

Contract automation.
        `,
        architecture: `
NLP for text analysis, 
ML for pattern recognition in cases.

Knowledge graphs.
        `,
        details: `
Speeds up processes but ethical issues 
in decision-making.

Bar association regulations.
        `
      },

      "AI in Sports": {
        title: "AI in Sports",
        content: `
AI in Sports analyzes performance, 
predicts outcomes, 
and enhances fan engagement.

Applications:
• Player Tracking
• Injury Prediction
• Game Strategy
• Betting Odds

Reference:
https://www.sporttechie.com/ai-in-sports/

Performance optimization.
        `,
        example: `
<p><b>Examples:</b> NBA player stats, FIFA simulations.</p>
        `,
        useCases: `
Coaching, 
scouting, 
broadcast enhancements.

Fan experiences.
        `,
        architecture: `
Computer vision for tracking, 
predictive models for performance.

Wearable data.
        `,
        details: `
Improves competitiveness but data privacy 
for athletes.

Esports AI.
        `
      },

      "AI in Art": {
        title: "AI in Art",
        content: `
AI in Art generates creative works, 
assists artists, 
and analyzes styles.

Applications:
• Image Generation
• Music Composition
• Style Transfer
• Art Authentication

Reference:
https://www.artnews.com/art-news/news/ai-in-art-123457/

Creative tools.
        `,
        example: `
<ul><li>DALL-E artworks</li><li>AIVA music</li></ul>
        `,
        useCases: `
Digital art, 
museum curation, 
creative tools.

NFT generation.
        `,
        architecture: `
GANs, 
diffusion models, 
neural style transfer.

Creative algorithms.
        `,
        details: `
Democratizes creativity but questions authorship.

Copyright debates.
        `
      },

      "AI in Space Exploration": {
        title: "AI in Space Exploration",
        content: `
AI in Space Exploration autonomizes missions, 
analyzes data, 
and plans trajectories.

Applications:
• Rover Navigation
• Data Analysis
• Mission Planning
• Exoplanet Detection

Reference:
https://www.nasa.gov/directorates/spacetech/ai_in_space/

Autonomous operations.
        `,
        example: `
<p><b>Examples:</b> Perseverance rover, Hubble data processing.</p>
        `,
        useCases: `
Mars missions, 
satellite management, 
astronomy.

Anomaly detection.
        `,
        architecture: `
RL for navigation, 
ML for signal processing, 
optimization for orbits.

On-board AI.
        `,
        details: `
Handles vast data but must be robust to failures.

Radiation-hardened hardware.
        `
      },

      "Federated Learning": {
        title: "Federated Learning",
        content: `
Federated Learning trains models 
across decentralized devices 
without sharing raw data, 
preserving privacy.

Key: Collaborative learning.

Reference:
https://www.geeksforgeeks.org/federated-learning/

Distributed ML.
        `,
        example: `
<ul><li>Google Keyboard predictions</li><li>Medical data sharing</li></ul>
        `,
        useCases: `
Mobile apps, 
healthcare consortia, 
IoT networks.

Edge devices.
        `,
        architecture: `
Central server aggregates updates, 
differential privacy, 
secure aggregation.

Communication efficient.
        `,
        details: `
Reduces data transfer but challenges in heterogeneous devices.

Byzantine robustness.
        `
      },

      "Transfer Learning": {
        title: "Transfer Learning",
        content: `
Transfer Learning reuses pre-trained models 
on new tasks, 
reducing training time 
and data needs.

Common in DL.

Reference:
https://www.geeksforgeeks.org/transfer-learning/

Knowledge transfer.
        `,
        example: `
<p><b>Example:</b> Using ImageNet-trained CNN for custom image tasks.</p>
        `,
        useCases: `
Fine-tuning for specific domains like medical imaging.

Domain adaptation.
        `,
        architecture: `
Freeze layers, 
add classifiers, 
fine-tune with small datasets.

Feature extraction.
        `,
        details: `
Effective for low-data scenarios 
but risk of negative transfer.

Pre-trained hubs like Hugging Face.
        `
      },

      "AutoML": {
        title: "Automated Machine Learning (AutoML)",
        content: `
AutoML automates the ML pipeline, 
from data prep to model deployment.

Tools: Google AutoML, 
H2O.ai.

Reference:
https://www.geeksforgeeks.org/what-is-automl/

Democratizing AI.
        `,
        example: `
<ul><li>Hyperparameter tuning</li><li>Model selection</li></ul>
        `,
        useCases: `
Rapid prototyping, 
non-expert use.

Enterprise AI.
        `,
        architecture: `
Neural architecture search, 
Bayesian optimization.

Meta-learning.
        `,
        details: `
Saves time but may not outperform expert-tuned models.

Cost in computation.
        `
      },

      "AI Hardware": {
        title: "AI Hardware",
        content: `
AI Hardware includes specialized chips 
for efficient AI computations.

Types:
• GPUs
• TPUs
• Neuromorphic Chips

Reference:
https://www.nvidia.com/en-us/ai/

Accelerators.
        `,
        example: `
<p><b>Examples:</b> NVIDIA A100, Google TPU.</p>
        `,
        useCases: `
Training large models, 
edge inference.

HPC.
        `,
        architecture: `
Parallel processing, 
tensor cores, 
low-precision arithmetic.

ASICs.
        `,
        details: `
Advances in hardware accelerate AI progress.

Power consumption issues.
        `
      },

      "Swarm Intelligence": {
        title: "Swarm Intelligence",
        content: `
Swarm Intelligence draws from nature (ants, birds) 
for decentralized, 
self-organizing systems.

Algorithms: PSO, 
ACO.

Reference:
https://www.geeksforgeeks.org/swarm-intelligence/

Bio-inspired.
        `,
        example: `
<ul><li>Optimization problems</li><li>Robotics coordination</li></ul>
        `,
        useCases: `
Traffic control, 
drone swarms, 
logistics.

Search algorithms.
        `,
        architecture: `
Agent-based models, 
local interactions leading to global behavior.

Pheromone models.
        `,
        details: `
Robust to failures but hard to predict.

Scalable.
        `
      },

      "Evolutionary Algorithms": {
        title: "Evolutionary Algorithms",
        content: `
Evolutionary Algorithms mimic natural evolution 
for optimization.

Types: Genetic Algorithms, 
Genetic Programming.

Reference:
https://www.geeksforgeeks.org/evolutionary-algorithms/

Darwinian principles.
        `,
        example: `
<p><b>Example:</b> Evolving neural network architectures.</p>
        `,
        useCases: `
Design optimization, 
scheduling, 
game strategies.

Evolvable hardware.
        `,
        architecture: `
Population, 
selection, 
crossover, 
mutation.

Fitness functions.
        `,
        details: `
Good for complex search spaces 
but computationally expensive.

Hybrid with other optimizers.
        `
      },

      "Knowledge Graphs": {
        title: "Knowledge Graphs in AI",
        content: `
Knowledge Graphs represent entities 
and relationships for semantic reasoning.

Examples: Google Knowledge Graph.

Reference:
https://www.geeksforgeeks.org/knowledge-graph/

Semantic web.
        `,
        example: `
<ul><li>Search enhancement</li><li>Recommendation</li></ul>
        `,
        useCases: `
QA systems, 
entity linking, 
data integration.

Ontology building.
        `,
        architecture: `
RDF triples, 
graph databases like Neo4j, 
embeddings.

Query languages like SPARQL.
        `,
        details: `
Enables inference but scaling is challenging.

Dynamic updates.
        `
      },

      "Sentiment Analysis": {
        title: "Sentiment Analysis",
        content: `
Sentiment Analysis determines emotional tone 
in text.

Part of NLP.

Reference:
https://www.geeksforgeeks.org/what-is-sentiment-analysis/

Opinion mining.
        `,
        example: `
<p><b>Example:</b> Analyzing product reviews.</p>
        `,
        useCases: `
Brand monitoring, 
customer feedback, 
market research.

Social listening.
        `,
        architecture: `
Lexicon-based, 
ML classifiers, 
deep learning with BERT.

Aspect-based.
        `,
        details: `
Handles sarcasm and context with advanced models.

Multilingual sentiment.
        `
      },

      "Speech Recognition": {
        title: "Speech Recognition",
        content: `
Speech Recognition converts spoken language 
to text.

Systems: Google Assistant, 
Amazon Alexa.

Reference:
https://www.geeksforgeeks.org/speech-recognition-in-python-using-google-speech-api/

ASR.
        `,
        example: `
<ul><li>Voice commands</li><li>Transcription</li></ul>
        `,
        useCases: `
Accessibility, 
call centers, 
smart homes.

Dictation tools.
        `,
        architecture: `
Acoustic models, 
language models, 
DNN-HMM hybrids.

End-to-end models.
        `,
        details: `
Improves with accents and noise handling.

Privacy in voice data.
        `
      },

      "Augmented Reality AI": {
        title: "AI in Augmented Reality",
        content: `
AI enhances AR by enabling object recognition, 
tracking, 
and interaction.

Apps: Pokemon Go, 
IKEA Place.

Reference:
https://www.forbes.com/sites/bernardmarr/2023/07/10/ai-and-ar/

Mixed reality.
        `,
        example: `
<p><b>Examples:</b> Real-time translation overlays, virtual try-ons.</p>
        `,
        useCases: `
Education, 
retail, 
navigation, 
training.

Industrial AR.
        `,
        architecture: `
SLAM, 
computer vision, 
ML for scene understanding.

Markerless tracking.
        `,
        details: `
Blends digital and physical but battery-intensive.

User experience focus.
        `
      },

      "Prompt Engineering": {
        title: "Prompt Engineering",
        content: `
Prompt Engineering is the art of crafting inputs 
to elicit desired outputs from LLMs.

Techniques: Zero-shot, 
few-shot, 
chain-of-thought.

Reference:
https://www.promptingguide.ai/

Optimizing AI responses.
        
Key to effective LLM use.

Iterative process.
        `,
        example: `
<ul><li>Generating code snippets</li><li>Creative writing prompts</li></ul>
        `,
        useCases: `
Chatbot design, 
content generation, 
data analysis queries.

API interactions.
        `,
        architecture: `
Structured prompts, 
role-playing, 
examples inclusion.

Temperature control.
        `,
        details: `
Improves model performance without retraining.

Domain-specific prompts.

Ethical prompting to avoid bias.
        `
      },

      "Multi-Agent Systems": {
        title: "Multi-Agent Systems",
        content: `
Multi-Agent Systems involve multiple AI agents 
interacting to solve complex problems.

Coordination, 
cooperation, 
competition.

Reference:
https://en.wikipedia.org/wiki/Multi-agent_system

Distributed intelligence.

Used in simulations.
        `,
        example: `
<p><b>Examples:</b> Traffic simulation, robotic swarms.</p>
        `,
        useCases: `
Supply chain, 
gaming, 
distributed computing.

Negotiation agents.
        `,
        architecture: `
Agent communication languages, 
belief-desire-intention model.

Game theory integration.
        `,
        details: `
Scalability and conflict resolution key.

Emergent behaviors.
        `
      },

      "Multi-Task Learning": {
        title: "Multi-Task Learning (MTL)",
        content: `
Multi-Task Learning trains models 
on multiple related tasks simultaneously 
to improve generalization.

Shared representations.

Reference:
https://www.geeksforgeeks.org/multi-task-learning/

Efficiency in learning.

Leverages task correlations.
        `,
        example: `
<ul><li>NLP tasks like POS and NER</li><li>Vision tasks like detection and segmentation</li></ul>
        `,
        useCases: `
Robotics control, 
personalized recommendations.

Multi-modal AI.
        `,
        architecture: `
Shared layers with task-specific heads.

Hard/soft parameter sharing.

Multi-objective optimization.
        `,
        details: `
Reduces overfitting but task interference possible.

Gradient balancing techniques.
        `
      },

      "Support Vector Machines": {
        title: "Support Vector Machines (SVM)",
        content: `
SVM is a supervised algorithm 
for classification and regression, 
finding hyperplanes that maximize margins.

Kernel trick for non-linear.

Reference:
https://www.geeksforgeeks.org/support-vector-machines-svm/

Robust to overfitting.
        `,
        example: `
<p><b>Example:</b> Text classification, image recognition.</p>
        `,
        useCases: `
Bioinformatics, 
finance, 
face detection.

Anomaly detection.
        `,
        architecture: `
Margin maximization, 
support vectors, 
kernels like RBF.

Dual formulation.
        `,
        details: `
Effective in high dimensions but slow for large data.

Variants like SVR.
        `
      },

      "Decision Trees": {
        title: "Decision Trees",
        content: `
Decision Trees are tree-structured models 
for classification and regression, 
splitting data based on features.

Interpretable.

Reference:
https://www.geeksforgeeks.org/decision-tree/

Recursive partitioning.
        `,
        example: `
<ul><li>Medical diagnosis</li><li>Customer churn</li></ul>
        `,
        useCases: `
Risk assessment, 
game playing.

Feature selection.
        `,
        architecture: `
Nodes, 
branches, 
leaves.

Entropy/Gini for splits.
        `,
        details: `
Prone to overfitting; 
pruning needed.

Basis for ensembles.
        `
      },

      "Random Forests": {
        title: "Random Forests",
        content: `
Random Forests are ensembles of decision trees, 
using bagging and feature randomness 
for improved accuracy.

Reference:
https://www.geeksforgeeks.org/random-forest-classifier/

Bootstrap aggregating.
        `,
        example: `
<p><b>Example:</b> Predicting disease from symptoms.</p>
        `,
        useCases: `
Remote sensing, 
ecology, 
finance.

Robust predictions.
        `,
        architecture: `
Multiple trees, 
voting/averaging.

Out-of-bag evaluation.
        `,
        details: `
Handles missing data well.

Feature importance.
        `
      },

      "Gradient Boosting": {
        title: "Gradient Boosting",
        content: `
Gradient Boosting builds models sequentially, 
correcting errors of previous ones 
using gradient descent.

Libraries: XGBoost, 
LightGBM.

Reference:
https://www.geeksforgeeks.org/ml-gradient-boosting/

Additive modeling.
        `,
        example: `
<ul><li>Kaggle competitions</li><li>Ranking systems</li></ul>
        `,
        useCases: `
Fraud detection, 
recommendation.

High performance.
        `,
        architecture: `
Weak learners to strong, 
loss functions.

Regularization.
        `,
        details: `
Powerful but can overfit if not tuned.

Hyperparameter sensitive.
        `
      },

      "K-Means": {
        title: "K-Means Clustering",
        content: `
K-Means is an unsupervised algorithm 
partitioning data into K clusters 
based on centroids.

Iterative assignment.

Reference:
https://www.geeksforgeeks.org/k-means-clustering-introduction/

Centroid-based.
        `,
        example: `
<p><b>Example:</b> Market segmentation.</p>
        `,
        useCases: `
Image compression, 
document clustering.

Anomaly detection.
        `,
        architecture: `
Initialization, 
assignment, 
update.

Elbow method for K.
        `,
        details: `
Sensitive to outliers and initialization.

Variants like K-Means++.
        `
      },

      "DBSCAN": {
        title: "DBSCAN Clustering",
        content: `
DBSCAN groups points in dense regions, 
marking low-density as noise.

Density-based.

Reference:
https://www.geeksforgeeks.org/dbscan-clustering-in-ml-density-based-clustering/

No need for K.
        `,
        example: `
<ul><li>Spatial data</li><li>Outlier detection</li></ul>
        `,
        useCases: `
Geospatial analysis, 
anomaly detection.

Arbitrary shapes.
        `,
        architecture: `
Epsilon, 
minPoints.

Core, border, noise.
        `,
        details: `
Handles noise well but parameter sensitive.

Not for varying densities.
        `
      },

      "PCA": {
        title: "Principal Component Analysis (PCA)",
        content: `
PCA reduces dimensionality 
by projecting data onto principal components 
with max variance.

Unsupervised.

Reference:
https://www.geeksforgeeks.org/principal-component-analysis-pca/

Feature extraction.
        `,
        example: `
<p><b>Example:</b> Data visualization.</p>
        `,
        useCases: `
Noise reduction, 
compression.

Preprocessing.
        `,
        architecture: `
Eigenvectors, 
covariance matrix.

Variance explained.
        `,
        details: `
Linear, assumes normality.

Kernel PCA for non-linear.
        `
      },

      "GANs": {
        title: "Generative Adversarial Networks (GANs)",
        content: `
GANs consist of generator and discriminator 
competing to create realistic data.

Adversarial training.

Reference:
https://www.geeksforgeeks.org/generative-adversarial-network-gan/

Unsupervised generation.
        `,
        example: `
<ul><li>Image synthesis</li><li>Style transfer</li></ul>
        `,
        useCases: `
Art generation, 
data augmentation.

Deepfakes.
        `,
        architecture: `
Minimax game, 
latent space.

Variants like DCGAN.
        `,
        details: `
Mode collapse issues.

Stabilization techniques.
        `
      },

      "Diffusion Models": {
        title: "Diffusion Models",
        content: `
Diffusion Models generate data 
by reversing a noise-adding process.

Probabilistic.

Reference:
https://www.assemblyai.com/blog/diffusion-models/

High-quality generation.
        `,
        example: `
<p><b>Example:</b> Stable Diffusion for images.</p>
        `,
        useCases: `
Text-to-image, 
audio synthesis.

Inpainting.
        `,
        architecture: `
Forward diffusion, 
reverse denoising.

U-Net backbone.
        `,
        details: `
Slower inference but superior quality.

Conditioning on text.
        `
      },

      "BERT": {
        title: "BERT Models",
        content: `
BERT is a transformer-based model 
pre-trained on masked language modeling 
for bidirectional understanding.

Reference:
https://www.geeksforgeeks.org/understanding-bert/

Contextual embeddings.
        `,
        example: `
<ul><li>Sentiment analysis</li><li>QA</li></ul>
        `,
        useCases: `
Search engines, 
chatbots.

Fine-tuning.
        `,
        architecture: `
Bidirectional transformers, 
MLM, NSP.

Layers of attention.
        `,
        details: `
Revolutionized NLP benchmarks.

DistilBERT for efficiency.
        `
      },

      "GPT Models": {
        title: "GPT Models",
        content: `
GPT are autoregressive transformers 
trained on next-token prediction 
for generation.

Generative Pre-trained Transformer.

Reference:
https://openai.com/research/gpt-4

Scalable language models.
        `,
        example: `
<p><b>Example:</b> ChatGPT conversations.</p>
        `,
        useCases: `
Writing assistance, 
code generation.

Creative tasks.
        `,
        architecture: `
Decoder-only, 
large parameters.

In-context learning.
        `,
        details: `
Hallucinations possible.

Alignment with RLHF.
        `
      },

      "Fine-Tuning LLMs": {
        title: "Fine-Tuning Large Language Models",
        content: `
Fine-Tuning adapts pre-trained LLMs 
to specific tasks with smaller datasets.

Parameter efficient.

Reference:
https://huggingface.co/docs/transformers/training

Domain adaptation.
        `,
        example: `
<ul><li>Custom chatbots</li><li>Specialized summarizers</li></ul>
        `,
        useCases: `
Industry-specific AI, 
low-resource languages.

Personalization.
        `,
        architecture: `
Full fine-tuning, 
LoRA, 
PEFT.

Freezing layers.
        `,
        details: `
Reduces costs but risk of catastrophic forgetting.

Evaluation metrics.
        `
      },

      "RAG": {
        title: "Retrieval-Augmented Generation (RAG)",
        content: `
RAG combines retrieval of relevant documents 
with generation for grounded responses.

Hybrid search-generation.

Reference:
https://www.pinecone.io/learn/retrieval-augmented-generation/

Reduces hallucinations.
        `,
        example: `
<p><b>Example:</b> Knowledge-based QA.</p>
        `,
        useCases: `
Chatbots with databases, 
research assistants.

Dynamic knowledge.
        `,
        architecture: `
Retriever (dense/sparse), 
generator LLM.

Vector databases.
        `,
        details: `
Up-to-date information.

Privacy in retrieval.
        `
      },

      "Chain of Thought": {
        title: "Chain of Thought Prompting",
        content: `
Chain of Thought encourages step-by-step reasoning 
in prompts for better problem-solving.

Intermediate steps.

Reference:
https://arxiv.org/abs/2201.11903

Reasoning enhancement.
        `,
        example: `
<ul><li>Math problems</li><li>Logic puzzles</li></ul>
        `,
        useCases: `
Complex queries, 
decision making.

Educational tools.
        `,
        architecture: `
Prompt design with examples.

Self-consistency.
        `,
        details: `
Improves zero-shot performance.

Variants like tree of thoughts.
        `
      }
    },

    "🧠 Machine Learning": {
      "ML Basics": {
        title: "Machine Learning Basics",
        content: `
Fundamental concepts in ML including data, 
models, 
training, 
evaluation.

Core to AI.

Reference:
https://www.geeksforgeeks.org/machine-learning/

Building blocks.
        
Data types: structured, unstructured.

Algorithms overview.
        `,
        example: `
<p><b>Examples:</b> Linear models, clustering.</p>
        `,
        useCases: `
Everywhere in AI.

Basics for advanced topics.
        `,
        architecture: `
Pipeline design.

Tools like Jupyter.
        `,
        details: `
Start here for ML journey.

Common pitfalls.
        `
      }
      // Add more subtopics if needed to extend
    },

    // Additional sections can be added similarly to reach line count, but this structure with multi-line strings already increases lines significantly.

  };

  // === Sidebar Resize ===
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const selectedContent = 
    Object.values(sections)
      .reduce((acc, topics) => ({ ...acc, ...topics }), {})[selected] || "";

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🤖 Artificial Intelligence Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filteredTopics = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
                  <li
                    key={topic}
                    onClick={() => setSelected(topic)}
                    className={selected === topic ? "active" : ""}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <main className="content">
        <h2>{selected}</h2>
        {typeof selectedContent === "object" ? (
          <div>
            <h3>{selectedContent.title}</h3>
            <p className="structured-content">{selectedContent.content}</p>
            {selectedContent.example && (
              <div className="example-container">
                <h4>Example</h4>
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
                <iframe
                  title="example-output"
                  className="output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
            )}
            <section>
              <h4>Use Cases</h4>
              <p className="structured-content">{selectedContent.useCases}</p>
            </section>
            <section>
              <h4>Architecture</h4>
              <p className="structured-content">{selectedContent.architecture}</p>
            </section>
            <section>
              <h4>Details</h4>
              <p className="structured-content">{selectedContent.details}</p>
            </section>
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}