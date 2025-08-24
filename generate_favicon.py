#!/usr/bin/env python3
"""
Generate favicon for Sports News website
Creates a simple sports-themed favicon
"""

import base64

# Base64 encoded ICO file for a sports-themed favicon (basketball icon)
# This is a 16x16 favicon with a dark background and white sports ball design
favicon_base64 = """
AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZABkZ
GQAZGRkAGRkZABkZGQAZGRkZGRkZ/xkZGf8ZGRn/GRkZ/xkZGf8ZGRn/GRkZ/xkZGf8ZGRn/GRkZ/xkZ
Gf8ZGRn/GRkZ/xkZGf8ZGRkZGRkZGRkZGf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAA
AP8AAAD/AAAA/wAAAP8AAAD/GRkZ/xkZGRkZGRkZGRkZ/wAAAP//////////////////////////////////////
//////////////////8AAAD/GRkZ/xkZGRkZGRkZGRkZ/wAAAP///////////wAAAP8AAAD/AAAA/wAA
AP8AAAD/AAAA////////////AAAA/xkZGf8ZGRkZGRkZGRkZGf8AAAD///////////8AAAD////////////
/////////AAAA////////////AAAA/xkZGf8ZGRkZGRkZGRkZGf8AAAD///////////8AAAD/////////
/////////wAAAP///////////wAAAP8ZGRn/GRkZGRkZGRkZGRn/AAAA////////////AAAA/wAAAP8A
AAD/AAAA/wAAAP8AAAD///////////8AAAD/GRkZ/xkZGRkZGRkZGRkZ/wAAAP//////////////////////
//////////////////////////////////8AAAD/GRkZ/xkZGRkZGRkZGRkZ/wAAAP8AAAD/AAAA/wAA
AP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8ZGRn/GRkZGRkZGRkZGRn/GRkZ/xkZ
Gf8ZGRn/GRkZ/xkZGf8ZGRn/GRkZ/xkZGf8ZGRn/GRkZ/xkZGf8ZGRn/GRkZ/xkZGf8ZGRkZGRkZABkZ
GQAZGRkAGRkZABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZABkZGQAZGRkAGRkZAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAA//8AAP//AADDwwAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAMPD
AAD//wAA//8AAA==
"""

def create_favicon():
    # Decode the base64 favicon
    favicon_data = base64.b64decode(favicon_base64.strip())
    
    # Write to favicon.ico
    with open('public/favicon.ico', 'wb') as f:
        f.write(favicon_data)
    
    print("Favicon created successfully at public/favicon.ico")

if __name__ == "__main__":
    create_favicon()