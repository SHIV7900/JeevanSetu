# JeevanSetu — Full-stack demo

This workspace now contains the React/Vite frontend and a local Node.js API. It is a prototype only: it stores development data in `server/data.json` and must not be used with real incident, personal, or biometric data.

## Run it

Open two terminal windows in `C:\Users\272241\Desktop\JeevanSetu`:

```powershell
npm run server
```

```powershell
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:4000/api/health`

## API included

- User registration/login and signed local tokens
- Incident reporting, case status and escalation queue
- Missing-person and unidentified-body records
- Rescue request and authorized public-alert workflows
- Role checks for police/control-room/admin operations
- Matching endpoint: `GET /api/identification/matches/UB-2026-00001`

The matching endpoint deliberately uses a transparent demo scoring rule, not facial recognition. Every result requires official police/forensic verification. Before using biometric matching in production, the system needs lawful authorization, consent/lawful basis, encrypted storage, audit logs, bias testing, human review, incident response controls, and an approved forensic workflow.
