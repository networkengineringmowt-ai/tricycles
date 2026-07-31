import docx

def get_text(filename):
    doc = docx.Document(filename)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

try:
    text = get_text(r"d:\OneDrive\ATC\ATC - Draft -R01.docx")
    with open("extracted_objectives.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Text extracted to extracted_objectives.txt")
except Exception as e:
    print(f"Error: {e}")
