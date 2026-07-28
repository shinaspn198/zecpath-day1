import pdfplumber
import docx
import os
import re


def extract_pdf_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text


def extract_docx_text(docx_path):
    doc = docx.Document(docx_path)
    text = ""
    for para in doc.paragraphs:
        text += para.text + "\n"
    return text

def clean_text(text):
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"[^\w\s.,:/()-]", "", text)
    return text.strip()


if __name__ == "__main__":

    input_file = "../input/resume1.pdf"
    output_file = "../output/resume1_cleaned.txt"

    raw_text = extract_pdf_text(input_file)
    cleaned_text = clean_text(raw_text)

    with open(output_file, "w", encoding="utf-8") as file:
        file.write(cleaned_text)

    print("Resume processed successfully!")
    print("Cleaned file saved to:", output_file)