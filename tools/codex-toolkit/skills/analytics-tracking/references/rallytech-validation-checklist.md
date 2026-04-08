# RallyTech Validation Checklist

Validate after implementation and before signoff.

## Must Check

- event fires on the intended trigger only
- no duplicate fire on hydration or route changes
- desktop and mobile both work
- conversion event is tied to success state, not just click intent
- parameters use expected names and values
- no PII is sent

## Useful Tools

- GA4 DebugView
- GTM Preview
- browser network inspection
- dataLayer inspection

## Report Shape

- what was tested
- which events passed
- which events failed
- evidence or reproduction note
- recommended fix owner
