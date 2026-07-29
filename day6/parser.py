import re
import json

# Read Job Description
file_name = input("Enter Job Description file name: ")

try:
    with open(file_name, "r", encoding="utf-8") as file:
        jd_text = file.read()

except FileNotFoundError:
    print("Error: File not found.")
    exit()

# Extract Role Name
role = jd_text.split("\n")[0].strip()

# Extract Experience
experience_match = re.search(r"Experience:\s*(.*)", jd_text)
experience = experience_match.group(1).strip() if experience_match else "Not Found"

# Extract Education
education_match = re.search(r"Education:\s*(.*)", jd_text)
education = education_match.group(1).strip() if education_match else "Not Found"

# Extract Skills
skills = []

if "Required Skills:" in jd_text:
    skills_section = jd_text.split("Required Skills:")[1]

    if "Responsibilities:" in skills_section:
        skills_section = skills_section.split("Responsibilities:")[0]

    skills = [
        skill.strip()
        for skill in skills_section.strip().split("\n")
        if skill.strip()
    ]

# Normalize Skills
skill_mapping = {
    "Py": "Python",
    "Python3": "Python",
    "REST API": "REST APIs",
    "RESTful APIs": "REST APIs",
    "Docker Container": "Docker"
}

normalized_skills = []

for skill in skills:
    normalized_skills.append(
        skill_mapping.get(skill, skill)
    )

skills = normalized_skills
# Normalize Role Names
role_mapping = {
    "Software Developer": "Software Engineer",
    "Backend Developer": "Backend Engineer",
    "Frontend Developer": "Frontend Engineer",
    "Full Stack Developer": "Full Stack Engineer"
}

role = role_mapping.get(role, role)
# Create AI-ready Job Object
job_data = {
    "role": role,
    "experience": experience,
    "education": education,
    "skills": skills
}

# Save as JSON
with open("output.json", "w", encoding="utf-8") as file:
    json.dump(job_data, file, indent=4)

print("AI Job Object Created Successfully!")
print(json.dumps(job_data, indent=4))