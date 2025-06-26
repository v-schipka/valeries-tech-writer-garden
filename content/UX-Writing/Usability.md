---
{"publish":true,"permalink":"/UX-Writing/Usability.md","cssclasses":""}
---

Usability focuses on how [[UX-Writing/Microcopy]] can be used to guide users and make tasks easier.

## Integrate Microcopy in a UI

| State of the Microcopy in the UI                                                            | Advantage                                                        | Disadvantage                                        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| Static (always show Microcopy)                                                              | Cannot be missed                                                 | May overload the form                               |
| Display when needed (e.g., as a tooltip)                                                    | Easily accessible without overloading the form                   | May be missed                                       |
| Display automatically (e.g., when cursor hovers over an input field or when it is in focus) | Easily accessible without overloading the form, cannot be missed | Is displayed even when users already know the drill |
| Display as placeholders                                                                     | Cannot be missed                                                 | Disappears and cannot be invoked again              |

> [!tip]
> Only use Microcopy when needed and keep it short, see [[UX-Writing/UX Writing Checklist]]. If explanations get too long, refer to the [[Concepts/Documentation]] of the product using a link to the correct resources.

## Fill Knowledge Gaps

The following questions can arise when using a UI:

| Questions             | Measures                                                                                                                                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is this?         | Remove technical terms or (if not possible to replace the technical term with a more common one) add Microcopy with an explanation.                                                                                                                                                                                 |
| What does it do?      | If the functionality of a UI element is not clear, add Microcopy nearby that explains what happens when the element is activated/deactivated.<br>If you want to motivate users to perform a certain action in the UI, formulate your Microcopy as a call-to-action (in an interesting way, don't be too technical). |
| Where do I find this? | When users need to enter data, it is advised to explain where to find the data next to the input field (maybe even add an image).                                                                                                                                                                                   |
| How do I use this?    | UIs should be self-explanatory (e.g., using a clear structure, layout and information hierarchy within the layout), Microcopy should be the last resort to guide users.                                                                                                                                             |

### When not to Explain

The following UI elements usually do not need explanations (just labels):
- Fields
- Buttons
- Drop-down lists
- Exclamations or question marks
- Links
- Asterisks (\*)
- Selection buttons
- Checkboxes

Examples:
![not explain](https://github.com/v-schipka/images/blob/main/obsidian/ux-writing.jpg?raw=true)


### When to Explain

- If the UI is innovative (unique), it is usually a good idea to explain the UI, e.g., when users need to click on a video element to activate / deactivate the audio.
- If an inappropriate use of the UI can lead to problems for the user / process, e.g., loss of data.
- ...

## Alleviate Concerns

| Concern                            | Measures                                                                                                                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Providing an email address         | Assure users that they won't be spammed with lots of emails and that they can unsubscribe with a single click. <br>Assure users that you take data protection seriously and respect their privacy.       |
| Providing personal data            | For mandatory data input, explain why the data is necessary and assure users that the data is secure. <br>For optional data input, explain why it's worth (for the user!) to provide the data.           |
| Log in using social media accounts | Assure users that nothing will be posted in their name and that the data is not passed on to third parties.                                                                                              |
| Secure payment                     | Address security concerns on the way between shopping cart and checkout.                                                                                                                                 |
| Free demo version                  | Assure users that there won't be any hidden costs at the end of the trial period. <br>If credit card information is required, assure users that there will be no charges without their explicit consent. |
| Settings and configurations        | Explain that settings can be changed any time to motivate users to set things up quickly without spending too much time on the settings.                                                                 |
| Dowload and installation           | Assure users that the product does not include viruses, spyware or additional products (if it does, eplain why they are necessary)                                                                       |

## Prevent Errors

| Vulnerability                       | Measures                                                                                                                                                                                                    |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mandatory fields                    | Make sure users know which fields are mandatory, e.g., using asterisks (\*) or labels like "optional" to avoid the typical "This field is mandatory" error message.                                         |
| Symbols, glyphs and special formats | Use input checks when users enter data into input fields to avoid unneccesary error messages, e.g., unsupported characters, specific date formats, etc.                                                     |
| Size and area limitations           | Explain input limitations to prevent users from entering unpermitted values, e.g. file size limit when uploading documents, min / max number of characters, etc.                                            |
| Passwords                           | When using Microcopy for password forms, include the password requirements, e.g., capital letters, usage of numbers, min / max number of characters, etc.                                                   |
| Other problems                      | Think about which problems might occur when using the product and add take steps to avoid them (with Microcopy being the last resort), even if the problem seems to be outside your area of responsibility! |
## Accessibility

Check how Microcopy sounds using a screen reader. A screen reader converts text, buttons, images and other screen elements into speech or braille. It is primarily used by people with vision impairments.

- Think from top to bottom and from left to right
- Be clear (do users know where they are when they can only hear the text)
- Offer text as an alternative for every icon ans image (alt text)
- Keyboard navigation makes it possible to navigate between headlines, links and buttons, so make sure to make the description of these elements unique
- Microcopy should always appear as a live text and not as an image
- Permanent text should have enough contrast to be readable
- Simple is best, so keep texts simple

>[!caution] 
>Screen readers can only read live text, so when buttons or the text in buttons are images, they cannot be interpreted by screen readers. 

