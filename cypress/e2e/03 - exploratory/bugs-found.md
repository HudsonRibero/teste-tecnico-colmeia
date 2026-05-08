# Bugs Found

---

## BUG 1 - Forgot password flow is not working

### Severity
Medium

### Priority
Medium

### Steps to reproduce
1. Access the login page
2. Click on "Esqueceu sua senha?"

### Expected Result
The system should redirect the user to the password recovery flow.

### Actual Result
The click action does not trigger any redirection or recovery flow.
The user remains on the login page.

---

## BUG 2 - Authentication warning displayed for valid credentials

### Severity
High

### Priority
High

### Steps to reproduce
1. Access the login page
2. Enter valid credentials:
   - Email: qa@test.com
   - Password: 123456
3. Click on "Entrar"

### Expected Result
The system should authenticate the user normally without displaying any authentication error.

### Actual Result
The system displays the message:
"Seu login está incorreto, quer continuar?"
even when valid credentials are provided.

After clicking "Continuar", the user is authenticated successfully.

---

## BUG 3 - Archive button deletes database instead of archiving

### Severity
Critical

### Priority
High

### Steps to reproduce
1. Login into the system
2. Create a new database
3. Click on "Arquivar"

### Expected Result
The database should be moved to archived items.

### Actual Result
The database is permanently deleted instead of being archived.

---

## BUG 4 - Archived items flow inconsistency

### Severity
High

### Priority
Medium

### Steps to reproduce
1. Access the archived items section
2. Try to archive a database

### Expected Result
Archived databases should be listed correctly in the archived items section.

### Actual Result
No database can be archived because the archive action deletes the database permanently.