import os
import re
import glob

def process_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content

        # Simple replacements for generic bariatric references
        replacements = [
            (r'post-surgical bariatric individuals', 'GLP-1 patients'),
            (r'post-surgical bariatric clients', 'GLP-1 patients'),
            (r'post-surgical bariatric recovery', 'prescription GLP-1 support'),
            (r'post-operative bariatric recovery', 'GLP-1 therapy'),
            (r'bariatric and metabolic surgery', 'GLP-1 receptor agonist therapies'),
            (r'bariatric/metabolic surgery', 'GLP-1 therapy'),
            (r'bariatric surgery', 'GLP-1 therapy'),
            (r'bariatric recovery', 'prescription GLP-1 support'),
            (r'bariatric dehydration', 'medication-induced fluid shifts'),
            (r'bariatric clinical referrals', 'GLP-1 clinical referrals'),
            (r'bariatric support', 'GLP-1 therapy support'),
            (r'post-surgical bariatric', 'medical weight loss'),
            (r'post-surgical clients', 'GLP-1 patients'),
            (r'post-operative bariatric', 'medical weight loss'),
            (r'pre-op bariatric', 'medical weight loss'),
            (r'surgery recovery', 'medical weight loss'),
            (r'bariatric metabolic research', 'medical weight loss research'),
            (r'bariatric medicine', 'medical weight loss'),
            (r'bariatric patients', 'GLP-1 patients'),
            (r'Bariatric Exercise Program', 'GLP-1 Exercise Program'),
            (r'Bariatric Times', 'Clinical Nutrition'),
            (r'bariatric exercise program', 'GLP-1 exercise program'),
            (r'bariatric dehydration', 'medication-induced fluid shifts'),
            (r'bariatric clinical referrals', 'GLP-1 clinical referrals'),
            (r'Bariatric', 'Medical Weight Loss'),
            (r'bariatric', 'medical weight loss'),
            (r'post-surgical', 'prescription GLP-1'),
            (r'post-op', 'medical weight loss'),
            (r'pre-op', 'medical weight loss'),
            (r'gastric bypass', 'GLP-1 therapy'),
            (r'gastric surgery', 'GLP-1 therapy'),
            (r'surgery', 'therapy')
        ]

        for old, new in replacements:
            # Case insensitive replacement for generic terms
            content = re.sub(re.compile(old, re.IGNORECASE), new, content)

        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Process all tsx files in pages and components
for ext in ['tsx', 'ts']:
    for path in glob.glob(f'pages/**/*.{ext}', recursive=True):
        process_file(path)
    for path in glob.glob(f'components/**/*.{ext}', recursive=True):
        process_file(path)

