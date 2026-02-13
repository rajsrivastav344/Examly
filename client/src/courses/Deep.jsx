// DL.jsx
import React, { useState } from "react";
import "./All.css";

export default function DL() {
  const [selected, setSelected] = useState("Deep Learning Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🧠 Deep Learning Fundamentals": {
      "Deep Learning Introduction": {
        title: "Deep Learning Introduction",
        content: `
Deep Learning (DL) is a subset of Machine Learning that uses multi-layered (deep) artificial neural networks to learn complex patterns directly from raw data.

Key characteristics:
- Automatic feature extraction (no manual engineering needed)
- Excels with large datasets & powerful compute (GPUs/TPUs)
- Hierarchical representation learning (low-level → high-level features)

Why DL dominates in 2025–2026:
- Foundation of LLMs (ChatGPT, Gemini, Llama, Claude)
- State-of-the-art in vision, speech, multimodal AI
- Transfer learning & foundation models reduce training cost`,
        example: `<p>ImageNet classification: AlexNet (2012) → ResNet → EfficientNet → Vision Transformers (ViT)</p>`,
        graphic: `<svg width="420" height="220" viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
  <text x="210" y="30" text-anchor="middle" font-weight="bold">Deep Neural Network</text>
  <!-- Input Layer -->
  <rect x="40" y="60" width="80" height="100" fill="#e3f2fd" stroke="#1976d2" rx="6"/>
  <text x="80" y="110" text-anchor="middle">Input</text>
  <!-- Hidden Layers -->
  <rect x="160" y="40" width="80" height="140" fill="#fff9c4" stroke="#fbc02d" rx="6"/>
  <text x="200" y="90" text-anchor="middle">Hidden 1</text>
  <rect x="260" y="30" width="80" height="160" fill="#c8e6c9" stroke="#388e3c" rx="6"/>
  <text x="300" y="100" text-anchor="middle">Hidden 2</text>
  <rect x="360" y="20" width="80" height="180" fill="#f8bbd0" stroke="#c2185b" rx="6"/>
  <text x="400" y="110" text-anchor="middle">Hidden N</text>
  <!-- Output -->
  <rect x="480" y="60" width="80" height="100" fill="#bbdefb" stroke="#1976d2" rx="6"/>
  <text x="520" y="110" text-anchor="middle">Output</text>
  <!-- Connections (simplified) -->
  <line x1="120" y1="90" x2="160" y2="70" stroke="#616161" stroke-width="2"/>
  <line x1="120" y1="110" x2="160" y2="110" stroke="#616161" stroke-width="2"/>
  <line x1="240" y1="80" x2="260" y2="60" stroke="#616161" stroke-width="2"/>
  <line x1="240" y1="100" x2="260" y2="100" stroke="#616161" stroke-width="2"/>
  <line x1="340" y1="90" x2="480" y2="90" stroke="#616161" stroke-width="2"/>
</svg>`,
      },
      "Neural Network Building Blocks": {
        title: "Neural Network Building Blocks",
        content: `
- Neuron: weighted sum + activation function
- Activation functions: ReLU (most common), GELU, SwiGLU, SiLU, Mish
- Layers: Dense/Linear, Convolutional, Recurrent, Attention, Normalization (LayerNorm, BatchNorm)
- Loss functions: MSE (regression), Cross-Entropy (classification), CTC (speech), Dice (segmentation)
- Optimizers: AdamW, Lion, Sophia, Adafactor (2025 favorites)
- Regularization: Dropout, Weight Decay, Label Smoothing, Stochastic Depth`,
        example: `<pre><code>output = activation(W * input + b)
ReLU(x) = max(0, x)</code></pre>`,
      },
    },

    "🖼️ Computer Vision Architectures": {
      "Convolutional Neural Networks (CNN)": {
        title: "Convolutional Neural Networks (CNN)",
        content: `
Designed for grid-like data (images, video).

Core operations:
- Convolution (feature detectors)
- Pooling (downsampling)
- Batch Normalization
- Skip connections (ResNet)

Evolution:
- LeNet (1998) → AlexNet (2012) → VGG → Inception → ResNet → EfficientNet → ConvNeXt
- Modern: Vision Transformers (ViT), Swin Transformer, ConvFormer`,
        example: `<p>ResNet-50: Residual blocks solve vanishing gradient problem</p>`,
        graphic: `<svg width="380" height="180" viewBox="0 0 380 180">
  <rect x="40" y="60" width="80" height="60" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="80" y="90" text-anchor="middle">Image</text>
  <rect x="150" y="50" width="60" height="80" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="180" y="90" text-anchor="middle">Conv</text>
  <rect x="240" y="60" width="60" height="60" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="270" y="90" text-anchor="middle">Pool</text>
  <rect x="320" y="70" width="60" height="40" fill="#f8bbd0" stroke="#c2185b"/>
  <text x="350" y="90" text-anchor="middle">FC</text>
  <line x1="120" y1="90" x2="150" y2="90" stroke="#616161"/>
  <line x1="210" y1="90" x2="240" y2="90" stroke="#616161"/>
  <line x1="300" y1="90" x2="320" y2="90" stroke="#616161"/>
</svg>`,
      },
      "Transformers in Vision": {
        title: "Transformers in Vision",
        content: `
Vision Transformer (ViT) treats image patches as tokens.

Advantages over CNN:
- Global context from start
- Better scaling with data & compute
- Multimodal unification (ViT + text = CLIP, Flamingo, LLaVA)

Popular models 2025–2026:
- ViT, DeiT, Swin, ConvNeXt V2, EfficientViT, InternViT, EVA-02`,
        example: `<p>CLIP: Contrastive pre-training on 400M image-text pairs</p>`,
      },
    },

    "🗣️ Sequence & Language Models": {
      "Recurrent Neural Networks (RNN & LSTM/GRU)": {
        title: "Recurrent Neural Networks (RNN & LSTM/GRU)",
        content: `
Process sequential data with memory.

Problems: Vanishing/exploding gradients → solved by:
- LSTM (Long Short-Term Memory)
- GRU (Gated Recurrent Unit)

Still used in some real-time/low-resource tasks`,
        example: `<p>Speech recognition: Input audio frames → output phonemes</p>`,
      },
      "Transformers & Attention": {
        title: "Transformers & Attention",
        content: `
Revolutionized NLP & beyond (2017 Vaswani et al. "Attention is All You Need").

Key innovations:
- Self-Attention (scaled dot-product)
- Multi-Head Attention
- Positional Encoding
- Feed-Forward layers
- Layer Normalization & Residual connections

2025–2026: Mixture-of-Experts (MoE), FlashAttention-2, Grouped-Query Attention, Rotary Embeddings (RoPE)`,
        example: `<p>GPT-4, Llama-3, Gemini use decoder-only Transformers</p>`,
      },
    },

    "🚀 Training & Optimization": {
      "Modern Training Techniques": {
        title: "Modern Training Techniques",
        content: `
- Mixed precision (FP16/bfloat16)
- Gradient checkpointing
- Distributed training (DDP, FSDP, ZeRO)
- LoRA / QLoRA (efficient fine-tuning)
- PEFT (Parameter-Efficient Fine-Tuning)
- FlashAttention, PagedAttention
- Activation recomputation`,
        example: `<p>Fine-tune Llama-3 70B on consumer GPU with QLoRA + 4-bit quantization</p>`,
      },
      "Loss Functions & Evaluation": {
        title: "Loss Functions & Evaluation",
        content: `
- Classification: Cross-Entropy, Focal Loss
- Regression: MSE, MAE, Huber
- Generation: Perplexity, BLEU, ROUGE, BERTScore
- Multimodal: Contrastive (CLIP), Diffusion loss
- Reinforcement: PPO, DPO (Direct Preference Optimization)`,
        example: `<p>DPO: Aligns model with human preferences without reward model</p>`,
      },
    },

    "🌍 Applications & Real-World Impact 2025–2026": {
      "Computer Vision Applications": {
        title: "Computer Vision Applications",
        content: `
- Autonomous driving (Tesla FSD, Waymo)
- Medical imaging (cancer detection, radiology)
- Manufacturing (defect detection)
- Security (face recognition, anomaly detection)
- Creative AI (Stable Diffusion, Midjourney, Flux)`,
      },
      "NLP & Multimodal AI": {
        title: "NLP & Multimodal AI",
        content: `
- LLMs: Chat, code generation, translation, summarization
- Multimodal: GPT-4o, Gemini 1.5, Claude 3.5, LLaVA
- Voice: Whisper, ElevenLabs, Grok voice mode
- Agents: AutoGPT-style, ReAct, Toolformer`,
      },
      "Future Directions": {
        title: "Future Directions",
        content: `
- Energy-efficient models (TinyML, edge AI)
- Reasoning & planning (o1-style chain-of-thought)
- World models & video generation (Sora, Runway Gen-3, Luma Dream Machine)
- Open-source dominance (Meta Llama series, Mistral, DeepSeek)
- Safety & alignment research`,
      },
    },
  };

  // ────────────────────────────────────────────────
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  let selectedContent = null;
  for (const section in sections) {
    if (sections[section][selected]) {
      selectedContent = sections[section][selected];
      break;
    }
  }
  if (!selectedContent) selectedContent = { title: selected, content: "Select a topic from the sidebar." };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🧠 Deep Learning Dashboard</h1>
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
          const filtered = Object.keys(sections[section]).filter((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filtered.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filtered.map((topic) => (
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
        <div>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{selectedContent.content}</p>

          {selectedContent.example && (
            <pre className="code-block">
              <code>{selectedContent.example}</code>
            </pre>
          )}

          {selectedContent.graphic && (
            <div
              dangerouslySetInnerHTML={{ __html: selectedContent.graphic }}
              style={{ textAlign: "center", margin: "20px 0" }}
            />
          )}
        </div>
      </main>
    </div>
  );
}