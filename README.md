# Student Dashboard UI

## DecodeLabs Internship - Project 1

---

# Project Goal

Create a simple Student Dashboard using:

* HTML
* CSS
* Basic JavaScript

The website should work properly on:

* Mobile
* Tablet
* Laptop/Desktop

---

# What You Will Learn

* HTML page structure
* CSS styling
* Flexbox
* Responsive Design
* Basic JavaScript
* Multi-page websites

---

# Pages to Create

## 1. Home Page (Dashboard)

File:

```text
index.html
```

Show:

* Student Name
* Roll Number
* Course
* Semester

Cards:

* Attendance
* Assignments
* Notices
* Classes Today

Example:

```text
--------------------------------
Welcome Aksh Kumar
B.Sc. Computer Science
Semester 3
--------------------------------

Attendance: 85%

Assignments: 2 Pending

Notices: 4 New

Today's Classes:
- Data Structures
- Operating Systems
```

---

## 2. Attendance Page

File:

```text
attendance.html
```

Show attendance using cards.

Example:

```text
Data Structures     85%

Operating Systems   90%

AI                  80%

Data Mining         88%
```

Use colored progress bars.

---

## 3. Assignments Page

File:

```text
assignments.html
```

Example:

```text
DS Assignment

Due: 25 June

Status: Pending
```

Create 4–5 assignment cards.

---

## 4. Notices Page

File:

```text
notices.html
```

Example:

```text
Exam Form Open

Sports Registration Open

Holiday Notice
```

Display notices as simple cards.

---

## 5. Timetable Page

File:

```text
timetable.html
```

Create a simple timetable table.

Example:

```text
Monday

9:00 AM - DS

11:00 AM - OS

2:00 PM - AI
```

---

## 6. Profile Page

File:

```text
profile.html
```

Show:

* Photo
* Name
* Roll Number
* Course
* Email

Example:

```text
Name: Aksh Kumar

Roll No: 23BCS001

Course: B.Sc. Hons Computer Science

Email: example@gmail.com
```

---

# Folder Structure

```text
student-dashboard/

│

├── index.html

├── attendance.html

├── assignments.html

├── notices.html

├── timetable.html

├── profile.html

│

├── css/

│   └── style.css

│

├── js/

│   └── script.js

│

└── assets/

    └── images/
```

---

# CSS Requirements

Learn and use:

## Flexbox

For:

* Navbar
* Cards
* Profile Section

## Media Queries

Example:

```css
@media (max-width: 768px)
{
    .cards
    {
        flex-direction: column;
    }
}
```

This makes the site mobile friendly.

---

# JavaScript Requirements

Only implement:

## Dark Mode

Button:

```text
🌙 Dark Mode
```

When clicked:

* Background becomes dark
* Text becomes light

---

# Navigation Bar

Present on every page.

Links:

```text
Dashboard

Attendance

Assignments

Notices

Timetable

Profile
```

---

# Design Colors

Primary Blue:

```css
#2563EB
```

Background:

```css
#F8FAFC
```

Card:

```css
#FFFFFF
```

Text:

```css
#1E293B
```

---

# Minimum Requirements

✓ Responsive Layout

✓ Navigation Bar

✓ 6 Pages

✓ Flexbox

✓ Media Queries

✓ Dark Mode

✓ Clean Design

---

# Skills You Can Mention

* HTML5
* CSS3
* JavaScript
* Responsive Web Design
* Flexbox
* Multi-Page Website Development
* Frontend Development

---

# Project Completion Target

Day 1:

* Create all HTML pages

Day 2:

* Design navbar and dashboard

Day 3:

* Design remaining pages

Day 4:

* Make website responsive

Day 5:

* Add dark mode and polish UI

---

# Success Criteria

If a user can:

* Open the website
* Navigate between pages
* View attendance
* View assignments
* View notices
* View timetable
* View profile
* Use the website on mobile

Then Project 1 is successfully completed.
