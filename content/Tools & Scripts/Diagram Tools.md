---
{"publish":true,"permalink":"/Tools & Scripts/Diagram Tools.md","created":"2025-12-23T08:53:46.281+01:00","modified":"2025-12-23T08:56:58.422+01:00","published":"2025-12-23T08:56:58.422+01:00","cssclasses":""}
---

Diagrams help technical writers explain complex software systems and business processes visually, making documentation easier to understand and more "scannable". Here are common diagram types and tools for documenting software systems (PlantUML, Mermaid) and business processes (Camunda, bpmn.io).
## Diagrams for Software Documentation

The most common diagram types in software documentation are:
- Architecture diagrams
- Flow diagrams
- Sequence diagrams
- Data diagrams
- State diagrams
- Deployment diagrams

### PlantUML

[PlantUML](https://plantuml.com/en/) is a text-based diagramming tool for creating UML diagrams. A UML (Unified Modeling Language) diagram is a visual representation of a system that shows how different components interact. It is most often used for documenting software architecture and design. 

Resources:
- [PlantUML Online Editor](https://www.planttext.com/)
- [Reference Guide](https://pdf.plantuml.net/PlantUML_Language_Reference_Guide_en.pdf)

### Mermaid

[Mermaid](https://mermaid.js.org/) is a JavaScript-based diagram tool designed to work inside [[Markup Languages/Markdown]] and web pages. Mermaid is supported by a lot of [[Static Site Generators/Static Site Generators]].

Resources:
- [Mermaid Online Editor (Playground)](https://www.mermaidchart.com/play#pako:eNqrVkrOT0lVslJSqgUAFW4DVg)
- [Documentation](https://mermaid.js.org/intro/)

## Diagrams for Business Processes

Business Process Model and Notation (BPMN) is a formal standard for modeling business processes. 
### Camunda Modeler

[Camunda Modeler](https://camunda.com/de/download/modeler/) is a free desktop (and web) application for creating **BPMN 2.0**, **DMN**, and **CMMN** diagrams. It’s designed for both business analysts and developers, with validation against the BPMN standard. Diagrams can be executed, tested, and version-controlled using BPMN XML.

Resources:  
- [Camunda Documentation](https://docs.camunda.io/)
- [Download Camunda Modeler](https://camunda.com/de/download/modeler/)

### BPMN.io

[BPMN.io](https://bpmn.io/) is a browser-based BPMN 2.0 editor and JavaScript toolkit created by the Camunda team. It focuses purely on standards-compliant BPMN diagramming, without execution features. It’s often used online or embedded into web applications via bpmn-js.

Resources:
- [BPMN Online Editor](https://demo.bpmn.io/s/start)
- [Download BPMN.js](https://bpmn.io/toolkit/bpmn-js/download/)