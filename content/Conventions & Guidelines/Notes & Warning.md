---
{"publish":true,"permalink":"/Conventions & Guidelines/Notes & Warning.md","tags":["conventions"],"cssclasses":""}
---


Notes and warnings are usually admonitions or callouts in [[Concepts/Documentation]].
There are three main types of warning messages with the corresponding colors.

|Signal word|Color|Severity and meaning|
|---|---|---|
|Note|Blue|Additional information|
|Warning|Yellow|Information that is important for executing an error free procedure|
|Tip|Green|Tips|
|Recommendation|Green|Theobald Software recommendations and best practices advice|
Warning Messages comply with EN 82079 and formulated according the SAFE-method that is derived from German. The SAFE method is a procedure for systematically designing safety instructions. The severity of the danger as well as the source of the danger.  

**"SAFE"** stands for:

**S**chwere der Gefahr (Signalwort) **A**rt und Quelle der Gefahr **F**olgen bei Missachtung der Gefahr **E**ntkommen (Maßnahmen zur Abwehr der Gefahr)

Translation: Severity of the danger (Signal word) Type and source of the danger Consequences of disregarding the danger Escape (measures to avert the danger)

Example:

> [!warning] 
**RFC_ERROR_SYSTEM_FAILURE - No more storage space available**  
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

> [!note] 
> The corresponding SQL command is generated dynamically and executed on the SAP server.

