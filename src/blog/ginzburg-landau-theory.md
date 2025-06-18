---
title: "Ginzburg–Landau Theory: Macroscopic Quantum Description of Superconductivity"
description: "Dive into the Ginzburg–Landau theory, a bridge between quantum mechanics and macroscopic superconducting behavior through the concept of an order parameter and energy minimization."
Published on: 2025-06-19T09:00:00.000Z
author: "Ajay Kumar"
image:
    url: "/ginzburg-landau-theory.webp"
    alt: "Visualization of the Ginzburg–Landau order parameter and superconducting coherence length"
tags: ["Superconductivity"]
series: "Superconductivity"
part: 7
---

## 🔁 Previous Post Recap

In [Part 6](/london-equations-superconductivity), we studied the **London equations**, which describe how electromagnetic fields behave in superconductors, particularly how magnetic fields decay over a length scale called the **London penetration depth**.

While insightful, these equations are phenomenological — they don’t explain **why superconductivity occurs** or how it **emerges from microscopic principles**.

This brings us to the **Ginzburg–Landau theory** — a more powerful, quantum-inspired model that captures both thermodynamic and electromagnetic behavior.

---

## 🌌 What is Ginzburg–Landau Theory?

The **Ginzburg–Landau (GL) theory**, proposed in 1950 by **Vitaly Ginzburg** and **Lev Landau**, is a **macroscopic quantum theory** of superconductivity. It introduces a **complex order parameter** that varies smoothly through space, offering a quantum-mechanical yet spatially averaged view of superconductivity.

The order parameter is denoted as:

$$
\psi(\mathbf{r}) = |\psi(\mathbf{r})| e^{i\theta(\mathbf{r})}
$$

Here:

-   $$|\psi|^2$$ represents the **density of superconducting electrons**
-   $$\theta$$ is the **quantum phase**

This wavefunction-like parameter becomes **nonzero** in the superconducting state and vanishes above the critical temperature $$T_c$$.

---

## 🧮 Free Energy Functional

GL theory builds on the idea of **minimizing the free energy** of a superconductor. The total free energy is expressed as:

$$
F = F_n + \alpha |\psi|^2 + \frac{\beta}{2} |\psi|^4 + \frac{1}{2m^*} \left| \left( -i\hbar \nabla - 2e\mathbf{A} \right) \psi \right|^2 + \frac{|\mathbf{B}|^2}{2\mu_0}
$$

Where:

-   $$F_n$$ is the free energy of the normal state
-   $$\alpha, \beta$$ are phenomenological parameters
-   $$\mathbf{A}$$ is the magnetic vector potential
-   $$\mathbf{B} = \nabla \times \mathbf{A}$$ is the magnetic field

This functional includes:

-   **Thermodynamic terms** ($$\alpha |\psi|^2 + \beta |\psi|^4$$)
-   **Kinetic energy** of supercurrents
-   **Electromagnetic energy**

---

## 🧾 Ginzburg–Landau Equations

By minimizing the free energy with respect to $$\psi^*$$ and $$\mathbf{A}$$, we obtain two coupled differential equations — the **GL equations**:

### 1️⃣ First Ginzburg–Landau Equation:

$$
\alpha \psi + \beta |\psi|^2 \psi + \frac{1}{2m^*} \left( -i\hbar \nabla - 2e\mathbf{A} \right)^2 \psi = 0
$$

This governs the **spatial variation of the order parameter** under electromagnetic influence.

### 2️⃣ Second Ginzburg–Landau Equation:

$$
\mathbf{J}_s = \frac{2e\hbar}{m^*} \text{Im} \left[ \psi^* \left( \nabla - \frac{2ie}{\hbar} \mathbf{A} \right) \psi \right]
$$

This expresses the **supercurrent density** in terms of the wavefunction and magnetic vector potential.

---

## 📏 Coherence Length and Penetration Depth

GL theory naturally introduces two important characteristic lengths:

### 1. **Coherence Length** ($$\xi$$):

Describes the length scale over which $$\psi$$ can vary:

$$
\xi = \sqrt{\frac{\hbar^2}{2m^* |\alpha|}}
$$

It characterizes how quickly the superconducting state can recover spatially from a disturbance (e.g., near a boundary or defect).

### 2. **London Penetration Depth** ($$\lambda$$):

Still defined as the scale over which magnetic fields decay, but now explicitly tied into the GL framework.

---

## ⚖️ The GL Parameter κ and Superconductor Types

The **Ginzburg–Landau parameter** $$\kappa$$ is defined as:

$$
\kappa = \frac{\lambda}{\xi}
$$

This single ratio determines whether a material is:

-   **Type I**: $$\kappa < \frac{1}{\sqrt{2}}$$
-   **Type II**: $$\kappa > \frac{1}{\sqrt{2}}$$

So, **GL theory unifies classification and field behavior** — a major leap forward over the London model.

---

## 🧪 Physical Predictions and Successes

Ginzburg–Landau theory can:

-   Describe the **interface** between normal and superconducting regions
-   Model **vortex structures** in Type II superconductors
-   Predict **critical field behavior**
-   Bridge thermodynamics and quantum mechanics
-   Enable **computational simulations** of superconducting domains

In 2003, **Ginzburg shared the Nobel Prize in Physics** (with Abrikosov and Leggett) for his foundational contributions to superconductivity.

---

## 📘 Conclusion

The Ginzburg–Landau theory offers a **conceptual bridge** between macroscopic thermodynamics and microscopic quantum mechanics. Its introduction of a **spatially varying order parameter** allows us to model and predict complex superconducting phenomena — from magnetic field penetration to vortex lattice formation.

---

## 🔮 Coming Up Next…

In [Part 8](/bcs-theory-cooper-pairs), we’ll dive into the **BCS theory**, which finally explained the microscopic origin of superconductivity. We’ll understand **Cooper pairs**, **energy gaps**, and the true nature of the superconducting quantum ground state.

Stay tuned as we zoom into the quantum world even further!

---
