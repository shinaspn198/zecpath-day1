# Day 6 - Job Description Parsing System

## Objective

Build an AI-ready Job Description Parsing System that converts unstructured employer job descriptions into structured JSON objects for intelligent recruitment.

---

## Features Implemented

- Read any Job Description text file
- Extract Role Name
- Extract Experience Requirement
- Extract Education Requirement
- Extract Required Skills
- Normalize Role Names
- Normalize Skill Names
- Generate AI-ready JSON Output
- Save Output as output.json
- Handle invalid file names

---

## Project Structure

```
day6/
├── parser.py
├── sample_jd.txt
├── output.json
└── README.md
```

---

## Technologies Used

- Python
- Regular Expressions (re)
- JSON
- File Handling

---

## Sample Output

```json
{
    "role": "Software Engineer",
    "experience": "2-4 years",
    "education": "Bachelor's Degree in Computer Science or related field.",
    "skills": [
        "Python",
        "FastAPI",
        "SQL",
        "Git",
        "REST APIs",
        "Docker"
    ]
}
```

---

## Learning Outcomes

- Built a Job Description Parsing System from scratch
- Converted unstructured text into structured AI-readable data
- Applied Regular Expressions for information extraction
- Implemented data normalization
- Generated structured JSON for AI recruitment pipelines