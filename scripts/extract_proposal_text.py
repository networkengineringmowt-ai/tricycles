import pypdf

def extract_pdf_text(filepath):
    reader = pypdf.PdfReader(filepath)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

try:
    proposal_text = extract_pdf_text(r"d:\OneDrive\PROJECTS\Ambrose\SSERUNJOGI AMBROSE_Proposal_V2.1.pdf")
    with open("proposal_extracted.txt", "w", encoding="utf-8") as f:
        f.write(proposal_text)
    print("Proposal text extracted to proposal_extracted.txt")
except Exception as e:
    print(f"Error: {e}")
