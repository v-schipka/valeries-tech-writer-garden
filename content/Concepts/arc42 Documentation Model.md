---
{"publish":true,"permalink":"/Concepts/arc42 Documentation Model.md","cssclasses":""}
---

The arc42 documentation model is an open template for documenting software and system architectures.  It was developed by Gernot Starke and Peter Hruschka and has become a de facto standard for architecture documentation in German-speaking countries.


### Core Idea

arc42 provides a structure and outline in which architects can systematically describe the essential decisions and conditions of a software architecture – independent of  technology, methods (Scrum, Kanban, SAFe, …) or notations (UML, C4, BPMN, …).

### Goals

- Consistent documentation for developers, architects, product owners, and other stakeholders.
- Traceability of architectural decisions (why something was designed in a certain way).
- Reduction of redundancy by focusing only on the most important information.

### Structure (12 main chapters)

1. **Introduction & Goals** – purpose, quality goals, stakeholders.
2. **Constraints** – technical, organizational, or legal requirements.
3. **System Scope & Context** – business and technical context.
4. **Solution Strategy** – central ideas and patterns.
5. **Building Block View** – static structure (e.g., modules, components).
6. **Runtime View** – dynamic behavior (e.g., workflows, sequences).
7. **Deployment View** – mapping onto infrastructure, deployment.
8. **Crosscutting Concepts** – security, logging, persistence, etc.
9. **Architecture Decisions** – alternatives & rationale.
10. **Quality Requirements** – scenarios, measurability.
11. **Risks & Technical Debt** – known issues, open points.
12. **Glossary** – terms and abbreviations.

### Benefits

- **Easy to get started**: lean, well-structured.
- **Adaptable**: chapters can be omitted or merged as needed.
- **Free & open Source**: available at [arc42.org](arc42.org).

### Template


Markdown examples: [https://github.com/arc42/docs.arc42.org-site/tree/main/_examples](https://github.com/arc42/docs.arc42.org-site/tree/main/_examples)

```markdown
# Software Architecture Documentation (arc42)

## 1. Introduction & Goals
- **Purpose of the system**
- **Stakeholders**
- **Quality goals**

---

## 2. Constraints
- Technical constraints
- Organizational constraints
- Legal/regulatory constraints

---

## 3. System Scope & Context
### 3.1 Business Context
- Overview of business processes
- Interactions with external actors

### 3.2 Technical Context
- Interfaces to external systems
- Protocols, data formats

---

## 4. Solution Strategy
- Key ideas, principles, and patterns
- Technology choices

---

## 5. Building Block View
### 5.1 Whitebox Overall System
- Top-level decomposition
- Major building blocks/components

### 5.2 Level-2 Building Blocks
- More detailed decomposition

### 5.3 Level-3 and Deeper
- As needed

---

## 6. Runtime View
- Typical scenarios
- Sequence diagrams, flow descriptions

---

## 7. Deployment View
- Infrastructure overview
- Mapping of software artifacts to hardware
- Environments (dev, test, prod)

---

## 8. Crosscutting Concepts
- Security
- Persistence
- Error handling
- Logging & monitoring
- Internationalization, etc.

---

## 9. Architecture Decisions
- Significant decisions
- Alternatives considered
- Rationale

---

## 10. Quality Requirements
- Quality scenarios (performance, security, usability, …)
- Measurement criteria

---

## 11. Risks & Technical Debt
- Known technical risks
- Open issues
- Shortcuts/technical debt

---

## 12. Glossary
- Important terms
- Abbreviations

```