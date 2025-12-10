from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PAGES_DIR = os.path.join(BASE_DIR, 'pages')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

@app.route('/static/<path:filename>')
def serve_static(filename):
    """Serve static files (CSS, JS, images) from static directory"""
    return send_from_directory(STATIC_DIR, filename)

@app.route('/')
def index():
    """Serve the home page"""
    return send_from_directory(PAGES_DIR, 'index.html')

@app.route('/<path:filename>')
def serve_pages(filename):
    """Serve HTML pages from pages directory"""
    return send_from_directory(PAGES_DIR, filename)

if __name__ == '__main__':
    print("Starting ChitoNet web server...")
    print("Open your browser and go to: http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)

