LITTLE STARS KINDERGARTEN SCHOOL PORTAL
======================================

HOW TO RUN
1. Extract the ZIP file.
2. Open the folder "kindergarten_school_system" in Visual Studio Code.
3. Install the "Live Server" extension if you do not already have it.
4. Right-click index.html and choose "Open with Live Server".
5. The website opens in your browser. No Python, Django, database or API is required.

LOGIN
Admin password: ESSA11220088
Teacher password: 1234554321

The teacher password above interprets the spoken sequence "one two three four five, five four three two one"
as 1234554321. Change TEACHER_PASSWORD near the top of js/app.js if you meant a different password.

FEATURES
- Child-friendly kindergarten design with animal and alphabet-inspired visuals.
- School name and optional logo can be customized from "School setup".
- Admin dashboard: overview, teacher list, teacher attendance, salary paid/unpaid status,
  student overview, class creation/allocation, student enrolment, holiday calendar.
- Teacher area: allocated classes only; student attendance; monthly fee status;
  daily progress notes; test/task scores.
- Student area: read-only searchable overview of attendance, fee status and learning growth.
- Data is stored in this browser using localStorage.
- Admin can download a JSON backup from School setup.

IMPORTANT LIMITATIONS
This is a local front-end prototype for use on one computer/browser. It does not have a
real server, shared database, multi-device synchronization, secure authentication, or
automatic backups. The passwords are visible in the JavaScript source and are suitable
only for a demo, not for protecting real student records. For actual school deployment,
the next step is a backend with proper user accounts, database, permissions and backups.

DATA
Records stay in the same browser on the same device. Clearing browser site data may erase
them. Use School setup > Download school data backup regularly.
