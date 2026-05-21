
import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    opens = re.findall(r'<div', content, re.IGNORECASE)
    closes = re.findall(r'</div>', content, re.IGNORECASE)
    print(f"Open: {len(opens)}")
    print(f"Close: {len(closes)}")
