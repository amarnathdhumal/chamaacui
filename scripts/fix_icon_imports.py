
import os

root_dir = "/Users/amarnath/chamaacui/app/components/animated-icons"

count = 0
for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(subdir, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # The current incorrect replacement string
            target = '.replace("@/registry/chamaac/animated-icons/", "@/components/");'
            # The desired replacement string
            replacement = '.replace("@/registry/chamaac/animated-icons/", "@/components/animated-icons/");'
            
            if target in content:
                new_content = content.replace(target, replacement)
                with open(filepath, 'w') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated {filepath}")

print(f"Total updated: {count}")
