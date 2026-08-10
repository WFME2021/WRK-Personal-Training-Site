import os
import re
import glob

def process_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content

        replacements = [
            (r'muscle hypertrophy', 'muscle defense tracking'),
            (r'workout sets to failure', 'stimulating muscle tissue safely'),
            (r'high proximity-to-failure', 'stimulating muscle tissue safely'),
            (r'RPE 7-9', 'retaining lean tone'),
            (r'sarcopenic prevention', 'protecting your metabolic engine'),
            (r'sarcopenic muscle wasting', 'protecting your metabolic engine'),
            (r'nitrogen balance maintenance', 'securing your daily protein target block'),
            (r'nitrogen balance', 'securing your daily protein target block'),
            (r'Skeletal Muscle Defense', 'Protecting Your Metabolic Engine'),
            (r'skeletal tissue wasting', 'losing your metabolic engine'),
        ]

        for old, new in replacements:
            content = re.sub(re.compile(old, re.IGNORECASE), new, content)

        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

for ext in ['tsx', 'ts']:
    for path in glob.glob(f'pages/**/*.{ext}', recursive=True):
        process_file(path)
    for path in glob.glob(f'components/**/*.{ext}', recursive=True):
        process_file(path)
