import os
from PIL import Image

def optimize_image(filename, max_width):
    if not os.path.exists(filename):
        print(f"Skipping {filename}, not found.")
        return
        
    try:
        img = Image.open(filename)
        # Convert to RGB if it's RGBA (for PNGs)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        # Resize if width > max_width
        if img.width > max_width:
            ratio = max_width / float(img.width)
            new_height = int((float(img.height) * float(ratio)))
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
        new_filename = os.path.splitext(filename)[0] + '.webp'
        img.save(new_filename, 'webp', quality=80)
        
        orig_size = os.path.getsize(filename)
        new_size = os.path.getsize(new_filename)
        print(f"Converted {filename} to {new_filename} | Size reduced from {orig_size//1024}KB to {new_size//1024}KB")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Process images
optimize_image('profile_small.jpg', 600)
optimize_image('about-campton.jpg', 800)
optimize_image('microstead.jpg', 800)
optimize_image('astral_image.png', 800)
