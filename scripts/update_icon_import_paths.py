
import os

root_dir = "/Users/amarnath/chamaacui/app/components/animated-icons"

count = 0
for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(subdir, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # We want to change "@/components/" to "@/components/animated-icons/"
            # in the .replace() call.
            
            # The pattern we laid down in the previous step was:
            # .replace("@/registry/chamaac/animated-icons/", "@/components/");
            
            old_str = '.replace("@/registry/chamaac/animated-icons/", "@/components/");'
            new_str = '.replace("@/registry/chamaac/animated-icons/", "@/components/animated-icons/");'
            
            if old_str in content:
                new_content = content.replace(old_str, new_str)
                with open(filepath, 'w') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated {filepath}")

print(f"Total updated: {count}")
